<template>
    <div class="wrapper">
        <div>
            <h1 class="text-4xl text-center font-extrabold my-2">
                NBA Odds & Betting Lines
            </h1>
            <div class="flex justify-center">
                <div class="text-center mr-3">
                    <span class="mr-3">Sport:</span>
                    <select
                        class="border-2 rounded-md cursor-pointer p-2"
                        v-model="this.sportSelectValue"
                    >
                        <option value="basketball_nba">NBA</option>
                        <option value="baseball_mlb">MLB</option>
                    </select>
                </div>
                <div class="text-center">
                    <span class="mr-3">Odds:</span>
                    <select
                        class="border-2 rounded-md cursor-pointer p-2"
                        v-model="this.betRateSelectValue"
                    >
                        <option value="Decimal">Decimal</option>
                        <option value="American">American</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="flex box-border max-w-full">
            <table class="w-1/3">
                <thead class="h-10 bg-stone-200 border-b">
                    <tr>
                        <th>Time</th>
                        <th>Game</th>
                        <th class="w-1/6"></th>
                        <th class="hidden lg:table-cell w-14">Open</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="item in oddsDataList" :key="item.id">
                        <tr class="border text-center">
                            <td class="px-2">
                                {{
                                    timeFormat(
                                        new Date(item.commence_time).getTime()
                                    )
                                }}
                            </td>
                            <td class="px-2 flex flex-col">
                                <div class="flex my-2 ml-3">
                                    <img
                                        class="w-6 h-6 mr-2"
                                        :src="
                                            '/' +
                                            this.sportImgUrl +
                                            '/' +
                                            item.away_team +
                                            this.ImgUrl
                                        "
                                        alt=""
                                    />
                                    <span
                                        class="
                                            hover:bg-orange-400
                                            hover:text-white
                                            hover:duration-200
                                        "
                                    >
                                        {{ item.away_team }}
                                    </span>
                                </div>
                                <div class="flex my-2 ml-3">
                                    <img
                                        class="w-6 h-6 mr-2"
                                        :src="
                                            '/' +
                                            this.sportImgUrl +
                                            '/' +
                                            item.home_team +
                                            this.ImgUrl
                                        "
                                        alt=""
                                    />
                                    <span
                                        class="
                                            hover:bg-orange-400
                                            hover:text-white
                                            hover:duration-200
                                        "
                                    >
                                        {{ item.home_team }}
                                    </span>
                                </div>
                            </td>
                            <td class="px-2 mr-4">
                                <div @click="getOddsLine()" class="primary-btn">
                                    Line
                                </div>
                            </td>
                            <td
                                class="
                                    hidden
                                    lg:block
                                    text-sm text-gray-600
                                    flex flex-col
                                    items-center
                                "
                            >
                                <div
                                    v-if="sportSelectValue === 'basketball_nba'"
                                >
                                    {{
                                        'O' + item.bookmakers[3]['markets'][2]
                                            ? item.bookmakers[3]['markets'][2][
                                                  'outcomes'
                                              ][0]['point']
                                            : ''
                                    }}
                                </div>
                                <div
                                    v-else-if="
                                        sportSelectValue === 'baseball_mlb'
                                    "
                                >
                                    {{
                                        item.bookmakers[3]['markets'][0][
                                            'outcomes'
                                        ][0]['price'].toFixed(2)
                                    }}
                                </div>
                                <div
                                    v-if="sportSelectValue === 'basketball_nba'"
                                >
                                    {{
                                        item.bookmakers[3]['markets'][1][
                                            'outcomes'
                                        ][1]['point'].toFixed(1)
                                    }}
                                </div>
                                <div
                                    v-else-if="
                                        sportSelectValue === 'baseball_mlb'
                                    "
                                >
                                    {{
                                        item.bookmakers[3]['markets'][0][
                                            'outcomes'
                                        ][1]['price'].toFixed(2)
                                    }}
                                </div>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>

            <table class="oddsTable" v-if="sportSelectValue === 'basketball_nba'">
                <thead class="h-10 bg-stone-200 border-b">
                    <tr>
                        <th>
                            <a
                                class="flex justify-center items-center"
                                href="https://www.bet365.com/#/HO/"
                            >
                                <img
                                    class="w-28 h-8"
                                    src="/bet365.svg"
                                    alt=""
                                />
                            </a>
                        </th>
                        <th>
                            <a
                                class="flex justify-center items-center"
                                href="https://sportsbook.fanduel.com/"
                            >
                                <img
                                    class="w-28 h-8"
                                    src="/fanduel.jpg"
                                    alt=""
                                />
                            </a>
                        </th>
                        <th>
                            <a
                                class="flex justify-center items-center"
                                href="https://sports.williamhill.com/betting/en-gb"
                            >
                                <img
                                    class="w-28 h-8"
                                    src="/williamhill.svg"
                                    alt=""
                                />
                            </a>
                        </th>
                        <th>
                            <a
                                class="flex justify-center items-center"
                                href="https://www.betvictor.com/"
                            >
                                <img
                                    class="w-28 h-8"
                                    src="/betvictor.svg"
                                    alt=""
                                />
                            </a>
                        </th>
                        <th>
                            <a
                                class="flex justify-center items-center"
                                href="https://www.betus.com.pa/sportsbook/"
                            >
                                <img class="w-28 h-8" src="/betus.svg" alt="" />
                            </a>
                        </th>
                    </tr>
                </thead>
                <tbody class="border-b">
                    <template v-for="item in oddsDataList" :key="item.id">
                        <tr class="border text-sm">
                            <template
                                v-for="list in item.bookmakers"
                                :key="list.key"
                            >
                                <td v-if="list.title === 'FOX Bet'">
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[2]
                                                    ? list.markets[2][
                                                          'outcomes'
                                                      ][0]['point']
                                                    : ''
                                            }}
                                        </span>

                                        <span class="text-gray-400">
                                            {{
                                                list.markets[2]
                                                    ? betRateConvert(
                                                          list.markets[2][
                                                              'outcomes'
                                                          ][0]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[1]
                                                    ? list.markets[1][
                                                          'outcomes'
                                                      ][1]['point']
                                                    : ''
                                            }}
                                        </span>
                                        <span class="text-gray-400">
                                            {{
                                                list.markets[1]
                                                    ? betRateConvert(
                                                          list.markets[1][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                </td>
                                <td v-else-if="list.title === 'FanDuel'">
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[2]
                                                    ? list.markets[2][
                                                          'outcomes'
                                                      ][0]['point']
                                                    : ''
                                            }}
                                        </span>

                                        <span class="text-gray-400">
                                            {{
                                                list.markets[2]
                                                    ? betRateConvert(
                                                          list.markets[2][
                                                              'outcomes'
                                                          ][0]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[1]
                                                    ? list.markets[1][
                                                          'outcomes'
                                                      ][1]['point']
                                                    : ''
                                            }}
                                        </span>
                                        <span class="text-gray-400">
                                            {{
                                                list.markets[1]
                                                    ? betRateConvert(
                                                          list.markets[1][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                </td>
                                <td
                                    v-else-if="
                                        list.title === 'William Hill (US)'
                                    "
                                >
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[2]
                                                    ? list.markets[2][
                                                          'outcomes'
                                                      ][0]['point']
                                                    : ''
                                            }}
                                        </span>

                                        <span class="text-gray-400">
                                            {{
                                                list.markets[2]
                                                    ? betRateConvert(
                                                          list.markets[2][
                                                              'outcomes'
                                                          ][0]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[1]
                                                    ? list.markets[1][
                                                          'outcomes'
                                                      ][1]['point']
                                                    : ''
                                            }}
                                        </span>
                                        <span class="text-gray-400">
                                            {{
                                                list.markets[1]
                                                    ? betRateConvert(
                                                          list.markets[1][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                </td>
                                <td v-else-if="list.title === 'BetUS'">
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[2] &&
                                                list.markets[2]['key'] ==
                                                    'totals'
                                                    ? list.markets[2][
                                                          'outcomes'
                                                      ][0]['point']
                                                    : ''
                                            }}
                                        </span>

                                        <span class="text-gray-400">
                                            {{
                                                list.markets[2]
                                                    ? betRateConvert(
                                                          list.markets[2][
                                                              'outcomes'
                                                          ][0]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[1]
                                                    ? list.markets[1][
                                                          'outcomes'
                                                      ][1]['point']
                                                    : ''
                                            }}
                                        </span>
                                        <span class="text-gray-400">
                                            {{
                                                list.markets[1]
                                                    ? betRateConvert(
                                                          list.markets[1][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                </td>
                                <td v-else-if="list.title === 'DraftKings'">
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[2]
                                                    ? list.markets[2][
                                                          'outcomes'
                                                      ][0]['point']
                                                    : ''
                                            }}
                                        </span>

                                        <span class="text-gray-400">
                                            {{
                                                list.markets[2]
                                                    ? betRateConvert(
                                                          list.markets[2][
                                                              'outcomes'
                                                          ][0]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[1]
                                                    ? list.markets[1][
                                                          'outcomes'
                                                      ][1]['point']
                                                    : ''
                                            }}
                                        </span>
                                        <span class="text-gray-400">
                                            {{
                                                list.markets[1]
                                                    ? betRateConvert(
                                                          list.markets[1][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                </td>
                            </template>
                        </tr>
                    </template>
                </tbody>
            </table>
            <table class="oddsTable" v-if="sportSelectValue === 'baseball_mlb'">
                <thead class="h-10 bg-stone-200 border-b">
                    <tr>
                        <th>
                            <a
                                class="flex justify-center items-center"
                                href="https://www.bet365.com/#/HO/"
                            >
                                <img
                                    class="w-28 h-8"
                                    src="/bet365.svg"
                                    alt=""
                                />
                            </a>
                        </th>
                        <th>
                            <a
                                class="flex justify-center items-center"
                                href="https://sportsbook.fanduel.com/"
                            >
                                <img
                                    class="w-28 h-8"
                                    src="/fanduel.jpg"
                                    alt=""
                                />
                            </a>
                        </th>
                        <th>
                            <a
                                class="flex justify-center items-center"
                                href="https://sports.williamhill.com/betting/en-gb"
                            >
                                <img
                                    class="w-28 h-8"
                                    src="/williamhill.svg"
                                    alt=""
                                />
                            </a>
                        </th>
                        <th>
                            <a
                                class="flex justify-center items-center"
                                href="https://www.betvictor.com/"
                            >
                                <img
                                    class="w-28 h-8"
                                    src="/betvictor.svg"
                                    alt=""
                                />
                            </a>
                        </th>
                        <th>
                            <a
                                class="flex justify-center items-center"
                                href="https://www.betus.com.pa/sportsbook/"
                            >
                                <img class="w-28 h-8" src="/betus.svg" alt="" />
                            </a>
                        </th>
                    </tr>
                </thead>
                <tbody class="border-b">
                    <template v-for="item in oddsDataList" :key="item.id">
                        <tr class="border text-sm">
                            <template
                                v-for="list in item.bookmakers"
                                :key="list.key"
                            >
                                <td v-if="list.title === 'FOX Bet'">
                                    <div class="flex flex-col justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[0]
                                                    ? betRateConvert(
                                                          list.markets[0][
                                                              'outcomes'
                                                          ][0]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>

                                        <span class="">
                                            {{
                                                list.markets[0]
                                                    ? betRateConvert(
                                                          list.markets[0][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[1]
                                                    ? list.markets[1][
                                                          'outcomes'
                                                      ][1]['point']
                                                    : ''
                                            }}
                                        </span>
                                        <span class="text-gray-400">
                                            {{
                                                list.markets[1]
                                                    ? betRateConvert(
                                                          list.markets[1][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                </td>
                                <td v-else-if="list.title === 'FanDuel'">
                                    <div class="flex flex-col justify-center items-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[0]
                                                    ? betRateConvert(
                                                          list.markets[0][
                                                              'outcomes'
                                                          ][0]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>

                                        <span class="">
                                            {{
                                                list.markets[0]
                                                    ? betRateConvert(
                                                          list.markets[0][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[1]
                                                    ? list.markets[1][
                                                          'outcomes'
                                                      ][1]['point']
                                                    : ''
                                            }}
                                        </span>
                                        <span class="text-gray-400">
                                            {{
                                                list.markets[1]
                                                    ? betRateConvert(
                                                          list.markets[1][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                </td>
                                <td
                                    v-else-if="
                                        list.title === 'William Hill (US)'
                                    "
                                >
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[0]
                                                    ? betRateConvert(
                                                          list.markets[0][
                                                              'outcomes'
                                                          ][0]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>

                                        <span class="text-gray-400">
                                            {{
                                                list.markets[0]
                                                    ? betRateConvert(
                                                          list.markets[0][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[1]
                                                    ? list.markets[1][
                                                          'outcomes'
                                                      ][1]['point']
                                                    : ''
                                            }}
                                        </span>
                                        <span class="text-gray-400">
                                            {{
                                                list.markets[1]
                                                    ? betRateConvert(
                                                          list.markets[1][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                </td>
                                <td v-else-if="list.title === 'BetUS'">
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[0]
                                                    ? betRateConvert(
                                                          list.markets[0][
                                                              'outcomes'
                                                          ][0]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>

                                        <span class="text-gray-400">
                                            {{
                                                list.markets[0]
                                                    ? betRateConvert(
                                                          list.markets[0][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[1]
                                                    ? list.markets[1][
                                                          'outcomes'
                                                      ][1]['point']
                                                    : ''
                                            }}
                                        </span>
                                        <span class="text-gray-400">
                                            {{
                                                list.markets[1]
                                                    ? betRateConvert(
                                                          list.markets[1][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                </td>
                                <td v-else-if="list.title === 'DraftKings'">
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[0]
                                                    ? betRateConvert(
                                                          list.markets[0][
                                                              'outcomes'
                                                          ][0]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>

                                        <span class="text-gray-400">
                                            {{
                                                list.markets[0]
                                                    ? betRateConvert(
                                                          list.markets[0][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                    <div class="flex justify-center">
                                        <span class="mr-2">
                                            {{
                                                list.markets[1]
                                                    ? list.markets[1][
                                                          'outcomes'
                                                      ][1]['point']
                                                    : ''
                                            }}
                                        </span>
                                        <span class="text-gray-400">
                                            {{
                                                list.markets[1]
                                                    ? betRateConvert(
                                                          list.markets[1][
                                                              'outcomes'
                                                          ][1]['price']
                                                      )
                                                    : ''
                                            }}
                                        </span>
                                    </div>
                                </td>
                            </template>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script type="module">
import Utils from '../utility/util.js'
import Api from '../api/request.js'
import { ref, watch, onMounted, nextTick } from 'vue'
export default {
    setup() {
        const ImgUrl = ref('.svg')
        const sportImgUrl = ref('MLB')
        const showModal = ref(false)
        const sportSelectValue = ref('baseball_mlb')
        const marketSelectValue = ref('h2h,spreads,totals')
        const betRateSelectValue = ref('Decimal')
        const oddsDataList = ref([])

        onMounted(() => {
            getList()
            console.log(oddsDataList.value)
        })
        async function getList() {
            Api(`/${sportSelectValue.value}/odds`, {
                params: {
                    markets: marketSelectValue.value, // 獨贏 讓分 大小
                    oddsFormat: 'decimal',
                },
            })
                .then((res) => {
                    console.log(res)
                    oddsDataList.value = res.data
                    console.log(oddsDataList.value)
                })
                .catch((err) => {
                    console.error(err)
                })
            await nextTick()
        }
        function timeFormat(timeStamp) {
            return Utils.dateFormat(timeStamp, '-', true)
        }
        function betRateConvert(value) {
            switch (betRateSelectValue.value) {
                // 美式賠率
                case 'American':
                    if (value < 2) {
                        return -(100 / Math.abs(value - 1)).toFixed(0)
                    } else if (value >= 2) {
                        return '+' + (Math.abs(value - 1) * 100).toFixed(0)
                    }
                    break
                case 'Decimal':
                    return value
                default:
            }
        }
        // function getOddsLine() {}
        watch(betRateSelectValue, () => {
            betRateConvert()
        })
        watch(sportSelectValue, () => {
            switch (sportSelectValue.value) {
                case 'basketball_nba':
                    sportImgUrl.value = 'NBA'
                case 'baseball_mlb':
                    sportImgUrl.value = 'MLB'
                    marketSelectValue.value = 'h2h'
            }
            getList()
        })
        return {
            ImgUrl,
            sportImgUrl,
            showModal,
            sportSelectValue,
            marketSelectValue,
            betRateSelectValue,
            oddsDataList,
            getList,
            timeFormat,
            betRateConvert,
        }
    },
}
</script>
<style lang="postcss">
.wrapper {
    max-width: 1200px;
    @apply mt-12 mx-auto;
}
.primary-btn {
    @apply border border-orange-500 text-center py-1 px-2 rounded-md cursor-pointer hover:bg-orange-600 hover:text-white hover:duration-100;
}
.oddsTable {
    width: 66%;
}
</style>