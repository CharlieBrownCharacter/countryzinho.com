<script setup lang="ts">
import { ref } from 'vue'
import Tag from 'primevue/tag'
import { useCountryStore } from '@/stores/countryStore.ts'
import { oceaniaCountries } from '@/services/resources/country/constants.ts'
import { computed } from 'vue'
import type { Country } from '@/services/resources/country/types.ts'

type GuessedCountriesComputed = { guessed: Country[]; missing: Country[] }

const store = useCountryStore()

const showMissingCountries = ref(false)

const guessedCountries = computed<GuessedCountriesComputed>(() => {
  const map: GuessedCountriesComputed = { guessed: [], missing: [] }

  oceaniaCountries.forEach((country) => {
    if (store.guessedCountries[country.isoAlpha2Code]?.guessed) {
      map.guessed.push(country)
    } else {
      map.missing.push(country)
    }
  })

  return map
})

const missingCount = computed(() => oceaniaCountries.length - guessedCountries.value.guessed.length)
</script>

<template>
  <section>
    <h2 class="font-semibold text-xl">Oceania</h2>

    <a class="text-xs" href="#" @click.prevent="showMissingCountries = !showMissingCountries">
      {{ missingCount > 0 ? 'Show countries left' : 'Congratulations 🎉' }}
    </a>

    <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
      <li v-for="country in guessedCountries.guessed" :key="country.isoAlpha2Code">
        <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
          <img
            :src="`https://flagcdn.com/h20/${country.isoAlpha2Code.toLowerCase()}.png`"
            :srcset="`https://flagcdn.com/h40/${country.isoAlpha2Code.toLowerCase()}.png 2x, https://flagcdn.com/h60/${country.isoAlpha2Code.toLowerCase()}.png 3x`"
            :alt="`Flag ${country.name}`"
            width="16"
            height="12"
          />
          {{ country.name }}
        </Tag>
      </li>

      <li>
        <Tag
          as="button"
          severity="secondary"
          rounded
          class="!font-semibold !text-xs flex items-center"
        >
          {{ missingCount }}+ left
        </Tag>
      </li>
    </ul>

    <div v-show="showMissingCountries && missingCount > 0">
      <h3 class="font-semibold text-lg mt-4">Missing</h3>

      <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
        <li v-for="country in guessedCountries.missing" :key="country.isoAlpha2Code">
          <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
            <img
              class="h-[13px] w-[20px] object-cover overflow-hidden"
              :src="`https://flagcdn.com/h20/${country.isoAlpha2Code.toLowerCase()}.png`"
              :srcset="`https://flagcdn.com/h40/${country.isoAlpha2Code.toLowerCase()}.png 2x, https://flagcdn.com/h60/${country.isoAlpha2Code.toLowerCase()}.png 3x`"
              :alt="`Flag ${country.name}`"
              width="20"
              height="13"
              loading="lazy"
            />
            {{ country.name }}
          </Tag>
        </li>
      </ul>
    </div>
  </section>
</template>
