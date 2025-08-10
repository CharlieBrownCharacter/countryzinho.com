<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('BM')

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
  <g id="bm" :class="classes">
    <metadata id="title241">Bermuda</metadata>
    <path
      id="bm-"
      class="landxx coastxx bm"
      d="m 832.056,419.454 c 0.25,-0.174 0.517,-0.318 0.8,-0.433 -0.267,0.145 -0.534,0.289 -0.8,0.433"
    ></path>
  </g>
</template>
