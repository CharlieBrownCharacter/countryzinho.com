<script setup lang="ts">
import Dialog from 'primevue/dialog'
import { useAppStore } from '@/stores/appStore.ts'

const store = useAppStore()
</script>

<template>
  <Dialog
    v-model:visible="store.isContactDialogOpen"
    modal
    header="Contact me"
    :draggable="false"
    :close-on-escape="false"
    :style="{ maxWidth: '80vw', width: '35rem' }"
    pt:footer:class="mt-auto pt-2"
  >
    <section class="flex flex-col gap-4">
      <h2 class="sr-only">Contact page</h2>

      <p>👋 Hi, I'm Bruno - the solo developer behind Countryzinho.</p>

      <p>
        I built this game as a fun side project because I'm learning the countries of the world and
        love challenges. The idea is simple: input as many countries as you can before time runs
        out.
      </p>

      <p>
        Countryzinho is still a work in progress, and I'm planning to add multiplayer soon. If you
        like playing it and would be interested in a multiplayer version, please reach out to me
        directly at
        <a href="mailto:bruno11.francisco@gmail.com" class="underline">my email</a> or
        <a href="https://www.linkedin.com/in/bfrancisco11/" target="_blank" class="underline">
          linkedin
        </a>
      </p>

      <p>Thanks so much for taking the time to play Countryzinho - really means a lot.</p>
    </section>
  </Dialog>
</template>
