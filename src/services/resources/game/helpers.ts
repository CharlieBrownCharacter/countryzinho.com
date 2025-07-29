import { differenceInSeconds } from 'date-fns'

export function getPoints(lastGuessDate: Date | null): number {
  if (!lastGuessDate) return 1

  const now = new Date()
  const timeDelta = differenceInSeconds(now, lastGuessDate)

  return timeDelta <= 5 ? 5 : 1
}

export function isQuickGuess(lastGuessDate: Date | null): boolean {
  if (lastGuessDate === null) return false

  const now = new Date()
  const timeDelta = differenceInSeconds(now, lastGuessDate)

  return timeDelta <= 5
}
