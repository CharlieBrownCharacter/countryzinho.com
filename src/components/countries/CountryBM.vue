<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('BM')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="bm" :class="classes">
    <title id="title241">Bermuda</title>
    <path
      id="bm-"
      class="landxx coastxx bm"
      d="m 832.056,419.454 c 0.25,-0.174 0.517,-0.318 0.8,-0.433 -0.267,0.145 -0.534,0.289 -0.8,0.433"
    ></path>
  </g>
</template>
