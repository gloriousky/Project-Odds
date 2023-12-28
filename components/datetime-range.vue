<template>
  <div class="w-full md:w-48">
    <DatetimePicker
      :modelValue="begin"
      @update:modelValue="onBeginChanged"
      :placeholder="beginPlacholder"
      :min-date-time="min"
      :max-date-time="end"
      input
    />
  </div>
  <div class="w-full md:w-48">
    <DatetimePicker
      :modelValue="end"
      @update:modelValue="onEndChanged"
      :placeholder="endPlacholder"
      :min-date-time="begin"
      :max-date-time="max"
      input
    />
  </div>
  <div class="w-full md:w-64 grid grid-cols-9 gap-1">
    <Button
      class="col-span-2"
      size="md"
      type="dark"
      @click="onRangeChanged('today')"
    >
      {{ t("$current.today") }}
    </Button>
    <Button
      class="col-span-3"
      size="md"
      type="dark"
      @click="onRangeChanged('this-7-days')"
    >
      {{ t("$current.this.7.days") }}
    </Button>
    <Button
      class="col-span-2"
      size="md"
      type="cyan"
      @click="onRangeChanged('this-month')"
    >
      {{ t("$current.this.month") }}
    </Button>
    <Button
      class="col-span-2"
      size="md"
      type="cyan"
      @click="onRangeChanged('last-month')"
    >
      {{ t("$current.last.month") }}
    </Button>
  </div>
</template>
<script>
import useI18n from "@/hooks/use-i18n";
import Button from "@/widgets/button";
import DatetimePicker from "@/widgets/datetime-picker";
import { format, addDays, startOfMonth, endOfMonth, addMonths } from "date-fns";

export default {
  props: {
    begin: String,
    end: String,
    beginPlacholder: String,
    endPlacholder: String,
    min: String,
    max: String,
  },
  emits: ["update:begin", "update:end"],
  components: {
    Button,
    DatetimePicker,
  },
  setup(_, { emit }) {
    const { t, setPrefix } = useI18n();
    setPrefix("widgets.conditions.datetime.range");

    const onBeginChanged = (value) => {
      emit("update:begin", value);
    };
    const onEndChanged = (value) => {
      emit("update:end", value);
    };
    const onRangeChanged = (range) => {
      let begin, end;
      switch (range) {
        case "today":
          begin = format(Date.now(), "yyyy-MM-dd 00:00:00");
          end = format(Date.now(), "yyyy-MM-dd 23:59:59");
          break;
        case "this-7-days":
          begin = format(addDays(Date.now(), -6), "yyyy-MM-dd 00:00:00");
          end = format(Date.now(), "yyyy-MM-dd 23:59:59");
          break;
        case "this-month":
          begin = format(startOfMonth(Date.now()), "yyyy-MM-dd 00:00:00");
          end = format(endOfMonth(Date.now()), "yyyy-MM-dd 23:59:59");
          break;
        case "last-month":
          begin = format(
            startOfMonth(addMonths(Date.now(), -1)),
            "yyyy-MM-dd 00:00:00"
          );
          end = format(
            endOfMonth(addMonths(Date.now(), -1)),
            "yyyy-MM-dd 23:59:59"
          );
          break;
      }
      emit("update:begin", begin);
      emit("update:end", end);
    };

    return { t, onBeginChanged, onEndChanged, onRangeChanged };
  },
};
</script>
