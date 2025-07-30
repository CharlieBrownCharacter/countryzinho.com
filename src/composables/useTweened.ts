import { ref, watch, type Ref } from 'vue'

type EasingFn = (t: number) => number

export function useTweened(source: Ref<number>, duration = 300, easing: EasingFn = easeOutCubic) {
  const value = ref(source.value)
  let animationFrameId: number | null = null

  watch(source, (to) => {
    if (animationFrameId !== null) cancelAnimationFrame(animationFrameId)
    const from = value.value
    const start = performance.now()

    function animate(time: number) {
      const elapsed = time - start
      const progress = Math.min(elapsed / duration, 1)
      value.value = Math.round(from + (to - from) * easing(progress))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        animationFrameId = null
      }
    }

    animationFrameId = requestAnimationFrame(animate)
  })

  return value
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}
