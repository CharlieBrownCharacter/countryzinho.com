<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('AG')

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
  <g id="ag" :class="classes">
    <metadata id="title214">Antigua and Barbuda</metadata>
    <g id="ag-" class="landxx coastxx ag">
      <path
        id="path6116"
        d="m 835.656,551.575 c -0.94,0.04 -1.243,-1.335 -0.21,-1.441 0.927,-0.1 0.575,1.051 0.21,1.441"
      ></path>
      <path
        id="path6118"
        d="m 836.096,546.822 c -0.578,-0.111 -0.923,-0.563 -0.87,-1.151 0.839,-0.296 1.103,0.496 0.87,1.151"
      ></path>
    </g>
  </g>
</template>
