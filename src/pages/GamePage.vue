<script setup lang="ts">
import CountrySVG from '@/components/CountrySVG.vue'
import StartGameModal from '@/components/StartGameModal.vue'
import ConfirmGameRestartDialog from '@/components/ConfirmGameRestartDialog.vue'
import GuessedCountriesDrawer from '@/components/GuessedCountriesDrawer/GuessedCountriesDrawer.vue'
import GuessInput from '@/components/GuessInput.vue'
import ResultsDialog from '@/components/ResultsDialog.vue'
import { onMounted } from 'vue'
import { useCountryStore } from '@/stores/countryStore.ts'

const countryStore = useCountryStore()

onMounted(() => {
  countryStore.isStartGameModalOpen = true
})
</script>

<template>
  <main class="relative w-full p-0 m-0 box-content">
    <GuessInput />
    <ResultsDialog />
    <GuessedCountriesDrawer />
    <CountrySVG />
    <StartGameModal />
    <ConfirmGameRestartDialog />
  </main>
</template>
