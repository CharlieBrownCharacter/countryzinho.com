<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('DM')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="dm" :class="classes">
    <path
      id="dm-"
      class="landxx coastxx dm"
      d="m 837.096,567.054 c -0.111,-1.142 -1.084,-2.53 -0.5,-3.672 1.517,0.388 2.312,3.116 0.5,3.672"
    ></path>
  </g>
</template>
