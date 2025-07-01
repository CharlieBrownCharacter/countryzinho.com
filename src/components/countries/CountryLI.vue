<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('LI')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="li" :class="classes">
    <title id="title233">Liechtenstein</title>
    <path
      id="li-"
      class="landxx li"
      d="m 1373.36,292.374 c 0,-0.628 0.16,-1.228 0.43,-1.799 0.46,0.645 0.94,2.092 -0.43,1.799"
    ></path>
  </g>
</template>
