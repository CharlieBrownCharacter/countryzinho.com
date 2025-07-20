<script setup lang="ts">
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n'
import { getFlagEmoji, type SUPPORTED_LANGUAGES, SupportedLanguages } from '@/services/i18n'
import { useRouter } from 'vue-router'
import StartGameModal from '@/components/StartGameModal.vue'
import { useCountryStore } from '@/stores/countryStore.ts'

const countryStore = useCountryStore()

const { t, locale } = useI18n()

const router = useRouter()

function onLanguageChange(language: SUPPORTED_LANGUAGES) {
  locale.value = language
  router.push({ name: 'welcome', params: { language } })
}

function onStartGameClick() {
  countryStore.isStartGameModalOpen = true
}
</script>

<template>
  <StartGameModal />

  <main class="mb-4 px-4 mx-auto max-w-3xl">
    <section class="my-60 md:my-15 text-center">
      <h1 class="text-center text-4xl sm:text-6xl">
        {{ t('pages.welcome.title') }}
      </h1>
      <p class="mt-2 text-gray-400">
        {{ t('pages.welcome.subtitle') }}
      </p>

      <div class="my-4">
        <h2 class="text-sm text-gray-400">
          {{ t('pages.welcome.choose-language') }}
        </h2>

        <div class="flex justify-center mt-2 gap-2">
          <Button asChild link v-slot="slotProps">
            <RouterLink
              :to="{ name: 'welcome', params: { language: SupportedLanguages.pt } }"
              :class="slotProps.class"
              @click.prevent="() => onLanguageChange(SupportedLanguages.pt)"
            >
              {{ getFlagEmoji(SupportedLanguages.pt) }}
            </RouterLink>
          </Button>
          <Button asChild link v-slot="slotProps">
            <RouterLink
              :to="{ name: 'welcome', params: { language: SupportedLanguages.en } }"
              :class="slotProps.class"
              @click.prevent="() => onLanguageChange(SupportedLanguages.en)"
            >
              {{ getFlagEmoji(SupportedLanguages.en) }}
            </RouterLink>
          </Button>
          <Button asChild link v-slot="slotProps">
            <RouterLink
              :to="{ name: 'welcome', params: { language: SupportedLanguages.es } }"
              :class="slotProps.class"
              @click.prevent="() => onLanguageChange(SupportedLanguages.es)"
            >
              {{ getFlagEmoji(SupportedLanguages.es) }}
            </RouterLink>
          </Button>
        </div>
      </div>

      <div class="my-4 aspect-video w-full rounded bg-gray-400" />

      <div class="flex justify-center">
        <Button :label="t('common.new-game')" @click="onStartGameClick" />
      </div>
    </section>

    <section class="mx-auto max-w-md my-10">
      <h2 class="text-center text-2xl">{{ t('pages.welcome.how-to-play.title') }}</h2>

      <div class="mt-2 rounded bg-zinc-800 p-4">
        <ol class="list-disc space-y-2 pl-4">
          <li>{{ t('pages.welcome.how-to-play.list.1') }}</li>
          <li>{{ t('pages.welcome.how-to-play.list.2') }}</li>
          <li>{{ t('pages.welcome.how-to-play.list.3') }}</li>
          <li>{{ t('pages.welcome.how-to-play.list.4') }}</li>
        </ol>
      </div>
    </section>

    <nav class="flex justify-center">
      <ul class="flex divide-x divide-gray-400 *:px-2 text-xs text-gray-400">
        <li>
          <RouterLink :to="{ name: 'contact' }" target="_blank">
            {{ t('pages.welcome.contact') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'terms-of-usage' }" target="_blank">
            {{ t('pages.welcome.terms') }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </main>
</template>
