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

  function onGuessCountry(countryCode: string) {
    guessedCountries.value[countryCode].guessed = true
    latestCountryGuessed.value = guessedCountries.value[countryCode].country
  }

  function startGame(seconds: number = 5) {
    endsAt.value = addSeconds(new Date(), seconds)
  }

  return {
    guessedCountries,
    isGuessCountriesModalOpen,
    latestCountryGuessed,
    endsAt,
    isStartGameModalOpen,
    startGame,
    onGuessCountry,
  }
})
