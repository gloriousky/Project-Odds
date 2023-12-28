<template>
  <div class="overflow-x-auto">
    <div class="align-middle inline-block min-w-full">
      <div class="shadow overflow-hidden">
        <table
          ref="el"
          class="custom-table table-fixed min-w-full divide-y divide-gray-200"
        >
          <thead>
            <slot name="thead"></slot>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-if="isEmpty">
              <td colspan="100%" class="p-3 text-center text-gray-400">
                {{ t("widgets.table.empty") }}
              </td>
            </tr>
            <slot v-else name="tbody"></slot>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, inject, watch, onUnmounted } from "vue";
import useI18n from "@/hooks/use-i18n";

export default {
  name: "WidgetTable",
  props: {
    isEmpty: {
      type: Boolean,
      default: false,
    },
    filter: {
      type: Array,
    },
  },
  setup(props) {
    const el = ref();
    const { t } = useI18n();
    const $ = inject("$jQuery");
    var observer = null;

    const computeFilter = (memberList) => {
      $(el.value)
        .find("thead > tr > th[data-filter]")
        .each(function () {
          const parent = $(this).parent();
          const selfIndex = parent.children().index($(this));
          $(this).data("index", selfIndex);
          const selfKey = $(this).data("filter");
          if (!memberList.includes(selfKey)) {
            $(this).hide();
            $(el.value)
              .find("tbody > tr")
              .each(function () {
                $(this).find("td").eq(selfIndex).hide();
              });
          } else {
            $(this).show();
            $(el.value)
              .find("tbody > tr")
              .each(function () {
                $(this).find("td").eq(selfIndex).show();
              });
          }
        });
    };

    onMounted(() => {
      if (props.filter) {
        computeFilter(props.filter);

        observer = new window.MutationObserver(function () {
          computeFilter(props.filter);
        });
        observer.observe($(el.value).get(0), {
          subtree: true,
          attributes: true,
          childList: true,
          characterData: true,
        });
      }
    });

    onUnmounted(() => {
      observer?.disconnect();
    });

    watch(() => props.filter, computeFilter);

    return {
      t,
      el,
    };
  },
};
</script>
