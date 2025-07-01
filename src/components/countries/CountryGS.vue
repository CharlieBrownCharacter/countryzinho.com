<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('GS')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="gs" :class="classes">
    <title id="title185">South Georgia and the South Sandwich Islands</title>
    <path
      id="gs-"
      class="antxx landxx coastxx gs"
      d="m 1082.48,1170.34 c 0.19,-0.14 0.38,-0.28 0.58,-0.43 -0.25,-0.21 -0.52,-0.4 -0.8,-0.57 0.52,0.44 1.15,0.35 1.59,-0.15 -0.42,-0.36 -2.24,-1.55 -2.1,-2.03 0.15,-0.53 -2.26,-1.89 -2.73,-1.93 1.02,1.55 -1.28,-0.28 -1.87,-0.1 1.15,-1.09 -1.59,-1.18 -2.39,-1.48 -0.97,-0.37 -2.23,-0.1 -3.32,-0.42 -1.03,-0.3 -2.54,-0.43 -3.58,-0.12 1.65,0.92 3.43,1.15 5.26,1.23 -1.81,0 0,0.89 0.61,0.89 1.05,0 1.94,0.5 2.78,1.08 0.87,0.61 1.72,0.95 2.66,1.42 1.24,0.62 2.18,1.8 3.31,2.58"
    ></path>
  </g>
</template>
