<template>
  <Tooltip :content="t('widgets.actions.export.tooltip')">
    <Dropdown placement="left">
      <template #trigger="{ onOpen }">
        <a
          href="#"
          class="text-gray-500 hover:text-gray-900 cursor-pointer hover:bg-gray-100 rounded flex justify-center items-center w-8 h-8"
          @click.prevent="onOpen"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <i class="fas fa-file-download fa-xs"></i>
          </svg>
        </a>
      </template>
      <template #content="{ onClose }">
        <ul class="dropdown__content__body w-28 divide-y divide-gray-100">
          <li
            class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer truncate"
            @click="onClose"
          >
            <span class="whitespace-nowrap">
              {{ t("widgets.actions.export.file.excel") }}
            </span>
          </li>
          <li
            class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer truncate"
            @click="onClose"
          >
            <span class="whitespace-nowrap">
              {{ t("widgets.actions.export.file.csv") }}
            </span>
          </li>
        </ul>
      </template>
    </Dropdown>
  </Tooltip>
</template>
<script>
import useI18n from "@/hooks/use-i18n";
import Tooltip from "@/widgets/tooltip";
import Dropdown from "@/widgets/dropdown";

export default {
  name: "ActionExport",
  components: {
    Tooltip,
    Dropdown,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
};
</script>
