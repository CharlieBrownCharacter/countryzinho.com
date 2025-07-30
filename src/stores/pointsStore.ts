import { defineStore } from 'pinia'
import { ref } from 'vue'
import { completedContinents, isQuickGuess } from '@/services/resources/game/helpers.ts'
import type { PointHistory } from '@/services/resources/point/types.ts'
import {
  FAST_GUESS_POINTS,
  GUESS_POINTS,
  GuessWholeContinentPointsMap,
} from '@/services/resources/point/constants.ts'
import type { Country } from '@/services/resources/country/types.ts'
import { useCountryStore } from '@/stores/countryStore.ts'
import { countriesByContinent } from '@/services/resources/country/constants.ts'

export const usePointsStore = defineStore('points', () => {
  const countryStore = useCountryStore()

  const points = ref(0)

  const pointsHistory = ref<PointHistory[]>([])

  function addPoints(lastGuessDate: Date | null, guessedCountry: Country) {
    const createdAt = new Date()

    points.value += GUESS_POINTS

    pointsHistory.value.push({ createdAt, points: GUESS_POINTS, type: 'guessedCountry' })

    if (isQuickGuess(lastGuessDate)) {
      points.value += FAST_GUESS_POINTS
      pointsHistory.value.push({ createdAt, points: FAST_GUESS_POINTS, type: 'fastGuess' })
    }

    const guessedContinents = completedContinents(
      guessedCountry,
      countryStore.guessedCountries,
      countriesByContinent,
    )

    if (guessedContinents.length > 0) {
      guessedContinents.forEach((continent) => {
        const awardedPoints = GuessWholeContinentPointsMap[continent]

        points.value += awardedPoints
        pointsHistory.value.push({
          createdAt,
          continent,
          points: awardedPoints,
          type: 'guessedWholeContinent',
        })
      })
    }
  }

  function resetPoints() {
    pointsHistory.value = []
    points.value = 0
  }

  return { points, pointsHistory, addPoints, resetPoints }
})
