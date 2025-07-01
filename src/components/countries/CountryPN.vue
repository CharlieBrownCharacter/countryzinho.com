<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('PN')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="pn" :class="classes">
    <title id="title245">Pitcairn Islands</title>
    <path
      id="pn-"
      class="landxx coastxx pn"
      d="m 342,911 c 0.313,-0.719 0.1,-0.958 -0.648,-0.72 0.196,0.258 0.412,0.498 0.648,0.72"
    ></path>
  </g>
</template>
