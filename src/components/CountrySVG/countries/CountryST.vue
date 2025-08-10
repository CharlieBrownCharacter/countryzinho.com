<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('ST')

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
  <g id="st" :class="classes">
    <metadata id="title200">Sao Tome and Principe</metadata>
    <g id="st-" class="landxx coastxx st">
      <path
        id="Sao_Tome_and_Principe_Principe"
        d="m 1357.03,685.35 c 0.31,-0.489 0.34,-0.992 0.1,-1.512 -0.6,0.418 -0.63,1.032 -0.1,1.512"
      ></path>
      <path
        id="Sao_Tome_and_Principe_Sao_Tome"
        d="m 1350.34,698.379 c 0.68,-0.37 1.4,-0.951 1.64,-1.723 0.12,-0.4 0.1,-1.731 -0.69,-1.523 -1.73,0.479 -1.15,2.004 -0.95,3.246"
      ></path>
    </g>
  </g>
</template>
