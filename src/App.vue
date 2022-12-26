<script setup lang="ts">
import { RouterView } from "vue-router";
import { vResize } from "@/directives/vResize";
import { ref, onMounted, provide } from "vue";

import type { Ref } from "vue";

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

const clientWidth: Ref<number | null> = ref(null);

provide("clientWidth", clientWidth);

onMounted((): void => {
  clientWidth.value = document.body.clientWidth;
});

const setDimensions = function ({ width }: any) {
  clientWidth.value = width;
};
</script>

<template>
  <div v-resize="setDimensions" class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="max-w-7xl mx-auto w-full flex-grow justify-center mt-6">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
