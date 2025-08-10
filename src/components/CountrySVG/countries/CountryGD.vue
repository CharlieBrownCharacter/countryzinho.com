<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('GD')

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
  <g id="gd" :class="classes">
    <metadata id="title219">Grenada</metadata>
    <path
      id="gd-"
      class="landxx coastxx gd"
      d="m 832.486,594.702 c -0.768,-0.732 -0.124,-1.668 0.65,-2.017 0.29,0.759 0.06,1.587 -0.65,2.017"
    ></path>
  </g>
</template>
