<script setup lang="ts">
import CountrySVG from '@/components/CountrySVG.vue'
import GuessInput from '@/components/GuessInput.vue'
import GuessedCountriesDrawer from '@/components/GuessedCountriesDrawer/GuessedCountriesDrawer.vue'
import StartGameModal from '@/components/StartGameModal.vue'
import ResultsDialog from '@/components/ResultsDialog.vue'
import { onMounted } from 'vue'
import { countries } from '@/services/resources/country/constants.ts'
import { getCountrySrcFlag, getCountrySrcsetFlag } from '@/services/resources/country/helpers.ts'
import ConfirmGameRestartDialog from '@/components/ConfirmGameRestartDialog.vue'

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
  <RouterView />
  <!--  <main class="relative w-full p-0 m-0 box-content">-->
  <!--    <GuessInput />-->
  <!--    <ResultsDialog />-->
  <!--    <GuessedCountriesDrawer />-->
  <!--    <CountrySVG />-->
  <!--    <StartGameModal />-->
  <!--    <ConfirmGameRestartDialog />-->
  <!--  </main>-->
</template>
