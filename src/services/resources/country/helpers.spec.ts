import { describe, it, expect } from 'vitest'
import { getCountrySrcFlag, getCountrySrcsetFlag, findGuess, buildCountryTrie } from './helpers'
import type { Country } from '@/services/resources/country/types.ts'

const mockCountryData: Country[] = [
  {
    name: 'Brazil',
    isoAlpha2Code: 'BR',
    allowedGuesses: {
      en: ['brazil', 'brasil'],
      pt: ['brasil'],
      es: ['brasil'],
    },
    slug: 'brazil',
    continents: ['southAmerica'],
  },
  {
    name: 'Germany',
    isoAlpha2Code: 'DE',
    allowedGuesses: {
      en: ['germany', 'deutschland'],
      pt: ['alemanha'],
      es: ['alemania'],
    },
    slug: 'germany',
    continents: ['europe'],
  },
]

describe('getCountrySrcFlag', () => {
  it('returns correct flag URL for lowercase code', () => {
    expect(getCountrySrcFlag('us')).toBe('https://flagcdn.com/h20/us.png')
  })

  it('returns correct flag URL for uppercase code', () => {
    expect(getCountrySrcFlag('BR')).toBe('https://flagcdn.com/h20/br.png')
  })
})

describe('getCountrySrcsetFlag', () => {
  it('returns correct srcset for lowercase code', () => {
    expect(getCountrySrcsetFlag('de')).toBe(
      'https://flagcdn.com/h40/de.png 2x, https://flagcdn.com/h60/de.png 3x',
    )
  })

  it('returns correct srcset for uppercase code', () => {
    expect(getCountrySrcsetFlag('JP')).toBe(
      'https://flagcdn.com/h40/jp.png 2x, https://flagcdn.com/h60/jp.png 3x',
    )
  })
})

describe('buildCountryTrie', () => {
  it('builds a trie with all allowed guesses for a language', () => {
    const trie = buildCountryTrie(mockCountryData, 'en')

    expect(findGuess(trie, 'brazil')).not.toBeNull()
    expect(findGuess(trie, 'brasil')).not.toBeNull()
    expect(findGuess(trie, 'germany')).not.toBeNull()
    expect(findGuess(trie, 'deutschland')).not.toBeNull()
    expect(findGuess(trie, 'alemanha')).toBeNull()
  })

  it('respects language filtering (pt)', () => {
    const trie = buildCountryTrie(mockCountryData, 'pt')

    expect(findGuess(trie, 'brasil')).not.toBeNull()
    expect(findGuess(trie, 'alemanha')).not.toBeNull()
    expect(findGuess(trie, 'germany')).toBeNull()
    expect(findGuess(trie, 'brazil')).toBeNull()
  })

  it('returns correct isoAlpha2Code', () => {
    const trie = buildCountryTrie(mockCountryData, 'es')

    const result1 = findGuess(trie, 'alemania')
    const result2 = findGuess(trie, 'brasil')

    expect(result1?.isoAlpha2Code).toBe('DE')
    expect(result2?.isoAlpha2Code).toBe('BR')
  })
})
