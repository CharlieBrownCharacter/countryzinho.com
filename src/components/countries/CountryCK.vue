<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('CK')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="ck" :class="classes">
    <path
      id="ck-"
      class="landxx coastxx ck"
      d="m 101,883 c 0.313,-0.719 0.097,-0.958 -0.648,-0.72 0.196,0.258 0.412,0.498 0.648,0.72"
    ></path>
  </g>
</template>
