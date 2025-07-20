import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {
  countries,
  createGuessedCountriesMap,
  type GuessedCountriesMap,
} from '@/services/resources/country/constants.ts'
import type { Country } from '@/services/resources/country/types.ts'
import { addSeconds } from 'date-fns/addSeconds'

export const useCountryStore = defineStore('countries', () => {
  const guessedCountries = ref<GuessedCountriesMap>(createGuessedCountriesMap(countries))

  const latestCountryGuessed = ref<Country | null>(null)

  const endsAt = ref<null | Date>(null)

  const isStartGameModalOpen = ref(false)

  const isShowingControls = ref(false)

  const isResultsDialogOpen = ref(false)

  const isGameRestartConfirmationOpen = ref(false)

  const isCounterFinishing = ref(false)

  const numberCountriesGuessed = computed<number>(() =>
    Object.keys(guessedCountries.value).reduce((previous, key) => {
      if (guessedCountries.value[key].guessed) {
        return previous + 1
      }

      return previous
    }, 0),
  )

  const hasGuessedCountries = computed(() => numberCountriesGuessed.value === countries.length)

  function onGuessCountry(countryCode: string) {
    guessedCountries.value[countryCode].guessed = true
    latestCountryGuessed.value = guessedCountries.value[countryCode].country
  }

  function startGame(seconds: number | null = 5) {
    endsAt.value = seconds ? addSeconds(new Date(), seconds) : null
    isCounterFinishing.value = false
    isShowingControls.value = true
  }

  function onGameEnd() {
    endsAt.value = null
    isCounterFinishing.value = false
    isResultsDialogOpen.value = true
    isShowingControls.value = false
  }

  function onRestartGame() {
    endsAt.value = null
    isCounterFinishing.value = false
    isGameRestartConfirmationOpen.value = false
    isResultsDialogOpen.value = false
    isShowingControls.value = false
    guessedCountries.value = createGuessedCountriesMap(countries)
    isStartGameModalOpen.value = true
  }

  return {
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
  }
})
