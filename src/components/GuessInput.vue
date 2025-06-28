<script setup lang="ts">
import { ref } from 'vue'
import { trieRoot } from '@/services/resources/country/constants.ts'
import { useCountryStore } from '@/stores/countryStore.ts'
import { findGuess } from '@/services/resources/country/helpers.ts'

const guess = ref('')

const countryStore = useCountryStore()

function onKeyUp() {
  const matchedCode = findGuess(trieRoot, guess.value)

  if (!matchedCode) return

  if (!matchedCode.isoAlpha2Code) throw new Error('matchedCode should have country code')

  countryStore.onGuessCountry(matchedCode.isoAlpha2Code)
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
