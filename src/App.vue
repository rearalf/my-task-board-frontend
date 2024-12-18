<script setup lang="ts">
import LogoSVG from './components/icons/LogoSVG.vue'
import EditDuotone from './components/icons/EditDuotone.vue'
</script>

<template>
  <v-container>
    <div class="d-flex ga-4 align-start mb-4">
      <LogoSVG class="pt-3" />
      <div>
        <h1 className="font-weight-regular" style="font-size: 2.5rem">My Task Board</h1>
        <p class="font-weight-regular">Tasks to keep organised</p>
      </div>
      <v-btn variant="text" style="box-shadow: none; min-width: auto" class="pa-2 rounded-circle">
        <EditDuotone />
      </v-btn>
    </div>
    <main></main>
  </v-container>
</template>

<style scoped></style>
