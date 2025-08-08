<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('BH')

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
  <g id="bh" :class="classes">
    <metadata id="title208">Bahrain</metadata>
    <path
      id="bh-"
      class="landxx coastxx bh"
      d="m 1676.91,472.086 c 0.23,0.479 0.32,0.982 0.29,1.512 -0.14,0.691 0.7,1.188 0.86,1.8 0.29,-0.76 0.33,-4.892 -1.15,-3.312"
    ></path>
  </g>
</template>
