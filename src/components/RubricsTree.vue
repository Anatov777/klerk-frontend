<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import RubricsTreeItem from "@/components/RubricsTreeItem.vue";

interface Props {
  rubrics: any[] | null;
}

const props = withDefaults(defineProps<Props>(), {
  rubrics: () => [],
});

const catalogElement: Ref<HTMLDivElement | null> = ref(null);
</script>

<template>
  <div class="p-3">
    <RubricsTreeItem
      v-for="rubric in rubrics"
      :key="rubric.id"
      :rubric="rubric"
    />
  </div>
</template>

<style scoped></style>
