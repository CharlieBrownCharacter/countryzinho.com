<script setup lang="ts">
import Dialog from 'primevue/dialog'
import { useCountryStore } from '@/stores/countryStore.ts'
import SelectButton from 'primevue/selectbutton'
import Button from 'primevue/button'
import { computed, ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import { usePostHog } from '@/composables/usePostHog.ts'

const countryStore = useCountryStore()

const { posthog } = usePostHog()

const timeSelected = ref(300)
const counter = ref(0)
const classes = ref('')

const isStarting = computed(() => counter.value >= 1)

const timerOptions = ref([
  { value: 120, text: '2 Minutes' },
  { value: 300, text: '5 Minutes' },
  { value: 600, text: '10 Minutes' },
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

  const countdownSeconds = 5

  classes.value = 'transition-all duration-700 motion-reduce:transition-none'
  counter.value = countdownSeconds

  // We need to add a small delay so that the timer only starts
  // at the end of the animation of the shrinking dialog.
  setTimeout(resumeTimer, 500)

  // Once the countdown finished, then we can start the timer
  // setTimeout(() => countryStore.startGame(timeSelected.value), countdownSeconds * 1000 + 500)
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
      <div
        v-if="!isStarting"
        class="flex flex-col p-(--p-dialog-header-padding) h-full overflow-y-auto"
      >
        <div class="flex flex-col gap-y-0.5">
          <h1 class="flex gap-2 text-2xl font-semibold">Welcome to countryzinho</h1>
          <p class="text-gray-400 text-sm">
            Type as many country names as you can before the timer hits zero.
          </p>
        </div>

        <div class="space-y-4 mt-4 grow mb-4">
          <section>
            <h2 class="text-xl">How to play</h2>
            <p class="text-gray-400 text-sm">
              Each correct country gives you 1 point. No need to press Enter - just type.
            </p>
          </section>

          <section>
            <h2 class="text-xl">Timer</h2>
            <p class="text-gray-400 text-sm">
              Starts when you click "Start". Ends when time runs out or all countries are guessed.
            </p>

            <SelectButton
              class="mt-2"
              v-model="timeSelected"
              :options="timerOptions"
              :allow-empty="false"
              option-label="text"
              option-value="value"
              data-key="value"
              aria-labelledby="custom"
              fluid
            />
          </section>

          <section>
            <h2 class="text-xl">Restart</h2>
            <p class="text-gray-400 text-sm">You can restart anytime and return to this screen.</p>
          </section>
        </div>

        <Button class="w-full min-h-fit" severity="secondary" @click="onStartClick"> Start </Button>

        <div class="flex items-center justify-center mt-2">
          <button
            class="text-sm text-gray-400 cursor-pointer hover:underline"
            @click="onContactClick"
          >
            Contact
          </button>
        </div>
      </div>

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
