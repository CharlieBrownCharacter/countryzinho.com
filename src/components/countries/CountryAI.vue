<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('AI')
const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <g id="ai" :class="classes">
    <title id="title237">Anguilla</title>
    <path
      id="ai-"
      class="landxx coastxx ai"
      d="m 825.866,541.422 c 0.461,-0.342 0.941,-0.654 1.44,-0.937 -0.331,0.489 -0.849,0.854 -1.44,0.937"
    ></path>
  </g>
</template>
