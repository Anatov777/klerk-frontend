<script setup lang="ts">
interface Props {
  label?: string;
  id?: string;
  isSwitcher?: boolean;
  disabled?: boolean;
  isSmall?: boolean;
  checked?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  id: "",
  isSwitcher: false,
  disabled: false,
  isSmall: false,
  checked: false,
});

const emit = defineEmits<{
  (event: "click", value: any): void;
}>();

const onClick = (event: any) => {
  emit("click", event);
};
</script>

<template>
  <div
    class="base-checkbox"
    :class="{
      'base-checkbox--switcher': isSwitcher,
      'base-checkbox--small': isSmall,
    }"
  >
    <input
      class="base-checkbox__input"
      :id="id"
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
      @click="onClick($event)"
    />

    <label
      class="base-checkbox__label"
      :class="{ 'base-checkbox__label--disabled': disabled }"
      :for="id"
    >
      {{ label }}
    </label>
  </div>
</template>

<style scoped lang="postcss">
.base-checkbox {
  @apply relative flex items-center;
  padding-left: 32px;
  min-height: 24px;

  &__input {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 1rem;
    height: 1.25rem;
    opacity: 0;
    &:checked ~ .base-checkbox {
      &__label {
        &::before {
          border: solid 3px #316fee;
        }
        &::after {
          opacity: 1;
        }
      }
    }
    &:disabled:checked ~ .base-checkbox {
      &__label {
        &::before {
          background-color: gray;
          border: solid 3px gray;
        }
        &::after {
          background-color: gray;
        }
      }
    }
  }

  &__label {
    @apply text-sm;
    display: block;
    margin: 0;
    min-height: 20px;

    &--disabled {
      color: gray;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: -1px;
      width: 24px;
      height: 24px;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      border-radius: 2px;
      border: solid 3px #bdc6d2;
    }

    &::after {
      opacity: 0;

      border: solid #316fee;
      border-width: 0 0 3.9px 3.9px;
      top: 5px;
      left: 4px;
      width: 16px;
      height: 10px;
      transform: rotate(-45deg);
      border-radius: 0;
    }

    &:not(.base-checkbox__label--disabled):hover {
      cursor: pointer;

      &::before {
        border: solid 3px #316fee;
        box-shadow: 0 0 10px rgba(#316fee, 0.9);
      }
    }
  }

  &--switcher {
    padding-left: 56px;

    .base-checkbox__input {
      &:checked ~ .base-checkbox {
        &__label {
          &::before {
            background-color: #316fee;
            border: 0;
          }
          &::after {
            transform: translateX(24px);
            border-color: #316fee;
          }
          &:not(.Checkbox__label--disabled):hover {
            &:not(.Checkbox__label--red)::before {
              box-shadow: 0 0 0 4px rgba(#316fee, 0.2);
            }
          }
        }
      }
      &:disabled:checked ~ .base-checkbox {
        &__label {
          &::before {
            background-color: gray;
            border: solid 4px gray;
          }
          &::after {
            background-color: rgb(95, 95, 95);
          }
        }
      }
    }

    .base-checkbox__label {
      &::before,
      &::after {
        height: 24px;
        border-radius: 12px;
        top: 0;
        left: 0;
      }
      &::before {
        width: 48px;
        border: 0;
        box-shadow: 0 0 0 4px transparent;
        background-color: #dcdcdc;
      }
      &::after {
        width: 24px;
        background-color: white;
        border: 1px solid #dcdcdc;
        background-image: none;
        opacity: 1;
      }

      &:not(.base-checkbox__label--disabled):hover {
        &::before {
          border: 0;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
            0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
      }
    }
  }

  &--small {
    min-height: 16px;
    padding-left: 40px;
    .base-checkbox__label {
      min-height: 16px;
      &::before {
        width: 32px;
        height: 16px;
        top: 50%;
        transform: translateY(-50%);
      }
      &::after {
        width: 16px;
        height: 16px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &.base-checkbox--switcher {
      .base-checkbox__input {
        &:checked ~ .base-checkbox {
          &__label {
            &::after {
              transform: translate(16px, -50%);
            }
          }
        }
      }
    }
  }
}
</style>
