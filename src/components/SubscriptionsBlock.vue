<script setup lang="ts">
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import SubscriptionsList from "@/components/SubscriptionsList.vue";
import BaseTabs from "@/components/BaseTabs.vue";

import { computed, inject, ref } from "vue";
import type { Ref } from "vue";

const clientWidth: Ref<number | null> | undefined = inject("clientWidth");
const email: Ref<string> = ref("");

const subscribeButtonText = computed<string>(() => {
  if (clientWidth && clientWidth.value! < 640) {
    return "";
  }
  return "Подписаться";
});

const onClickSubscribe = () => {
  if (email.value) {
    alert(`${email.value} подписан!`);
  } else {
    alert(`Заполните поле!`);
  }
};
</script>

<template>
  <div class="subs">
    <h1
      class="font-medium text-[3.5rem] leading-[4.5rem] text-center tracking-[-0.01em]"
    >
      Подписки «Клерка»
    </h1>
    <BaseTabs />
    <div class="subs__container">
      <h2
        class="font-medium text-[24px] leading-[32px] text-center tracking-[-0.01em]"
      >
        Выберите рассылки, которые подходят именно вам
      </h2>

      <div class="subscribe-field">
        <input
          v-model="email"
          class="subscribe-field__input"
          type="text"
          placeholder="Электронная почта"
        />
        <button class="subscribe-field__button" @click="onClickSubscribe">
          {{ subscribeButtonText }}
        </button>
      </div>

      <BaseCheckbox
        label="Подписаться на все рассылки"
        id="subToAllCheckbox"
        is-switcher
        :is-small="true"
        class="mx-6 mt-[18px]"
      />

      <SubscriptionsList />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.subs {
  &__container {
    @apply py-12 px-4 md:px-6 bg-[#F5F5F8] rounded-2xl;
  }
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
  .subscribe-field {
    @apply flex px-6 mt-6 max-sm:px-0;
    &__input {
      @apply p-4 rounded-md w-full placeholder:text-[#666666];
    }
    &__button {
      @apply flex items-center justify-center;
      @apply py-4 px-8 bg-[#316FEE] text-white font-medium rounded-[100px] ml-[-50px];
      @apply before:content-[''] before:border-r-2 before:border-t-2 before:border-white;
      @apply before:w-[10px] before:h-[10px] before:rotate-45;
      @apply sm:before:hidden max-sm:w-[56px] max-sm:rounded-full max-sm:p-0;
      @apply hover:shadow-2xl shadow-blue-500 hover:bg-[#467eee];
    }
  }
}
</style>
