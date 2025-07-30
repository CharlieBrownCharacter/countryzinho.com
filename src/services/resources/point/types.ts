import type { Continent } from '@/services/resources/country/types.ts'

export type PointHistory =
  | { type: 'guessedCountry'; points: number; createdAt: Date }
  | { type: 'fastGuess'; points: number; createdAt: Date }
  | { type: 'guessedWholeContinent'; points: number; createdAt: Date; continent: Continent }
