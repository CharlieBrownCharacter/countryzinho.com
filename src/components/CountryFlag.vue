<script setup lang="ts">
import type { Country } from '@/services/resources/country/types.ts'
import { getCountrySrcFlag, getCountrySrcsetFlag } from '@/services/resources/country/helpers.ts'
import { useI18n } from 'vue-i18n'
import type { MessageSchema } from '@/services/i18n'

defineProps<{
  countryCode: Country['isoAlpha2Code']
  countryName: Country['name']
}>()

const { t } = useI18n<{ message: MessageSchema }>()
</script>

<template>
  <img
    class="h-[13px] w-[20px] object-cover overflow-hidden"
    :src="getCountrySrcFlag(countryCode)"
    :srcset="getCountrySrcsetFlag(countryCode)"
    :alt="t('components.country-flag.flag', { country: countryName })"
    width="20"
    height="13"
    loading="lazy"
  />
</template>
