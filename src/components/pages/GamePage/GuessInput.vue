<script setup lang="ts">
import { ref, useTemplateRef, watch, type ComponentPublicInstance } from 'vue'
import { useCountryStore } from '@/stores/countryStore.ts'
import { findGuess } from '@/services/resources/country/helpers.ts'
import InputText from 'primevue/inputtext'
import { usePostHog } from '@/composables/usePostHog.ts'
import TimerSection from '@/components/pages/GamePage/TimerSection.vue'
import { useI18n } from 'vue-i18n'
import type { MessageSchema } from '@/services/i18n'
import Button from 'primevue/button'
import { Icon } from '@iconify/vue'
import type { Country } from '@/services/resources/country/types.ts'

const guess = ref('')

const duplicatedGuessedCountry = ref<Country | null>(null)

const { t } = useI18n<{ message: MessageSchema }>()

const countryStore = useCountryStore()

const { posthog } = usePostHog()

const inputRef = useTemplateRef<ComponentPublicInstance>('inputRef')

function onKeyUp() {
  const matchedCode = findGuess(countryStore.trieRoot, guess.value)

  if (!matchedCode) return

  if (!matchedCode.isoAlpha2Code) throw new Error('matchedCode should have country code')

  if (!(matchedCode.isoAlpha2Code in countryStore.guessedCountries))
    throw new Error(`${matchedCode.isoAlpha2Code} is not in countryStore.guessedCountries`)

  duplicatedGuessedCountry.value = null

  if (countryStore.guessedCountries[matchedCode.isoAlpha2Code].guessedAt) {
    duplicatedGuessedCountry.value =
      countryStore.guessedCountries[matchedCode.isoAlpha2Code].country

    setTimeout(() => (duplicatedGuessedCountry.value = null), 3000)

    return
  }

  posthog.capture('guessedCountry', {
    countryCode: matchedCode.isoAlpha2Code,
  })

  countryStore.onGuessCountry(matchedCode.isoAlpha2Code)
  guess.value = ''

  if (countryStore.hasGuessedCountries) {
    countryStore.onGameEnd()
  }
}

function onGameRestartClick() {
  posthog.capture('openedGameRestartDialog')
  countryStore.isGameRestartConfirmationOpen = true
  guess.value = ''
}

function onFinishGameClick() {
  posthog.capture('openedFinishGameDialog')
  countryStore.isFinishGameDialogOpen = true
  guess.value = ''
}

defineExpose({ inputRef })

watch(
  () => countryStore.isShowingControls,
  () => {
    // timeout needed because of transition
    setTimeout(() => {
      if (inputRef.value && inputRef.value.$el) {
        inputRef.value.$el.focus()
      }
    }, 100)
  },
)
</script>

<template>
  <transition
    enter-active-class="transition transform duration-500 ease-out"
    enter-from-class="-translate-y-10 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition transform duration-300 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="-translate-y-10 opacity-0"
  >
    <div
      v-if="countryStore.isShowingControls"
      class="p-4 rounded-lg bg-(--p-inputtext-background) absolute top-5 left-1/2 -translate-x-1/2 w-[90vw] sm:w-80 px-4 py-2 shadow border border-(--p-inputtext-border-color) has-[input:focus]:border-(--p-inputtext-focus-border-color) transition-all"
      :class="[duplicatedGuessedCountry ? '!border-red-500' : '']"
    >
      <div class="flex justify-between items-center w-full">
        <div class="grow">
          <label for="country-guess" class="sr-only">
            {{ t('components.guess-input.type-country-name') }}
          </label>
          <InputText
            id="country-guess"
            data-testid="countryInput"
            ref="inputRef"
            class="border-none px-0 w-full"
            v-model.trim="guess"
            :placeholder="t('components.guess-input.type-country-name')"
            autofocus
            autocomplete="off"
            data-op-ignore
            @keyup="onKeyUp"
          />
        </div>

        <div>
          <Button
            :title="t('components.timer-section.finish-game')"
            severity="secondary"
            variant="text"
            size="small"
            @click="onFinishGameClick"
          >
            <Icon icon="gis:flag-finish-b-o" />
          </Button>

          <Button
            :title="t('components.timer-section.restart-game')"
            severity="secondary"
            variant="text"
            size="small"
            @click="onGameRestartClick"
          >
            <Icon icon="pixel:refresh" />
          </Button>
        </div>
      </div>

      <div
        class="text-xs text-red-500"
        :class="[duplicatedGuessedCountry ? 'visible' : 'invisible']"
      >
        {{
          duplicatedGuessedCountry
            ? t('components.guess-input.country-duplicated', {
                country: t(`common.countries.${duplicatedGuessedCountry.slug}`),
              })
            : '&nbsp;'
        }}
      </div>

      <TimerSection />
    </div>
  </transition>
</template>
