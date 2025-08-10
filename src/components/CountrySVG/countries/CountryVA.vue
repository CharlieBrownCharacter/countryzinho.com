<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('VA')

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
  <g id="va" :class="classes">
    <metadata id="title247">Vatican City</metadata>
    <path
      id="va-"
      class="landxx va"
      d="m 1394.48,337.712 -0.1,0.03 -0.11,-0.04 0.1,-0.08 0.11,-0.02"
    ></path>
  </g>
</template>
