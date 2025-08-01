<script setup lang="ts">
import Dialog from 'primevue/dialog'
import { useCountryStore } from '@/stores/countryStore.ts'
import { computed, ref } from 'vue'
import type { Continent, Country } from '@/services/resources/country/types.ts'
import Button from 'primevue/button'
import {
  africaCountries,
  antarcticaCountries,
  asiaCountries,
  europeanCountries,
  northAmericaCountries,
  oceaniaCountries,
  southAmericaCountries,
} from '@/services/resources/country/constants.ts'
import CountryFlag from '@/components/CountryFlag.vue'
import Tag from 'primevue/tag'
import { useI18n } from 'vue-i18n'
import type { MessageSchema } from '@/services/i18n'
import { usePostHog } from '@/composables/usePostHog.ts'
import { usePointsStore } from '@/stores/pointsStore.ts'

const countryStore = useCountryStore()

const pointsStore = usePointsStore()

const { t } = useI18n<{ message: MessageSchema }>()

const { posthog } = usePostHog()

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

  for (const key in countryStore.guessedCountries) {
    const isoCode = key as Country['isoAlpha2Code']
    const guessed = countryStore.guessedCountries[isoCode]

    totalGuessed += 1

    for (const continent of guessed.country.continents) {
      if (guessed.guessedAt) {
        continents[continent].guessed.push(guessed.country)
      } else {
        continents[continent].missed.push(guessed.country)
      }
    }
  }

  return { ...continents, totalGuessed }
})

const titleModal = computed(() =>
  countryStore.hasGuessedCountries
    ? t('components.results-dialog.congratulations')
    : t('components.results-dialog.time-is-up'),
)

function onClickSeeMap() {
  posthog.capture('seeMapClick')
  countryStore.isResultsDialogOpen = false
  countryStore.isShowingShowResultsModalButton = true
}

countryStore.$subscribe((mutation, state) => {
  if (mutation.type !== 'direct') return

  if (state.isResultsDialogOpen && state.selectedContinent) {
    selectedTab.value = state.selectedContinent
  }
})
</script>

