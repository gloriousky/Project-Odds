<template>
  <Dropdown placement="left">
    <template #trigger="{ onOpen }">
      <Tooltip tag="div" :content="t('widgets.actions.filter.tooltip')">
        <a
          href="#"
          class="text-gray-500 hover:text-gray-900 cursor-pointer hover:bg-gray-100 rounded flex justify-center items-center w-8 h-8"
          @click.prevent="onOpen"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </Tooltip>
    </template>
    <template #content>
      <div class="w-48 divide-y divide-gray-100">
        <div
          class="dropdown__content__header text-sm hover:bg-gray-100 cursor-pointer bg-white sticky top-0"
          @click="onAllClick"
        >
          <input
            type="checkbox"
            class="form-checkbox bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded mr-1"
            :checked="options.length === modelValue.length"
          />
          <span class="whitespace-nowrap">
            {{ t("widgets.actions.filter.all") }}
          </span>
        </div>
        <div class="dropdown__content__body">
          <label
            v-for="item in options"
            :key="`item--${item.value}`"
            class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer truncate"
          >
            <input
              type="checkbox"
              class="form-checkbox bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded mr-1"
              :value="item.value"
              v-model="checked"
            />
            <span class="whitespace-nowrap">
              {{ item.children }}
            </span>
          </label>
        </div>
      </div>
    </template>
  </Dropdown>
</template>
<script>
import { ref, watch } from "vue";
import useI18n from "@/hooks/use-i18n";
import Tooltip from "@/widgets/tooltip";
import Dropdown from "@/widgets/dropdown";
import { pluck } from "ramda";

export default {
  name: "ActionFilter",
  components: {
    Tooltip,
    Dropdown,
  },
  props: {
    modelValue: Array,
    options: Array,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { t } = useI18n();
    const checked = ref(props.modelValue);

    const onAllClick = () => {
      if (props.options.length === props.modelValue.length) {
        emit("update:modelValue", []);
      } else {
        emit("update:modelValue", pluck("value", props.options));
      }
    };

    watch(checked, (values) => {
      emit("update:modelValue", values);
    });

    return {
      t,
      onAllClick,
      checked,
    };
  },
};
</script>
