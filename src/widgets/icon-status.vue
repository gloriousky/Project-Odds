<template>
  <Tooltip v-if="enabled" class="text-green-500" :content="trueValue">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 mx-auto"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clip-rule="evenodd"
      />
    </svg>
  </Tooltip>
  <Tooltip v-else class="text-red-500" :content="falseValue">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 mx-auto"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
        clip-rule="evenodd"
      />
    </svg>
  </Tooltip>
</template>

<script>
import Tooltip from "@/widgets/tooltip";

export default {
  name: "IconStatus",
  props: {
    enabled: {
      type: Boolean,
      default: false,
    },
    trueValue: String,
    falseValue: String,
  },
  components: { Tooltip },
  setup() {
    return {};
  },
};
</script>
