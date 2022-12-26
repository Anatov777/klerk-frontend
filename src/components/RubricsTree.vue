<script setup lang="ts">
import { ref, watch } from "vue";
import type { Ref } from "vue";

import RubricsTreeItem from "@/components/RubricsTreeItem.vue";

interface Props {
  rubrics: any[] | null;
  isActiveParentRubricCheckbox?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  rubrics: () => [],
  isActiveParentRubricCheckbox: false,
});

watch(
  () => props.isActiveParentRubricCheckbox,
  (newValue: boolean) => {
    isActiveRubricCheckbox.value = newValue;
  }
);

const isActiveRubricCheckbox: Ref<boolean> = ref(false);
</script>

<template>
  <div class="pl-12">
    <RubricsTreeItem
      v-for="rubric in rubrics"
      :key="rubric.id"
      :rubric="rubric"
      :is-active-parent-rubric-checkbox="isActiveRubricCheckbox"
    />
  </div>
</template>
<style scoped>
</style>
