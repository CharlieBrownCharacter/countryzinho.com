<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('NR')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="nr" :class="classes">
    <metadata id="title243">Nauru</metadata>
    <path
      id="nr-"
      class="landxx coastxx nr"
      d="m 2561.1,682.146 c 0.22,-0.1 0.43,-0.193 0.65,-0.29 -0.24,-0.597 -0.75,-0.852 -1.3,-0.43 0.19,0.265 0.4,0.505 0.65,0.72"
    ></path>
  </g>
</template>
