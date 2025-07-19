import { createI18n } from 'vue-i18n'
import en from './lang/en.json'

export const SupportedLanguages = {
  en: 'en',
  pt: 'pt',
  es: 'es',
} as const

export type SUPPORTED_LANGUAGES = (typeof SupportedLanguages)[keyof typeof SupportedLanguages]

function getUserLocales() {
  return navigator.languages?.length
    ? navigator.languages
    : [navigator.language ?? SupportedLanguages.en]
}

export function getUserLanguage(): SUPPORTED_LANGUAGES {
  const pathLocale = window.location.pathname.split('/')[1]?.toLowerCase()

  if (Object.values(SupportedLanguages).includes(pathLocale as SUPPORTED_LANGUAGES)) {
    return pathLocale as SUPPORTED_LANGUAGES
  }

  const userLangs = getUserLocales().map((l) =>
    l.slice(0, 2).toLowerCase(),
  ) as SUPPORTED_LANGUAGES[]

  return userLangs.find((l) => Object.values(SupportedLanguages).includes(l)) || 'en'
}

export function getFlagEmoji(language: SUPPORTED_LANGUAGES): string {
  switch (language) {
    case 'pt':
      return getPortugueseEmoji()
    case 'en':
      return getEnglishEmoji()
    case 'es':
      return '🇪🇸'
  }
}

function getPortugueseEmoji(): string {
  const locales = getUserLocales()

  if (locales.includes('pt-BR')) {
    return '🇧🇷'
  }

  return '🇵🇹'
}

function getEnglishEmoji(): string {
  const locales = getUserLocales()

  if (locales.includes('en-US')) {
    return '🇺🇸'
  }

  return '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
}

export const i18n = createI18n({
  locale: getUserLanguage(),
  fallbackLocale: 'en' satisfies SUPPORTED_LANGUAGES,
  messages: { en },
})
