<script setup lang="ts">
import Dialog from 'primevue/dialog'
import { useCountryStore } from '@/stores/countryStore.ts'
import SelectButton from 'primevue/selectbutton'
import Button from 'primevue/button'
import { computed, ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'

const store = useCountryStore()

const timeSelected = ref(300)

const counter = ref(0)

const isStarting = computed(() => counter.value >= 1)

const classes = ref('')

const timerOptions = ref([
  { value: 5, text: '5 Sec' },
  { value: 120, text: '2 Minutes' },
  { value: 300, text: '5 Minutes' },
  { value: 6000, text: '10 Minutes' },
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
      store.isStartGameModalOpen = false
    }
  },
  1000,
  { immediate: false },
)

function onStartClick() {
  const countdownSeconds = 1

  classes.value = 'transition-all duration-700 motion-reduce:transition-none'
  counter.value = countdownSeconds

  // We need to add a small delay so that the timer only starts
  // at the end of the animation of the shrinking dialog.
  setTimeout(resumeTimer, 500)

  // Once the countdown finished, then we can start the timer
  setTimeout(() => store.startGame(timeSelected.value), countdownSeconds * 1000 + 500)
}
</script>

<template>
  <Dialog
    :class="classes"
    v-model:visible="store.isStartGameModalOpen"
    modal
    :draggable="false"
    :closable="false"
    :close-on-escape="false"
    :style="style"
    pt:footer:class="mt-auto"
  >
    <template #container>
      <div v-if="!isStarting" class="flex flex-col p-(--p-dialog-header-padding) h-full">
        <div class="flex flex-col gap-y-0.5">
          <h1 class="flex gap-2 text-2xl font-semibold">Welcome to countryzinho</h1>
          <p class="text-gray-400 text-sm">
            Choose a time limit and name as many countries as you can before it runs out.
          </p>
        </div>

        <div class="space-y-4 mt-4 grow">
          <section>
            <h2 class="text-xl">How to play</h2>
            <p class="text-gray-400 text-sm">
              Type the name of many countries as you know. Each country you guess gives you 1 point.
            </p>
          </section>

          <section>
            <h2 class="text-xl">Timer</h2>
            <p class="text-gray-400 text-sm">
              The timer starts when you click "Start" below. Game ends either when the time runs out
              or you have guessed all countries.
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
            <p class="text-gray-400 text-sm">
              You will be able to restart the game at any time and come back to this screen.
            </p>
          </section>
        </div>

        <Button class="w-full" severity="secondary" @click="onStartClick"> Start </Button>
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
