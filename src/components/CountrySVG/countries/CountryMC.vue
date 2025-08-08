<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('MC')

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
  <g id="mc" :class="classes">
    <metadata id="title246">Monaco</metadata>
    <path
      id="mc-"
      class="landxx mc"
      d="m 1358.89,320.67 c -0.12,-0.144 0.15,-0.405 0.39,-0.45 0.22,-0.04 -0.1,0.553 -0.39,0.45"
    ></path>
  </g>
</template>
