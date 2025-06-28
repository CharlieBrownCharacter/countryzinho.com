<script setup lang="ts">
import CountrySVG from '@/components/CountrySVG.vue'
import GuessInput from '@/components/GuessInput.vue'
</script>

<template>
  <header></header>
  <main class="relative w-full p-0 m-0 box-content">
    <GuessInput />
    <CountrySVG />
  </main>
</template>
