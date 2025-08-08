<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('PM')

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
  <g id="pm" :class="classes">
    <metadata id="title227">Saint Pierre and Miquelon</metadata>
    <path
      id="pm-"
      class="landxx coastxx pm"
      d="m 928.616,292.302 c -0.185,0.775 -0.644,1.447 -0.8,2.232 -0.06,-0.777 0.205,-1.528 0.15,-2.305 0.216,0.03 0.433,0.05 0.65,0.07"
    ></path>
  </g>
</template>
