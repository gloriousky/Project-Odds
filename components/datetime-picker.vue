<template>
  <Dropdown placement="left">
    <template #trigger="{ isOpen, onOpen }">
      <div class="relative">
        <input
          type="text"
          :placeholder="placeholder"
          class="form-control"
          :class="[isOpen && 'form-control--focus']"
          v-model="inputText.date"
          @focus="() => (readonly ? false : onOpen())"
          @blur="onInputComputed"
          @keypress.enter="onInputComputed"
          autocomplete="new-password"
          :readonly="!input || readonly"
        />
        <b
          v-if="isOpen"
          class="absolute z-10 top-0 bottom-0 right-3 flex justify-center items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </b>
      </div>
    </template>
    <template #content>
      <div class="w-80 rounded-lg bg-white shadow-lg p-4">
        <div class="flex justify-between mb-2" v-if="actions.steps < 3">
          <button
            v-if="render.isPreBtnDisplay"
            type="button"
            class="bg-white rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-lg p-2.5 focus:outline-none"
            @click="onPrevClick"
          >
            <svg
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div v-else class="block p-2.5"></div>
          <button
            type="button"
            class="text-sm rounded-lg text-gray-900 bg-white font-semibold py-2.5 px-5 hover:bg-gray-100 focus:outline-none"
            @click="onHeadClick"
          >
            {{ render.head }}
          </button>
          <button
            v-if="render.isNextBtnDisplay"
            type="button"
            class="bg-white rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-lg p-2.5 focus:outline-none"
            @click="onNextClick"
          >
            <svg
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div v-else class="block p-2.5"></div>
        </div>
        <div class="p-1">
          <div class="w-full grid grid-cols-4" v-if="actions.steps === 0">
            <span
              class="block flex-1 leading-9 border-0 rounded-lg text-center font-semibold text-sm"
              v-for="year in render.range"
              :key="`years-${year.year}`"
              @click="onYearChanged(year)"
              :class="[
                year.invalid
                  ? 'text-gray-300'
                  : year.isActive
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-900 hover:bg-gray-100 cursor-pointer',
              ]"
            >
              {{ year.year }}
            </span>
          </div>
          <div class="w-full grid grid-cols-4" v-if="actions.steps === 1">
            <span
              class="block flex-1 leading-9 border-0 rounded-lg text-center font-semibold text-sm"
              v-for="month in render.range"
              :key="`month-${month.year}-${month.month}`"
              @click="onMonthChanged(month)"
              :class="[
                month.invalid
                  ? 'text-gray-300'
                  : month.isActive
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-900 hover:bg-gray-100 cursor-pointer ',
              ]"
            >
              {{ months[month.month] }}
            </span>
          </div>
          <div class="flex flex-col" v-if="actions.steps === 2">
            <div class="w-full grid grid-cols-7 mb-1">
              <span
                v-for="day in dayOfWeek"
                :key="`day-${day}`"
                class="text-center h-6 leading-6 text-sm font-medium text-gray-500"
              >
                {{ day }}
              </span>
            </div>
            <div class="w-full grid grid-cols-7">
              <span
                v-for="date in render.range"
                :key="`day-${date.year}-${date.month}-${date.day}`"
                @click="onDayChanged(date)"
                class="block flex-1 leading-9 border-0 rounded-lg text-center text-sm"
                :class="[
                  date.isToday && 'day--today',
                  date.invalid
                    ? 'text-gray-300'
                    : date.isActive
                    ? 'bg-cyan-600 text-white cursor-pointer'
                    : date.month === render.month
                    ? 'text-gray-900 hover:bg-gray-100 font-semibold cursor-pointer'
                    : 'text-gray-500 hover:bg-gray-100 font-normal cursor-pointer',
                ]"
              >
                {{ date.day }}
              </span>
            </div>
          </div>
          <div class="w-full flex flex-col mb-3" v-if="actions.steps === 3">
            <Button size="sm" type="light" @click="setStartToday" full>
              {{ t("$current.start.of.today") }}
            </Button>
            <div class="w-full flex justify-between px-8">
              <div class="flex flex-col justify-center items-center py-2">
                <button
                  class="rounded p-1 border-0 m-0"
                  @click="onTimeComputed('hours', -1)"
                  :class="[
                    current.isMinHour
                      ? 'text-gray-100'
                      : 'cursor-pointer hover:bg-gray-100',
                  ]"
                  :disabled="current.isMinHour"
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <input
                  type="text"
                  class="form-control my-2 text-center"
                  style="width: 3rem"
                  v-model="inputText.hour"
                  @blur="onInputHourComputed"
                  @keypress.enter="onInputHourComputed"
                  autocomplete="new-password"
                  :readonly="!input || readonly"
                />
                <button
                  class="rounded p-1 border-0 m-0"
                  @click="onTimeComputed('hours', 1)"
                  :class="[
                    current.isMaxHour
                      ? 'text-gray-100'
                      : 'cursor-pointer hover:bg-gray-100',
                  ]"
                  :disabled="current.isMaxHour"
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex items-center justify-center font-black">:</div>
              <div class="flex flex-col justify-center items-center">
                <button
                  class="rounded p-1 border-0 m-0"
                  @click="onTimeComputed('minutes', -1)"
                  :class="[
                    current.isMinMinute
                      ? 'text-gray-100'
                      : 'cursor-pointer hover:bg-gray-100',
                  ]"
                  :disabled="current.isMinMinute"
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <input
                  type="text"
                  class="form-control my-2 text-center"
                  style="width: 3rem"
                  v-model="inputText.minute"
                  @blur="onInputMinuteComputed"
                  @keypress.enter="onInputMinuteComputed"
                  autocomplete="new-password"
                  :readonly="!input || readonly"
                />
                <button
                  class="rounded p-1 border-0 m-0"
                  @click="onTimeComputed('minutes', 1)"
                  :class="[
                    current.isMaxMinute
                      ? 'text-gray-100'
                      : 'cursor-pointer hover:bg-gray-100',
                  ]"
                  :disabled="current.isMaxMinute"
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex items-center justify-center font-black">:</div>
              <div class="flex flex-col justify-center items-center">
                <button
                  class="rounded p-1 border-0 m-0"
                  @click="onTimeComputed('seconds', -1)"
                  :class="[
                    current.isMinSecond
                      ? 'text-gray-100'
                      : 'cursor-pointer hover:bg-gray-100',
                  ]"
                  :disabled="current.isMinSecond"
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <input
                  type="text"
                  class="form-control my-2 text-center"
                  style="width: 3rem"
                  v-model="inputText.second"
                  @blur="onInputSecondComputed"
                  @keypress.enter="onInputSecondComputed"
                  autocomplete="new-password"
                  :readonly="!input || readonly"
                />
                <button
                  class="rounded p-1 border-0 m-0"
                  @click="onTimeComputed('seconds', 1)"
                  :class="[
                    current.isMaxSecond
                      ? 'text-gray-100'
                      : 'cursor-pointer hover:bg-gray-100',
                  ]"
                  :disabled="current.isMaxSecond"
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <Button size="sm" type="light" @click="setEndToday" full>
              {{ t("$current.end.of.today") }}
            </Button>
          </div>
        </div>
        <div
          v-if="actions.steps < 3"
          class="flex space-x-2 mt-2 justify-between"
        >
          <Button v-if="tools.hasToday" size="sm" @click="setToday" full>
            {{ t("$current.today") }}
          </Button>
          <Button
            v-if="tools.hasClear"
            size="sm"
            type="light"
            @click="onClear"
            full
          >
            <svg
              class="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {{ t("$current.clear") }}
          </Button>
          <Button
            v-if="tools.hasTime"
            size="sm"
            type="light"
            @click="openTime"
            full
          >
            <svg
              class="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {{ t("$current.time") }}
          </Button>
        </div>
        <div v-else class="mt-2 flex space-x-2 justify-between">
          <Button v-if="tools.hasToday" size="sm" @click="setNow" full>
            {{ t("$current.now") }}
          </Button>
          <Button
            v-if="tools.hasClear"
            size="sm"
            type="light"
            @click="onClear"
            full
          >
            <svg
              class="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {{ t("$current.clear") }}
          </Button>
          <Button size="sm" type="light" @click="openDate" full>
            <svg
              class="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {{ t("$current.date") }}
          </Button>
        </div>
      </div>
    </template>
  </Dropdown>
