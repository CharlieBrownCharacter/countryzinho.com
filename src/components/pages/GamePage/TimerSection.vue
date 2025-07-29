<script setup lang="ts">
import { useCountryStore } from '@/stores/countryStore.ts'
import { useIntervalFn } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { MessageSchema } from '@/services/i18n'
import { usePointsStore } from '@/stores/pointsStore.ts'

const countryStore = useCountryStore()

const pointsStore = usePointsStore()

const { t } = useI18n<{ message: MessageSchema }>()

const endTimeFormatted = ref(t('components.timer-section.no-time'))

const { resume, pause } = useIntervalFn(
  () => {
    const now = new Date()

    if (countryStore.endsAt === null) throw new Error('countryStore.endsAt should be available')

    const totalSeconds = Math.max(
      0,
      Math.ceil((countryStore.endsAt.getTime() - now.getTime()) / 1000),
    )

    if (totalSeconds === 0) {
      pause()
      countryStore.onGameEnd()
    }

    if (totalSeconds < 15) {
      countryStore.isCounterFinishing = true
    }

    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    endTimeFormatted.value = `${minutes}:${String(seconds).padStart(2, '0')}`
  },
  1000,
  { immediate: false, immediateCallback: true },
)

const classes = computed(() => (countryStore.isCounterFinishing ? 'text-red-500' : ''))

countryStore.$subscribe((mutation, state) => {
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
    <div class="pt-2 flex items-center justify-between gap-2 text-sm">
      <span :class="classes">{{ endTimeFormatted }}</span>

      {{ t('common.points', { count: pointsStore.points }, pointsStore.points) }}
    </div>
  </div>
</template>
