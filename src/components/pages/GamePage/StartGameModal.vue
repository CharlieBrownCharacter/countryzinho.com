<script setup lang="ts">
import Dialog from 'primevue/dialog'
import { useCountryStore } from '@/stores/countryStore.ts'
import Button from 'primevue/button'
import { computed, ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import { usePostHog } from '@/composables/usePostHog.ts'
import { useI18n } from 'vue-i18n'
import { countries, countriesByContinent } from '@/services/resources/country/constants.ts'
import type { Continent } from '@/services/resources/country/types.ts'

type ContinentOption = { value: Continent | null; text: string }

const countryStore = useCountryStore()

const { posthog } = usePostHog()
const { t } = useI18n()

const timeSelected = ref<null | number>(null)
const counter = ref(0)
const classes = ref('')

const isStarting = computed(() => counter.value >= 1)

const timerOptions = computed(() => {
  const options = [
    { value: null, text: t('components.start-game-modal.no-time') },
    { value: 60, text: t('common.xMinutes', { count: 1 }, 1) },
    { value: 300, text: t('common.xMinutes', { count: 5 }, 5) },
    { value: 600, text: t('common.xMinutes', { count: 10 }, 10) },
  ]

  if (import.meta.env.DEV) {
    options.push({ value: 1, text: '1 second (dev)' })
  }

  return options
})

const continentOptions = computed<ContinentOption[]>(() => [
  { value: null, text: 'World' },
  { value: 'africa', text: 'Africa' },
  { value: 'antarctica', text: 'Antarctica' },
  { value: 'asia', text: 'Asia' },
  { value: 'europe', text: 'Europe' },
  { value: 'northAmerica', text: 'North America' },
  { value: 'southAmerica', text: 'South America' },
  { value: 'oceania', text: 'Oceania' },
])

const style = computed(() =>
  isStarting.value
    ? { width: '10rem', height: '10rem' }
    : { maxWidth: '80vw', width: '35rem', height: '80vh' },
)

const { resume: resumeTimer, pause } = useIntervalFn(
  () => {
    counter.value -= 1

    if (counter.value === 0) {
      pause()
      countryStore.isStartGameModalOpen = false
    }
  },
  1000,
  { immediate: false },
)

function onStartClick() {
  posthog.capture('startedGame', {
    duration: timeSelected.value,
  })

  countryStore.onBeforeStartGame(
    countryStore.selectedContinent
      ? countriesByContinent[countryStore.selectedContinent]
      : countries,
  )

  const countdownSeconds = import.meta.env.VITE_SECONDS_COUNTDOWN_START_GAME ?? 5

  classes.value = 'transition-all duration-700 motion-reduce:transition-none'
  counter.value = countdownSeconds

  // We need to add a small delay so that the timer only starts
  // at the end of the animation of the shrinking dialog.
  setTimeout(resumeTimer, 500)

  // Once the countdown finished, then we can start the timer
  setTimeout(() => countryStore.startGame(timeSelected.value), countdownSeconds * 1000 + 500)
}
</script>

<template>
  <Dialog
    :class="classes"
    v-model:visible="countryStore.isStartGameModalOpen"
    modal
    :draggable="false"
    :closable="false"
    :close-on-escape="false"
    :style="style"
    pt:footer:class="mt-auto"
  >
    <template #container>
      <template v-if="!isStarting">
        <header class="p-dialog-header flex flex-col gap-y-0.5 pb-0 text-center">
          <h2 class="flex gap-2 text-2xl font-semibold">
            {{ t('components.start-game-modal.title') }}
          </h2>
          <p class="text-gray-400 text-sm">
            {{ t('components.start-game-modal.description') }}
          </p>
        </header>

        <div class="space-y-4 mt-4 grow mb-4 p-dialog-content">
          <section>
            <h2 class="text-xl">
              {{ t('components.start-game-modal.timer-title') }}
            </h2>
            <p class="text-gray-400 text-sm">
              {{ t('components.start-game-modal.timer-description') }}
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
              <button
                v-for="option in timerOptions"
                :key="`timer-${option.value}`"
                class="aspect-square p-2 rounded-xl border text-center transition-colors cursor-pointer"
                :class="[option.value === timeSelected ? 'border-gray-200' : 'border-surface']"
                @click="() => (timeSelected = option.value)"
              >
                {{ option.text }}
              </button>
            </div>
          </section>

          <section>
            <h2 class="text-xl">{{ t('common.continent') }}</h2>
            <p class="text-gray-400 text-sm">
              {{ t('components.start-game-modal.continent-description') }}
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
              <button
                v-for="option in continentOptions"
                :key="`continent-${option.value}`"
                class="aspect-square p-2 rounded-xl border text-center transition-colors cursor-pointer"
                :class="[
                  option.value === countryStore.selectedContinent
                    ? 'border-gray-200'
                    : 'border-surface',
                ]"
                @click="() => (countryStore.selectedContinent = option.value)"
              >
                {{ option.text }}
              </button>
            </div>
          </section>
        </div>

        <footer class="p-dialog-footer">
          <Button class="w-full min-h-fit" severity="secondary" @click="onStartClick">
            {{ t('common.start') }}
          </Button>
        </footer>
      </template>

      <transition
        enter-active-class="transition-opacity duration-500 delay-[600ms]"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-show="isStarting" class="text-4xl grid items-center justify-center h-full">
          {{ counter }}
        </div>
      </transition>
    </template>
  </Dialog>
</template>
