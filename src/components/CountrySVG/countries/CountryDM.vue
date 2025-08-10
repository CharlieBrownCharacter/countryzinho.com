<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('DM')

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
  <g id="dm" :class="classes">
    <metadata id="title204">Dominica</metadata>
    <path
      id="dm-"
      class="landxx coastxx dm"
      d="m 837.096,567.054 c -0.111,-1.142 -1.084,-2.53 -0.5,-3.672 1.517,0.388 2.312,3.116 0.5,3.672"
    ></path>
  </g>
</template>
