<script setup lang="ts">
import EditDuotone from './components/icons/EditDuotone.vue'
import LogoSVG from './components/icons/LogoSVG.vue'
import TaskCard from './components/TaskCardk.vue'
</script>

<template>
  <v-container>
    <div class="d-flex ga-4 align-center mb-4">
      <LogoSVG />
      <div>
        <h1 className="font-weight-regular" style="font-size: 2.5rem">My Task Board</h1>
        <p class="font-weight-regular">Tasks to keep organised</p>
      </div>
      <v-btn variant="text" style="box-shadow: none; min-width: auto" class="pa-2 rounded-circle">
        <EditDuotone />
      </v-btn>
    </div>
    <main class="mt-8 d-flex flex-column ga-6">
      <TaskCard :icon="'gym'" :state="'in_progress'" />
      <TaskCard :icon="'gym'" :state="'completed'" />
      <TaskCard :icon="'gym'" :state="'wont_do'" />
      <TaskCard
        :icon="'gym'"
        :description="'Work on a Challenge on devChallenges.io, learn TypeScript.'"
        :state="'pending'"
      />
    </main>
  </v-container>
</template>

<style scoped></style>
