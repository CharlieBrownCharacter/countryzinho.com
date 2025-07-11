<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('TC')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="tc" :class="classes">
    <title id="title216">Turks and Caicos Islands</title>
    <g id="tc-" class="landxx coastxx tc">
      <path
        id="path5528"
        d="m 761.216,510.462 c -0.12,-0.24 -0.24,-0.48 -0.36,-0.721 0.49,0.306 0.994,0.33 1.51,0.07 -0.371,0.24 -0.754,0.456 -1.15,0.649"
      ></path>
      <path
        id="path5532"
        d="m 765.815,510.462 c -0.24,-0.145 -0.48,-0.288 -0.72,-0.433 0.843,-0.698 0.957,-0.209 0.72,0.433"
      ></path>
      <path
        id="path5534"
        d="m 767.116,511.182 c -0.255,-0.225 -0.495,-0.465 -0.72,-0.72 0.661,-0.05 0.605,0.204 0.72,0.72"
      ></path>
    </g>
  </g>
</template>
