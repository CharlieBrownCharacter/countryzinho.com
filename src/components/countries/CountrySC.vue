<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('SC')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="sc" :class="classes">
    <title id="title212">Seychelles, Republic of</title>
    <path
      id="sc-"
      class="landxx coastxx sc"
      d="m 1724.5,740 c 0.1,-0.7 -0.19,-1.573 -1.08,-1.37 0.53,0.28 0.95,0.774 1.08,1.37"
    ></path>
  </g>
</template>
