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

export type ITasksForm = {
  title: string
  description: string
  status: TaskStatus
  icon: ITypeIcon
}

export type IAlertType = 'error' | 'success' | 'warning' | 'info' | undefined

export enum AlertType {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
}

export type IAlertStoneStates = {
  isVisible: boolean
  progress: number
  message: string
  type: IAlertType
  duration: number
}
