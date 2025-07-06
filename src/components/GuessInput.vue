<script setup lang="ts">
import { ref } from 'vue'
import { trieRoot } from '@/services/resources/country/constants.ts'
import { useCountryStore } from '@/stores/countryStore.ts'
import { findGuess } from '@/services/resources/country/helpers.ts'
import InputText from 'primevue/inputtext'

const guess = ref('')

const countryStore = useCountryStore()

function onKeyUp() {
  const matchedCode = findGuess(trieRoot, guess.value)

  if (!matchedCode) return

  if (!matchedCode.isoAlpha2Code) throw new Error('matchedCode should have country code')

  if (!(matchedCode.isoAlpha2Code in countryStore.guessedCountries))
    throw new Error(`${matchedCode.isoAlpha2Code} is not in countryStore.guessedCountries`)

  if (countryStore.guessedCountries[matchedCode.isoAlpha2Code].guessed) return

  countryStore.onGuessCountry(matchedCode.isoAlpha2Code)
  guess.value = ''
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
    <InputText
      v-if="countryStore.isShowingControls"
      v-model="guess"
      class="absolute top-5 left-1/2 -translate-x-1/2 w-64 px-4 py-2 shadow"
      placeholder="Guess country"
      autofocus
      @keyup="onKeyUp"
    />
  </transition>
</template>
