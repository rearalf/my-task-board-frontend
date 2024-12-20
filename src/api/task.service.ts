import type { ITasksDataService } from '@/interfaces/interfaces.ts'
import instance from './index.ts'

const getAllTaskService = async (): Promise<ITasksDataService[]> => {
  const allTasks = await instance.get('/task')
  return allTasks.data
}

export default {
  getAllTaskService,
}
