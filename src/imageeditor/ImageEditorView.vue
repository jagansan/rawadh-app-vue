<script setup>
import { ref, computed } from "vue";
import ImageEditor from "./ImageEditor.vue";

const routes = {
  "/": ImageEditor,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"];
});
</script>
<template>
  <component :is="currentView" />
  <!-- <router-view/> -->
</template>


