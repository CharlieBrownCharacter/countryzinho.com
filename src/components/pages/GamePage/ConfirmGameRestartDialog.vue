<script setup lang="ts">
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import { useCountryStore } from '@/stores/countryStore.ts'
import { Icon } from '@iconify/vue'
import { usePostHog } from '@/composables/usePostHog.ts'
import { useI18n } from 'vue-i18n'
import type { MessageSchema } from '@/services/i18n'

const store = useCountryStore()

const { t } = useI18n<{ message: MessageSchema }>()

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
      <div class="flex flex-col items-center p-4 bg-surface-0 bg-surface-900 rounded text-center">
        <div
          class="rounded-full border border-gray-500 bg-surface-0 bg-surface-900 inline-flex justify-center items-center h-24 w-24 -mt-16"
        >
          <Icon icon="pixel:refresh" width="48" height="48" />
        </div>
        <span class="font-bold text-2xl block mb-2 mt-6">
          {{ t('components.confirm-game-restart-dialog.title') }}
        </span>
        <p class="mb-0">
          {{ t('components.confirm-game-restart-dialog.description') }}
        </p>
        <div class="flex flex-col gap-2 mt-6 w-full">
          <Button :label="t('common.restart')" @click="onRestartGameClick" class="w-full" />
          <Button
            :label="t('common.cancel')"
            outlined
            @click="store.isGameRestartConfirmationOpen = false"
            class="w-full"
          />
        </div>
      </div>
    </template>
  </Dialog>
</template>
