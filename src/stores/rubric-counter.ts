import { ref } from "vue";
import { defineStore } from "pinia";

export const useRubricCounterStore = defineStore("rubricCounter", () => {
  const rubricCount = ref(0);

  function setRubricCount(value: number) {
    rubricCount.value = value;
  }
  function plusRubricCount(value: number) {
    rubricCount.value += value;
  }
  function minusRubricCount(value: number) {
    rubricCount.value -= value;
  }

  return { rubricCount, setRubricCount, plusRubricCount, minusRubricCount };
});
