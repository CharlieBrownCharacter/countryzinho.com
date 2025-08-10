<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('TV')

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
  <g id="tv" :class="classes">
    <metadata id="title242">Tuvalu</metadata>
    <path
      id="tv-"
      class="landxx coastxx tv"
      d="m 2660.34,771.243 c -0.63,0.08 -0.98,0.525 -0.81,1.15 0.39,-0.305 0.65,-0.688 0.81,-1.15"
    ></path>
  </g>
</template>
