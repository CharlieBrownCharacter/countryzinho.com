import posthog from 'posthog-js'

export function usePostHog() {
  posthog.init('phc_VAjXceOYvTLzRATFffgg1bd7pG7jOBUenHcoywB4y2I', {
    api_host: 'https://narniaph.bruno11-francisco.workers.dev',
    defaults: '2025-05-24',
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
  })

  return { posthog }
}
