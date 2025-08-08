<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('SM')

const classes = computed(() => {
  if (isLatestCountryGuessed.value) {
    return 'fill-red-400 stroke-black'
  }

  if (guessed.value) {
    return 'fill-zinc-900 fill-white'
  }

  return ''
})
</script>

<template>
  <g id="sm" :class="classes">
    <metadata id="title240">San Marino</metadata>
    <path
      id="sm-"
      class="landxx sm"
      d="m 1393.24,320.462 0.47,-0.69 0.68,0.536 -0.56,0.595 z"
    ></path>
  </g>
</template>
