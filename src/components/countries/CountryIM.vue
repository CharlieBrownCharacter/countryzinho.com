<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('IM')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="im" :class="classes">
    <metadata id="title248">Isle of Man</metadata>
    <path
      id="im-"
      class="landxx coastxx im"
      d="m 1281.85,233.982 c 0.89,-0.203 2.61,-0.724 3.03,-1.626 0.28,-0.611 -0.67,-0.963 -1.12,-0.78 -0.93,0.378 -1.46,1.593 -1.91,2.406"
    ></path>
  </g>
</template>
