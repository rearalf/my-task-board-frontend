<script setup lang="ts">
import EditDuotone from './components/icons/EditDuotone.vue'
import LogoSVG from './components/icons/LogoSVG.vue'

import NavigationDrawer from './components/NavigationDrawer.vue'
import NewTaskCard from './components/NewTaskCard.vue'
import TaskCard from './components/TaskCardk.vue'
import AlertComponent from './components/AlertComponent.vue'

import { onMounted } from 'vue'

import useTasksStone from './stores/useTasksStone'

const tasksStone = useTasksStone()

onMounted(async () => {
  tasksStone.getAllTasks()
})
</script>

<template>
  <v-app>
    <AlertComponent />
    <NavigationDrawer />
    <v-container>
      <div class="d-flex ga-4 align-center mb-4">
        <LogoSVG />
        <div>
          <h1 className="font-weight-regular" style="font-size: 2.5rem">My Task Board</h1>
          <p class="font-weight-regular">Tasks to keep organised</p>
        </div>
        <i class="pa-2 rounded-circle d-flex align-center">
          <EditDuotone />
        </i>
      </div>

      <main class="mt-8 d-flex flex-column ga-6">
        <NewTaskCard />
        <TaskCard
          v-for="task of tasksStone.tasks"
          :id="task.id"
          :key="task.id"
          :icon="task.icon"
          :title="task.title"
          :state="task.status"
          :description="task.description"
        />
      </main>
    </v-container>
  </v-app>
</template>

<style scoped>
@media screen and (min-width: 640px) {
  .v-container {
    max-width: 600px;
  }
}
</style>
