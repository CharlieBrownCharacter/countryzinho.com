<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('ME')

const classes = computed(() => {
  if (isLatestCountryGuessed.value) {
    return 'fill-red-400 stroke-black'
  }

  if (guessed.value) {
    return 'fill-stone-400 stroke-black'
  }

  return ''
})
</script>

<template>
  <g id="me" :class="classes">
    <metadata id="title176">Montenegro</metadata>
    <path
      id="me-"
      class="landxx me"
      d="m 1435.71,330.606 c 1.88,-0.31 -1.89,-4.521 1.08,-3.888 -0.85,-1.522 1.82,-3.858 2.38,-2.016 0.4,-0.957 -0.72,-1.325 -0.58,-2.232 1.2,0.398 1.51,1.121 2.52,1.997 1.38,1.191 1.81,1.734 3.44,2.555 0.63,0.32 2.5,0.108 2.89,0.8 0.6,1.056 -0.96,0.979 -1.12,1.113 -0.5,0.407 1.31,1.498 0.4,1.958 -0.61,0.312 -1.36,0.703 -1.88,-0.03 -0.28,-0.4 -0.48,-1.239 -1.11,-0.519 -1.62,1.831 -2.17,3.865 -1.4,6.237 -1.17,-0.666 -2.39,-1.857 -3.17,-2.942 -0.24,-0.332 -2.24,-2.006 -2.65,-1.95 0.71,-0.316 0.56,-0.255 1.36,0.14 0.1,-1.218 -2.52,0.819 -2.16,-1.223"
    ></path>
  </g>
</template>
