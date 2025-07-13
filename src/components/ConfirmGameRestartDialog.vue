<script setup lang="ts">
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import { useCountryStore } from '@/stores/countryStore.ts'
import { Icon } from '@iconify/vue'
import { usePostHog } from '@/composables/usePostHog.ts'

const store = useCountryStore()

const { posthog } = usePostHog()

function onRestartGameClick() {
  posthog.capture('restartedGame')
  store.onRestartGame()
}
</script>

<template>
  <Dialog
    v-model:visible="store.isGameRestartConfirmationOpen"
    modal
    :draggable="false"
    :closable="false"
    :close-on-escape="false"
    :style="{ maxWidth: '95%', width: '25rem' }"
    pt:root:class="border-none"
  >
    <template #container>
      <div
        class="flex flex-col items-center p-4 bg-surface-0 dark:bg-surface-900 rounded text-center"
      >
        <div
          class="rounded-full border border-gray-500 bg-surface-0 dark:bg-surface-900 inline-flex justify-center items-center h-24 w-24 -mt-16"
        >
          <Icon icon="pixel:refresh" width="48" height="48" />
        </div>
        <span class="font-bold text-2xl block mb-2 mt-6">Restart Game</span>
        <p class="mb-0">Restarting the game will make you lose your progress. Are you sure?</p>
        <div class="flex flex-col gap-2 mt-6 w-full">
          <Button label="Restart" @click="onRestartGameClick" class="w-full" />
          <Button
            label="Cancel"
            outlined
            @click="store.isGameRestartConfirmationOpen = false"
            class="w-full"
          />
        </div>
      </div>
    </template>
  </Dialog>
</template>
