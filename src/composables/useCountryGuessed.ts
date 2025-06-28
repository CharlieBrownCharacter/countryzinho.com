import { useCountryStore } from '@/stores/countryStore.ts'
import { computed } from 'vue'

export function useCountryGuessed(countryCode: string) {
  const store = useCountryStore()

  const guessed = computed(() => store.guessedCountries[countryCode] === true)

  return { guessed }
}
