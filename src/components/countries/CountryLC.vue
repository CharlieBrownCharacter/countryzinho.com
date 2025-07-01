<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('LC')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="lc" :class="classes">
    <title id="title218">Saint Lucia</title>
    <path
      id="lc-"
      class="landxx coastxx lc"
      d="m 839.185,579.942 c -1.39,-0.555 -0.666,-1.98 0,-2.808 1.025,0.543 0.674,2.138 0,2.808"
    ></path>
  </g>
</template>
