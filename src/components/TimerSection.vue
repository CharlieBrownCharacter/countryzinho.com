<script setup lang="ts">
import { useCountryStore } from '@/stores/countryStore.ts'
import { useIntervalFn } from '@vueuse/core'
import { computed, ref } from 'vue'
import { differenceInSeconds } from 'date-fns/differenceInSeconds'

const store = useCountryStore()

const endTimeFormatted = ref('')

const hasWarningLeft = ref(false)

const { resume, isActive, pause } = useIntervalFn(
  () => {
    const now = new Date()

    if (store.endsAt === null) throw new Error('store.endsAt should be available')

    const totalSeconds = Math.max(0, Math.ceil((store.endsAt.getTime() - now.getTime()) / 1000))

    if (totalSeconds === 0) {
      console.log('paused')
      pause()
    }

    if (totalSeconds < 15) {
      hasWarningLeft.value = true
    }

    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    endTimeFormatted.value = `${minutes}:${String(seconds).padStart(2, '0')}`
  },
  1000,
  { immediate: false, immediateCallback: true },
)

const classes = computed(() => {
  const klass = ['border border-transparent']

  if (hasWarningLeft.value) {
    klass.push('!border-red-500')
  }

  return klass
})

function onStartGameClick() {
  store.startGame()
  resume()
}
</script>

<template>
  <div
    :class="classes"
    class="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 px-4 py-2 shadow-lg text-center bg-(--p-inputtext-background) rounded-lg"
  >
    {{ endTimeFormatted }}

    <button v-show="!isActive" @click="onStartGameClick">Start</button>
  </div>
</template>
