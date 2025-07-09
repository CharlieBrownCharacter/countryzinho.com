<script setup lang="ts">
import type { Country } from '@/services/resources/country/types.ts'
import { getCountrySrcFlag, getCountrySrcsetFlag } from '@/services/resources/country/helpers.ts'

defineProps<{
  countryCode: Country['isoAlpha2Code']
  countryName: Country['name']
}>()
</script>

<template>
  <img
    class="h-[13px] w-[20px] object-cover overflow-hidden"
    :src="getCountrySrcFlag(countryCode)"
    :srcset="getCountrySrcsetFlag(countryCode)"
    :alt="`Flag ${countryName}`"
    width="20"
    height="13"
    loading="lazy"
  />
</template>
