<template>
  <div class="logo">
    <RouterLink to="/">
      <RouterLink to="/">
      <v-img :width="300" cover src="../../../src/assets/images/logo.png"></v-img>
    </RouterLink>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const primary = ref('rgb(var(--v-theme-primary))');
const secondary = ref('rgb(var(--v-theme-secondary))');
</script>
