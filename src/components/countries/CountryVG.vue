<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('VG')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="vg" :class="classes">
    <title id="title234">Virgin Islands, British</title>
    <g id="vg-" class="landxx coastxx vg">
      <path
        id="path5522"
        d="m 813.126,540.126 c -0.24,-0.1 -0.48,-0.192 -0.72,-0.288 0.698,-0.319 0.939,-0.223 0.72,0.288"
      ></path>
      <path
        id="path5524"
        d="m 818.015,536.814 c -0.24,-0.1 -0.48,-0.192 -0.72,-0.288 0.537,-0.161 0.401,0.07 0.72,0.288"
      ></path>
    </g>
  </g>
</template>
