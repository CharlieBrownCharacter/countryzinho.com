<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('SV')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <path
    id="sv"
    class="landxx sv"
    d="m 618.363,579.654 c -0.213,-0.869 0.07,-1.258 0.616,-1.765 0.83,-0.766 1.567,-0.456 2.282,-0.912 0.1,-0.06 0.735,-1.223 1.55,-1.584 0.311,-0.138 0.05,-0.642 0.131,-1.029 0.182,-0.857 1.611,-0.527 2.173,-0.371 0.938,0.26 6.002,3.427 5.488,4.582 1.032,-0.01 3.333,-1.909 3.672,0 0.891,-0.587 2.442,-0.207 2.026,1.025 -0.09,0.265 -0.819,3.804 -1.09,2.719 -0.744,1.003 0.75,1.816 -1.296,2.376 -1.94,0.53 -3.35,-1.369 -5.04,-0.936 1.878,0.515 -0.973,0.27 -1.45,0.05 -1.171,-0.539 -2.155,-1.492 -3.404,-1.866 -1.169,-0.351 -2.526,0.146 -3.643,-0.416 -0.658,-0.332 -1.286,-1.428 -2.015,-1.873"
    :class="classes"
  >
    <metadata id="title95">El Salvador</metadata>
  </path>
</template>
