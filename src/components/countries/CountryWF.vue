<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('WF')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="wf" :class="classes">
    <path
      id="wf-"
      class="landxx coastxx wf"
      d="m 2700.51,814.35 c -0.62,0.08 -0.98,0.525 -0.8,1.15 0.38,-0.305 0.64,-0.688 0.8,-1.15"
    ></path>
  </g>
</template>
