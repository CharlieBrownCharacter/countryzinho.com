<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('JM')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="jm" :class="classes">
    <title id="title188">Jamaica</title>
    <path
      id="jm-"
      class="landxx coastxx jm"
      d="m 711.459,540.558 c 2.002,-2.64 5.708,-2.221 8.568,-1.656 1.76,0.348 3.123,1.409 4.791,1.915 1.728,0.524 1.831,1.294 2.697,2.766 -0.766,0.363 -1.585,0.432 -2.42,0.432 -0.772,0 -1.151,-0.796 -1.972,-0.647 1.063,-0.18 -0.258,-0.39 -0.555,-0.126 -0.313,0.278 -0.588,0.83 -1.061,0.85 -0.926,0.04 -2.135,-0.132 -1.336,1.22 -0.957,0 -1.083,-1.154 -1.988,-1.071 -0.874,0.08 -2.392,-0.01 -2.868,-0.884 -0.294,-0.54 -0.788,-1.049 -1.195,-1.504 -0.701,-0.784 -2.112,-0.32 -2.661,-1.295"
    ></path>
  </g>
</template>