</template>
<script>
import { reactive, computed, watchEffect } from "vue";
import useI18n from "@/hooks/use-i18n";
import Dropdown from "@/widgets/dropdown";
import Button from "@/widgets/button";
import {
  format,
  add,
  set,
  startOfYear,
  endOfYear,
  startOfMonth,
  endOfMonth,
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  eachMonthOfInterval,
  isToday,
  isValid,
  isAfter,
  min,
  max,
  differenceInSeconds,
} from "date-fns";
import { zhTW, zhCN } from "date-fns/locale";
import { times, map, head, last } from "ramda";

export default {
  name: "DatetimePicker",
  props: {
    modelValue: String,
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false,
    },
    input: {
      type: Boolean,
      default: false,
    },
    "tools:today": {
      type: Boolean,
      default: false,
    },
    "tools:clear": {
      type: Boolean,
      default: false,
    },
    "no:time": {
      type: Boolean,
      default: false,
    },
    minDateTime: String,
    maxDateTime: String,
  },
  emits: ["update:modelValue"],
  components: {
    Dropdown,
    Button,
  },
  setup(props, { emit }) {
    const { t, setPrefix, locale: currentLocale } = useI18n();
    setPrefix("widgets.datetime.picker");

    const locale = computed(
      () => ({ "zh-tw": zhTW, "zh-cn": zhCN }[currentLocale.value])
    );
    const inputText = reactive({
      date: "",
      hour: "",
      minute: "",
      second: "",
    });
    const tools = reactive({
      hasToday: computed(() => props["tools:today"]),
      hasClear: computed(() => props["tools:clear"]),
      hasTime: computed(() => !props["no:time"]),
    });
    const formatText = computed(() =>
      tools.hasTime ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd"
    );
    const dayOfWeek = map(
      (day) => format(day, "EEEEE", { locale: locale.value }),
      eachDayOfInterval({
        start: startOfWeek(new Date()),
        end: endOfWeek(new Date()),
      })
    );
    const months = map(
      (day) => format(day, "LLLL", { locale: locale.value }),
      eachMonthOfInterval({
        start: startOfYear(new Date()),
        end: endOfYear(new Date()),
      })
    );
    const current = reactive({
      all: computed(() => {
        const date = new Date(props.modelValue);
        if (props.modelValue && isValid(date)) return date;
        return new Date();
      }),
      year: computed(() => +format(current.all, "yyyy")),
      month: computed(() => +format(current.all, "M") - 1),
      day: computed(() => +format(current.all, "d")),
      hour: computed(() => +format(current.all, "H")),
      minute: computed(() => +format(current.all, "m")),
      second: computed(() => +format(current.all, "s")),
      max: computed(() => {
        const date = new Date(props.maxDateTime);
        if (props.maxDateTime && isValid(date)) return date;
        return null;
      }),
      min: computed(() => {
        const date = new Date(props.minDateTime);
        if (props.minDateTime && isValid(date)) return date;
        return null;
      }),
      isMaxHour: computed(() => {
        const maxDate = new Date(props.maxDateTime);
        if (props.maxDateTime && isValid(maxDate)) {
          const next = add(current.all, { hours: 1 });
          return differenceInSeconds(maxDate, next) < 0;
        }
        return false;
      }),
      isMaxMinute: computed(() => {
        const maxDate = new Date(props.maxDateTime);
        if (props.maxDateTime && isValid(maxDate)) {
          const next = add(current.all, { minutes: 1 });
          return differenceInSeconds(maxDate, next) < 0;
        }
        return false;
      }),
      isMaxSecond: computed(() => {
        const maxDate = new Date(props.maxDateTime);
        if (props.maxDateTime && isValid(maxDate)) {
          const next = add(current.all, { seconds: 1 });
          return differenceInSeconds(maxDate, next) < 0;
        }
        return false;
      }),
      isMinHour: computed(() => {
        const minDate = new Date(props.minDateTime);
        if (props.minDateTime && isValid(minDate)) {
          const next = add(current.all, { hours: -1 });
          return differenceInSeconds(minDate, next) > 0;
        }
        return false;
      }),
      isMinMinute: computed(() => {
        const minDate = new Date(props.minDateTime);
        if (props.minDateTime && isValid(minDate)) {
          const next = add(current.all, { minutes: -1 });
          return differenceInSeconds(minDate, next) > 0;
        }
        return false;
      }),
      isMinSecond: computed(() => {
        const minDate = new Date(props.minDateTime);
        if (props.minDateTime && isValid(minDate)) {
          const next = add(current.all, { seconds: -1 });
          return differenceInSeconds(minDate, next) > 0;
        }
        return false;
      }),
    });
    const actions = reactive({
      page: 0,
      steps: 2,
    });
    const render = reactive({
      year: computed(() => {
        switch (actions.steps) {
          case 1:
          case 2:
            return current.year + actions.page;
          default:
            return null;
        }
      }),
      month: computed(() => {
        switch (actions.steps) {
          case 2:
            return +format(add(current.all, { months: actions.page }), "M") - 1;
          default:
            return null;
        }
      }),
      range: computed(() => {
        switch (actions.steps) {
          case 0: {
            const start =
              Math.floor(current.year / 10) * 10 + actions.page * 12 - 1;

            return times((idx) => {
              const year = start + idx;
              let invalid = false;
              if (current.max) {
                invalid = +format(current.max, "yyyy") < year;
              }
              if (current.min) {
                invalid = +format(current.min, "yyyy") > year;
              }
              return {
                year,
                invalid,
                isActive: current.year === year,
              };
            }, 12);
          }
          case 1: {
            return times((idx) => {
              const year = render.year;
              let invalid = false;
              if (current.max) {
                invalid = isAfter(
                  startOfMonth(new Date(render.year, idx)),
                  current.max
                );
              }
              if (current.min) {
                invalid = isAfter(
                  current.min,
                  endOfMonth(new Date(render.year, idx))
                );
              }

              return {
                year,
                month: idx,
                invalid,
                isActive: current.year === year && current.month === idx,
              };
            }, 12);
          }
          case 2: {
            const currentMonth = add(current.all, { months: actions.page });
            const startMonth = startOfMonth(currentMonth);
            const endMonth = endOfMonth(currentMonth);
            let dates = eachDayOfInterval({
              start: startOfWeek(startMonth),
              end: endOfWeek(endMonth),
            });
            dates = map((date) => {
              const year = +format(date, "yyyy");
              const month = +format(date, "M") - 1;
              const day = +format(date, "d");
              let invalid = false;
              if (current.max) {
                invalid = isAfter(startOfDay(date), current.max);
              }
              if (current.min) {
                invalid = isAfter(current.min, endOfDay(date));
              }

              return {
                year,
                month,
                day,
                isToday: isToday(date),
                isActive:
                  inputText.date !== "" &&
                  year === current.year &&
                  month === current.month &&
                  day === current.day,
                invalid,
              };
            }, dates);
            return dates;
          }
        }
      }),
      head: computed(() => {
        switch (actions.steps) {
          case 0: {
            const start = head(render.range);
            const end = last(render.range);
            return `${start.year}-${end.year}`;
          }
          case 1: {
            return render.year;
          }
          case 2: {
            return format(
              add(current.all, { months: actions.page }),
              "LLLL yyyy",
              { locale: locale.value }
            );
          }
        }
      }),
      isPreBtnDisplay: computed(() => {
        if (!current.min) return true;
        switch (actions.steps) {
          case 0:
            return +format(current.min, "yyyy") < +head(render.range).year;
          case 1:
            return +format(current.min, "yyyy") < render.year;
          case 2: {
            return isAfter(
              startOfMonth(new Date(render.year, render.month)),
              current.min
            );
          }
        }
      }),
      isNextBtnDisplay: computed(() => {
        if (!current.max) return true;
        switch (actions.steps) {
          case 0:
            return +format(current.max, "yyyy") > +last(render.range).year;
          case 1:
            return +format(current.max, "yyyy") > render.year;
          case 2: {
            return isAfter(
              current.max,
              endOfMonth(new Date(render.year, render.month))
            );
          }
        }
      }),
    });
    const onPrevClick = () => {
      actions.page -= 1;
    };
    const onNextClick = () => {
      actions.page += 1;
    };
    const onHeadClick = () => {
      if (actions.steps === 0) return;
      actions.steps -= 1;
      actions.page = 0;
    };
    const onYearChanged = ({ invalid, year }) => {
      if (invalid) return;
      onChanged(set(current.all, { year }));
      actions.steps += 1;
      actions.page = 0;
    };
    const onMonthChanged = ({ invalid, year, month }) => {
      if (invalid) return;
      onChanged(set(current.all, { year, month }));
      actions.steps += 1;
      actions.page = 0;
    };
    const onDayChanged = ({ invalid, year, month, day: date }) => {
      if (invalid) return;
      onChanged(set(current.all, { year, month, date }));
      actions.page = 0;
    };
    const setToday = () => {
      const today = new Date();
      onChanged(
        set(current.all, {
          year: today.getFullYear(),
          month: today.getMonth(),
          date: today.getDate(),
        })
      );
      actions.steps = 2;
      actions.page = 0;
    };
    const setNow = () => {
      const now = new Date();
      onChanged(
        set(current.all, {
          hours: now.getHours(),
          minutes: now.getMinutes(),
          seconds: now.getSeconds(),
        })
      );
    };
    const setStartToday = () => {
      onChanged(
        set(current.all, {
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      );
    };
    const setEndToday = () => {
      onChanged(
        set(current.all, {
          hours: 23,
          minutes: 59,
          seconds: 59,
        })
      );
    };
    const onInputComputed = () => {
      const date = new Date(inputText.date);
      if (isValid(date)) {
        onChanged(date);
      } else {
        onClear();
      }
    };
    const onInputHourComputed = () => {
      if (
        Number.isInteger(+inputText.hour) &&
        +inputText.hour >= 0 &&
        +inputText.hour <= 23
      ) {
        onChanged(
          set(current.all, {
            hours: +inputText.hour,
          })
        );
      } else {
        inputText.hour = format(current.all, "H");
      }
    };
    const onInputMinuteComputed = () => {
      if (
        Number.isInteger(+inputText.minute) &&
        +inputText.minute >= 0 &&
        +inputText.minute <= 59
      ) {
        onChanged(
          set(current.all, {
            minutes: +inputText.minute,
          })
        );
      } else {
        inputText.minute = format(current.all, "m");
      }
    };
    const onInputSecondComputed = () => {
      if (
        Number.isInteger(+inputText.second) &&
        +inputText.second >= 0 &&
        +inputText.second <= 59
      ) {
        onChanged(
          set(current.all, {
            seconds: +inputText.second,
          })
        );
      } else {
        inputText.second = format(current.all, "m");
      }
    };
    const onClear = () => {
      inputText.date = "";
      inputText.hour = "";
      inputText.minute = "";
      inputText.second = "";
      emit("update:modelValue", "");
    };
    const onChanged = (t) => {
      let next = t;
      if (current.max) {
        next = min([t, current.max]);
      }
      if (current.min) {
        next = max([t, current.min]);
      }
      inputText.date = format(next, formatText.value);
      inputText.hour = format(next, "HH");
      inputText.minute = format(next, "mm");
      inputText.second = format(next, "ss");
      emit("update:modelValue", format(next, formatText.value));
    };
    const openDate = () => {
      actions.steps = 2;
      actions.page = 0;
    };
    const openTime = () => {
      actions.steps = 3;
      actions.page = 0;
    };
    const onTimeComputed = (type, value) => {
      onChanged(add(current.all, { [type]: value }));
    };

    watchEffect(() => {
      if (props.modelValue !== "") {
        const date = new Date(props.modelValue);
        if (isValid(date)) {
          inputText.date = format(date, formatText.value);
          inputText.hour = format(date, "HH");
          inputText.minute = format(date, "mm");
          inputText.second = format(date, "ss");
        }
        return;
      }
      inputText.date = "";
      inputText.hour = "";
      inputText.minute = "";
      inputText.second = "";
    });

    return {
      t,
      inputText,
      tools,
      months,
      dayOfWeek,
      actions,
      current,
      render,
      onHeadClick,
      onPrevClick,
      onNextClick,
      onYearChanged,
      onMonthChanged,
      onDayChanged,
      onInputComputed,
      onInputHourComputed,
      onInputMinuteComputed,
      onInputSecondComputed,
      onTimeComputed,
      onClear,
      setToday,
      setNow,
      setEndToday,
      setStartToday,
      openDate,
      openTime,
    };
  },
};
</script>
<style lang="scss" scoped>
.day--today {
  position: relative;
  &::after {
    position: absolute;
    right: 3px;
    bottom: 3px;
    display: block;
    width: 0;
    height: 0;
    border: 3px solid transparent;
    border-right-color: rgba(8, 145, 178, 1);
    border-bottom-color: rgba(8, 145, 178, 1);
    content: "";
  }
}
</style>
