import { AlertType, type IAlertStoneStates, type IAlertType } from '@/interfaces/interfaces'
import { defineStore } from 'pinia'

const useAlertStone = defineStore('error', {
  state: (): IAlertStoneStates => ({
    message: '',
    progress: 0,
    duration: 10,
    isVisible: false,
    type: AlertType.SUCCESS,
  }),
  actions: {
    showAlert(message: string, type: IAlertType) {
      this.message = message
      this.isVisible = true
      this.progress = 0
      this.type = type

      const interval = setInterval(() => {
        this.progress += 100 / (this.duration * 10)

        if (this.progress >= 100) {
          clearInterval(interval)
          this.handleClearState()
        }
      }, 100)
    },

    handleClearState() {
      this.message = ''
      this.progress = 0
      this.duration = 10
      this.isVisible = false
      this.type = AlertType.SUCCESS
    },
  },
})

export default useAlertStone
