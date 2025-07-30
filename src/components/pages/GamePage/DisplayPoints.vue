<script setup lang="ts">
import { usePointsStore } from '@/stores/pointsStore.ts'
import { computed, ref } from 'vue'
import type { Continent } from '@/services/resources/country/types.ts'
import { useI18n } from 'vue-i18n'
import type { MessageSchema } from '@/services/i18n'

const pointsStore = usePointsStore()

const { t } = useI18n<{ message: MessageSchema }>()

const latestContinentsGuessed = ref<{ points: number; continent: Continent }[]>([])

const isShowing = ref(false)

const displayedContinents = new Map<Continent, number>()

const totalPointsEarned = computed<number>(() =>
  latestContinentsGuessed.value.reduce((total, current) => total + current.points, 0),
)

pointsStore.$subscribe((mutation, state) => {
  if (mutation.type !== 'direct') return

  // We fetch the latest x points to consider countries which are transcontinental
  // E.g. we guess all the countries from Europe and Asia, besides Turkey.
  // When we input Turkey, we will have two `guessedWholeContinent` point types:
  // one for guessing Asia and the other for Europe.
  const latestPoints = state.pointsHistory
    .filter((p) => p.type === 'guessedWholeContinent')
    .slice(-4)

  const newPoints = latestPoints.filter((p) => !displayedContinents.has(p.continent))

  if (newPoints.length === 0) return

  for (const point of newPoints) {
    displayedContinents.set(point.continent, point.points)
  }

  latestContinentsGuessed.value = newPoints.map((p) => ({
    continent: p.continent,
    points: p.points,
  }))

  isShowing.value = true

  setTimeout(() => {
    isShowing.value = false
    latestContinentsGuessed.value = []
  }, 5000)
})
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
      v-if="isShowing"
      class="p-4 rounded-lg bg-(--p-inputtext-background) absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 shadow border border-(--p-inputtext-border-color) has-[input:focus]:border-(--p-inputtext-focus-border-color) transition-all text-center"
    >
      <template v-if="latestContinentsGuessed.length === 1">
        +{{
          t(
            'common.points',
            { count: latestContinentsGuessed[0].points },
            latestContinentsGuessed[0].points,
          )
        }}

        <div class="text-xs text-gray-400">
          {{
            t('components.display-points.continent-guessed', {
              continent: t(`common.continents.${latestContinentsGuessed[0].continent}`),
            })
          }}
        </div>
      </template>
      <template v-else>
        +{{ t('common.points', { count: totalPointsEarned }, totalPointsEarned) }}

        <div class="text-xs text-gray-400">
          {{
            t('components.display-points.continent-guessed', {
              continent: latestContinentsGuessed.map((c) => t(`common.continents.${c}`)).join(', '),
            })
          }}
        </div>
      </template>
    </div>
  </transition>
</template>
