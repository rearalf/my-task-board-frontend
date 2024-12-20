<script setup lang="ts">
import NavigationDrawer from './components/NavigationDrawer.vue'
import EditDuotone from './components/icons/EditDuotone.vue'
import NewTaskCard from './components/NewTaskCard.vue'
import LogoSVG from './components/icons/LogoSVG.vue'
import TaskCard from './components/TaskCardk.vue'
import { ref, watch } from 'vue'
import type { ITypeIcon } from './interfaces/interfaces'
import { TaskStatus } from './interfaces/interfaces'

const handleDrawer = ref<boolean>(true)
const taskIcon = ref<ITypeIcon>('')
const taskState = ref<TaskStatus>(TaskStatus.PENDING)

const toggleDrawer = (value: boolean) => (handleDrawer.value = value)
const handleChangeState = (state: TaskStatus) => (taskState.value = state)
</script>

<template>
  <v-app>
    <NavigationDrawer
      :task-icon="taskIcon"
      :drawer="handleDrawer"
      :task-state="taskState"
      @update:handleDrawer="toggleDrawer"
      @change:handle-state="handleChangeState"
    />
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
        <NewTaskCard @update:handleDrawer="toggleDrawer" />
        <!-- <TaskCard :icon="'alarm'" :state="'in_progress'" />
        <TaskCard :icon="'gym'" :state="'completed'" />
        <TaskCard :icon="'coffee'" :state="'wont_do'" />
        <TaskCard
          :icon="'book'"
          :description="'Work on a Challenge on devChallenges.io, learn TypeScript.'"
          :state="'pending'"
        /> -->
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
