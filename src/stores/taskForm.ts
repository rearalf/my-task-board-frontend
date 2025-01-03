import { TaskStatus, type ITypeIcon } from '@/interfaces/interfaces'
import { NEWTASK } from '@/utils/constants'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useTaskForm = defineStore('Task', {
  state: () => ({
    newTaskTitle: ref<string>(NEWTASK.title),
    newTaskDescription: ref<string>(NEWTASK.description),
    newTaskIcon: ref<ITypeIcon>(NEWTASK.icon),
    newTaskStatus: ref<TaskStatus>(NEWTASK.status),
    openDrawer: ref<boolean>(false),
  }),
  actions: {
    handleDrawer() {
      this.openDrawer = !this.openDrawer
    },
    handleCleanNewTask() {
      this.newTaskTitle = NEWTASK.title
      this.newTaskDescription = NEWTASK.description
      this.newTaskIcon = NEWTASK.icon
      this.newTaskStatus = NEWTASK.status
      console.log(this.newTaskTitle)
    },
  },
})

export default useTaskForm
