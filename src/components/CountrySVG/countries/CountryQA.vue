<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('QA')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="qa" :class="classes">
    <metadata id="title187">Qatar</metadata>
    <path
      id="qa-"
      class="landxx qa"
      d="m 1679.79,479.79 c 0,-0.39 -0.61,-2.786 0.5,-1.656 -0.1,-0.388 -0.32,-2.542 0.37,-0.72 0,-1.816 0.7,-6.609 3.2,-3.966 0.63,0.663 1.83,1.128 1.84,2.168 0,0.726 -0.36,1.186 -0.52,1.849 -0.15,0.574 0.21,1.32 0.26,1.893 0.1,0.573 0.67,0.584 0.83,1.08 0.26,0.809 0.1,1.543 -0.26,2.29 -0.57,1.293 -0.38,2.237 -1.8,2.662 -1.18,0.354 -2.24,1.291 -3.03,-0.439 -0.72,-1.578 -1.02,-3.477 -1.39,-5.161"
    ></path>
  </g>
</template>
