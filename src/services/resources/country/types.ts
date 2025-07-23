import { SupportedLanguages } from '@/services/i18n'

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
  allowedGuesses: {
    [K in keyof typeof SupportedLanguages]: string[]
  }
  continents: Continent[]
}
