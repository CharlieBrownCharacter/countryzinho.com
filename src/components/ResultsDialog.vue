<script setup lang="ts">
import Dialog from 'primevue/dialog'
import { useCountryStore } from '@/stores/countryStore.ts'
import { computed, ref } from 'vue'
import type { Continent, Country } from '@/services/resources/country/types.ts'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import {
  africaCountries,
  antarcticaCountries,
  asiaCountries,
  countries,
  europeanCountries,
  northAmericaCountries,
  oceaniaCountries,
  southAmericaCountries,
} from '@/services/resources/country/constants.ts'
import CountryFlag from '@/components/CountryFlag.vue'
import Tag from 'primevue/tag'

const store = useCountryStore()

const selectedTab = ref<Continent>('africa')

const countriesGuessed = computed(() => {
  let totalGuessed = 0

  const continents: Record<Continent, { missed: Country[]; guessed: Country[] }> = {
    africa: { missed: [], guessed: [] },
    antarctica: { missed: [], guessed: [] },
    asia: { missed: [], guessed: [] },
    europe: { missed: [], guessed: [] },
    northAmerica: { missed: [], guessed: [] },
    southAmerica: { missed: [], guessed: [] },
    oceania: { missed: [], guessed: [] },
  }

  for (const key in store.guessedCountries) {
    for (const continent of store.guessedCountries[key].country.continents) {
      if (store.guessedCountries[key].guessed) {
        totalGuessed += 1
        continents[continent].guessed.push(store.guessedCountries[key].country)
      } else {
        continents[continent].missed.push(store.guessedCountries[key].country)
      }
    }
  }

  return { ...continents, totalGuessed }
})
</script>

