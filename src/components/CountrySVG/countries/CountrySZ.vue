<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('SZ')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="sz" :class="classes">
    <metadata id="title177">Eswatini</metadata>
    <path
      id="sz-"
      class="landxx sz"
      d="m 1530.97,929.662 c 0,0 0.18,0 0.18,0 0.96,0.943 0.85,0.767 1.63,1.741 0.66,0.842 0.74,1.224 1.45,1.918 0.88,0.872 2.81,2.085 4.33,0.851 0.67,-0.541 0.35,-0.567 0.77,-1.378 l 0.9,-1.761 h 1.28 v -0.511 c -1.55,-6.171 0.36,-1.995 -1.09,-6.007 -0.81,-0.859 -1.84,-1.805 -2.57,-2.135 l -2.4,-0.1 c -0.81,1.031 -1.44,1.148 -2.15,2.234 -0.41,0.622 -0.57,1.105 -0.77,1.534 -0.19,0.43 -0.96,3.198 -1.53,3.61 z"
    ></path>
  </g>
</template>
