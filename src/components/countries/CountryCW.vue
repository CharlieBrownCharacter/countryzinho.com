<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('CW')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="cw" :class="classes">
    <metadata id="title202">Curaçao</metadata>
    <path
      id="cw-"
      class="landxx coastxx cw"
      d="m 778.996,594.414 c -1.237,-0.304 -2.921,-1.372 -2.95,-2.809 0.665,0.1 2.768,2.149 2.95,2.809"
    ></path>
  </g>
</template>
