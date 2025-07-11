<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('GD')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="gd" :class="classes">
    <title id="title219">Grenada</title>
    <path
      id="gd-"
      class="landxx coastxx gd"
      d="m 832.486,594.702 c -0.768,-0.732 -0.124,-1.668 0.65,-2.017 0.29,0.759 0.06,1.587 -0.65,2.017"
    ></path>
  </g>
</template>
