<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('MH')

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
  <g id="mh" :class="classes">
    <metadata id="title231">Marshall Islands, Republic of the</metadata>
    <path
      id="mh-"
      class="landxx coastxx mh"
      d="m 2607.82,640.785 c 0.2,-0.32 0.17,-0.633 -0.1,-0.936 -0.27,0.198 -0.48,0.438 -0.65,0.72 0.24,0.07 0.48,0.143 0.72,0.216"
    ></path>
  </g>
</template>
