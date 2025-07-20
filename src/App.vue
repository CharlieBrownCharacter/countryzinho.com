<script setup lang="ts">
import { onMounted } from 'vue'
import { countries } from '@/services/resources/country/constants.ts'
import { getCountrySrcFlag, getCountrySrcsetFlag } from '@/services/resources/country/helpers.ts'

function preloadCountryFlags() {
  countries.forEach((country) => {
    const image = new Image()

    image.src = getCountrySrcFlag(country.isoAlpha2Code)
    image.srcset = getCountrySrcsetFlag(country.isoAlpha2Code)
  })
}

onMounted(preloadCountryFlags)
</script>

<template>
  <RouterView />
</template>
