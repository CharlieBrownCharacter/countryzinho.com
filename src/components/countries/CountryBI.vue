<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('BI')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <path
    id="bi"
    class="landxx bi"
    d="m 1522.25,722.289 c 0.94,-3.037 2.59,0.283 2.82,0.311 3.36,0.39 4.03,-0.707 4.31,-4.061 1.84,1.584 1.26,-0.709 5.42,0.736 -0.7,0.342 -2.49,2.285 -1.1,2.224 -1.17,3.067 1.15,3.187 2.45,2.8 -0.79,1.205 0.98,1.711 -0.71,2.918 -1.04,0.746 -1.01,0.327 -1.24,1.67 -0.1,0.33 -1.28,0.166 -1.48,0.593 -0.23,0.475 0.73,1.563 0.62,1.864 -0.1,0.196 -0.6,1.234 -1.47,1.877 -1.38,1.008 -1.57,2.196 -3.03,3.137 -0.72,0.464 -1.46,0.601 -2.1,0.602 -0.26,-0.874 -1.82,-4.163 -2.12,-5.242 -0.44,-1.557 0.18,-3.169 -0.86,-4.521 0.12,-0.763 0.5,-1.694 -0.11,-2.54 -0.54,-0.748 -1.15,-1.452 -1.4,-2.368"
    :class="classes"
  >
    <title id="title101">Burundi</title>
  </path>
</template>
