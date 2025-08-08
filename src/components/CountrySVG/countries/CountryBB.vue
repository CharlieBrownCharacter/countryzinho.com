<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('BB')

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
  <g id="bb" :class="classes">
    <metadata id="title215">Barbados</metadata>
    <path
      id="bb-"
      class="landxx coastxx bb"
      d="m 849.556,585.63 c -0.959,-0.41 -0.79,-1.311 -0.79,-2.16 0.802,0.298 2.27,1.636 0.79,2.16"
    ></path>
  </g>
</template>