<template>
  <Dialog
    v-model:visible="countryStore.isResultsDialogOpen"
    modal
    :header="titleModal"
    :draggable="false"
    :closable="false"
    :close-on-escape="false"
    :style="{ maxWidth: '80vw', width: '35rem', height: '80vh' }"
    pt:footer:class="mt-auto pt-2"
  >
    <section>
      <h2 class="sr-only">
        {{ t('components.results-dialog.score') }}
      </h2>

      <p>
        {{
          t('components.results-dialog.results-text', {
            totalGuess: countriesGuessed.totalGuessed,
            totalCountries: countryStore.selectedCountries.length,
            points: pointsStore.points,
          })
        }}
      </p>

      <div v-if="countryStore.selectedContinent === null" class="flex flex-wrap gap-1 mt-4">
        <Button
          size="small"
          rounded
          :severity="selectedTab === 'africa' ? 'primary' : 'secondary'"
          @click="selectedTab = 'africa'"
        >
          {{ t('common.continents.africa') }} ({{ countriesGuessed.africa.guessed.length }}/{{
            africaCountries.length
          }})
        </Button>

        <Button
          size="small"
          rounded
          :severity="selectedTab === 'antarctica' ? 'primary' : 'secondary'"
          @click="selectedTab = 'antarctica'"
        >
          {{ t('common.continents.antarctic') }} ({{
            countriesGuessed.antarctica.guessed.length
          }}/{{ antarcticaCountries.length }})
        </Button>

        <Button
          size="small"
          rounded
          :severity="selectedTab === 'asia' ? 'primary' : 'secondary'"
          @click="selectedTab = 'asia'"
        >
          {{ t('common.continents.asia') }} ({{ countriesGuessed.asia.guessed.length }}/{{
            asiaCountries.length
          }})
        </Button>

        <Button
          size="small"
          rounded
          :severity="selectedTab === 'europe' ? 'primary' : 'secondary'"
          @click="selectedTab = 'europe'"
        >
          {{ t('common.continents.europe') }} ({{ countriesGuessed.europe.guessed.length }}/{{
            europeanCountries.length
          }})
        </Button>

        <Button
          size="small"
          rounded
          :severity="selectedTab === 'northAmerica' ? 'primary' : 'secondary'"
          @click="selectedTab = 'northAmerica'"
        >
          {{ t('common.continents.northAmerica') }} ({{
            countriesGuessed.northAmerica.guessed.length
          }}/{{ northAmericaCountries.length }})
        </Button>

        <Button
          size="small"
          rounded
          :severity="selectedTab === 'southAmerica' ? 'primary' : 'secondary'"
          @click="selectedTab = 'southAmerica'"
        >
          {{ t('common.continents.southAmerica') }} ({{
            countriesGuessed.southAmerica.guessed.length
          }}/{{ southAmericaCountries.length }})
        </Button>

        <Button
          size="small"
          rounded
          :severity="selectedTab === 'oceania' ? 'primary' : 'secondary'"
          @click="selectedTab = 'oceania'"
        >
          {{ t('common.continents.oceania') }} ({{ countriesGuessed.oceania.guessed.length }}/{{
            oceaniaCountries.length
          }})
        </Button>
      </div>

      <section v-if="selectedTab === 'africa'">
        <h3 class="font-semibold text-lg mt-4">
          {{ t('components.results-dialog.named-countries') }}
        </h3>

        <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countriesGuessed.africa.guessed" :key="country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <CountryFlag :country-code="country.isoAlpha2Code" :country-name="country.name" />

              {{ t(`common.countries.${country.slug}`) }}
            </Tag>
          </li>
        </ul>

        <h3 class="font-semibold text-lg mt-4">
          {{ t('components.results-dialog.missing') }}
        </h3>

        <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countriesGuessed.africa.missed" :key="country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <CountryFlag :country-code="country.isoAlpha2Code" :country-name="country.name" />

              {{ t(`common.countries.${country.slug}`) }}
            </Tag>
          </li>
        </ul>
      </section>

      <section v-if="selectedTab === 'antarctica'">
        <h3 class="font-semibold text-lg mt-4">
          {{ t('components.results-dialog.named-countries') }}
        </h3>

        <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countriesGuessed.antarctica.guessed" :key="country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <CountryFlag :country-code="country.isoAlpha2Code" :country-name="country.name" />

              {{ t(`common.countries.${country.slug}`) }}
            </Tag>
          </li>
        </ul>

        <h3 class="font-semibold text-lg mt-4">
          {{ t('components.results-dialog.missing') }}
        </h3>

        <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countriesGuessed.antarctica.missed" :key="country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <CountryFlag :country-code="country.isoAlpha2Code" :country-name="country.name" />

              {{ t(`common.countries.${country.slug}`) }}
            </Tag>
          </li>
        </ul>
      </section>

      <section v-if="selectedTab === 'asia'">
        <h3 class="font-semibold text-lg mt-4">
          {{ t('components.results-dialog.named-countries') }}
        </h3>

        <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countriesGuessed.asia.guessed" :key="country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <CountryFlag :country-code="country.isoAlpha2Code" :country-name="country.name" />

              {{ t(`common.countries.${country.slug}`) }}
            </Tag>
          </li>
        </ul>

        <h3 class="font-semibold text-lg mt-4">
          {{ t('components.results-dialog.missing') }}
        </h3>

        <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countriesGuessed.asia.missed" :key="country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <CountryFlag :country-code="country.isoAlpha2Code" :country-name="country.name" />

              {{ t(`common.countries.${country.slug}`) }}
            </Tag>
          </li>
        </ul>
      </section>

      <section v-if="selectedTab === 'europe'">
        <h3 class="font-semibold text-lg mt-4">
          {{ t('components.results-dialog.named-countries') }}
        </h3>

        <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countriesGuessed.europe.guessed" :key="country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <CountryFlag :country-code="country.isoAlpha2Code" :country-name="country.name" />

              {{ t(`common.countries.${country.slug}`) }}
            </Tag>
          </li>
        </ul>

        <h3 class="font-semibold text-lg mt-4">
          {{ t('components.results-dialog.missing') }}
        </h3>

        <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countriesGuessed.europe.missed" :key="country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <CountryFlag :country-code="country.isoAlpha2Code" :country-name="country.name" />

              {{ t(`common.countries.${country.slug}`) }}
            </Tag>
          </li>
        </ul>
      </section>

      <section v-if="selectedTab === 'northAmerica'">
        <h3 class="font-semibold text-lg mt-4">
          {{ t('components.results-dialog.named-countries') }}
        </h3>

        <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countriesGuessed.northAmerica.guessed" :key="country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <CountryFlag :country-code="country.isoAlpha2Code" :country-name="country.name" />

              {{ t(`common.countries.${country.slug}`) }}
            </Tag>
          </li>
        </ul>

        <h3 class="font-semibold text-lg mt-4">
          {{ t('components.results-dialog.missing') }}
        </h3>

        <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countriesGuessed.northAmerica.missed" :key="country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <CountryFlag :country-code="country.isoAlpha2Code" :country-name="country.name" />

              {{ t(`common.countries.${country.slug}`) }}
            </Tag>
          </li>
        </ul>
      </section>

      <section v-if="selectedTab === 'southAmerica'">
        <h3 class="font-semibold text-lg mt-4">
          {{ t('components.results-dialog.named-countries') }}
        </h3>

        <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countriesGuessed.southAmerica.guessed" :key="country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <CountryFlag :country-code="country.isoAlpha2Code" :country-name="country.name" />

              {{ t(`common.countries.${country.slug}`) }}
            </Tag>
          </li>
        </ul>

        <h3 class="font-semibold text-lg mt-4">
          {{ t('components.results-dialog.missing') }}
        </h3>

        <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countriesGuessed.southAmerica.missed" :key="country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <CountryFlag :country-code="country.isoAlpha2Code" :country-name="country.name" />

              {{ t(`common.countries.${country.slug}`) }}
            </Tag>
          </li>
        </ul>
      </section>

      <section v-if="selectedTab === 'oceania'">
        <h3 class="font-semibold text-lg mt-4">
          {{ t('components.results-dialog.named-countries') }}
        </h3>

        <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countriesGuessed.oceania.guessed" :key="country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <CountryFlag :country-code="country.isoAlpha2Code" :country-name="country.name" />

              {{ t(`common.countries.${country.slug}`) }}
            </Tag>
          </li>
        </ul>

        <h3 class="font-semibold text-lg mt-4">
          {{ t('components.results-dialog.missing') }}
        </h3>

        <ul class="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          <li v-for="country in countriesGuessed.oceania.missed" :key="country.isoAlpha2Code">
            <Tag severity="secondary" rounded class="!font-semibold !text-xs flex items-center">
              <CountryFlag :country-code="country.isoAlpha2Code" :country-name="country.name" />

              {{ t(`common.countries.${country.slug}`) }}
            </Tag>
          </li>
        </ul>
      </section>
    </section>

    <template #footer>
      <Button
        :label="t('components.results-dialog.see-map')"
        class="w-full"
        severity="secondary"
        @click="onClickSeeMap"
      />
      <Button
        :label="t('components.results-dialog.go-again')"
        class="w-full"
        severity="secondary"
        @click="countryStore.onRestartGame"
      />
    </template>
  </Dialog>
</template>
