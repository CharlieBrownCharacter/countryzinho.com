<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('GU')

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
  <g id="gu" :class="classes">
    <metadata id="title249">Guam</metadata>
    <path
      id="gu-"
      class="landxx coastxx gu"
      d="m 2398.42,584.046 c 0.25,-0.289 1.27,-2.729 1.23,-3.168 -1.52,0.02 -2.25,2.121 -1.23,3.168"
    ></path>
  </g>
</template>
