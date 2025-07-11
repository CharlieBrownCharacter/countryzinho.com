<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('VC')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="vc" :class="classes">
    <path
      id="vc-"
      class="landxx coastxx vc"
      d="m 837.026,584.982 c -1.021,-0.618 -0.314,-1.585 0.22,-2.231 0.528,0.735 0.282,1.573 -0.22,2.231"
    ></path>
  </g>
</template>
