<script setup lang="ts">
import { ref } from 'vue'
import { countries } from '@/services/resources/country/constants.ts'
import { useCountryStore } from '@/stores/countryStore.ts'

const guess = ref('')

const countryStore = useCountryStore()

function onKeyUp() {
  const loweredCaseGuess = guess.value.toLocaleLowerCase()
  const foundCountry = countries.find((c) => c.lowerCase === loweredCaseGuess)

  if (!foundCountry) return

  countryStore.onGuessCountry(foundCountry)
  guess.value = ''
}
</script>

<template>
  <input
    v-model="guess"
    class="absolute top-5 left-1/2 -translate-x-1/2 w-64 bg-white px-4 py-2 rounded-lg shadow"
    placeholder="Guess country"
    @keyup="onKeyUp"
  />
</template>
