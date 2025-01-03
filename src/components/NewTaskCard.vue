<template>
  <button
    class="d-flex align-center ga-4 pa-5 rounded-lg custom-btn"
    style="background-color: #f5e8d5"
    @click="toggleDrawer"
  >
    <i class="d-flex justify-center align-center pa-3 rounded-lg" style="background-color: #e9a23b">
      <AddRoundDuotone />
    </i>
    <h2 style="font-size: 1.3rem" class="font-weight-bold">Add new task</h2>
  </button>
</template>

<script lang="ts">
export default {
  name: 'NewTaskCard',
}
</script>

<script setup lang="ts">
import useTaskForm from '../stores/taskForm'
import AddRoundDuotone from './icons/AddRoundDuotone.vue'

const taskForm = useTaskForm()

const toggleDrawer = () => {
  taskForm.handleDrawer()
  taskForm.handleCleanNewTask()
}
</script>

<style scoped>
.custom-btn {
  transition: box-shadow 0.3s ease-in-out;
}

.custom-btn:hover {
  -webkit-box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.27);
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.27);
}

.custom-btn:active {
  background-color: #f5d565 !important;
}
</style>
