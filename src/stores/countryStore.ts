import { defineStore } from 'pinia'
import { computed, ref, shallowRef } from 'vue'
import {
  countries,
  type GuessedCountriesMap,
  type GuessedCountry,
} from '@/services/resources/country/constants.ts'
import { addSeconds } from 'date-fns/addSeconds'
import {
  buildCountryTrie,
  createGuessedCountriesMap,
} from '@/services/resources/country/helpers.ts'
import { useI18n } from 'vue-i18n'
import type { SUPPORTED_LANGUAGES } from '@/services/i18n'
import { usePostHog } from '@/composables/usePostHog.ts'
import { usePointsStore } from '@/stores/pointsStore.ts'
import type { Continent, Country } from '@/services/resources/country/types.ts'

export const useCountryStore = defineStore('countries', () => {
  const { posthog } = usePostHog()

  const pointsStore = usePointsStore()

  const { locale } = useI18n()

  const isFinishGameDialogOpen = ref(false)

  const isShowingShowResultsModalButton = ref(false)

  const selectedContinent = ref<Continent | null>(null)

  const guessedCountries = ref<GuessedCountriesMap>(createGuessedCountriesMap(countries))

  const trieRoot = shallowRef(buildCountryTrie(countries, 'en'))

  const latestCountryGuessed = ref<GuessedCountry | null>(null)

  const endsAt = ref<null | Date>(null)

  const isStartGameModalOpen = ref(false)

  const isShowingControls = ref(false)

  const isResultsDialogOpen = ref(false)

  const isGameRestartConfirmationOpen = ref(false)

  const isCounterFinishing = ref(false)

  const selectedCountries = shallowRef<Country['isoAlpha2Code'][]>(
    countries.map((c) => c.isoAlpha2Code),
  )

  const numberCountriesGuessed = computed<number>(() =>
    Object.keys(guessedCountries.value).reduce((previous, key) => {
      if (guessedCountries.value[key].guessedAt) {
        return previous + 1
      }

      return previous
    }, 0),
  )

  const hasGuessedCountries = computed(() => numberCountriesGuessed.value === countries.length)

  function onGuessCountry(countryCode: string) {
    const country = guessedCountries.value[countryCode]?.country

    if (!country) throw new Error('country should be available')

    guessedCountries.value[countryCode].guessedAt = new Date()

    pointsStore.addPoints(
      latestCountryGuessed.value ? latestCountryGuessed.value.guessedAt : null,
      country,
    )

    latestCountryGuessed.value = guessedCountries.value[countryCode]
  }

  function startGame(seconds: number | null = 5) {
    endsAt.value = seconds ? addSeconds(new Date(), seconds) : null
    isCounterFinishing.value = false
    isShowingControls.value = true
  }

  function onGameEnd() {
    endsAt.value = null
    isCounterFinishing.value = false
    isShowingControls.value = false
    isResultsDialogOpen.value = true

    posthog.capture('gameTimeEnded', { points: pointsStore.points })
  }

  function onBeforeStartGame(_countries: Country[]) {
    selectedCountries.value = _countries.map((c) => c.isoAlpha2Code)
    trieRoot.value = buildCountryTrie(_countries, locale.value as SUPPORTED_LANGUAGES)
    guessedCountries.value = createGuessedCountriesMap(_countries)
  }

  function onRestartGame() {
    endsAt.value = null
    isCounterFinishing.value = false
    isGameRestartConfirmationOpen.value = false
    isResultsDialogOpen.value = false
    isShowingControls.value = false
    guessedCountries.value = createGuessedCountriesMap(countries)
    isStartGameModalOpen.value = true
    pointsStore.resetPoints()
  }

  return {
    isFinishGameDialogOpen,
    isShowingShowResultsModalButton,
    guessedCountries,
    latestCountryGuessed,
    endsAt,
    isStartGameModalOpen,
    isShowingControls,
    isResultsDialogOpen,
    isCounterFinishing,
    numberCountriesGuessed,
    hasGuessedCountries,
    startGame,
    onGuessCountry,
    onGameEnd,
    onRestartGame,
    isGameRestartConfirmationOpen,
    trieRoot,
    selectedCountries,
    onBeforeStartGame,
    selectedContinent,
  }
})
