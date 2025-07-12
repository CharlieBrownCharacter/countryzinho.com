<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('BZ')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="bz" class="landxx coastxx bz" :class="classes">
    <metadata id="title26">Belize</metadata>
    <path
      id="Belize_Blackbird_Cay"
      d="m 638.689,548.139 c 0.569,-0.172 0.946,-0.61 0.72,-1.225 -0.247,0.405 -0.487,0.813 -0.72,1.225"
    ></path>
    <path
      id="Belize_mainland"
      class="landxx bz [stroke-dasharray:1]"
      d="m 627.097,561.099 c 0.575,-3.73 1.558,-7.252 1.916,-11.022 0.145,-1.521 0.451,-9.184 3.196,-6.186 0.76,-1.428 2.711,-5.697 4.824,-5.256 -0.441,0.407 -0.658,0.911 -0.648,1.512 3.185,-1.614 0.403,4.603 0.1,5.655 -0.374,1.277 -0.601,2.875 -0.823,4.22 -0.16,0.968 0.212,1.688 -0.119,2.677 -0.327,0.978 -0.831,1.884 -1.169,2.855 0.555,-1.992 -0.498,0.549 -0.726,0.834 -0.64,0.8 -1.467,1.097 -2.236,1.724 -0.652,0.531 -1.241,1.211 -1.633,1.958 -0.186,0.318 -0.286,0.661 -0.301,1.028 -0.786,-0.194 -1.587,-0.08 -2.376,0"
    ></path>
  </g>
</template>
