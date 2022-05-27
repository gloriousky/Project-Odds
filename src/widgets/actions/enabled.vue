<template>
  <Button size="xs" type="green" @click="onClick">
    <slot />
  </Button>
</template>
<script>
import { inject } from "vue";
import useI18n from "@/hooks/use-i18n";
import { CONFIRM_QUESTION_GREEN } from "@/plugins/sweetalert";
import Button from "@/widgets/button";

export default {
  name: "ActionEnabled",
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
        ...CONFIRM_QUESTION_GREEN,
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
          ...CONFIRM_QUESTION_GREEN,
          title: props.confirmTitle,
          input: "password",
          inputPlaceholder: t("widgets.actions.auth.placeholder"),
          inputValidator(value) {
            if (value === "") return t("widgets.actions.auth.valid");
          },
          showLoaderOnConfirm: true,
          async preConfirm() {
            swal.getCancelButton().style.display = "none";
            const password = swal.getInput().value;
            swal.getInput().setAttribute("disabled", true);
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
