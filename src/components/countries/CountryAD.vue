<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('AD')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="ad" :class="classes">
    <title id="title209">Andorra</title>

    <path
      id="ad-"
      class="landxx ad"
      d="m 1317.49,330.318 c 0.55,-0.716 1.85,-0.365 2.3,0.288 -0.49,0.647 -1.31,0.987 -2.09,1.08 0,-0.461 -0.11,-0.917 -0.21,-1.368"
    ></path>
  </g>
</template>
