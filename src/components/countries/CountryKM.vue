<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('KM')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="km" :class="classes">
    <g id="km-" class="landxx coastxx km">
      <path
        id="Comoros_Grande_Comore"
        d="m 1630.98,801.85 c 0.44,-0.406 0.17,-1.176 0,-1.62 -0.45,-1.128 -0.17,-2.17 -0.5,-3.281 -1.38,-0.04 -0.78,1.778 -1.09,2.567 -0.48,1.241 1,1.571 1.6,2.334"
      ></path>
      <path
        id="Comoros_Moheli"
        d="m 1633.86,805.74 c -0.24,-0.695 -0.88,-1.248 -1.66,-1.091 0,0.997 0.95,0.94 1.66,1.091"
      ></path>
      <path
        id="Comoros_Anjouan"
        d="m 1638.9,805.66 c 0.85,-2.194 -0.84,-1.376 -2.16,-1.73 0.74,0.545 1.55,1.021 2.16,1.73"
      ></path>
    </g>
  </g>
</template>
