<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('AS')

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
  <g id="as" :class="classes">
    <metadata id="title230">American Samoa</metadata>
    <path
      id="as-"
      class="landxx coastxx as"
      d="m 2734.37,822.939 c 0.33,-0.336 0.67,-0.673 1.01,-1.01 -0.55,0.07 -0.94,0.466 -1.01,1.01"
    ></path>
  </g>
</template>
