<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('RW')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <path
    id="rw"
    class="landxx rw"
    d="m 1521.18,720.129 c -0.53,-1.091 2.22,-2.957 2.19,-4.411 0,-2.555 1.1,-3.663 3.28,-4.93 0.27,-0.158 1.58,-0.983 1.92,-0.718 0.46,0.357 0.63,1.59 1.37,0.771 0.58,-0.643 2.49,-3.474 3.55,-3.102 -0.5,1.465 0.76,3.314 1.43,4.4 0.83,1.357 1.68,3.691 1.46,5.249 -0.28,1.96 -1.4,2.215 -3.05,1.586 -1.88,-0.714 -2.34,0.989 -3.95,-0.436 -0.23,1.769 -0.1,3.699 -2.22,4.143 -1.09,0.226 -2.11,0.368 -2.64,-0.723 -0.59,-1.2 -2.15,-1.104 -2.27,0.33 -0.68,-0.634 -1.01,-1.22 -1.07,-2.159"
    :class="classes"
  >
    <metadata id="title110">Rwanda</metadata>
  </path>
</template>
