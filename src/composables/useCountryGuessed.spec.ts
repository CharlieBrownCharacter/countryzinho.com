import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useCountryGuessed } from './useCountryGuessed.ts'
import { setActivePinia, createPinia } from 'pinia'
import { useCountryStore } from '@/stores/countryStore.ts'
import { nextTick } from 'vue'

vi.mock('@/composables/usePostHog.ts', () => ({
  usePostHog: () => ({ posthog: { capture: vi.fn() } }),
}))

vi.mock('vue-i18n', () => ({
  useI18n: () => ({ locale: { value: 'en' } }),
}))

vi.mock('@/stores/pointsStore.ts', () => ({
  usePointsStore: () => ({
    addPoints: vi.fn(),
    resetPoints: vi.fn(),
    points: 0,
  }),
}))

describe('useCountryGuessed', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('returns false if country was not guessed', () => {
    useCountryStore()

    const { guessed } = useCountryGuessed('BR')

    expect(guessed.value).toBe(false)
  })

  it('returns guessedAt date if country was guessed', async () => {
    const store = useCountryStore()

    store.onGuessCountry('BR')

    await nextTick()

    const { guessed } = useCountryGuessed('BR')

    expect(guessed.value).toBe(true)
  })

  it('handles invalid country code', () => {
    // @ts-expect-error we are testing invalid country code
    const { guessed } = useCountryGuessed('XX')

    expect(guessed.value).toBe(false)
  })
})
