<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('BL')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="bl" :class="classes">
    <metadata id="title225">Saint Barthélemy</metadata>
    <path
      id="bl-"
      class="landxx coastxx bl"
      d="m 827.92,543.471 c -0.258,0 -0.516,0.02 -0.775,0.02 0.45,0.335 0.399,0.08 0.775,-0.02"
    ></path>
  </g>
</template>
