<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('DJ')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <path
    id="dj"
    class="landxx dj"
    d="m 1618.66,603.126 c 0,-2.321 -0.9,-4.628 0.51,-6.726 1.06,-1.578 2.03,-3.01 2.94,-4.667 1.08,-1.935 1.62,-0.899 3.15,-0.487 0.78,0.208 0.74,-1.011 1.04,-1.414 0.47,-0.624 1.29,-0.871 1.94,-1.249 0.67,1.468 3.48,4.204 2.12,5.919 -0.69,0.88 -2.85,1.884 -3.89,2.292 -1.06,0.419 -1.2,1.675 -2.41,1.87 0.79,1.024 3.17,-0.663 4.32,-0.217 2.08,0.807 0,2.845 -0.55,3.99 -0.84,1.728 -2.17,-0.07 -3.47,0.268 -1.33,0.349 -4.81,2.088 -5.7,0.421"
    :class="classes"
  >
  </path>
</template>
