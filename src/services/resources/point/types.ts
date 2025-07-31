import type { Continent } from '@/services/resources/country/types.ts'

export type PointGuessedCountry = { type: 'guessedCountry'; points: number; createdAt: Date }

export type PointFastGuess = { type: 'fastGuess'; points: number; createdAt: Date }

export type PointGuessedContinent = {
  type: 'guessedWholeContinent'
  points: number
  createdAt: Date
  continent: Continent
}

export type PointHistory = PointGuessedCountry | PointFastGuess | PointGuessedContinent