<template>
  <Dialog
    v-model:visible="store.isResultsDialogOpen"
    modal
    header="Time's Up"
    :draggable="false"
    :closable="false"
    :close-on-escape="false"
    :style="{ maxWidth: '80vw', width: '35rem', height: '80vh' }"
  >
    <section>
      <h2 class="sr-only">Score</h2>

      <p>
        You have guessed {{ countriesGuessed.totalGuessed }} countries out of
        {{ countries.length }} total ones
      </p>

      <Tabs v-model:value="selectedTab">
        <TabList class="overflow-x-auto no-scrollbar">
          <Tab value="africa">
            Africa ({{ countriesGuessed.africa.guessed.length }}/{{ africaCountries.length }})
          </Tab>
          <Tab value="antarctica">
            Antarctica ({{ countriesGuessed.antarctica.guessed.length }}/{{
              antarcticaCountries.length
            }})
          </Tab>
          <Tab value="asia">
            Asia ({{ countriesGuessed.asia.guessed.length }}/{{ asiaCountries.length }})
          </Tab>
          <Tab value="europe">
            Europe ({{ countriesGuessed.europe.guessed.length }}/{{ europeanCountries.length }})
          </Tab>
          <Tab value="northAmerica">
            North America ({{ countriesGuessed.northAmerica.guessed.length }}/{{
              northAmericaCountries.length
            }})
          </Tab>
          <Tab value="southAmerica">
            South America ({{ countriesGuessed.southAmerica.guessed.length }}/{{
              southAmericaCountries.length
            }})
          </Tab>
          <Tab value="oceania">
            Oceania ({{ countriesGuessed.oceania.guessed.length }}/{{ oceaniaCountries.length }})
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="africa">
            <section>
              <h3 class="font-semibold text-lg mt-4">Guessed countries</h3>

              <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                <li v-for="country in countriesGuessed.africa.guessed" :key="country.isoAlpha2Code">
                  <Tag
                    severity="secondary"
                    rounded
                    class="!font-semibold !text-xs flex items-center"
                  >
                    <CountryFlag
                      :country-code="country.isoAlpha2Code"
                      :country-name="country.name"
                    />

                    {{ country.name }}
                  </Tag>
                </li>
              </ul>

              <h3 class="font-semibold text-lg mt-4">Missing</h3>

              <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                <li v-for="country in countriesGuessed.africa.missed" :key="country.isoAlpha2Code">
                  <Tag
                    severity="secondary"
                    rounded
                    class="!font-semibold !text-xs flex items-center"
                  >
                    <CountryFlag
                      :country-code="country.isoAlpha2Code"
                      :country-name="country.name"
                    />

                    {{ country.name }}
                  </Tag>
                </li>
              </ul>
            </section>
          </TabPanel>
          <TabPanel value="antarctica">
            <section>
              <h3 class="font-semibold text-lg mt-4">Guessed countries</h3>

              <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                <li
                  v-for="country in countriesGuessed.antarctica.guessed"
                  :key="country.isoAlpha2Code"
                >
                  <Tag
                    severity="secondary"
                    rounded
                    class="!font-semibold !text-xs flex items-center"
                  >
                    <CountryFlag
                      :country-code="country.isoAlpha2Code"
                      :country-name="country.name"
                    />

                    {{ country.name }}
                  </Tag>
                </li>
              </ul>

              <h3 class="font-semibold text-lg mt-4">Missing</h3>

              <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                <li
                  v-for="country in countriesGuessed.antarctica.missed"
                  :key="country.isoAlpha2Code"
                >
                  <Tag
                    severity="secondary"
                    rounded
                    class="!font-semibold !text-xs flex items-center"
                  >
                    <CountryFlag
                      :country-code="country.isoAlpha2Code"
                      :country-name="country.name"
                    />

                    {{ country.name }}
                  </Tag>
                </li>
              </ul>
            </section>
          </TabPanel>
          <TabPanel value="asia">
            <section>
              <h3 class="font-semibold text-lg mt-4">Guessed countries</h3>

              <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                <li v-for="country in countriesGuessed.asia.guessed" :key="country.isoAlpha2Code">
                  <Tag
                    severity="secondary"
                    rounded
                    class="!font-semibold !text-xs flex items-center"
                  >
                    <CountryFlag
                      :country-code="country.isoAlpha2Code"
                      :country-name="country.name"
                    />

                    {{ country.name }}
                  </Tag>
                </li>
              </ul>

              <h3 class="font-semibold text-lg mt-4">Missing</h3>

              <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                <li v-for="country in countriesGuessed.asia.missed" :key="country.isoAlpha2Code">
                  <Tag
                    severity="secondary"
                    rounded
                    class="!font-semibold !text-xs flex items-center"
                  >
                    <CountryFlag
                      :country-code="country.isoAlpha2Code"
                      :country-name="country.name"
                    />

                    {{ country.name }}
                  </Tag>
                </li>
              </ul>
            </section>
          </TabPanel>
          <TabPanel value="europe">
            <section>
              <h3 class="font-semibold text-lg mt-4">Guessed countries</h3>

              <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                <li v-for="country in countriesGuessed.europe.guessed" :key="country.isoAlpha2Code">
                  <Tag
                    severity="secondary"
                    rounded
                    class="!font-semibold !text-xs flex items-center"
                  >
                    <CountryFlag
                      :country-code="country.isoAlpha2Code"
                      :country-name="country.name"
                    />

                    {{ country.name }}
                  </Tag>
                </li>
              </ul>

              <h3 class="font-semibold text-lg mt-4">Missing</h3>

              <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                <li v-for="country in countriesGuessed.europe.missed" :key="country.isoAlpha2Code">
                  <Tag
                    severity="secondary"
                    rounded
                    class="!font-semibold !text-xs flex items-center"
                  >
                    <CountryFlag
                      :country-code="country.isoAlpha2Code"
                      :country-name="country.name"
                    />

                    {{ country.name }}
                  </Tag>
                </li>
              </ul>
            </section>
          </TabPanel>
          <TabPanel value="northAmerica">
            <section>
              <h3 class="font-semibold text-lg mt-4">Guessed countries</h3>

              <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                <li
                  v-for="country in countriesGuessed.northAmerica.guessed"
                  :key="country.isoAlpha2Code"
                >
                  <Tag
                    severity="secondary"
                    rounded
                    class="!font-semibold !text-xs flex items-center"
                  >
                    <CountryFlag
                      :country-code="country.isoAlpha2Code"
                      :country-name="country.name"
                    />

                    {{ country.name }}
                  </Tag>
                </li>
              </ul>

              <h3 class="font-semibold text-lg mt-4">Missing</h3>

              <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                <li
                  v-for="country in countriesGuessed.northAmerica.missed"
                  :key="country.isoAlpha2Code"
                >
                  <Tag
                    severity="secondary"
                    rounded
                    class="!font-semibold !text-xs flex items-center"
                  >
                    <CountryFlag
                      :country-code="country.isoAlpha2Code"
                      :country-name="country.name"
                    />

                    {{ country.name }}
                  </Tag>
                </li>
              </ul>
            </section>
          </TabPanel>
          <TabPanel value="southAmerica">
            <section>
              <h3 class="font-semibold text-lg mt-4">Guessed countries</h3>

              <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                <li
                  v-for="country in countriesGuessed.southAmerica.guessed"
                  :key="country.isoAlpha2Code"
                >
                  <Tag
                    severity="secondary"
                    rounded
                    class="!font-semibold !text-xs flex items-center"
                  >
                    <CountryFlag
                      :country-code="country.isoAlpha2Code"
                      :country-name="country.name"
                    />

                    {{ country.name }}
                  </Tag>
                </li>
              </ul>

              <h3 class="font-semibold text-lg mt-4">Missing</h3>

              <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                <li
                  v-for="country in countriesGuessed.southAmerica.missed"
                  :key="country.isoAlpha2Code"
                >
                  <Tag
                    severity="secondary"
                    rounded
                    class="!font-semibold !text-xs flex items-center"
                  >
                    <CountryFlag
                      :country-code="country.isoAlpha2Code"
                      :country-name="country.name"
                    />

                    {{ country.name }}
                  </Tag>
                </li>
              </ul>
            </section>
          </TabPanel>
          <TabPanel value="oceania">
            <section>
              <h3 class="font-semibold text-lg mt-4">Guessed countries</h3>

              <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                <li
                  v-for="country in countriesGuessed.oceania.guessed"
                  :key="country.isoAlpha2Code"
                >
                  <Tag
                    severity="secondary"
                    rounded
                    class="!font-semibold !text-xs flex items-center"
                  >
                    <CountryFlag
                      :country-code="country.isoAlpha2Code"
                      :country-name="country.name"
                    />

                    {{ country.name }}
                  </Tag>
                </li>
              </ul>

              <h3 class="font-semibold text-lg mt-4">Missing</h3>

              <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                <li v-for="country in countriesGuessed.oceania.missed" :key="country.isoAlpha2Code">
                  <Tag
                    severity="secondary"
                    rounded
                    class="!font-semibold !text-xs flex items-center"
                  >
                    <CountryFlag
                      :country-code="country.isoAlpha2Code"
                      :country-name="country.name"
                    />

                    {{ country.name }}
                  </Tag>
                </li>
              </ul>
            </section>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  </Dialog>
</template>
