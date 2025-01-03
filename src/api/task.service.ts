import type { ITasksDataService, ITasksForm } from '@/interfaces/interfaces.ts'
import instance from './index.ts'
import { AxiosError, isAxiosError } from 'axios'

const getAllTaskService = async (): Promise<ITasksDataService[]> => {
  const allTasks = await instance.get('/task')
  return allTasks.data
}

const getNewTaskService = async (newTask: ITasksForm) => {
  try {
    const addNewTask = await instance.post('/task', newTask)
    return {
      success: true,
      data: addNewTask,
    }
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data)
      if (error.response)
        return {
          success: false,
          data: error.response.data,
        }
      return {
        success: false,
        data: error.cause,
        statusCode: error.code,
      }
    }
    return {
      success: false,
    }
  }
}

export default {
  getNewTaskService,
  getAllTaskService,
}
