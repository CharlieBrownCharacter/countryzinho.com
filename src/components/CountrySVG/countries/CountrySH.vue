<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('SH')

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
  <g id="sh" :class="classes">
    <metadata id="title235">Saint Helena, Ascension and Tristan da Cunha</metadata>
    <path
      id="sh-"
      class="landxx coastxx sh"
      d="m 1250.33,847.358 c 0.31,-0.488 0.34,-0.992 0.1,-1.512 -0.6,0.418 -0.63,1.032 -0.1,1.512"
    ></path>
  </g>
</template>
