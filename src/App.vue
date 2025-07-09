<script setup lang="ts">
import CountrySVG from '@/components/CountrySVG.vue'
import GuessInput from '@/components/GuessInput.vue'
import GuessedCountriesDrawer from '@/components/GuessedCountriesDrawer/GuessedCountriesDrawer.vue'
import Button from 'primevue/button'
import { useCountryStore } from '@/stores/countryStore.ts'
import TimerSection from '@/components/TimerSection.vue'
import StartGameModal from '@/components/StartGameModal.vue'
import ResultsDialog from '@/components/ResultsDialog.vue'
import { onMounted } from 'vue'
import { countries } from '@/services/resources/country/constants.ts'
import { getCountrySrcFlag, getCountrySrcsetFlag } from '@/services/resources/country/helpers.ts'

const store = useCountryStore()

function preloadCountryFlags() {
  countries.forEach((country) => {
    const image = new Image()

    image.src = getCountrySrcFlag(country.isoAlpha2Code)
    image.srcset = getCountrySrcsetFlag(country.isoAlpha2Code)
  })
}

onMounted(preloadCountryFlags)
</script>

<template>
  <main class="relative w-full p-0 m-0 box-content">
    <GuessInput />
    <ResultsDialog />
    <transition
      enter-active-class="transition transform duration-500 ease-out"
      enter-from-class="-translate-y-10 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition transform duration-300 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-10 opacity-0"
    >
      <Button
        v-if="store.isShowingControls"
        type="button"
        label="Cancel"
        severity="secondary"
        class="absolute left-5 top-5"
        @click="store.isGuessCountriesModalOpen = true"
      >
        Open Guess Modal
      </Button>
    </transition>
    <GuessedCountriesDrawer />
    <CountrySVG />
    <TimerSection />
    <StartGameModal />
  </main>
</template>
