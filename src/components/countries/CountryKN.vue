<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('KN')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="kn" :class="classes">
    <g id="kn-" class="landxx coastxx kn">
      <path
        id="Saint_Kitts_and_Nevis_Saint_Kitts"
        d="m 828.886,549.63 c -0.501,-0.434 -0.981,-0.89 -1.44,-1.368 0.858,-0.412 1.487,0.631 1.44,1.368"
      ></path>
      <path
        id="Saint_Kitts_and_Nevis_Nevis"
        d="m 829.326,550.71 c -0.05,-0.264 -0.1,-0.528 -0.15,-0.792 0.354,0.344 0.37,0.432 0.15,0.792"
      ></path>
    </g>
  </g>
</template>
