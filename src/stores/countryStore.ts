import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Country } from '@/services/resources/country/types.ts'
import { countries } from '@/services/resources/country/constants.ts'

type GuessedCountry = Record<Country['isoAlpha2Code'], boolean>

export const useCountryStore = defineStore('countries', () => {
  const guessedCountries = ref<GuessedCountry>({})

  const isGuessCountriesModalOpen = ref(false)

  for (const country of countries) {
    guessedCountries.value[country.isoAlpha2Code] = false
  }

  function onGuessCountry(countryCode: string) {
    guessedCountries.value[countryCode] = true
  }

  return { guessedCountries, onGuessCountry, isGuessCountriesModalOpen }
})
