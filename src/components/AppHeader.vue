<script setup lang="ts">
import BaseBreadcrumbs from "@/components/BaseBreadcrumbs.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
</script>

<template>
  <header class="flex justify-center items-center flex-col gap-6 pt-12 px-3">
    <a href="/">
      <LogoIcon />
    </a>
    <BaseBreadcrumbs />
  </header>
</template>
