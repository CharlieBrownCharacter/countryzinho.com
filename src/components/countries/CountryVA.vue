<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('VA')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="va" :class="classes">
    <title id="title247">Vatican City</title>
    <path
      id="va-"
      class="landxx va"
      d="m 1394.48,337.712 -0.1,0.03 -0.11,-0.04 0.1,-0.08 0.11,-0.02"
    ></path>
  </g>
</template>
