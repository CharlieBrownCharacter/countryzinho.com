<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('MF')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="mf" :class="classes">
    <path
      id="mf-"
      class="landxx coastxx eu mf"
      d="m 826.359,542.311 c 0.595,-0.673 0.597,-0.345 0.461,0.04"
    ></path>
  </g>
</template>
