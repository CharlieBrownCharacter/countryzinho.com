<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('MU')

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
  <g id="mu" :class="classes">
    <metadata id="title198">Mauritius</metadata>
    <path
      id="mu-"
      class="landxx coastxx mu"
      d="m 1734.15,871.618 c -0.53,0.555 -3.04,4.262 -1.29,4.473 2.78,0.335 3.13,-4.871 1.29,-4.473"
    ></path>
  </g>
</template>
