import { useCountryStore } from '@/stores/countryStore.ts'
import { computed } from 'vue'
import type { Country } from '@/services/resources/country/types.ts'

export function useCountryGuessed(countryCode: Country['isoAlpha2Code']) {
  const store = useCountryStore()

  const guessed = computed<boolean>(() => {
    if (!(countryCode in store.guessedCountries)) return false

    return store.guessedCountries[countryCode].guessedAt !== null
  })

  const isLatestCountryGuessed = computed<boolean>(() => {
    if (store.guessedCountries[countryCode] === undefined)
      throw new Error(`country with code [${countryCode}] not available in guessedCountries`)

    if (store.guessedCountries[countryCode].guessedAt === null) return false

    for (const key in store.guessedCountries) {
      const data = store.guessedCountries[key as Country['isoAlpha2Code']]

      if (data.guessedAt === null) continue

      if (data.guessedAt > store.guessedCountries[countryCode].guessedAt) return false
    }

    return true
  })

  return { guessed, isLatestCountryGuessed }
}
