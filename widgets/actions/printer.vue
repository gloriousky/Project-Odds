<template>
  <Tooltip :content="t('widgets.actions.printer.tooltip')">
    <a
      href="#"
      class="text-gray-500 hover:text-gray-900 cursor-pointer hover:bg-gray-100 rounded flex justify-center items-center w-8 h-8"
      @click.prevent="onClick"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </Tooltip>
</template>
<script>
import useI18n from "@/hooks/use-i18n";
import Tooltip from "@/widgets/tooltip";

export default {
  name: "ActionPrinter",
  components: {
    Tooltip,
  },
  setup() {
    const { t } = useI18n();

    const onClick = async () => {
      window.print();
    };

    return {
      t,
      onClick,
    };
  },
};
</script>
