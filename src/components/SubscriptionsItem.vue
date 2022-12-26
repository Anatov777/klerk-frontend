<script setup lang="ts">
import CheckIcon from "@/components/icons/CheckIcon.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import type { SubscriptionModel } from "@/models/SubscriptionModel";

interface Props {
  subscription: SubscriptionModel;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="grid items-start col-gap-6 px-4 py-6 min-[460px]:p-6 bg-white rounded-2xl grid-cols-[minmax(0,324px)_1fr]"
  >
    <span class="text-[13px] leading-4 text-[#999999] col-start-1 row-span-12">
      {{ subscription.note }}
    </span>
    <h3 class="font-medium text-xl col-start-1">
      {{ subscription.title }}
    </h3>
    <p
      class="text-sm text-[#666666] col-start-1 mt-2 max-[460px]:col-[1_/_span_2]"
    >
      {{ subscription.text }}
    </p>
    <ul class="col-start-1 mt-4 max-[460px]:col-[1_/_span_2]">
      <li
        v-for="benefit in subscription.benefits"
        :key="benefit.id"
        class="mb-4 last:mb-0 flex gap-2 items-center"
      >
        <CheckIcon class="min-w-[16px]" />
        <span class="text-sm">
          {{ benefit.text }}
        </span>
      </li>
    </ul>
    <BaseCheckbox
      class="col-start-1 mt-4 max-[460px]:col-[1_/_span_2]"
      :label="`Уже получает ${subscription.peopleCount} человек`"
      :id="`checkbox-${subscription.id}`"
      is-switcher
      :checked="subscription.id === 'subscription-1'"
    />
    <img
      class="col-start-2 row-start-1 row-end-6 justify-self-end min-w-[40px]"
      :src="`/images/${subscription.image}`"
      :alt="subscription.id"
      width="80"
      height="80"
    />
  </div>
</template>

<style scoped lang="postcss"></style>
