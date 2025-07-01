import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Country } from '@/services/resources/country/types.ts'
import { countries } from '@/services/resources/country/constants.ts'

export type GuessedCountry = { guessed: boolean; country: Country }

export type GuessedCountriesMap = Record<Country['isoAlpha2Code'], GuessedCountry>

export const useCountryStore = defineStore('countries', () => {
  const guessedCountries = ref<GuessedCountriesMap>({})

  const isGuessCountriesModalOpen = ref(false)

  for (const country of countries) {
    guessedCountries.value[country.isoAlpha2Code] = { guessed: false, country }
  }

  function onGuessCountry(countryCode: string) {
    guessedCountries.value[countryCode].guessed = true
  }

  return { guessedCountries, onGuessCountry, isGuessCountriesModalOpen }
})
