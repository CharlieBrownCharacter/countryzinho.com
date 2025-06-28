import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Country } from '@/services/resources/country/types.ts'
import { countries } from '@/services/resources/country/constants.ts'

type GuessedCountry = Record<Country['isoAlpha2Code'], boolean>

export const useCountryStore = defineStore('countries', () => {
  const guessedCountries = ref<GuessedCountry>(
    countries.reduce((previousValue, country) => {
      return { ...previousValue, [country.isoAlpha2Code]: false }
    }, {} as GuessedCountry),
  )

  function onGuessCountry(country: Country) {
    guessedCountries.value[country.isoAlpha2Code] = true
  }

  return { guessedCountries, onGuessCountry }
})
