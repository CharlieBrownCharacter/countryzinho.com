<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('MK')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <path
    id="mk"
    class="landxx mk"
    d="m 1450.04,339.246 c 0.9,-0.132 0.3,-0.862 0.29,-1.4 0,-0.747 1.3,-1.121 1.49,-2.037 0.15,-0.799 0.83,-1.19 1.5,-1.512 1.48,-0.71 1.21,0.225 2.55,0.269 -0.29,-1.084 0.48,-0.68 1.01,-1.224 0.31,-0.155 0.61,-0.15 0.92,0.02 0.74,0.213 0.81,-0.483 1.45,-0.592 0.72,-0.123 2.21,0.164 2.79,-0.275 0.73,-0.553 1.51,1.076 1.97,1.499 1.71,1.575 3.2,2.042 3.19,4.814 0,0.578 0.39,1.536 0.1,2.193 -0.19,0.375 -0.89,-0.05 -0.83,0.581 0.1,0.877 -1.59,1.484 -2.59,1.183 -1.13,-0.337 -2.26,-0.05 -3.23,0.654 -1.92,1.397 -3.44,1.404 -5.8,1.782 -1.26,0.203 -0.72,-0.667 -1.79,-0.394 -1.31,0.336 -0.67,-0.802 -1.36,-1.34 -1.39,-1.082 -1.06,-2.677 -1.61,-4.217"
    :class="classes"
  >
    <metadata id="title20">North Macedonia, Republic of</metadata>
  </path>
</template>
