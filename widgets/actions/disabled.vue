<template>
  <Button size="xs" type="red" @click="onClick">
    <slot />
  </Button>
</template>
<script>
import { inject } from "vue";
import useI18n from "@/hooks/use-i18n";
import { CONFIRM_QUESTION_RED } from "@/plugins/sweetalert";
import Button from "@/widgets/button";

export default {
  name: "ActionDisabled",
  emits: ["click"],
  components: {
    Button,
  },
  props: {
    confirmTitle: {
      type: String,
      required: true,
    },
    confirmText: {
      type: String,
      required: true,
    },
    auth: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const { t } = useI18n();

    const swal = inject("$swal");
    const onClick = async () => {
      const { isConfirmed } = await swal.fire({
        ...CONFIRM_QUESTION_RED,
        title: props.confirmTitle,
        text: props.confirmText,
      });

      if (isConfirmed) {
        if (!props.auth) {
          return new Promise((resolve) => {
            emit("click", resolve);
          });
        }

        await swal.fire({
          ...CONFIRM_QUESTION_RED,
          title: props.confirmTitle,
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
