import posthog from 'posthog-js'

const noop = () => {}

const noopPosthog = {
  capture: noop,
  identify: noop,
  people: {
    set: noop,
  },
  reset: noop,
  init: noop,
}

export function usePostHog() {
  if (!import.meta.env.VITE_POSTHOG_ENABLED) return { posthog: noopPosthog }

  if (import.meta.env.VITE_POSTHOG_ENABLED === 'false') return { posthog: noopPosthog }

  if (!import.meta.env.VITE_POSTHOG_KEY) {
    throw new Error('VITE_POSTHOG_KEY must exist to use this composable')
  }

  if (!import.meta.env.VITE_POSTHOG_API) {
    throw new Error('VITE_POSTHOG_API must exist to use this composable')
  }

  posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_API,
    defaults: '2025-05-24',
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
  })

  return { posthog }
}
