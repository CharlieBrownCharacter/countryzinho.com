<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('GG')

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
  <g id="gg" :class="classes">
    <metadata id="title239">Guernsey</metadata>
    <path
      id="gg-"
      class="landxx coastxx gg"
      d="m 1293.19,272.112 c 0.46,-0.199 0.63,-0.196 0.5,-0.8 -0.17,0.266 -0.33,0.533 -0.5,0.8"
    ></path>
  </g>
</template>
