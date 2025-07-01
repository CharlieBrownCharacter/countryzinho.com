<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('SX')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="sx" :class="classes">
    <title id="title203">Sint Maarten (Dutch Part)</title>
    <path
      id="sx-"
      class="landxx sx"
      d="m 826.82,542.35 c -0.135,0.385 -0.213,0.131 -0.277,0.236 -0.05,0.08 -0.194,-0.08 -0.288,-0.129 -0.09,-0.05 0.02,-0.113 -0.05,-0.171"
    ></path>
  </g>
</template>
