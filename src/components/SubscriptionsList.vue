<script setup lang="ts">
import SubscriptionsItem from "@/components/SubscriptionsItem.vue";
import type { SubscriptionModel } from "@/models/SubscriptionModel";

const subscriptions: SubscriptionModel[] = [
  {
    id: "subscription-1",
    note: "Перед рассветом",
    title: "Утренний бухгалтер",
    text: "Самые важные новости и события за день. Кратко, по делу, структурировано.",
    benefits: [
      {
        id: "benefit-1",
        text: "Новости для бухгалтеров, ИП и директора",
      },
      {
        id: "benefit-2",
        text: "Подборка статей за день",
      },
    ],
    peopleCount: 59342,
    image: "sub-1.png",
  },
  {
    id: "subscription-2",
    note: "После заката",
    title: "Ночной бухгалтер",
    text: "Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.",
    benefits: [
      {
        id: "benefit-1",
        text: "Анализ, оценка и только самое главное",
      },
      {
        id: "benefit-2",
        text: "Лучшие комменты юзеров в обзоре",
      },
    ],
    peopleCount: 37480,
    image: "sub-2.png",
  },
  {
    id: "subscription-3",
    note: "Раз в две недели",
    title: "Ножницы скидок",
    text: "Подборка самых выгодных и полезных спецпредложений от надежных компаний.",
    benefits: [
      {
        id: "benefit-1",
        text: "Акции и скидки от лидеров рынка",
      },
      {
        id: "benefit-2",
        text: "Те, кто подписался – экономят много денег",
      },
    ],
    peopleCount: 92118,
    image: "sub-3.png",
  },
  {
    id: "subscription-4",
    note: "По мере появления анонсов",
    title: "Чемодан вебинаров",
    text: "Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.",
    benefits: [
      {
        id: "benefit-1",
        text: "Никогда не пришлем платные вебинары",
      },
      {
        id: "benefit-2",
        text: "Подборка топовых тем для вебинаров",
      },
    ],
    peopleCount: 92082,
    image: "sub-4.png",
  },
];
</script>

<template>
  <div class="grid md:grid-cols-2 gap-6 mt-8 max-sm:mt-6">
    <SubscriptionsItem
      v-for="sub in subscriptions"
      :key="sub.id"
      :subscription="sub"
    />
  </div>
</template>
