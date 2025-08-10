<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('MF')

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
  <g id="mf" :class="classes">
    <metadata id="title238">Saint Martin (French Part)</metadata>
    <path
      id="mf-"
      class="landxx coastxx eu mf"
      d="m 826.359,542.311 c 0.595,-0.673 0.597,-0.345 0.461,0.04"
    ></path>
  </g>
</template>
