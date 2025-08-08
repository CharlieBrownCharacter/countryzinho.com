<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('KW')

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
  <g id="kw" :class="classes">
    <metadata id="title180">Kuwait</metadata>
    <g id="kw-" class="landxx coastxx kw">
      <path
        id="path5440"
        d="m 1657.11,439.18 c 0.14,0.313 -1.7,3.358 0.58,3.132 1.97,-0.196 0,-2.463 -0.58,-3.132"
      ></path>
      <path
        id="path5486"
        class="landxx kw"
        d="m 1645.81,446.74 c 3.2,-1.167 1.71,-7.661 5.06,-8.277 1.29,-0.238 3.13,-0.358 4.83,1.042 0.44,0.362 1.56,2.708 1.12,3.276 -0.95,-1.335 -2.31,0.929 -2.81,1.584 1.46,-0.194 3.09,0.374 3.45,1.954 0.44,1.921 1.91,3.633 2.55,5.573 -1.24,-0.711 -4.32,0.486 -5.53,-0.366 -0.95,-0.665 -1.07,-2.105 -1.44,-3.1 -0.51,-1.33 -5.29,-0.973 -7.23,-1.686"
      ></path>
    </g>
  </g>
</template>
