<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('LU')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="lu" :class="classes">
    <path
      id="lu-"
      class="landxx eu lu"
      d="m 1348.75,268.58 c 0,-0.218 0.55,0.126 0,-0.02 0.48,-1.267 0.59,-1.79 1.57,-2.109 1.12,-0.365 0.7,0.681 1.08,1.263 0.5,0.78 1.56,1.038 2.13,1.769 0.62,0.793 -0.5,1.993 -0.39,2.909 -0.7,-0.342 -3.47,-0.372 -4.41,-0.666 1.28,-0.881 0.43,-1.622 0,-2.575"
    ></path>
  </g>
</template>
