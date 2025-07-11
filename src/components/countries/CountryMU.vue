<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('MU')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="mu" :class="classes">
    <path
      id="mu-"
      class="landxx coastxx mu"
      d="m 1734.15,871.618 c -0.53,0.555 -3.04,4.262 -1.29,4.473 2.78,0.335 3.13,-4.871 1.29,-4.473"
    ></path>
  </g>
</template>
