<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('BB')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="bb" :class="classes">
    <title id="title215">Barbados</title>
    <path
      id="bb-"
      class="landxx coastxx bb"
      d="m 849.556,585.63 c -0.959,-0.41 -0.79,-1.311 -0.79,-2.16 0.802,0.298 2.27,1.636 0.79,2.16"
    ></path>
  </g>
</template>
