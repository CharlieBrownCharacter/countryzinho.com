import { differenceInSeconds } from 'date-fns'
import type { Continent, Country } from '@/services/resources/country/types.ts'
import type { GuessedCountriesMap } from '@/services/resources/country/constants.ts'

export function isQuickGuess(lastGuessDate: Date | null): boolean {
  if (lastGuessDate === null) return false

  const now = new Date()
  const timeDelta = differenceInSeconds(now, lastGuessDate)

  return timeDelta <= 5
}

export function completedContinents(
  guessedCountry: Country,
  guessedCountries: GuessedCountriesMap,
  countriesByContinent: Record<Continent, Country[]>,
): Continent[] {
  const result: Continent[] = []

  for (const continent of guessedCountry.continents) {
    const countriesInContinent = countriesByContinent[continent]

    let allGuessed = true

    for (const country of countriesInContinent) {
      if (!guessedCountries[country.isoAlpha2Code]?.guessedAt) {
        allGuessed = false
        break
      }
    }

    if (allGuessed) result.push(continent)
  }

  return result
}
