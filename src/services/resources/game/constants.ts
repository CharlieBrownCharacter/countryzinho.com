import type { Continent, Country } from '@/services/resources/country/types.ts'

export const focussedCountryContinent: Record<Continent, Country['isoAlpha2Code']> = {
  africa: 'MA',
  antarctica: 'GS',
  asia: 'CN',
  europe: 'ES',
  northAmerica: 'US',
  southAmerica: 'BR',
  oceania: 'AU',
}
