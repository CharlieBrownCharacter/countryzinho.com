<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('CY')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="cy" :class="classes">
    <metadata id="title189">Cyprus</metadata>
    <path
      id="cy-"
      class="landxx coastxx eu cy"
      d="m 1537.59,395.766 c -0.1,-0.264 -0.2,-0.528 -0.29,-0.792 0.98,0.968 2.43,-0.875 3.55,-0.799 1.73,0.117 0.43,-1.62 2.04,-1.582 1.72,0.04 3.25,0.349 4.98,-0.116 1.94,-0.522 3.67,-2.54 5.71,-2.544 -1.29,0.81 -2.44,2.705 -3.88,3.154 -1.56,0.49 0,1.988 0.63,2.678 -0.67,0.08 -2.19,-0.05 -2.7,0.411 -0.57,0.514 -0.77,1.243 -1.55,1.513 -0.68,0.235 -3.37,0.524 -2.95,1.748 -2.26,-1.14 -4.48,-0.802 -5.54,-3.671"
    ></path>
    <g id="xc">
      <metadata>Northern Cyprus</metadata>
      <path
        id="xc-"
        class="limitxx cy xc"
        d="m 1545.03,395.791 c -0.14,-0.16 0.34,-0.106 -0.1,-1.274 0,-0.05 -2.09,-0.09 -2.56,0.1 -1.97,0.82 -1.8,-0.469 -1.55,-0.441 1.8428,0.136 0.43,-1.62 2.04,-1.582 1.72,0.04 3.25,0.349 4.98,-0.116 1.94,-0.522 3.67,-2.54 5.71,-2.544 -1.29,0.81 -2.44,2.705 -3.88,3.154 -1.07,0.337 -0.66,1.152 -0.1,1.852 0.25,0.317 -0.4,0.15 -0.65,0.176 -0.1,0.01 -0.23,-0.245 -0.39,-0.226 -0.1,0.01 -0.14,0.255 -0.28,0.323 -1.77,0.828 -3.15,0.843 -3.25,0.579 z"
      ></path>
    </g>
  </g>
</template>
