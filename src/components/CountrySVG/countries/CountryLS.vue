<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('LS')

const classes = computed(() => {
  if (isLatestCountryGuessed.value) {
    return 'fill-red-400 stroke-black'
  }

  if (guessed.value) {
    return 'fill-stone-400 stroke-black'
  }

  return ''
})
</script>

<template>
  <path
    id="ls"
    class="landxx ls"
    d="m 1501.88,955.06 c 0.95,0.94 0.87,2.3 1.64,3.27 0.67,0.85 0.44,1.96 1.14,2.66 0.88,0.87 3.18,3.81 4.7,2.57 0.67,-0.54 1.23,-2.34 1.7,-3.12 0.74,-1.24 1.99,-0.99 3.19,-1.33 0.88,-0.24 2.75,-0.98 3.12,-1.9 0.48,-1.18 0.53,-1.85 1.37,-2.89 0.32,-0.39 1.32,-1.46 1.15,-2.04 -0.52,-1.82 -1.28,-1.93 -2.49,-3.19 -0.94,-0.99 -1.95,-1.91 -2.88,-2.9 -0.8,-0.86 -2.19,0.49 -2.92,0.81 -0.81,0.35 -1.2,0.73 -2,1.17 -0.93,0.51 -1.91,0.33 -2.65,1.28 -0.8,1.03 -1.2,2.31 -1.92,3.4 -0.82,1.24 -2.02,1.38 -3.15,2.21"
    :class="classes"
  >
    <metadata id="title99">Lesotho</metadata>
  </path>
</template>
