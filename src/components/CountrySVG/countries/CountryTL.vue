<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('TL')

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
  <g id="tl" :class="classes">
    <metadata id="title181">Timor-Leste</metadata>
    <g id="tl-" class="landxx tl">
      <path
        id="path2786"
        d="m 2253.02,778.24 c 0,2.702 0.68,1.574 2.34,0.57 1.58,-0.96 4.03,-1.54 5.79,-2.223 2.83,-1.1 6.9,-2.155 8.89,-4.712 1.14,-1.471 -1.93,-1.171 -2.59,-0.978 -1.78,0.526 -3.35,0.76 -5.17,1.071 -1.96,0.333 -3.77,0.296 -5.77,0.722 -0.76,0.161 -1.78,0.07 -2.42,0.58 -0.67,0.544 -1.06,1.834 -1.76,2.36 1.67,0.812 1.51,1.266 0.69,2.61 z"
      ></path>
      <path
        id="Timor-Leste_Oecusse"
        d="m 2244.06,779.96 c 1.33,-0.989 2.34,-1.432 3.96,-1.739 -0.34,0.155 -0.1,3.258 -0.84,3.069 -0.6,-0.143 -0.74,-0.775 -0.87,-0.579 -0.61,0.862 -1.69,-0.957 -2.26,-0.732"
      ></path>
    </g>
  </g>
</template>
