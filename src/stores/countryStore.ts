import { defineStore } from 'pinia'
import { ref } from 'vue'
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

  const isGuessCountriesModalOpen = ref(false)

  const endsAt = ref<null | Date>(null)

  const isStartGameModalOpen = ref(true)

  const isShowingControls = ref(false)

  const isResultsDialogOpen = ref(false)

  const isGameRestartConfirmationOpen = ref(false)

  const isCounterFinishing = ref(false)

  function onGuessCountry(countryCode: string) {
    guessedCountries.value[countryCode].guessed = true
    latestCountryGuessed.value = guessedCountries.value[countryCode].country
  }

  function startGame(seconds: number = 5) {
    endsAt.value = addSeconds(new Date(), seconds)
    isCounterFinishing.value = false
    isShowingControls.value = true
  }

  function onGameEnd() {
    endsAt.value = null
    isCounterFinishing.value = false
    isResultsDialogOpen.value = true
    isShowingControls.value = false
    isGuessCountriesModalOpen.value = false
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
    isGuessCountriesModalOpen,
    latestCountryGuessed,
    endsAt,
    isStartGameModalOpen,
    isShowingControls,
    isResultsDialogOpen,
    isCounterFinishing,
    startGame,
    onGuessCountry,
    onGameEnd,
    onRestartGame,
    isGameRestartConfirmationOpen,
  }
})
