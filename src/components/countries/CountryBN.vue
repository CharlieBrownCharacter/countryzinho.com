<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('BN')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="bn" :class="classes">
    <title id="title191">Brunei</title>
    <g id="bn-" class="landxx bn">
      <path
        id="path6824"
        d="m 2171.62,658.85 c 2.9,-0.07 3.9,-2.64 6.33,-3.582 1.08,-0.419 0.6,1.018 0.14,1.391 -1.07,0.865 -1.28,1.026 -1.09,2.528 0,0.121 0.7,5.564 -1.03,4.357 -0.65,-0.456 -2.11,-1.464 -2.55,-2.173 -0.64,-1.021 -0.34,-2.209 -1.8,-2.521"
      ></path>
      <path
        id="Brunei_Temburong"
        d="m 2178.61,657.63 c -0.22,-1.323 0.49,-0.438 0.86,-1.512 1.05,1.343 1.5,3.288 1.37,4.968 -1.66,-0.373 -2.14,-1.943 -2.23,-3.456"
      ></path>
    </g>
  </g>
</template>
