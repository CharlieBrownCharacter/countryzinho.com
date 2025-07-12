<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('IO')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="io" :class="classes">
    <metadata id="title213">British Indian Ocean Territory</metadata>
    <path
      id="io-"
      class="antxx landxx coastxx io"
      d="m 1842,762 c 0.21,-0.462 0.26,-0.941 0.15,-1.439 -0.5,0.388 -0.58,0.962 -0.15,1.439"
    ></path>
  </g>
</template>
