<script setup lang="ts">
import { useCountryStore } from '@/stores/countryStore.ts'
import { useIntervalFn } from '@vueuse/core'
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import Button from 'primevue/button'

const store = useCountryStore()

const endTimeFormatted = ref('')

const { resume, pause } = useIntervalFn(
  () => {
    const now = new Date()

    if (store.endsAt === null) throw new Error('store.endsAt should be available')

    const totalSeconds = Math.max(0, Math.ceil((store.endsAt.getTime() - now.getTime()) / 1000))

    if (totalSeconds === 0) {
      pause()
      store.onGameEnd()
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

const classes = computed(() => {
  const klass = ['border border-transparent']

  if (store.isCounterFinishing) {
    klass.push('!border-red-500')
  }

  return klass
})

function onGameRestartClick() {
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
  <transition
    enter-active-class="transition transform duration-500 ease-out"
    enter-from-class="translate-y-10 opacity-0"
    enter-to-class="-translate-y-0 opacity-100"
    leave-active-class="transition transform duration-300 ease-in"
    leave-from-class="-translate-y-0 opacity-100"
    leave-to-class="translate-y-10 opacity-0"
  >
    <div
      v-show="store.isShowingControls"
      :class="classes"
      class="absolute bottom-5 left-1/2 -translate-x-1/2 w-40 pl-4 pr-2 py-2 shadow-lg text-center bg-(--p-inputtext-background) rounded-lg"
    >
      <div class="flex items-center justify-between gap-2">
        <span>{{ endTimeFormatted }}</span>

        <div>
          <Button
            title="Guessed countries"
            severity="secondary"
            variant="text"
            size="small"
            @click="store.isGuessCountriesModalOpen = !store.isGuessCountriesModalOpen"
          >
            <Icon icon="pixel:check-list" />
          </Button>

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
    </div>
  </transition>
</template>
