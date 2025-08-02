import type { Country } from '@/services/resources/country/types.ts'
import type { SUPPORTED_LANGUAGES } from '@/services/i18n'
import type { GuessedCountriesMap } from '@/services/resources/country/constants.ts'

type TrieNode = {
  children: Map<string, TrieNode>
  isEnd: boolean
  isoAlpha2Code?: Country['isoAlpha2Code']
}

function createTrie(): TrieNode {
  return { children: new Map(), isEnd: false }
}

function insert(root: TrieNode, word: string, code: Country['isoAlpha2Code']): void {
  let node = root
  for (const char of word) {
    if (!node.children.has(char)) {
      node.children.set(char, createTrie())
    }
    node = node.children.get(char)!
  }
  node.isEnd = true
  node.isoAlpha2Code = code
}

export function buildCountryTrie(data: Country[], language: SUPPORTED_LANGUAGES): TrieNode {
  const root = createTrie()
  for (const { allowedGuesses, isoAlpha2Code } of data) {
    for (const guess of allowedGuesses[language]) {
      insert(root, guess.toLowerCase(), isoAlpha2Code)
    }
  }
  return root
}

export function findGuess(root: TrieNode, input: string): TrieNode | null {
  let node = root
  for (const char of input.toLowerCase()) {
    if (!node.children.has(char)) return null
    node = node.children.get(char)!
  }
  return node.isEnd ? (node ?? null) : null
}

export function getCountrySrcFlag(
  countryCode: Country['isoAlpha2Code'] | Lowercase<Country['isoAlpha2Code']>,
): string {
  return `https://flagcdn.com/h20/${countryCode.toLowerCase()}.png`
}

export function getCountrySrcsetFlag(
  countryCode: Country['isoAlpha2Code'] | Lowercase<Country['isoAlpha2Code']>,
): string {
  return `https://flagcdn.com/h40/${countryCode.toLowerCase()}.png 2x, https://flagcdn.com/h60/${countryCode.toLowerCase()}.png 3x`
}

export function createGuessedCountriesMap(countries: Country[]): GuessedCountriesMap {
  // @ts-expect-error We will build the map in the next lines
  const _countries: GuessedCountriesMap = {}

  for (const country of countries) {
    _countries[country.isoAlpha2Code] = { guessedAt: null, country }
  }

  return _countries
}
