import { TaskStatus, type ITasksForm } from '@/interfaces/interfaces'

export const ICONSOPTIONS = [
  { iconName: 'work', icon: '👨🏻‍💻' },
  { iconName: 'chat', icon: '💬' },
  { iconName: 'coffee', icon: '☕' },
  { iconName: 'gym', icon: '🏋️' },
  { iconName: 'book', icon: '📚' },
  { iconName: 'alarm', icon: '⏰' },
]

export const TASKSSTATUSOPTIONS = [
  {
    state: 'in_progress',
    nameState: 'In Progress',
  },
  {
    state: 'completed',
    nameState: 'Completed',
  },
  {
    state: 'wont_do',
    nameState: "Won't do",
  },
]

export const NEWTASK: ITasksForm = {
  title: '',
  description: '',
  icon: '',
  status: TaskStatus.PENDING,
}
