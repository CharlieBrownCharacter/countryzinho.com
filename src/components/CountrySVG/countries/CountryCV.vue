<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('CV')

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
  <g id="cv" :class="classes">
    <metadata id="title193">Cape Verde</metadata>
    <g id="cv-" class="landxx coastxx cv">
      <path
        id="path5762"
        d="m 1110.7,552.22 c 0.73,0.06 2.4,-1.029 2.05,-1.917 -0.58,-1.472 -3.22,0.447 -2.05,1.917"
      ></path>
      <path id="path5764" d="m 1112.79,553.37 c 2.1,-0.18 -0.79,-1.91 0,0"></path>
      <path
        id="path5766"
        d="m 1116.61,570.44 c 0.55,-0.204 1.11,-1.422 0.45,-1.822 -1.14,-0.691 -1.55,1.195 -0.45,1.822"
      ></path>
      <path
        id="path5768"
        d="m 1117.76,555.97 c 0.2,-1.645 1.72,-0.03 2.23,-0.937 -0.86,-0.389 -1.99,-0.919 -2.95,-0.575 0.29,0.48 0.53,0.984 0.72,1.512"
      ></path>
      <path
        id="path5770"
        d="m 1123.23,569.65 c 1.15,-1.233 -0.75,-2.604 -1.3,-3.6 -0.57,1.474 -0.87,3.539 1.3,3.6"
      ></path>
      <path id="path5772" d="m 1125.97,567.77 c 2.08,-2.123 -2.04,-1.301 0,0"></path>
      <path
        id="path5774"
        d="m 1129.06,560.29 c 2.04,-0.813 0.27,-1.866 -0.72,-2.232 0,0.894 -0.83,2.248 0.72,2.232"
      ></path>
      <path
        id="path5776"
        d="m 1128.34,555.03 c 0.47,-0.693 0.32,-1.477 0.15,-2.231 -0.8,0.642 -0.16,1.435 -0.15,2.231"
      ></path>
    </g>
  </g>
</template>
