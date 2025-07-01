<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('JE')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="je" :class="classes">
    <title id="title236">Jersey</title>
    <path
      id="je-"
      class="landxx coastxx je"
      d="m 1296.39,274.59 c 0.1,-0.216 0.14,-0.433 0.22,-0.648 -0.58,-0.204 -0.92,0.05 -0.94,0.648 0.24,0 0.48,0 0.72,0"
    ></path>
  </g>
</template>
