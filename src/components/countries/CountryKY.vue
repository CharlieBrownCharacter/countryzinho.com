<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('KY')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="ky" :class="classes">
    <metadata id="title222">Cayman Islands</metadata>
    <path
      id="ky-"
      class="landxx coastxx ky"
      d="m 690.003,531.342 c 0.73,0.04 1.437,-0.166 2.16,-0.216 -0.65,0.448 -1.412,0.838 -2.232,0.72 0.02,-0.168 0.05,-0.336 0.07,-0.504"
    ></path>
  </g>
</template>
