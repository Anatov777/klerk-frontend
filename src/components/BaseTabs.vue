<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const activeTabId: Ref<string> = ref("tab-1");

const tabs = [
  {
    id: "tab-1",
    text: "Рассылки",
  },
  {
    id: "tab-2",
    text: "Соцсети",
  },
  {
    id: "tab-3",
    text: "Мессенджеры",
  },
];

const onClickTab = (tabId: string): void => {
  activeTabId.value = tabId;
};
</script>

<template>
  <div class="tabs">
    <ul class="flex gap-6">
      <li
        v-for="tab in tabs"
        :key="tab.id"
        class="tabs__item"
        :class="{ active: activeTabId === tab.id }"
        @click="onClickTab(tab.id)"
      >
        {{ tab.text }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="postcss">
.tabs {
  @apply px-[28px] mt-1.5 flex justify-center;
  &__item {
    @apply font-medium text-base cursor-pointer text-[#666666] py-[18px];
    @apply hover:bg-slate-100;
    &.active {
      @apply border-b border-[#5a8cf1] text-[#5a8cf1];
    }
  }
}
</style>
