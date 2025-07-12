<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('SM')

const classes = computed(() =>
  guessed.value ? 'fill-slate-200 stroke-black' : 'dark:fill-zinc-900 fill-white',
)
</script>

<template>
  <g id="sm" :class="classes">
    <metadata id="title240">San Marino</metadata>
    <path
      id="sm-"
      class="landxx sm"
      d="m 1393.24,320.462 0.47,-0.69 0.68,0.536 -0.56,0.595 z"
    ></path>
  </g>
</template>
