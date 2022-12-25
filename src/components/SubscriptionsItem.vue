<script setup lang="ts">
import CheckIcon from "@/components/icons/CheckIcon.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";
</script>

<template>
  <div class="grid grid-cols-2 items-start col-gap-6 p-6 bg-white rounded-2xl">
    <span class="text-[13px] leading-4 text-[#999999] col-start-1 row-span-12"
      >Перед рассветом</span
    >
    <h3 class="font-medium text-xl col-start-1">Утренний бухгалтер</h3>
    <p class="text-sm text-[#666666] col-start-1 mt-2">
      Самые важные новости и события за день. Кратко, по делу, структурировано.
    </p>
    <ul class="col-start-1 mt-4">
      <li class="mb-4 last:mb-0 flex gap-2 items-center">
        <CheckIcon />
        <span class="text-sm">Новости для бухгалтеров, ИП и директора</span>
      </li>
      <li class="mb-4 last:mb-0 flex gap-2 items-center">
        <CheckIcon />
        <span class="text-sm">Подборка статей за день</span>
      </li>
    </ul>
    <BaseCheckbox
      class="col-start-1 mt-4"
      label="Уже получает 59 342 человек"
      id="test"
      is-switcher
    />
    <img
      class="col-start-2 row-start-1 row-end-6"
      src="/public/images/sub-1.png"
      alt="sub-1"
      width="80"
      height="80"
    />
  </div>
</template>

<style scoped lang="postcss">
</style>
