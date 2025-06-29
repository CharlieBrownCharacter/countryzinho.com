<script setup lang="ts">
import { useCountryGuessed } from '@/composables/useCountryGuessed.ts'
import { computed } from 'vue'

const props = defineProps<{
  d: string
  iso: string
}>()

const { guessed } = useCountryGuessed(props.iso)

const classes = computed(() => ({ 'fill-gray-200 stroke-black': guessed.value }))
</script>

<template>
  <path :class="classes" :d="d" :data-iso="iso" />
</template>
