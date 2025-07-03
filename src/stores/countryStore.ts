import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  countries,
  createGuessedCountriesMap,
  type GuessedCountriesMap,
} from '@/services/resources/country/constants.ts'
import type { Country } from '@/services/resources/country/types.ts'

export const useCountryStore = defineStore('countries', () => {
  const guessedCountries = ref<GuessedCountriesMap>(createGuessedCountriesMap(countries))

  const latestCountryGuessed = ref<Country | null>(null)

  const isGuessCountriesModalOpen = ref(false)

  function onGuessCountry(countryCode: string) {
    guessedCountries.value[countryCode].guessed = true
    latestCountryGuessed.value = guessedCountries.value[countryCode].country
  }

  return { guessedCountries, onGuessCountry, isGuessCountriesModalOpen, latestCountryGuessed }
})
