import { useCountryStore } from '@/stores/countryStore.ts'
import { computed } from 'vue'

export function useCountryGuessed(countryCode: string) {
  const store = useCountryStore()

  const guessed = computed(() => {
    if (!(countryCode in store.guessedCountries)) return false

    return store.guessedCountries[countryCode].guessedAt
  })

  return { guessed }
}
