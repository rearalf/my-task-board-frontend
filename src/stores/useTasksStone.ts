import type { ITasksStoneState } from '@/interfaces/interfaces'
import taskService from '@/api/task.service'
import { defineStore } from 'pinia'
import useAlertStone from './useAlertStone'

const useTasksStone = defineStore('tasksStone', {
  state: (): ITasksStoneState => ({
    tasks: [],
  }),
  actions: {
    async getAllTasks() {
      const alertStone = useAlertStone()
      const allTask = await taskService.getAllTaskService()
      if (allTask.success) {
        this.tasks = allTask.data
      } else {
        alertStone.showAlert('Error en las tareas', 'error')
      }
    },
  },
})

export default useTasksStone
