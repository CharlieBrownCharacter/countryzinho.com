<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('MV')

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
  <g id="mv" :class="classes">
    <metadata id="title221">Maldives, Republic of</metadata>
    <path
      id="mv-"
      class="landxx coastxx mv"
      d="m 1845.09,675.359 c 0.1,-0.7 -0.19,-1.573 -1.08,-1.37 0.53,0.28 0.95,0.774 1.08,1.37"
    ></path>
  </g>
</template>
