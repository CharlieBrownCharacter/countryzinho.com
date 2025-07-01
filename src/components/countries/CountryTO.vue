<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('TO')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="to" :class="classes">
    <title id="title205">Tonga</title>
    <g id="to-" class="landxx coastxx to">
      <path
        id="path5930"
        d="m 2686.64,882.559 c 0.29,-0.42 0.61,-0.827 0.94,-1.22 -0.74,0.904 -1.31,-0.256 -2.17,-0.08 0.3,0.532 0.71,0.966 1.23,1.3"
      ></path>
      <path
        id="path5932"
        d="m 2687.86,884.219 c 0,-0.28 -0.1,-0.547 -0.21,-0.8 0.1,0.267 0.14,0.533 0.21,0.8"
      ></path>
      <path
        d="m 2701.98,859.229 c -0.62,0.08 -0.98,0.525 -0.8,1.15 0.38,-0.305 0.64,-0.688 0.8,-1.15"
        id="path205"
      ></path>
    </g>
  </g>
</template>
