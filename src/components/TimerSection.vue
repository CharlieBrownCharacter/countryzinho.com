<script setup lang="ts">
import { useCountryStore } from '@/stores/countryStore.ts'
import { useIntervalFn } from '@vueuse/core'
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import Button from 'primevue/button'
import { usePostHog } from '@/composables/usePostHog.ts'

const store = useCountryStore()

const endTimeFormatted = ref('No time')

const { posthog } = usePostHog()

const { resume, pause } = useIntervalFn(
  () => {
    const now = new Date()

    if (store.endsAt === null) throw new Error('store.endsAt should be available')

    const totalSeconds = Math.max(0, Math.ceil((store.endsAt.getTime() - now.getTime()) / 1000))

    if (totalSeconds === 0) {
      pause()
      store.onGameEnd()
      posthog.capture('gameTimeEnded')
    }

    if (totalSeconds < 15) {
      store.isCounterFinishing = true
    }

    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    endTimeFormatted.value = `${minutes}:${String(seconds).padStart(2, '0')}`
  },
  1000,
  { immediate: false, immediateCallback: true },
)

const classes = computed(() => (store.isCounterFinishing ? 'text-red-500' : ''))

function onGameRestartClick() {
  posthog.capture('openedGameRestartDialog')
  store.isGameRestartConfirmationOpen = true
}

store.$subscribe((mutation, state) => {
  if (mutation.type !== 'direct') return

  if (state.endsAt) {
    resume()
  } else {
    pause()
  }
})
</script>

<template>
  <div class="shadow-lg text-center bg-(--p-inputtext-background) rounded-lg">
    <div class="pt-2 flex items-center justify-between gap-2">
      <span :class="classes">{{ endTimeFormatted }}</span>

      <Button
        title="Restart game"
        severity="secondary"
        variant="text"
        size="small"
        @click="onGameRestartClick"
      >
        <Icon icon="pixel:refresh" />
      </Button>
    </div>
  </div>
</template>
