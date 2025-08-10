<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('LI')

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
  <g id="li" :class="classes">
    <metadata id="title233">Liechtenstein</metadata>
    <path
      id="li-"
      class="landxx li"
      d="m 1373.36,292.374 c 0,-0.628 0.16,-1.228 0.43,-1.799 0.46,0.645 0.94,2.092 -0.43,1.799"
    ></path>
  </g>
</template>
