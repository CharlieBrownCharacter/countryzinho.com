<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('WS')

const classes = computed(() => {
  if (isLatestCountryGuessed.value) {
    return 'fill-red-400 stroke-black'
  }

  if (guessed.value) {
    return 'fill-stone-400 stroke-black'
  }

  return ''
})
</script>

<template>
  <g id="ws" :class="classes">
    <metadata id="title195">Samoa</metadata>
    <g id="ws-" class="landxx coastxx ws">
      <path
        id="path4782"
        d="m 2721.78,815.46 c -0.45,0.217 -0.9,0.24 -1.37,0.07 0.44,1.529 1.8,3.133 3.49,2.119 0.74,-0.44 0.85,-1.316 0.43,-2.016 -0.58,-0.968 -1.74,-0.331 -2.55,-0.172"
      ></path>
      <path
        id="path4784"
        d="m 2729.62,820.21 c 0.43,-2.068 -3.23,-2.401 -4.39,-1.511 0.94,1.527 2.85,1.324 4.39,1.511"
      ></path>
    </g>
  </g>
</template>
