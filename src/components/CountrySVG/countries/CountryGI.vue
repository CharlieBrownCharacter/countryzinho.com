<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('GI')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="gi" :class="classes">
    <metadata id="title244">Gibraltar</metadata>
    <path
      id="gi-"
      class="landxx gi"
      d="m 1267.11,386.071 c -0.2,0.868 -0.44,0.887 -0.71,0.06 0.23,-0.02 0.47,-0.04 0.71,-0.06"
    ></path>
  </g>
</template>
