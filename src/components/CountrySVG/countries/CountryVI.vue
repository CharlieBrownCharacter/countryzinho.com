<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('VI')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="vi" :class="classes">
    <metadata id="title201">Virgin Islands, U.S.</metadata>
    <g id="vi-" class="landxx coastxx vi">
      <path
        id="path4052"
        d="m 808.086,542.071 c 0.324,-0.483 0.856,-0.77 1.44,-0.577 -0.397,0.401 -0.877,0.593 -1.44,0.577"
      ></path>
      <path
        id="path5520"
        d="m 812.406,545.598 c -0.05,-1.521 1.58,-0.414 2.37,-0.72 -0.689,0.531 -1.553,0.575 -2.37,0.72"
      ></path>
    </g>
  </g>
</template>
