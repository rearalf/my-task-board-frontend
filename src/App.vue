<script setup lang="ts">
import NavigationDrawer from './components/NavigationDrawer.vue'
import EditDuotone from './components/icons/EditDuotone.vue'
import NewTaskCard from './components/NewTaskCard.vue'
import LogoSVG from './components/icons/LogoSVG.vue'
import TaskCard from './components/TaskCardk.vue'
import { onMounted, ref } from 'vue'
import type { ITasksDataService } from './interfaces/interfaces'

import taskService from './api/task.service'

const tasks = ref<ITasksDataService[]>([])

onMounted(async () => {
  const allTask = await taskService.getAllTaskService()
  tasks.value = allTask
})
</script>

<template>
  <v-app>
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
          v-for="task of tasks"
          :key="task.id"
          :icon="task.icon"
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
