<script setup lang="ts">
import { RouterView } from 'vue-router'
import { vResize } from '@/directives/vResize';
import { ref, onMounted, provide } from 'vue';

import type { Ref } from 'vue';

const clientWidth: Ref<number | null> = ref(null);

provide('clientWidth', clientWidth);

onMounted((): void => {
  clientWidth.value = document.body.clientWidth;
});

const setDimensions = function ({ width }: any) {
  clientWidth.value = width;
};
</script>

<template>
  <div v-resize="setDimensions">
    <main>
      <router-view />
    </main>
  </div>
</template>
