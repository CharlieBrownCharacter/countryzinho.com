<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('KI')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="ki" :class="classes">
    <metadata id="title206">Kiribati</metadata>
    <g id="ki-" class="landxx coastxx ki">
      <path
        id="path4790"
        d="m 98.9553,683.838 c 0.144,-0.05 0.288,-0.1 0.432,-0.145 -0.548,-0.608 -1.13,-2.463 -2.088,-2.52 0.364,0.886 0.538,1.59 -0.576,1.368 0.608,0.668 1.578,0.697 2.232,1.297"
      ></path>
      <path
        id="path4788"
        d="m 2630.31,681.384 c 0.23,-0.648 0.17,-1.237 -0.72,-0.5 0.24,0.167 0.48,0.334 0.72,0.5"
      ></path>
    </g>
  </g>
</template>
