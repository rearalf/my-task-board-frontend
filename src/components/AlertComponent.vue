<template>
  <div
    v-if="alertStone.isVisible"
    class="alert-component position-fixed w-25"
    style="bottom: 1rem; left: 1rem"
  >
    <div>
      <v-alert
        closable
        :type="alertStone.type"
        :icon="'$' + alertStone.type"
        :title="alertStone.message"
        @click:close="alertStone.handleClearState"
      ></v-alert>
      <v-progress-linear
        :height="4"
        :model-value="alertStone.progress"
        class="position-absolute"
        style="top: auto; bottom: 0"
        v-if="alertStone.isVisible"
      ></v-progress-linear>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AlertComponent',
}
</script>

<script lang="ts" setup>
import useAlertStone from '../stores/useAlertStone'

const alertStone = useAlertStone()
</script>

<style>
.alert-component {
  z-index: 1005;
  -webkit-box-shadow: 8px 8px 10px 2px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 8px 8px 10px 2px rgba(0, 0, 0, 0.34);
  box-shadow: 8px 8px 10px 2px rgba(0, 0, 0, 0.34);
}

.alert-component .v-progress-linear__determinate {
  background: rgb(247, 212, 211);
}
</style>
