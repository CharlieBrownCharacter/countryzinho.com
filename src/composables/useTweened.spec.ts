import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref, nextTick } from 'vue'
import { useTweened } from './useTweened.ts'

describe('useTweened', () => {
  let originalNow: () => number
  let now = 0

  beforeEach(() => {
    originalNow = globalThis.performance.now
    globalThis.performance.now = () => now
    vi.useFakeTimers()
  })

  afterEach(() => {
    globalThis.performance.now = originalNow
    vi.useRealTimers()
  })

  it('animates from initial value to target value', async () => {
    const source = ref(0)
    const tweened = useTweened(source, 100)

    expect(tweened.value).toBe(0)

    source.value = 100
    await nextTick()

    now = 50
    vi.advanceTimersByTime(50)
    await nextTick()
    const midValue = tweened.value

    expect(midValue).toBeGreaterThan(0)
    expect(midValue).toBeLessThan(100)

    now = 100
    vi.advanceTimersByTime(50)
    await nextTick()

    expect(tweened.value).toBe(100)
  })

  it('rounds to nearest integer during animation', async () => {
    const source = ref(0)
    const tweened = useTweened(source, 200)

    source.value = 1
    await nextTick()

    now = 100
    vi.advanceTimersByTime(100)
    await nextTick()

    expect(Number.isInteger(tweened.value)).toBe(true)
  })

  it('cancels previous animation if source changes quickly', async () => {
    const source = ref(0)
    const tweened = useTweened(source, 300)

    source.value = 100
    await nextTick()
    now = 100
    vi.advanceTimersByTime(100)
    await nextTick()
    const valueAfterFirst = tweened.value

    source.value = 50
    await nextTick()
    now = 200
    vi.advanceTimersByTime(100)
    await nextTick()
    const valueAfterSecond = tweened.value

    expect(valueAfterSecond).toBeLessThan(valueAfterFirst)
  })
})
