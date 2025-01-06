import type {
  createNewTaskServiceReturn,
  getAllTaskServiceReturn,
  ITasksData,
  ITasksForm,
  IUpdateTask,
} from '@/interfaces/interfaces.ts'
import instance from './index.ts'
import { AxiosError, isAxiosError } from 'axios'

const getAllTaskService = async (): Promise<getAllTaskServiceReturn> => {
  try {
    const allTasks = await instance.get('/task')
    return {
      success: true,
      data: allTasks.data,
    }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response)
        return {
          success: false,
          data: [],
        }
      return {
        success: false,
        data: [],
        statusCode: error.code,
      }
    }
    return {
      success: false,
      data: [],
    }
  }
}

const createNewTaskService = async (newTask: ITasksForm): Promise<createNewTaskServiceReturn> => {
  try {
    const addNewTask = await instance.post('/task', newTask)
    return {
      success: true,
      data: addNewTask.data,
    }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response)
        return {
          data: undefined,
          success: false,
          messageError: error.response.data,
        }
      return {
        data: undefined,
        success: false,
        messageError: error.cause,
        statusCode: error.code,
      }
    }
    return {
      success: false,
      data: undefined,
    }
  }
}

const deleteTaskService = async (id: number) => {
  try {
    const deleteTask = await instance.delete(`/task/${id}`)
    return {
      success: true,
      data: deleteTask,
    }
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response)
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

const updateTaskService = async (task: IUpdateTask) => {
  try {
    const updateTask = await instance.patch(`/task/${task.id}`, {
      icon: task.icon,
      title: task.title,
      status: task.status,
      description: task.description,
    })
    return {
      success: true,
      data: updateTask.data,
    }
  } catch (error) {
    console.log(task)
    if (isAxiosError(error)) {
      if (error.response)
        return {
          data: undefined,
          success: false,
          messageError: error.response.data,
        }
      return {
        data: undefined,
        success: false,
        messageError: error.cause,
        statusCode: error.code,
      }
    }
    return {
      success: false,
      data: undefined,
    }
  }
}

export default {
  updateTaskService,
  getAllTaskService,
  deleteTaskService,
  createNewTaskService,
}
