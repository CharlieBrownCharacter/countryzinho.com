<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('GT')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <path
    id="gt"
    class="landxx gt"
    d="m 602.81,572.67 c 0.814,-0.969 0.676,-1.992 0.968,-3.154 0.142,-0.566 0.936,-0.958 0.766,-1.583 -0.316,-1.161 -0.304,-1.355 0.375,-2.486 1.02,-1.698 1.884,-3.882 2.588,-5.323 0.718,-1.468 3.466,-0.63 4.921,-0.63 0.835,0 5.219,0.523 5.65,-0.18 0.143,-0.232 0.519,-2.937 0.402,-3.038 -0.503,-0.438 -1.187,-0.24 -1.343,-1.05 -0.18,-0.926 -0.389,-1.428 -1.252,-1.951 -1.654,-1 -2.683,-2.642 -4,-4.005 1,0 2.784,0.469 3.386,-0.645 0.621,-1.147 -0.137,-2.897 0.718,-3.896 0.916,-1.07 5.02,-0.355 6.333,-0.355 2.521,0 5.042,0 7.563,0 -0.638,2.723 -0.702,5.537 -1.224,8.279 -0.534,2.807 -1.148,5.6 -1.584,8.425 1.337,-0.138 4.18,-0.2 4.392,1.655 0.218,-0.481 0.441,-1.056 1.008,-1.224 -0.178,-0.251 -0.37,-0.491 -0.576,-0.72 1.002,0.363 1.683,1.213 2.592,1.728 -2.43,1.016 -3.934,3.462 -6.173,4.783 -1.042,0.615 -2.397,1.349 -2.098,2.787 0.211,1.018 0.439,1.713 -0.397,2.483 -0.791,0.728 -3.033,1.173 -2.816,2.33 0.129,0.684 -0.379,0.542 -0.865,0.968 -0.1,0.08 -0.932,1.199 -0.81,1.144 -0.985,0.445 -3.47,0.6 -2.969,2.641 -1.174,-0.511 -2.23,-1.366 -3.52,-1.588 -1.315,-0.226 -2.714,0.196 -4.058,0.04 -3.326,-0.396 -5.75,-3.205 -7.976,-5.431"
    :class="classes"
  >
    <metadata id="title64">Guatemala</metadata>
  </path>
</template>
