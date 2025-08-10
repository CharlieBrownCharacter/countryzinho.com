<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('MP')

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
  <g id="mp" :class="classes">
    <metadata id="title210">Northern Mariana Islands</metadata>
    <path
      id="mp-"
      class="landxx coastxx mp"
      d="m 2403.82,567.989 c 0.21,-0.462 0.26,-0.941 0.15,-1.439 -0.5,0.388 -0.58,0.962 -0.15,1.439"
    ></path>
  </g>
</template>
