import type { Continent } from '@/services/resources/country/types.ts'
import {
  africaCountries,
  antarcticaCountries,
  asiaCountries,
  europeanCountries,
  northAmericaCountries,
  oceaniaCountries,
  southAmericaCountries,
} from '@/services/resources/country/constants.ts'

export const GUESS_POINTS = 10
export const FAST_GUESS_POINTS = 15
export const GuessWholeContinentPointsMap: Record<Continent, number> = {
  africa: africaCountries.length,
  antarctica: antarcticaCountries.length,
  asia: asiaCountries.length,
  europe: europeanCountries.length,
  northAmerica: northAmericaCountries.length,
  southAmerica: southAmericaCountries.length,
  oceania: oceaniaCountries.length,
}
