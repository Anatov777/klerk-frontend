<script setup lang="ts">
import BaseCheckbox from "@/components/BaseCheckbox.vue";
</script>

<template>
  <div class="subs">
    <h1
      class="font-medium text-[3.5rem] leading-[4.5rem] text-center tracking-[-0.01em]"
    >
      Подписки «Клерка»
    </h1>
    <div class="tabs px-[28px] mt-1.5 flex justify-center">
      <ul class="flex gap-6">
        <li class="tabs__item active">Рассылки</li>
        <li class="tabs__item">Соцсети</li>
        <li class="tabs__item">Мессенджеры</li>
      </ul>
    </div>
    <div class="subs__container">
      <h2
        class="font-medium text-[24px] leading-[32px] text-center tracking-[-0.01em]"
      >
        Выберите рассылки, которые подходят именно вам
      </h2>

      <div class="subscribe-field">
        <input
          class="subscribe-field__input"
          type="text"
          placeholder="Электронная почта"
        />
        <button class="subscribe-field__button">Подписаться</button>
      </div>

      <BaseCheckbox
        label="Подписаться на все рассылки"
        id="subToAllCheckbox"
        is-switcher
        :is-small="true"
        class="mx-6 mt-[18px]"
      />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.subs {
  &__container {
    @apply py-12 px-6 bg-[#F5F5F8] rounded-2xl;
  }
  .tabs {
    &__item {
      @apply font-medium text-base cursor-pointer text-[#666666] py-[18px];
      @apply hover:bg-slate-100;
      &.active {
        @apply border-b border-[#5a8cf1] text-[#5a8cf1];
      }
    }
  }
  .subscribe-field {
    @apply flex px-6 mt-6;
    &__input {
      @apply p-4 rounded-md w-full placeholder:text-[#666666];
    }
    &__button {
      @apply py-4 px-8 bg-[#316FEE] text-white font-medium rounded-[100px] ml-[-50px];
      @apply flex items-center;
    }
  }
}
</style>
