<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

interface Props {
  isEmpty?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isEmpty: false,
});

const isOpen: Ref<boolean> = ref(true);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="base-accordion mt-7">
    <div class="base-accordion__top">
      <div v-if="!isEmpty" class="base-accordion__switch" @click="toggle">
        <div v-if="!isOpen" class="base-accordion__icon">+</div>
        <div v-else class="base-accordion__icon">-</div>
      </div>

      <div class="base-accordion__title">
        <slot name="title"></slot>
      </div>
    </div>

    <div class="base-accordion__content">
      <slot v-if="isOpen" name="content"></slot>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.base-accordion {
  display: flex;
  flex-direction: column;

  &__top {
    display: flex;
  }

  &__switch {
    @apply bg-slate-500 text-slate-50 mr-5;
    @apply hover:bg-slate-400;
    border-radius: 4px;
    width: 30px;
    height: 30px;
    min-width: 30px;
    cursor: pointer;
    display: inline-flex;
  }
  &__icon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__title {
    height: 30px;
    display: flex;
    align-items: center;
  }
}
</style>
