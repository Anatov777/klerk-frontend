<script setup lang="ts">
// import { ref } from "vue";
// import type { Ref } from "vue";

interface Props {
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
});

const emit = defineEmits<{
  (event: "click", value: any): void;
}>();

const onClick = (event: any) => {
  emit("click", event);
};
</script>

<template>
  <div class="base-checkbox" @click="onClick($event)">
    <label class="base-checkbox__label">
      {{ label }}
      <input type="checkbox" class="checkbox" />
    </label>
  </div>
</template>

<style scoped>
.base-checkbox__label {
  display: flex;
  align-items: center;
  gap: 20px;
}
.checkbox {
  width: 20px;
  height: 20px;
}
</style>
