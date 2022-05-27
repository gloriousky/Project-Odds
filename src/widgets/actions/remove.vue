<template>
  <Tooltip :content="t('widgets.actions.remove.tooltip')">
    <a
      href="#"
      class="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center"
      @click.prevent="onClick"
    >
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </a>
  </Tooltip>
</template>
<script>
import { inject } from "vue";
import { useStore } from "vuex";
import useI18n from "@/hooks/use-i18n";
import { CONFIRM_QUESTION_RED } from "@/plugins/sweetalert";
import Tooltip from "@/widgets/tooltip";
export default {
  name: "ActionRemove",
  emits: ["click"],
  components: {
    Tooltip,
  },
  props: {
    invalid: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const store = useStore();
    const { t } = useI18n();

    const swal = inject("$swal");
    const onClick = async () => {
      if (props.invalid) {
        store.commit("app/set/alert", {
          type: "warning",
          message: t("widgets.actions.remove.invalid.text"),
        });
        return;
      }
      const { isConfirmed } = await swal.fire({
        ...CONFIRM_QUESTION_RED,
        title: t("widgets.actions.remove.title"),
        text: t("widgets.actions.remove.text"),
      });

      if (isConfirmed) {
        await swal.fire({
          ...CONFIRM_QUESTION_RED,
          title: t("widgets.actions.remove.title"),
          input: "password",
          inputPlaceholder: t("widgets.actions.auth.placeholder"),
          inputValidator(value) {
            if (value === "") return t("widgets.actions.auth.valid");
          },
          showLoaderOnConfirm: true,
          async preConfirm() {
            swal.getCancelButton().style.display = "none";
            swal.getInput().setAttribute("disabled", true);
            const password = swal.getInput().value;
            return new Promise((resolve) => {
              emit("click", resolve, password);
            });
          },
        });
      }
    };

    return {
      t,
      onClick,
    };
  },
};
</script>
