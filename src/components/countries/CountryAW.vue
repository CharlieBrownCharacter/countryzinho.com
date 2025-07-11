<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('AW')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="aw" :class="classes">
    <title id="title232">Aruba</title>
    <path
      id="aw-"
      class="landxx coastxx aw"
      d="m 769.776,590.526 c -0.12,-0.24 -0.24,-0.479 -0.36,-0.72 0.795,-0.313 1.129,0.837 1.229,1.368 -0.315,-0.182 -0.605,-0.398 -0.869,-0.648"
    ></path>
  </g>
</template>
