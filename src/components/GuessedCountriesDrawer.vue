<script setup lang="ts">
import Drawer from 'primevue/drawer'
import { type GuessedCountry, useCountryStore } from '@/stores/countryStore.ts'
import { computed } from 'vue'
import Tag from 'primevue/tag'

const store = useCountryStore()

const groupedByContinent = computed(() => {
  const map: Record<string, GuessedCountry[]> = {
    africa: [],
    antarctica: [],
    asia: [],
    europe: [],
    northAmerica: [],
    southAmerica: [],
    oceania: [],
  }

  Object.keys(store.guessedCountries).forEach((key) => {
    store.guessedCountries[key].country.continents.forEach((continent) => {
      if (store.guessedCountries[key].guessed) {
        map[continent].push(store.guessedCountries[key])
      }
    })
  })

  return map
})
</script>

<template>
  <Drawer
    v-model:visible="store.isGuessCountriesModalOpen"
    :modal="false"
    :dismissable="false"
    header="Guessed countries"
    position="right"
    :draggable="false"
    :style="{ width: '25rem' }"
  >
    <div class="overflow-y-auto space-y-4">
      <section v-for="(countries, continent) in groupedByContinent" :key="continent">
        <h2 class="font-semibold text-xl capitalize">{{ continent }}</h2>

        <ol class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countries" :key="country.country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <img
                :src="`https://flagcdn.com/${country.country.isoAlpha2Code.toLowerCase()}.svg`"
                :alt="`Flag ${country.country.name}`"
                width="20"
                height="13.33"
              />
              {{ country.country.name }}
            </Tag>
          </li>
        </ol>
      </section>
    </div>
  </Drawer>
</template>
