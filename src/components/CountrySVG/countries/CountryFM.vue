<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('FM')

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
  <g id="fm" :class="classes">
    <metadata id="title207">Micronesia</metadata>
    <path
      id="fm-"
      class="landxx coastxx fm"
      d="m 2507.21,639.918 c 1.31,-0.308 0.32,-1.855 -0.72,-1.513 0,0.605 0.27,1.109 0.72,1.513"
    ></path>
  </g>
</template>
