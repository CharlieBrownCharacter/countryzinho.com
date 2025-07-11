<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('GQ')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="gq" class="landxx coastxx gq" :class="classes">
    <path
      id="Equatorial_Guinea_Bioko"
      d="m 1366.95,670.88 c 0.53,-0.625 2.99,-5.283 0.81,-4.834 -0.84,0.172 -1.22,0.685 -1.49,1.449 -0.33,0.909 -0.91,1.026 -1.46,1.698 -0.63,0.777 1.74,1.474 2.14,1.687"
    ></path>
    <path
      id="Equatorial_Guinea_mainland"
      class="landxx gq"
      d="m 1374.08,684.85 c 0.28,0.07 0.54,0.02 0.79,-0.144 -1.58,0.765 -0.14,-1.554 0.13,-2 0.81,-1.281 0.16,-3.141 0.74,-4.68 1.06,2.073 1.75,1.562 3.13,1.853 l 8.2,-0.09 v 10.012 l -9.06,-0.199 c -0.58,0.08 -3.37,0.925 -2.32,-0.362 -0.93,-0.478 -3.11,0.535 -3.68,-0.647 -0.52,-1.085 1.55,-2.888 2.02,-3.743"
    ></path>
  </g>
</template>
