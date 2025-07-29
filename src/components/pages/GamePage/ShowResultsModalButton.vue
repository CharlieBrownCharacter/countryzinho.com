<script setup lang="ts">
import Button from 'primevue/button'
import { useCountryStore } from '@/stores/countryStore.ts'
import { useI18n } from 'vue-i18n'
import type { MessageSchema } from '@/services/i18n'
import { usePointsStore } from '@/stores/pointsStore.ts'

const { t } = useI18n<{ message: MessageSchema }>()

const countryStore = useCountryStore()

const pointsStore = usePointsStore()

function onShowResultsClick() {
  countryStore.isShowingShowResultsModalButton = false
  countryStore.isResultsDialogOpen = true
}
</script>

<template>
  <transition
    enter-active-class="transition transform duration-500 ease-out"
    enter-from-class="-translate-y-10 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition transform duration-300 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="-translate-y-10 opacity-0"
  >
    <div
      v-if="countryStore.isShowingShowResultsModalButton"
      class="p-4 flex flex-col gap-2 items-center rounded-lg bg-(--p-inputtext-background) absolute top-5 left-1/2 -translate-x-1/2 px-4 py-2 shadow border border-(--p-inputtext-border-color)"
    >
      {{ t('common.points', { count: pointsStore.points }, pointsStore.points) }}

      <Button
        :label="t('components.show-results-modal-button.show-results')"
        severity="secondary"
        variant="text"
        size="small"
        @click="onShowResultsClick"
      />
    </div>
  </transition>
</template>
