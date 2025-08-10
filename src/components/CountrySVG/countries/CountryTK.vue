<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed, isLatestCountryGuessed } = useCountryGuessed('TK')

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
  <g id="tk" :class="classes">
    <metadata id="title251">Tokelau</metadata>
    <path
      id="tk-"
      class="landxx coastxx tk"
      d="m 2737.92,782.766 c -0.12,-0.1 0.18,-0.08 -0.11,-0.14 -0.16,-0.03 -0.27,0.139 0.1,0.203"
    ></path>
  </g>
</template>
