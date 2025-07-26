<script setup lang="ts">
import CountrySVG from '@/components/CountrySVG/CountrySVG.vue'
import StartGameModal from '@/components/pages/GamePage/StartGameModal.vue'
import ConfirmGameRestartDialog from '@/components/pages/GamePage/ConfirmGameRestartDialog.vue'
import GuessInput from '@/components/pages/GamePage/GuessInput.vue'
import ResultsDialog from '@/components/pages/GamePage/ResultsDialog.vue'
import { onMounted } from 'vue'
import { useCountryStore } from '@/stores/countryStore.ts'
import ShowResultsModalButton from '@/components/pages/GamePage/ShowResultsModalButton.vue'

const countryStore = useCountryStore()

onMounted(() => {
  countryStore.isStartGameModalOpen = true
})
</script>

<template>
  <main class="relative w-full p-0 m-0 box-content">
    <ShowResultsModalButton />
    <GuessInput />
    <ResultsDialog />
    <CountrySVG />
    <StartGameModal />
    <ConfirmGameRestartDialog />
  </main>
</template>
