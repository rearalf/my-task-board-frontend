export type ITypeIcon = 'work' | 'chat' | 'coffee' | 'gym' | 'book' | 'alarm' | ''

export enum TaskStatus {
  WONT_DO = 'wont_do',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  PENDING = 'pending',
}

export type ITasksDataService = {
  id: number
  title: string
  description: string
  status: TaskStatus
  icon: ITypeIcon
  create_at: Date
  update_at: Date
  deleted_at: null
}
