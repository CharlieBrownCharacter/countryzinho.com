<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('TT')

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
  <g id="tt" :class="classes">
    <metadata id="title192">Trinidad and Tobago</metadata>
    <g id="tt-" class="landxx coastxx tt">
      <path
        id="Trinidad_and_Tobago_Trinidad"
        d="m 829.83,611.69 c 0.842,-1.256 3.108,-1.125 3.625,-2.606 0.318,-0.911 0.113,-3.013 -1.245,-2.938 0.962,-0.973 2.597,-1.168 3.887,-1.287 2.629,-0.241 0.408,1.407 0.573,2.943 0.154,1.428 1.032,2.739 -0.816,3.417 -1.948,0.713 -4.084,-0.293 -6.024,0.471"
      ></path>
      <path
        id="Trinidad_and_Tobago_Tobago"
        d="m 838.83,602.19 c 0.152,-0.903 0.964,-1.459 1.8,-1.655 0.06,0.971 -1.195,1.214 -1.8,1.655"
      ></path>
    </g>
  </g>
</template>
