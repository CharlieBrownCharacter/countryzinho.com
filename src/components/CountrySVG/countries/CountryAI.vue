<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('AI')

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
  <g id="ai" :class="classes">
    <metadata id="title237">Anguilla</metadata>
    <path
      id="ai-"
      class="landxx coastxx ai"
      d="m 825.866,541.422 c 0.461,-0.342 0.941,-0.654 1.44,-0.937 -0.331,0.489 -0.849,0.854 -1.44,0.937"
    ></path>
  </g>
</template>
