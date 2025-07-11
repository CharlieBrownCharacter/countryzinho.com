<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('GG')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="gg" :class="classes">
    <title id="title239">Guernsey</title>
    <path
      id="gg-"
      class="landxx coastxx gg"
      d="m 1293.19,272.112 c 0.46,-0.199 0.63,-0.196 0.5,-0.8 -0.17,0.266 -0.33,0.533 -0.5,0.8"
    ></path>
  </g>
</template>
