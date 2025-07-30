import { describe, it, expect } from 'vitest'
import { completedContinents, isQuickGuess } from './helpers.ts'
import { type GuessedCountriesMap } from '@/services/resources/country/constants.ts'
import { type Country } from '@/services/resources/country/types.ts'
import type { Continent } from '@/services/resources/country/types.ts'

const turkey: Country = {
  name: 'Turkey',
  isoAlpha2Code: 'TR',
  allowedGuesses: { en: ['Turkey'], pt: [], es: [] },
  slug: 'turkey',
  continents: ['europe', 'asia'],
}

const germany: Country = {
  name: 'Germany',
  isoAlpha2Code: 'DE',
  allowedGuesses: { en: ['Germany'], pt: [], es: [] },
  slug: 'germany',
  continents: ['europe'],
}

const france: Country = {
  name: 'France',
  isoAlpha2Code: 'FR',
  allowedGuesses: { en: ['France'], pt: [], es: [] },
  slug: 'france',
  continents: ['europe'],
}

const japan: Country = {
  name: 'Japan',
  isoAlpha2Code: 'JP',
  allowedGuesses: { en: ['Japan'], pt: [], es: [] },
  slug: 'japan',
  continents: ['asia'],
}

const china: Country = {
  name: 'China',
  isoAlpha2Code: 'CN',
  allowedGuesses: { en: ['China'], pt: [], es: [] },
  slug: 'china',
  continents: ['asia'],
}

const countriesByContinent: Record<Continent, Country[]> = {
  africa: [],
  antarctica: [],
  asia: [turkey, japan, china],
  europe: [turkey, germany, france],
  northAmerica: [],
  southAmerica: [],
  oceania: [],
}

describe('isQuickGuess', () => {
  it('returns false if lastGuessDate is null', () => {
    expect(isQuickGuess(null)).toBe(false)
  })

  it('returns true if guess was within 5 seconds', () => {
    const now = new Date()
    const fourSecondsAgo = new Date(now.getTime() - 4 * 1000)

    expect(isQuickGuess(fourSecondsAgo)).toBe(true)
  })

  it('returns false if guess was more than 5 seconds ago', () => {
    const now = new Date()
    const sixSecondsAgo = new Date(now.getTime() - 6 * 1000)

    expect(isQuickGuess(sixSecondsAgo)).toBe(false)
  })
})

describe('guessedWholeContinent', () => {
  it('returns both europe and asia when last missing country is guessed', () => {
    const guessedCountries: GuessedCountriesMap = {
      DE: { country: germany, guessedAt: new Date() },
      FR: { country: france, guessedAt: new Date() },
      JP: { country: japan, guessedAt: new Date() },
      CN: { country: china, guessedAt: new Date() },
      TR: { country: turkey, guessedAt: new Date() },
    }

    const result = completedContinents(turkey, guessedCountries, countriesByContinent)

    expect(result.sort()).toEqual(['asia', 'europe'])
  })

  it('returns only asia if europe is missing a guess', () => {
    const guessedCountries: GuessedCountriesMap = {
      DE: { country: germany, guessedAt: null },
      FR: { country: france, guessedAt: new Date() },
      JP: { country: japan, guessedAt: new Date() },
      CN: { country: china, guessedAt: new Date() },
      TR: { country: turkey, guessedAt: new Date() },
    }

    const result = completedContinents(turkey, guessedCountries, countriesByContinent)

    expect(result).toEqual(['asia'])
  })

  it('returns empty array if other countries are still missing', () => {
    const guessedCountries: GuessedCountriesMap = {
      DE: { country: germany, guessedAt: null },
      FR: { country: france, guessedAt: null },
      JP: { country: japan, guessedAt: null },
      CN: { country: china, guessedAt: null },
      TR: { country: turkey, guessedAt: null },
    }

    const result = completedContinents(turkey, guessedCountries, countriesByContinent)

    expect(result).toEqual([])
  })
})
