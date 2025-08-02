import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCountryStore } from './countryStore.ts'
import { countries } from '@/services/resources/country/constants'

vi.mock('@/composables/usePostHog.ts', () => ({
  usePostHog: () => ({
    posthog: { capture: vi.fn() },
  }),
}))

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    locale: { value: 'en' },
  }),
}))

const addPoints = vi.fn()
const resetPoints = vi.fn()

vi.mock('@/stores/pointsStore.ts', () => ({
  usePointsStore: () => ({
    addPoints,
    resetPoints,
    points: 42,
  }),
}))

describe('useCountryStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('starts game and sets control flags and end time', () => {
    const store = useCountryStore()
    store.startGame(10)
    expect(store.isShowingControls).toBe(true)
    expect(store.endsAt).toBeInstanceOf(Date)
    expect(store.trieRoot).not.toBeNull()
  })

  it('guesses country and updates guessedCountries and latestCountryGuessed', () => {
    const store = useCountryStore()
    const br = countries.find((c) => c.isoAlpha2Code === 'BR')
    if (!br) throw new Error('Brazil must exist in mock data')

    store.onGuessCountry('BR')

    const guessed = store.guessedCountries['BR']
    expect(guessed.guessedAt).toBeInstanceOf(Date)
    expect(store.latestCountryGuessed?.country.isoAlpha2Code).toBe('BR')
    expect(addPoints).toHaveBeenCalledWith(null, br)
  })

  it('ends game and sets result modal state', () => {
    const store = useCountryStore()
    store.onGameEnd()
    expect(store.endsAt).toBeNull()
    expect(store.isResultsDialogOpen).toBe(true)
  })

  it('restarts game and resets state', () => {
    const store = useCountryStore()
    store.onRestartGame()
    expect(store.endsAt).toBeNull()
    expect(store.isShowingControls).toBe(false)
    expect(store.isStartGameModalOpen).toBe(true)
    expect(Object.values(store.guessedCountries).every((c) => c.guessedAt === null)).toBe(true)
    expect(resetPoints).toHaveBeenCalled()
  })

  it('computes numberCountriesGuessed correctly', () => {
    const store = useCountryStore()
    expect(store.numberCountriesGuessed).toBe(0)
    store.onGuessCountry('BR')
    expect(store.numberCountriesGuessed).toBe(1)
  })

  it('computes hasGuessedCountries correctly', () => {
    const store = useCountryStore()
    expect(store.hasGuessedCountries).toBe(false)

    countries.forEach((c) => {
      store.guessedCountries[c.isoAlpha2Code].guessedAt = new Date()
    })

    expect(store.hasGuessedCountries).toBe(true)
  })

  it('throws error if country does not exist', () => {
    const store = useCountryStore()
    // @ts-expect-error Testing it throws an error when invalid country is passed
    expect(() => store.onGuessCountry('ZZ')).toThrow('country should be available')
  })
})
