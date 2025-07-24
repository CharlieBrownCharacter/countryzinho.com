<script setup lang="ts">
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n'
import { getFlagEmoji, type SUPPORTED_LANGUAGES, SupportedLanguages } from '@/services/i18n'
import { useRouter } from 'vue-router'

const { t, locale } = useI18n()

const router = useRouter()

function onLanguageChange(language: SUPPORTED_LANGUAGES) {
  locale.value = language
  router.push({ name: 'welcome', params: { language } })
}
</script>

<template>
  <main class="mb-4 px-4 mx-auto max-w-3xl">
    <section class="my-40 md:my-15 text-center">
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

      <div
        class="aspect-video border border-gray-200 grid place-items-center mb-8 mt-4 rounded-xl text-xl w-full p-8"
      >
        <i18n-t class="text-center" keypath="pages.welcome.main-image" tag="p">
          <template v-slot:link>
            <a
              href="https://github.com/CharlieBrownCharacter/countryzinho.com/issues"
              target="_blank"
              class="underline"
            >
              {{ t('pages.welcome.create-issue') }}
            </a>
          </template>
        </i18n-t>
      </div>

      <div class="flex justify-center">
        <Button asChild v-slot="slotProps">
          <RouterLink :to="{ name: 'game' }" :class="slotProps.class">
            {{ t('common.new-game') }}
          </RouterLink>
        </Button>
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
        <li>
          <a href="https://github.com/CharlieBrownCharacter/countryzinho.com/" target="_blank">
            Github
          </a>
        </li>
      </ul>
    </nav>
  </main>
</template>
