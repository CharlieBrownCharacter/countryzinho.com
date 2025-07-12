<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('PS')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="ps" :class="classes">
    <metadata id="title135">State of Palestine</metadata>
    <g id="ps-" class="landxx ps">
      <path
        id="gaza_strip"
        d="m 1555.66,425.22 c 0.86,0.544 -0.97,2.869 -1.37,3.288 -0.17,-0.299 -0.32,-0.659 -0.43,-0.984 0.69,-0.685 1.34,-1.438 1.8,-2.304 z"
      >
        <metadata id="title136">Gaza Strip</metadata>
      </path>
      <path
        id="west_bank"
        d="m 1560.69,426.98 c -1.026,0.38 -2.125,0.519 -1.705,-1.04 0.12,-0.413 1.59,-2.587 1.8,-2.516 -0.44,-0.149 -1.57,0.283 -1.83,-0.478 -0.47,-1.344 0,-2.355 -0.19,-2.919 0.36,-0.857 0.49,-3.264 1.96,-2.976 0.5,0.1 2.281,1.035 2.367,1.529 0.184,2.64 0.249,5.531 -0.239,7.315 -0.104,0.618 -1.544,0.856 -2.162,1.085 z"
      >
        <metadata id="title137">West Bank</metadata>
      </path>
    </g>
  </g>
</template>
