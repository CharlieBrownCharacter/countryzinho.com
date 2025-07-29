import { defineStore } from 'pinia'
import { ref } from 'vue'
import { isQuickGuess } from '@/services/resources/game/helpers.ts'
import type { PointsRecord } from '@/services/resources/point/types.ts'
import { FAST_GUESS_POINTS, GUESS_POINTS } from '@/services/resources/point/constants.ts'

export const usePointsStore = defineStore('points', () => {
  const points = ref(0)

  const pointsRecord = ref<PointsRecord[]>([])

  function addPoints(lastGuessDate: Date | null) {
    const createdAt = new Date()

    points.value += GUESS_POINTS

    pointsRecord.value.push({ createdAt, points: GUESS_POINTS, type: 'guessedCountry' })

    if (isQuickGuess(lastGuessDate)) {
      points.value += FAST_GUESS_POINTS
      pointsRecord.value.push({ createdAt, points: FAST_GUESS_POINTS, type: 'fastGuess' })
    }
  }

  function resetPoints() {
    pointsRecord.value = []
    points.value = 0
  }

  return { points, addPoints, resetPoints }
})
