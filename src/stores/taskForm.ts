import { TaskStatus, type ITasksForm } from '@/interfaces/interfaces'
import { NEWTASK } from '@/utils/constants'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useTaskForm = defineStore('Task', {
  state: () => ({
    newTask: ref<ITasksForm>(NEWTASK),
    openDrawer: ref<boolean>(false),
  }),
  actions: {
    handleDrawer() {
      this.openDrawer = !this.openDrawer
    },
    handleCleanNewTask() {
      this.newTask = NEWTASK
    },
  },
})

export default useTaskForm
