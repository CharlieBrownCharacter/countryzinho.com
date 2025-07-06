<script setup lang="ts">
import CountrySVG from '@/components/CountrySVG.vue'
import GuessInput from '@/components/GuessInput.vue'
import GuessedCountriesDrawer from '@/components/GuessedCountriesDrawer/GuessedCountriesDrawer.vue'
import Button from 'primevue/button'
import { useCountryStore } from '@/stores/countryStore.ts'
import TimerSection from '@/components/TimerSection.vue'
import StartGameModal from '@/components/StartGameModal.vue'

const store = useCountryStore()
</script>

<template>
  <main class="relative w-full p-0 m-0 box-content">
    <GuessInput />
    <Button
      type="button"
      label="Cancel"
      severity="secondary"
      class="absolute left-5 top-5"
      @click="store.isGuessCountriesModalOpen = true"
    >
      Open Guess Modal
    </Button>
    <GuessedCountriesDrawer />
    <CountrySVG />
    <TimerSection />
    <StartGameModal />
  </main>
</template>
