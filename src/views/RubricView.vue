<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import type { RubricModel } from "@/models/RubricModel";

import useKlerkApi from "@/composables/useKlerkApi";
import { useRubricCounterStore } from "@/stores/rubric-counter";

import RubricsTree from "@/components/RubricsTree.vue";
import BaseAccordion from "@/components/BaseAccordion.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";

const { getRubrics } = useKlerkApi();
const store = useRubricCounterStore();

const rubricsList: Ref<RubricModel[] | null> = ref(null);

const onClickAllowEmpty = async (event: any) => {
  rubricsList.value = await getRubrics(event.target.checked);
};

onMounted(async (): Promise<void> => {
  rubricsList.value = await getRubrics();
});
</script>

<template>
  <div class="p-5">
    <BaseCheckbox
      label="Отображать пустые рубрики"
      :id="`allow-empty-checkbox`"
      @click="onClickAllowEmpty($event)"
    />
    <div>Сумма: {{ store.rubricCount }}</div>
    <BaseAccordion title="Рубрики" class="overflow-auto">
      <template #title> Рубрики </template>
      <template #content>
        <RubricsTree :rubrics="rubricsList" />
      </template>
    </BaseAccordion>
  </div>
</template>
