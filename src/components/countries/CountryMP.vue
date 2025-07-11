<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('MP')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="mp" :class="classes">
    <path
      id="mp-"
      class="landxx coastxx mp"
      d="m 2403.82,567.989 c 0.21,-0.462 0.26,-0.941 0.15,-1.439 -0.5,0.388 -0.58,0.962 -0.15,1.439"
    ></path>
  </g>
</template>
