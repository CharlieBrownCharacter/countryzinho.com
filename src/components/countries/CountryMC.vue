<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('MC')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="mc" :class="classes">
    <path
      id="mc-"
      class="landxx mc"
      d="m 1358.89,320.67 c -0.12,-0.144 0.15,-0.405 0.39,-0.45 0.22,-0.04 -0.1,0.553 -0.39,0.45"
    ></path>
  </g>
</template>
