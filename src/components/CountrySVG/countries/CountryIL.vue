<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('IL')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="il" :class="classes">
    <metadata id="title134">Israel</metadata>
    <path
      id="il-"
      class="landxx il"
      d="m 1555.66,425.214 c 1.403,-2.528 1.84,-5.354 2.38,-8.136 0.16,-0.851 0.19,-2.25 0.88,-2.863 0.51,-0.459 -0.27,-1.453 0.2,-1.961 0.43,-0.466 1.48,0 1.98,0.07 1.19,0.146 1.03,-1.078 1.4,-1.795 1.73,0.09 0.43,6.678 0.58,8.604 0.136,2.824 0.321,3.847 -0.15,6.72 -0.15,1.05 -0.1,1.711 0,3.387 0,1.495 -0.56,3.437 -1.01,4.747 -0.87,2.55 -0.23,6.933 -1.96,9.449 l -6.09,-15.977 c 0.637,-0.52 1.405,-1.547 1.79,-2.241 z"
    ></path>
  </g>
</template>
