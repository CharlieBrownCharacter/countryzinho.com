<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('LB')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="lb" :class="classes">
    <metadata id="title175">Lebanon</metadata>
    <path
      id="lb-"
      class="landxx lb"
      d="m 1559.12,412.254 c 1.59,-1.854 1.53,-5.199 2.88,-7.283 0.67,-1.032 -0.11,-2.426 0.66,-3.421 0.6,-0.774 2.23,-1.63 1.71,-2.832 0.61,0.13 1.55,0.393 2.14,0.04 1.36,-0.81 0.4,0.732 0.6,1.196 0,-0.06 0.89,0.282 0.99,0.375 0.68,0.659 0.3,0.513 0.82,1.463 1.1,2.021 -2.43,2.345 -1.02,4.052 -1.43,-0.427 -3.86,0.572 -2.16,2.16 -0.64,0.146 -2.79,2.234 -2.88,2.88 -0.16,-0.08 -0.28,-0.203 -0.36,-0.36 -0.24,0.465 -0.25,1.016 -0.51,1.491 -0.54,1.005 -2.09,-0.393 -2.87,0.238"
    ></path>
  </g>
</template>
