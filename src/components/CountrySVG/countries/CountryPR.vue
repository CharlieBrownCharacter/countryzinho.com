<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('PR')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="pr" :class="classes">
    <metadata id="title190">Puerto Rico</metadata>
    <path
      id="pr-"
      class="landxx coastxx pr"
      d="m 804.765,543.15 c -2.428,-0.178 -5.551,0.681 -7.873,-0.02 -0.527,-0.158 -1.663,0.243 -1.316,-0.989 0.199,-0.337 0.335,-0.699 0.409,-1.083 -0.05,-0.604 -0.808,-0.844 -0.72,-1.512 0.304,-2.305 7.748,-0.937 8.943,-0.506 0.965,0.348 3.245,-0.388 3.227,1.298 -0.01,0.973 -1.837,2.504 -2.67,2.808"
    ></path>
  </g>
</template>
