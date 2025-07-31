import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePointsStore } from './pointsStore'
import { countries } from '@/services/resources/country/constants'
import type { PointGuessedContinent } from '@/services/resources/point/types.ts'
import * as helpers from '@/services/resources/game/helpers.ts'

vi.mock('@/services/resources/game/helpers.ts', async () => {
  const actual = await vi.importActual<typeof helpers>('@/services/resources/game/helpers.ts')
  return {
    ...actual,
    isQuickGuess: vi.fn(() => false),
    completedContinents: vi.fn(() => []),
  }
})

vi.mock('@/stores/countryStore.ts', async () => {
  const actual = await vi.importActual('@/stores/countryStore.ts')
  return {
    ...actual,
    useCountryStore: vi.fn(() => ({
      guessedCountries: Object.fromEntries(
        countries.map((c) => [c.isoAlpha2Code, { guessedAt: null, country: c }]),
      ),
    })),
  }
})

const isQuickGuess = helpers.isQuickGuess as unknown as ReturnType<typeof vi.fn>
const completedContinents = helpers.completedContinents as unknown as ReturnType<typeof vi.fn>

describe('usePointsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('awards base points for guessing a country', () => {
    const store = usePointsStore()
    const country = countries.find((c) => c.isoAlpha2Code === 'BR')
    if (!country) throw new Error('Brazil must exist')

    store.addPoints(null, country)

    expect(store.points).toBe(10)
    expect(store.pointsHistory).toHaveLength(1)
    expect(store.pointsHistory[0].type).toBe('guessedCountry')
  })

  it('awards fast guess points if guess is quick', () => {
    isQuickGuess.mockReturnValue(true)

    const store = usePointsStore()
    const country = countries.find((c) => c.isoAlpha2Code === 'BR')
    if (!country) throw new Error('Brazil must exist')

    store.addPoints(new Date(), country)

    expect(store.points).toBe(10 + 15)
    expect(store.pointsHistory).toHaveLength(2)
    expect(store.pointsHistory[1].type).toBe('fastGuess')
  })

  it('awards continent points if completed', () => {
    completedContinents.mockReturnValue(['southAmerica'])
    isQuickGuess.mockReturnValue(false)

    const store = usePointsStore()
    const country = countries.find((c) => c.isoAlpha2Code === 'BR')
    if (!country) throw new Error('Brazil must exist')

    store.addPoints(null, country)

    expect(store.points).toBe(10 + 13)
    expect(store.pointsHistory).toHaveLength(2)
    expect(store.pointsHistory[1].type).toBe('guessedWholeContinent')
    expect((store.pointsHistory[1] as PointGuessedContinent).continent).toBe('southAmerica')
  })

  it('resets points and history', () => {
    completedContinents.mockReturnValue([])
    isQuickGuess.mockReturnValue(false)

    const store = usePointsStore()
    const country = countries.find((c) => c.isoAlpha2Code === 'BR')
    if (!country) throw new Error('Brazil must exist')

    store.addPoints(null, country)

    expect(store.points).toBeGreaterThan(0)
    expect(store.pointsHistory).toHaveLength(1)

    store.resetPoints()

    expect(store.points).toBe(0)
    expect(store.pointsHistory).toHaveLength(0)
  })
})
