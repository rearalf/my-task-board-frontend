export type ITypeIcon = 'work' | 'chat' | 'coffee' | 'gym' | 'book' | 'alarm' | ''

export enum TaskStatus {
  WONT_DO = 'wont_do',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  PENDING = 'pending',
}

export type ITasksData = {
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

export type ITasksStoneState = {
  tasks: ITasksData[]
}

export type getAllTaskServiceReturn = {
  success: boolean
  data: ITasksData[]
  statusCode?: string
}

export type createNewTaskServiceReturn = {
  success: boolean
  data: ITasksData | undefined
  messageError?:
    | {
        error: string
        message: string[]
        statusCode: number
      }
    | Error
  statusCode?: string
}

export type IUpdateTask = {
  id: number
  title: string
  description: string
  status: TaskStatus
  icon: ITypeIcon
}
