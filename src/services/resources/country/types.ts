export type Continent =
  | 'africa'
  | 'antarctica'
  | 'asia'
  | 'europe'
  | 'northAmerica'
  | 'southAmerica'
  | 'oceania'

export interface Country {
  name: string
  isoAlpha2Code: string
  allowedGuesses: string[]
  continents: Continent[]
}
