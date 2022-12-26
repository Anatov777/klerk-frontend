<script setup lang="ts">
const breadcrumbs = [
  {
    id: "breadcrumb-1",
    text: "Главная",
    url: "/",
  },
  {
    id: "breadcrumb-2",
    text: "Рассылки",
    url: "/subs",
  },
  {
    id: "breadcrumb-3",
    text: "Хлебные крошки",
    url: "/breadcrumbs",
  },
];
</script>

<template>
  <section class="flex gap-2">
    <a
      v-for="(link, index) in breadcrumbs"
      :key="link.id"
      :href="link.url"
      class="flex gap-2 text-[13px] text-[#999999] leading-4"
    >
      <span class="border-b border-[#E6EDFF] hover:text-[#b8b8b8]">{{ link.text }}</span>
      <span>{{ index === breadcrumbs.length - 1 ? "" : "→" }}</span>
    </a>
  </section>
</template>
