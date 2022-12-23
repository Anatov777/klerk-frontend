<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import type { RubricModel } from "@/models/RubricModel";

import RubricsTree from "@/components/RubricsTree.vue";
import BaseAccordion from "@/components/BaseAccordion.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";

const BASE_URL = "https://www.klerk.ru";

interface Props {
  rubric: RubricModel;
}

const props = defineProps<Props>();

const getCounts = (tree: RubricModel[]) => {
  if (tree === undefined) {
    return 0;
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

  return result;
};

const onClickRubrickCheckbox = (event: any, rubric: RubricModel) => {
    console.log(rubric)
}
</script>

<template>
  <div class="flex">
    <BaseAccordion :is-empty="!rubric.children?.length">
      <template #title>
        <a :href="`${BASE_URL}${rubric.url}`">
          {{ rubric.url }}
        </a>
        <span class="ml-5">
          ({{ rubric.count }} / {{ getCounts(rubric.children) }})
        </span>
        <BaseCheckbox class="ml-5" @click="onClickRubrickCheckbox($event, rubric)" />
      </template>
      <template #content>
        <RubricsTree :rubrics="rubric.children" />
      </template>
    </BaseAccordion>
  </div>
</template>

<style scoped></style>
