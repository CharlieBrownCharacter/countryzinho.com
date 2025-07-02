<script setup lang="ts">
import Drawer from 'primevue/drawer'
import { useCountryStore } from '@/stores/countryStore.ts'
import EuropeSection from '@/components/GuessedCountriesDrawer/EuropeSection.vue'
import SouthAmericaSection from '@/components/GuessedCountriesDrawer/SouthAmericaSection.vue'
import NorthAmericaSection from '@/components/GuessedCountriesDrawer/NorthAmericaSection.vue'
import AfricaSection from '@/components/GuessedCountriesDrawer/AfricaSection.vue'
import AntarcticaSection from '@/components/GuessedCountriesDrawer/AntarcticaSection.vue'
import AsiaSection from '@/components/GuessedCountriesDrawer/AsiaSection.vue'
import OceaniaSection from '@/components/GuessedCountriesDrawer/OceaniaSection.vue'

const store = useCountryStore()
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
      <AntarcticaSection />
      <AfricaSection />
      <AsiaSection />
      <EuropeSection />
      <SouthAmericaSection />
      <NorthAmericaSection />
      <OceaniaSection />
    </div>
  </Drawer>
</template>
