<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('MT')

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
  <g id="mt" :class="classes">
    <metadata id="title220">Malta</metadata>
    <path
      id="mt-"
      class="landxx coastxx eu mt"
      d="m 1409.36,388.854 c -0.8,-0.08 -1.55,-0.824 -1.15,-1.655 0.58,0.34 1.94,0.768 1.15,1.655"
    ></path>
  </g>
</template>
