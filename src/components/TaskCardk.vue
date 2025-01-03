<template>
  <button
    @click="handleOpenDrawer"
    class="d-flex align-center justify-space-between ga-4 pa-5 rounded-lg"
    :style="
      props.state === 'completed'
        ? 'background-color: #A0ECB1;'
        : props.state === 'in_progress'
          ? 'background-color: #F5D565;'
          : props.state === 'wont_do'
            ? 'background-color: #F7D4D3;'
            : 'background-color: #e3e8ef'
    "
  >
    <div style="font-size: 1.8rem" class="bg-white pa-1 rounded-lg">
      <i v-if="props.icon === 'gym'">🏋️</i>
      <i v-if="props.icon === 'alarm'">⏰</i>
      <i v-if="props.icon === 'coffee'">☕</i>
      <i v-if="props.icon === 'work'">👨🏻‍💻</i>
      <i v-if="props.icon === 'book'">📚</i>
      <i v-if="props.icon === 'chat'">💬</i>
    </div>
    <div class="flex-1-1 d-flex flex-column justify-center align-start">
      <h3 v-if="props.state === 'pending'" class="font-weight-bold" style="font-size: 1.3rem">
        Task To Do
      </h3>
      <h3 v-if="props.state === 'in_progress'" class="font-weight-bold" style="font-size: 1.3rem">
        Task in Progress
      </h3>
      <h3 v-if="props.state === 'completed'" class="font-weight-bold" style="font-size: 1.3rem">
        Task Completed
      </h3>
      <h3 v-if="props.state === 'wont_do'" class="font-weight-bold" style="font-size: 1.3rem">
        Task Won’t Do
      </h3>

      <p
        v-if="props.state === 'pending'"
        style="margin-right: 35%; width: auto"
        class="font-weight-light"
      >
        {{ props.description }}
      </p>
    </div>
    <div v-if="props.state !== 'pending'">
      <i
        style="font-size: 1.8rem"
        :style="
          props.state === 'completed'
            ? 'background-color: #32d657;'
            : props.state === 'in_progress'
              ? 'background-color: #E9A23B;'
              : 'background-color: #DD524C;'
        "
        class="d-flex align-center rounded pa-3"
      >
        <DoneRoundDuotone v-if="props.state === 'completed'" />
        <TimeAtackDuotone v-if="props.state === 'in_progress'" />
        <CloseRingDuotone v-if="props.state === 'wont_do'" />
      </i>
    </div>
  </button>
</template>

<script lang="ts">
export default {
  name: 'TaskCard',
}
</script>

<script setup lang="ts">
import CloseRingDuotone from './icons/CloseRingDuotone.vue'
import DoneRoundDuotone from './icons/DoneRoundDuotone.vue'
import TimeAtackDuotone from './icons/TimeAtackDuotone.vue'

import useTaskForm from '../stores/taskForm'
const taskForm = useTaskForm()

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: 'alarm',
    validator: (value: string) =>
      ['gym', 'alarm', 'coffee', 'work', 'book', 'chat'].includes(value),
  },
  state: {
    type: String,
    default: 'pending',
    validator: (value: string) =>
      ['wont_do', 'in_progress', 'completed', 'pending'].includes(value),
  },
})

const handleOpenDrawer = () => {
  taskForm.handleDrawer()
  taskForm.newTaskId = props.id
  taskForm.newTaskTitle = props.title
  taskForm.newTaskDescription = props.description
  taskForm.newTaskIcon = props.icon
  taskForm.newTaskStatus = props.state
}
</script>
