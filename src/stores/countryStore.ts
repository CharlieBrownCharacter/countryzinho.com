import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  countries,
  createGuessedCountriesMap,
  type GuessedCountriesMap,
} from '@/services/resources/country/constants.ts'

export const useCountryStore = defineStore('countries', () => {
  const guessedCountries = ref<GuessedCountriesMap>(createGuessedCountriesMap(countries))

  const isGuessCountriesModalOpen = ref(false)

  function onGuessCountry(countryCode: string) {
    guessedCountries.value[countryCode].guessed = true
  }

  return { guessedCountries, onGuessCountry, isGuessCountriesModalOpen }
})
