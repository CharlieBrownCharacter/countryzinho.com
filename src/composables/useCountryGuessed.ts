import { useCountryStore } from '@/stores/countryStore.ts'
import { computed } from 'vue'
import type { Country } from '@/services/resources/country/types.ts'

export function useCountryGuessed(countryCode: Country['isoAlpha2Code']) {
  const store = useCountryStore()

  const guessed = computed(() => {
    if (!(countryCode in store.guessedCountries)) return false

    return store.guessedCountries[countryCode].guessedAt
  })

  return { guessed }
}
