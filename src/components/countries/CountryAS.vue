<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('AS')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="as" :class="classes">
    <title id="title230">American Samoa</title>
    <path
      id="as-"
      class="landxx coastxx as"
      d="m 2734.37,822.939 c 0.33,-0.336 0.67,-0.673 1.01,-1.01 -0.55,0.07 -0.94,0.466 -1.01,1.01"
    ></path>
  </g>
</template>
