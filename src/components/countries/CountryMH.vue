<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('MH')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="mh" :class="classes">
    <path
      id="mh-"
      class="landxx coastxx mh"
      d="m 2607.82,640.785 c 0.2,-0.32 0.17,-0.633 -0.1,-0.936 -0.27,0.198 -0.48,0.438 -0.65,0.72 0.24,0.07 0.48,0.143 0.72,0.216"
    ></path>
  </g>
</template>
