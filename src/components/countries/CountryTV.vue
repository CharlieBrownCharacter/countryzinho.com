<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('TV')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="tv" :class="classes">
    <path
      id="tv-"
      class="landxx coastxx tv"
      d="m 2660.34,771.243 c -0.63,0.08 -0.98,0.525 -0.81,1.15 0.39,-0.305 0.65,-0.688 0.81,-1.15"
    ></path>
  </g>
</template>
