import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isContactDialogOpen = ref(false)

  return { isContactDialogOpen }
})
