<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import useKlerkApi from "@/composables/useKlerkApi";

import RubricsTree from "@/components/RubricsTree.vue";
import BaseAccordion from "@/components/BaseAccordion.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";

const { getRubrics } = useKlerkApi();

const rubricsList: Ref<any> = ref(null);

const onClickAllowEmpty = async (event: any) => {
  rubricsList.value = await getRubrics(event.target.checked);
};

onMounted(async (): Promise<void> => {
  rubricsList.value = await getRubrics();
});
</script>

<template>
  <main class="p-5">
    <BaseCheckbox
      label="Отображать пустые рубрики"
      @click="onClickAllowEmpty($event)"
    />
    <BaseAccordion title="Рубрики">
      <template #title> Рубрики </template>
      <template #content>
        <RubricsTree :rubrics="rubricsList" />
      </template>
    </BaseAccordion>
  </main>
</template>
