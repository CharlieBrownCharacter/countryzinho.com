<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('MS')

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
  <g id="ms" :class="classes">
    <metadata id="title224">Montserrat</metadata>
    <path
      id="ms-"
      class="landxx coastxx ms"
      d="m 831.601,554.398 c -0.05,-0.264 0.111,-0.153 0.06,-0.417 0.177,0.172 0.259,0.274 0.27,0.378 0.01,0.104 -0.05,0.156 -0.159,0.336"
    ></path>
  </g>
</template>
