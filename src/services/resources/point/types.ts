export type PointTypes = 'guessedCountry' | 'fastGuess'

export interface PointsRecord {
  type: PointTypes
  points: number
  createdAt: Date
}
