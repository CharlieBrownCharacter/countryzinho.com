<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('LC')

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
  <g id="lc" :class="classes">
    <metadata id="title218">Saint Lucia</metadata>
    <path
      id="lc-"
      class="landxx coastxx lc"
      d="m 839.185,579.942 c -1.39,-0.555 -0.666,-1.98 0,-2.808 1.025,0.543 0.674,2.138 0,2.808"
    ></path>
  </g>
</template>
