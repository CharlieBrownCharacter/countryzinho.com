import { defineStore } from 'pinia'
import { computed, ref, shallowRef } from 'vue'
import {
  countries,
  createGuessedCountriesMap,
  type GuessedCountriesMap,
  type GuessedCountry,
} from '@/services/resources/country/constants.ts'
import { addSeconds } from 'date-fns/addSeconds'
import { buildCountryTrie } from '@/services/resources/country/helpers.ts'
import { useI18n } from 'vue-i18n'
import type { SUPPORTED_LANGUAGES } from '@/services/i18n'
import { getPoints } from '@/services/resources/game/helpers.ts'

export const useCountryStore = defineStore('countries', () => {
  const { locale } = useI18n()

  const isShowingShowResultsModalButton = ref(false)

  const guessedCountries = ref<GuessedCountriesMap>(createGuessedCountriesMap(countries))

  const trieRoot = shallowRef(buildCountryTrie(countries, 'en'))

  const latestCountryGuessed = ref<GuessedCountry | null>(null)

  const endsAt = ref<null | Date>(null)

  const isStartGameModalOpen = ref(false)

  const isShowingControls = ref(false)

  const isResultsDialogOpen = ref(false)

  const isGameRestartConfirmationOpen = ref(false)

  const isCounterFinishing = ref(false)

  const points = ref(0)

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
    points.value += latestCountryGuessed.value ? getPoints(latestCountryGuessed.value.guessedAt) : 1
    guessedCountries.value[countryCode].guessedAt = new Date()
    latestCountryGuessed.value = guessedCountries.value[countryCode]
  }

  function startGame(seconds: number | null = 5) {
    endsAt.value = seconds ? addSeconds(new Date(), seconds) : null
    isCounterFinishing.value = false
    isShowingControls.value = true
    trieRoot.value = buildCountryTrie(countries, locale.value as SUPPORTED_LANGUAGES)
  }

  function onGameEnd() {
    endsAt.value = null
    isCounterFinishing.value = false
    isShowingControls.value = false
    isResultsDialogOpen.value = true
  }

  function onRestartGame() {
    endsAt.value = null
    isCounterFinishing.value = false
    isGameRestartConfirmationOpen.value = false
    isResultsDialogOpen.value = false
    isShowingControls.value = false
    guessedCountries.value = createGuessedCountriesMap(countries)
    isStartGameModalOpen.value = true
    points.value = 0
  }

  return {
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
    points,
  }
})
