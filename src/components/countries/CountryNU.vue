<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('NU')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="nu" :class="classes">
    <title id="title226">Niue</title>
    <path
      id="nu-"
      class="landxx coastxx nu"
      d="m 26.5,867 c 0.229,-0.648 0.167,-1.237 -0.72,-0.5 0.241,0.167 0.481,0.334 0.72,0.5"
    ></path>
  </g>
</template>
