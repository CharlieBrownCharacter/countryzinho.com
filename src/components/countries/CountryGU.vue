<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('GU')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="gu" :class="classes">
    <title id="title249">Guam</title>
    <path
      id="gu-"
      class="landxx coastxx gu"
      d="m 2398.42,584.046 c 0.25,-0.289 1.27,-2.729 1.23,-3.168 -1.52,0.02 -2.25,2.121 -1.23,3.168"
    ></path>
  </g>
</template>
