<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('SG')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="sg" :class="classes">
    <path
      id="sg-"
      class="landxx coastxx sg"
      d="m 2093.43,686.214 c -0.96,0.252 0.51,2.079 1.8,0.359 -0.57,-0.271 -1.17,-0.391 -1.8,-0.359"
    ></path>
  </g>
</template>
