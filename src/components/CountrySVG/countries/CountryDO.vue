<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const { guessed } = useCountryGuessed('DO')
const classes = computed(() => ({ 'fill-stone-400 stroke-black': guessed.value }))
</script>

<template>
  <g id="do" class="landxx coastxx do" :class="classes">
    <metadata id="title35">Dominican Republic</metadata>
    <path
      id="Dominican_Republic_Hispaniola"
      class="landxx do"
      d="m 761.053,542.523 c 0.322,-0.662 0.677,-1.929 0.254,-2.622 -0.365,-0.597 -0.929,-1.809 -1.407,-2.274 0.968,0.05 3.2,-1.504 2.108,-2.581 -1.053,-1.039 2.059,-1.662 0.793,-3.064 -0.414,-0.458 0.125,-1.503 0.255,-1.972 0.248,-0.892 -0.563,-1.835 -0.133,-2.678 0.997,-1.954 2.997,-0.09 4.204,-0.573 0.994,-0.397 1.991,-0.623 2.985,-0.09 0.989,0.528 1.981,0.604 2.925,1.076 0.868,0.433 1.328,0.862 2.346,0.885 1.036,0.02 1.192,-0.177 1.311,0.997 0.214,2.103 1.136,2.356 3.038,1.866 0.687,-0.177 1.586,-0.423 2.202,0.09 -0.291,0.961 -1.144,0.967 -1.975,0.828 -0.822,-0.137 -2.635,0.45 -1.068,0.894 0.658,0.187 3.314,1.206 3.908,0.931 1.718,-0.797 2.768,1.385 3.841,2.363 2.127,1.939 -1.237,2.882 -1.646,3.674 -0.702,1.36 -0.982,0.04 -1.589,-0.572 -0.58,-0.581 -1.228,-0.204 -1.944,-0.353 -0.502,-0.174 -1.018,-0.29 -1.546,-0.349 -0.622,0 -1.201,0.543 -1.804,0.167 -2.56,-1.597 -3.232,1.389 -5.188,1.746 -0.471,0.09 -2.024,0.395 -2.438,0.06 -0.576,-0.466 0.06,-1.5 -0.79,-1.9 -0.364,0.815 -1.305,0.72 -1.852,1.325 -0.458,0.507 -1.132,-0.293 -1.359,0.377 -0.745,2.204 -1.69,3.677 -3.2,5.498 -0.298,-0.67 -1.139,-0.982 -1.295,-1.729 -0.153,-0.729 -0.216,-1.585 -0.936,-2.017"
    ></path>
    <path
      id="Dominican_Republic_Isla_Saona"
      d="m 785.173,541.947 c -0.517,-0.06 -0.997,-0.229 -1.44,-0.504 0.483,-0.117 1.282,-0.138 1.44,0.504"
    ></path>
  </g>
</template>
