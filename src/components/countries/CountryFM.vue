<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('FM')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="fm" :class="classes">
    <title id="title207">Micronesia</title>
    <path
      id="fm-"
      class="landxx coastxx fm"
      d="m 2507.21,639.918 c 1.31,-0.308 0.32,-1.855 -0.72,-1.513 0,0.605 0.27,1.109 0.72,1.513"
    ></path>
  </g>
</template>
