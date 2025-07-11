<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('PW')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="pw" :class="classes">
    <path
      id="pw-"
      class="landxx coastxx pw"
      d="m 2326.14,634.95 c 0.57,-0.779 1.04,-2.01 0.57,-2.952 -0.63,0.75 -1.31,2.033 -0.57,2.952"
    ></path>
  </g>
</template>
