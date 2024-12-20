<template>
  <v-navigation-drawer
    v-model="drawer"
    style="height: 96vh; top: 2%; bottom: 2%"
    class="rounded-lg pa-4 d-flex"
    :style="!drawer && 'transform: translateX(100vw)'"
    persistent
    floating
    temporary
    location="right"
  >
    <v-list-item class="pa-0">
      <header class="d-flex justify-space-between">
        <h2 class="font-weight-medium">Task details</h2>
        <v-btn
          border
          variant="text"
          @click="handleClick"
          style="min-width: auto"
          class="px-2 h-auto w-auto rounded-lg"
          id="btn-close"
          aria-label="close-button"
        >
          <CloseRingDuotone1 />
        </v-btn>
      </header>
    </v-list-item>

    <v-list-item class="list_item_form pa-0 flex-1-1 align-start">
      <template v-slot:default>
        <form class="d-flex flex-column ga-4 pt-4 flex-1-1 h-100 justify-space-between">
          <div class="d-flex flex-column ga-3 justify-space-between">
            <div class="d-flex flex-column ga-1">
              <label
                for="name"
                style="color: #97a3b6; font-size: 0.875rem"
                class="font-weight-medium"
              >
                Task name
              </label>
              <input
                type="text"
                class="input-field rounded-lg pa-3 py-2"
                style="border: 0.15rem solid #00000033"
                placeholder="Task name"
                id="name"
              />
            </div>

            <div class="d-flex flex-column ga-1">
              <label
                for="description"
                style="color: #97a3b6; font-size: 0.875rem"
                class="font-weight-medium"
              >
                Description
              </label>
              <textarea
                type="text"
                id="description"
                class="input-field rounded-lg pa-3 py-2"
                style="border: 0.15rem solid #00000033; min-height: 8rem; resize: none"
                placeholder="Enter a short description"
              />
            </div>

            <div class="d-flex flex-column ga-1">
              <h3 style="color: #97a3b6; font-size: 0.875rem" class="font-weight-medium">Icon</h3>
              <div class="d-flex ga-4">
                <label
                  style="font-size: 1.5rem; background-color: #e3e8ef"
                  v-for="option in iconsOptions"
                  :key="option.iconName"
                  class="pa-1 rounded-lg"
                  :style="taskIcon === option.iconName && 'background-color: #F5D565'"
                  :for="'icon-' + option.iconName"
                >
                  <input
                    type="radio"
                    name="icon"
                    :id="'icon-' + option.iconName"
                    :value="option.iconName"
                    class="d-none"
                    v-model="taskIcon"
                  />
                  {{ option.icon }}
                </label>
              </div>
            </div>

            <div class="d-flex flex-column ga-1">
              <h3 style="color: #97a3b6; font-size: 0.875rem" class="font-weight-medium">Status</h3>

              <div class="grid-state">
                <label
                  v-for="option in taskStateOptions"
                  :key="option.state"
                  :for="'state-' + option.state"
                >
                  <v-card
                    class="bg-white"
                    style="box-shadow: none; border-radius: 1rem"
                    :style="
                      option.state === taskState
                        ? 'border: 2px solid #3662E3'
                        : 'border: 2px solid #00000033'
                    "
                  >
                    <v-card-text class="d-flex ga-3 align-center" style="padding: 2px">
                      <span
                        :style="
                          option.state === 'wont_do'
                            ? 'background-color: #dd524c'
                            : option.state === 'completed'
                              ? 'background-color: #32D657'
                              : 'background-color: #E9A23B'
                        "
                        class="d-flex pa-2"
                        style="border-radius: 0.7rem"
                      >
                        <CloseRingDuotone v-if="option.state === 'wont_do'" />
                        <DoneRoundDuotone v-if="option.state === 'completed'" />
                        <TimeAtackDuotone v-if="option.state === 'in_progress'" />
                      </span>
                      <input
                        name="state"
                        type="radio"
                        class="d-none"
                        :value="option.state"
                        v-model="taskState"
                        :id="'state-' + option.state"
                        @change="updateTaskState(option.state)"
                      />

                      <p class="flex-1-1">{{ option.nameState }}</p>

                      <span
                        v-if="option.state === taskState"
                        class="d-flex align-center justify-center rounded-xl mr-2"
                        style="background-color: #3662e3"
                      >
                        <DoneRound />
                      </span>
                    </v-card-text>
                  </v-card>
                </label>
              </div>
            </div>
          </div>
          <div class="d-flex justify-end ga-3 mb-1">
            <v-btn style="background-color: #00000033" class="rounded-xl text-white">
              <span class="d-flex ga-2"> Delete <TrashSVG /> </span>
            </v-btn>
            <v-btn style="background-color: #3662e3" class="rounded-xl text-white">
              <span class="d-flex ga-2"> Save <DoneRound /> </span>
            </v-btn>
          </div>
        </form>
      </template>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script lang="ts">
export default {
  name: 'NavigationDrawer',
}
</script>

<script setup lang="ts">
import CloseRingDuotone from './icons/CloseRingDuotone.vue'
import CloseRingDuotone1 from './icons/CloseRingDuotone1.vue'
import DoneRound from './icons/DoneRound.vue'
import DoneRoundDuotone from './icons/DoneRoundDuotone.vue'
import TimeAtackDuotone from './icons/TimeAtackDuotone.vue'
import TrashSVG from './icons/TrashSVG.vue'

const drawer = defineModel('drawer', { default: false, required: true, type: Boolean })
const taskIcon = defineModel('taskIcon', {
  required: true,
  type: String,
  validator: (value: string) =>
    ['gym', 'alarm', 'coffee', 'work', 'book', 'chat', ''].includes(value),
})
const taskState = defineModel('taskState', {
  required: true,
  type: String,
  validator: (value: string) => ['wont_do', 'in_progress', 'completed', 'pending'].includes(value),
})

const emit = defineEmits(['update:handleDrawer', 'change:handleState'])

const handleClick = () => emit('update:handleDrawer', false)

const updateTaskState = (state: string) => {
  emit('change:handleState', state)
}

const iconsOptions = [
  { iconName: 'work', icon: '👨🏻‍💻' },
  { iconName: 'chat', icon: '💬' },
  { iconName: 'coffee', icon: '☕' },
  { iconName: 'gym', icon: '🏋️' },
  { iconName: 'book', icon: '📚' },
  { iconName: 'alarm', icon: '⏰' },
]

const taskStateOptions = [
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
</script>

<style>
.v-navigation-drawer.v-navigation-drawer--right {
  width: 96vw !important;
  right: 2% !important;
}

@media screen and (min-width: 768px) {
  .v-navigation-drawer.v-navigation-drawer--right {
    width: 60vw !important;
  }
}

@media screen and (min-width: 1024px) {
  .v-navigation-drawer.v-navigation-drawer--right {
    width: 50vw !important;
  }
}

.v-navigation-drawer__content {
  display: flex;
  flex-direction: column;
}

.list_item_form .v-list-item__content {
  align-self: flex-start;
  height: 100%;
}

.input-field::placeholder {
  color: #00000033;
}

.input-field:focus {
  outline-color: #3662e3 !important;
}

.grid-state {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
}
</style>
