<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import type { Ref } from "vue";
import type { RubricModel } from "@/models/RubricModel";

import RubricsTree from "@/components/RubricsTree.vue";
import BaseAccordion from "@/components/BaseAccordion.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";

import { useRubricCounterStore } from "@/stores/rubric-counter";

const store = useRubricCounterStore();

const BASE_URL = "https://www.klerk.ru";

interface Props {
  rubric: RubricModel;
  isActiveParentRubricCheckbox: boolean;
}

const props = defineProps<Props>();

watch(
  () => props.isActiveParentRubricCheckbox,
  (newValue: boolean) => {
    if (!newValue && isStillActiveParentRubricCheckbox.value) {
      store.plusRubricCount(rubricCounts.value);
    }
    if (newValue && isStillActiveParentRubricCheckbox.value) {
      store.minusRubricCount(rubricCounts.value);
    }
    isActiveRubricCheckbox.value = newValue;
  }
);

const isActiveRubricCheckbox: Ref<boolean> = ref(false);
const rubricCounts: Ref<number> = ref(0);
const isStillActiveParentRubricCheckbox: Ref<boolean> = ref(false);

const getCounts = (tree: RubricModel[], currentRubricCount: number): number => {
  if (tree === undefined) {
    return currentRubricCount;
  }
  const stack: RubricModel[] = JSON.parse(JSON.stringify(tree));
  let result: number = 0;

  while (stack.length > 0) {
    const node: RubricModel | undefined = stack.pop();
    if (node?.count !== undefined) {
      result += node.count;
    }
    if (node?.children?.length) {
      stack.push(...node.children);
    }
  }

  result += currentRubricCount;

  return result;
};

const setRubricCounts = () => {
  rubricCounts.value = getCounts(props.rubric.children, props.rubric.count);
};

const onClickRubrickCheckbox = (event: any, rubric: RubricModel) => {
  if (props.isActiveParentRubricCheckbox) {
    isStillActiveParentRubricCheckbox.value = event.target.checked;
    return;
  }
  if (event.target.checked) {
    store.plusRubricCount(rubricCounts.value);
    isActiveRubricCheckbox.value = true;
    isStillActiveParentRubricCheckbox.value = true
  } else {
    store.minusRubricCount(rubricCounts.value);
    isActiveRubricCheckbox.value = false;
    isStillActiveParentRubricCheckbox.value = false
  }
};

onMounted((): void => {
  setRubricCounts();
});
</script>

<template>
  <div class="flex">
    <BaseAccordion :is-empty="!rubric.children?.length">
      <template #title>
        <a :href="`${BASE_URL}${rubric.url}`">
          {{ rubric.url }}
        </a>
        <span class="ml-5">
          ({{ rubric.count }}&nbsp;/&nbsp;{{ rubricCounts }})
        </span>
        <BaseCheckbox
          class="ml-5"
          :id="`checkbox-${rubric.id}`"
          @click="onClickRubrickCheckbox($event, rubric)"
        />
      </template>
      <template #content>
        <RubricsTree
          :rubrics="rubric.children"
          :is-active-parent-rubric-checkbox="isActiveRubricCheckbox"
        />
      </template>
    </BaseAccordion>
  </div>
</template>

<style scoped></style>
