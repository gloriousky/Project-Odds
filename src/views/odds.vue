<template>
    <div class="absolute top-12">
        <div>
            <h1 class="text-4xl text-center font-extrabold my-2">
                NBA Odds & Betting Lines
            </h1>
            <div class="text-center">
                <span class="mr-3">賠率轉換:</span>
                <select
                    class="border-2 rounded-md cursor-pointer p-2"
                    v-model="this.selectValue"
                >
                    <option value="Decimal">Decimal</option>
                    <option value="American">American</option>
                </select>
            </div>
        </div>
        <div class="flex box-border w-screen p-6">
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
                                            /NBA/ + item.away_team + this.ImgUrl
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
                                            /NBA/ + item.home_team + this.ImgUrl
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
                                <div>
                                    O
                                    {{
                                        item.bookmakers[3]['markets'][2][
                                            'outcomes'
                                        ][0]['point']
                                    }}
                                </div>
                                <div>
                                    {{
                                        item.bookmakers[3]['markets'][1][
                                            'outcomes'
                                        ][1]['point'].toFixed(1)
                                    }}
                                </div>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>

            <table class="w-2/3">
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
        </div>
    </div>
</template>
<script type="module">
import Utils from '../utility/util.js'
import Api from '../api/request.js'
import { ref, watch, onMounted } from 'vue'
export default {
    setup() {
        const ImgUrl = ref('.svg')
        const showModal = ref(false)
        const selectValue = ref('Decimal')
        const oddsDataList = ref([
    {
        "id": "e996cfe67a28cda1e93772a1ccf3f11d",
        "sport_key": "basketball_nba",
        "sport_title": "NBA",
        "commence_time": "2022-03-28T23:00:00Z",
        "home_team": "Charlotte Hornets",
        "away_team": "Denver Nuggets",
        "bookmakers": [
            {
                "key": "unibet",
                "title": "Unibet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.3
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.65
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.92,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.9,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "sugarhouse",
                "title": "SugarHouse",
                "last_update": "2022-03-28T04:11:29Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.3
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.65
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.92,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.89,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "barstool",
                "title": "Barstool Sportsbook",
                "last_update": "2022-03-28T04:11:37Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.3
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.65
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.92,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.89,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "twinspires",
                "title": "TwinSpires",
                "last_update": "2022-03-28T04:11:58Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.3
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.65
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.92,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.89,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "lowvig",
                "title": "LowVig.ag",
                "last_update": "2022-03-28T04:13:05Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.95,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.95,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.95,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.95,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betmgm",
                "title": "BetMGM",
                "last_update": "2022-03-28T04:12:32Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.35
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.62
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.91,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.91,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "gtbets",
                "title": "GTbets",
                "last_update": "2022-03-28T04:12:38Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.45
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.59
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.92,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.92,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.92,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betfair",
                "title": "Betfair",
                "last_update": "2022-03-28T04:12:15Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.44
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.63
                            }
                        ]
                    },
                    {
                        "key": "h2h_lay",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.6
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.7
                            }
                        ]
                    }
                ]
            },
            {
                "key": "bovada",
                "title": "Bovada",
                "last_update": "2022-03-28T04:06:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.4
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.61
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.95,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.87,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betrivers",
                "title": "BetRivers",
                "last_update": "2022-03-28T04:10:09Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.3
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.65
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.92,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.89,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betus",
                "title": "BetUS",
                "last_update": "2022-03-28T04:10:26Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.91,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.91,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "draftkings",
                "title": "DraftKings",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.4
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.62
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.91,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.91,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 232
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 232
                            }
                        ]
                    }
                ]
            },
            {
                "key": "fanduel",
                "title": "FanDuel",
                "last_update": "2022-03-28T04:10:44Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.38
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.61
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.93,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.89,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 232
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 232
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betonlineag",
                "title": "BetOnline.ag",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.9,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.9,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.9,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.9,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "foxbet",
                "title": "FOX Bet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.35
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.55
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.91,
                                "point": 4
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.91,
                                "point": -4
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "wynnbet",
                "title": "WynnBET",
                "last_update": "2022-03-28T04:11:00Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.56
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.91,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.91,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "williamhill_us",
                "title": "William Hill (US)",
                "last_update": "2022-03-28T04:11:11Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.45
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.59
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.91,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.91,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "pointsbetus",
                "title": "PointsBet (US)",
                "last_update": "2022-03-28T04:11:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.45
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.57
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.95,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.87,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.95,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.87,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "mybookieag",
                "title": "MyBookie.ag",
                "last_update": "2022-03-28T04:06:51Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 2.4
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.59
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Charlotte Hornets",
                                "price": 1.91,
                                "point": 3.5
                            },
                            {
                                "name": "Denver Nuggets",
                                "price": 1.91,
                                "point": -3.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 231.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 231.5
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "3c99e985f703a996950f1b7fab0b925d",
        "sport_key": "basketball_nba",
        "sport_title": "NBA",
        "commence_time": "2022-03-28T23:00:00Z",
        "home_team": "Cleveland Cavaliers",
        "away_team": "Orlando Magic",
        "bookmakers": [
            {
                "key": "unibet",
                "title": "Unibet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.2
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.7
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.91,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.9,
                                "point": 215
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 215
                            }
                        ]
                    }
                ]
            },
            {
                "key": "sugarhouse",
                "title": "SugarHouse",
                "last_update": "2022-03-28T04:11:29Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.2
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.7
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.91,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.89,
                                "point": 215
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 215
                            }
                        ]
                    }
                ]
            },
            {
                "key": "barstool",
                "title": "Barstool Sportsbook",
                "last_update": "2022-03-28T04:11:37Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.2
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.7
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.91,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.89,
                                "point": 215
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 215
                            }
                        ]
                    }
                ]
            },
            {
                "key": "twinspires",
                "title": "TwinSpires",
                "last_update": "2022-03-28T04:11:58Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.2
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.7
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.91,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.89,
                                "point": 215
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 215
                            }
                        ]
                    }
                ]
            },
            {
                "key": "lowvig",
                "title": "LowVig.ag",
                "last_update": "2022-03-28T04:13:05Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 2,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.95,
                                "point": 214.5
                            },
                            {
                                "name": "Under",
                                "price": 1.95,
                                "point": 214.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betmgm",
                "title": "BetMGM",
                "last_update": "2022-03-28T04:12:32Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.22
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.4
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.91,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 214.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 214.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "gtbets",
                "title": "GTbets",
                "last_update": "2022-03-28T04:12:38Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.2
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.5
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.92,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.92,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.92,
                                "point": 215
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 215
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betfair",
                "title": "Betfair",
                "last_update": "2022-03-28T04:12:15Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.25
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.7
                            }
                        ]
                    },
                    {
                        "key": "h2h_lay",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.28
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "bovada",
                "title": "Bovada",
                "last_update": "2022-03-28T04:06:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.2
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.6
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.91,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 215
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 215
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betrivers",
                "title": "BetRivers",
                "last_update": "2022-03-28T04:10:09Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.2
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.7
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.91,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.89,
                                "point": 215
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 215
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betus",
                "title": "BetUS",
                "last_update": "2022-03-28T04:10:26Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.91,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 215
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 215
                            }
                        ]
                    }
                ]
            },
            {
                "key": "draftkings",
                "title": "DraftKings",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.2
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.6
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.91,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 215
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 215
                            }
                        ]
                    }
                ]
            },
            {
                "key": "fanduel",
                "title": "FanDuel",
                "last_update": "2022-03-28T04:10:44Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.21
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.7
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.91,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 215
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 215
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betonlineag",
                "title": "BetOnline.ag",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.95,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.87,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.9,
                                "point": 214.5
                            },
                            {
                                "name": "Under",
                                "price": 1.9,
                                "point": 214.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "foxbet",
                "title": "FOX Bet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.18
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.5
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 2,
                                "point": -10
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.85,
                                "point": 10
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 2,
                                "point": 214.5
                            },
                            {
                                "name": "Under",
                                "price": 1.85,
                                "point": 214.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "wynnbet",
                "title": "WynnBET",
                "last_update": "2022-03-28T04:11:00Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.2
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.75
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.91,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 215.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 215.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "williamhill_us",
                "title": "William Hill (US)",
                "last_update": "2022-03-28T04:11:11Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.21
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.6
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.91,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 215
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 215
                            }
                        ]
                    }
                ]
            },
            {
                "key": "pointsbetus",
                "title": "PointsBet (US)",
                "last_update": "2022-03-28T04:11:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.22
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 4.5
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.91,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.95,
                                "point": 215
                            },
                            {
                                "name": "Under",
                                "price": 1.87,
                                "point": 215
                            }
                        ]
                    }
                ]
            },
            {
                "key": "mybookieag",
                "title": "MyBookie.ag",
                "last_update": "2022-03-28T04:06:51Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.2
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 5
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Cleveland Cavaliers",
                                "price": 1.91,
                                "point": -9.5
                            },
                            {
                                "name": "Orlando Magic",
                                "price": 1.91,
                                "point": 9.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 215
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 215
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "48e71c9d401eaabf9c7b763e957e77ed",
        "sport_key": "basketball_nba",
        "sport_title": "NBA",
        "commence_time": "2022-03-28T23:10:00Z",
        "home_team": "Indiana Pacers",
        "away_team": "Atlanta Hawks",
        "bookmakers": [
            {
                "key": "foxbet",
                "title": "FOX Bet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.33
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.3
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 2,
                                "point": -7
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.85,
                                "point": 7
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 234.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 234.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "fanduel",
                "title": "FanDuel",
                "last_update": "2022-03-28T04:10:44Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.31
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.6
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.93,
                                "point": -7.5
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.89,
                                "point": 7.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 235
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 235
                            }
                        ]
                    }
                ]
            },
            {
                "key": "gtbets",
                "title": "GTbets",
                "last_update": "2022-03-28T04:12:38Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.32
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.45
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.92,
                                "point": -7
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.92,
                                "point": 7
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.92,
                                "point": 235
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 235
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betmgm",
                "title": "BetMGM",
                "last_update": "2022-03-28T04:12:32Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.29
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.6
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.91,
                                "point": -7.5
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.91,
                                "point": 7.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 234.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 234.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "draftkings",
                "title": "DraftKings",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.31
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.5
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.91,
                                "point": -7
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.91,
                                "point": 7
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 235
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 235
                            }
                        ]
                    }
                ]
            },
            {
                "key": "williamhill_us",
                "title": "William Hill (US)",
                "last_update": "2022-03-28T04:11:11Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.31
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.5
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.91,
                                "point": -7
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.91,
                                "point": 7
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 235
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 235
                            }
                        ]
                    }
                ]
            },
            {
                "key": "wynnbet",
                "title": "WynnBET",
                "last_update": "2022-03-28T04:11:00Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.34
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.3
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.91,
                                "point": -7
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.91,
                                "point": 7
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 234.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 234.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "pointsbetus",
                "title": "PointsBet (US)",
                "last_update": "2022-03-28T04:11:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.31
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.5
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.91,
                                "point": -7
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.91,
                                "point": 7
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 235
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 235
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betfair",
                "title": "Betfair",
                "last_update": "2022-03-28T04:12:15Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.36
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.6
                            }
                        ]
                    },
                    {
                        "key": "h2h_lay",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.38
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.8
                            }
                        ]
                    }
                ]
            },
            {
                "key": "lowvig",
                "title": "LowVig.ag",
                "last_update": "2022-03-28T04:13:05Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.95,
                                "point": -7
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.95,
                                "point": 7
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.95,
                                "point": 235
                            },
                            {
                                "name": "Under",
                                "price": 1.95,
                                "point": 235
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betonlineag",
                "title": "BetOnline.ag",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.9,
                                "point": -7
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.9,
                                "point": 7
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.9,
                                "point": 235
                            },
                            {
                                "name": "Under",
                                "price": 1.9,
                                "point": 235
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betus",
                "title": "BetUS",
                "last_update": "2022-03-28T04:10:26Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.91,
                                "point": -7
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.91,
                                "point": 7
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 235
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 235
                            }
                        ]
                    }
                ]
            },
            {
                "key": "unibet",
                "title": "Unibet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.3
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.6
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.91,
                                "point": -7.5
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.91,
                                "point": 7.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.9,
                                "point": 235
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 235
                            }
                        ]
                    }
                ]
            },
            {
                "key": "sugarhouse",
                "title": "SugarHouse",
                "last_update": "2022-03-28T04:11:29Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.3
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.6
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.91,
                                "point": -7.5
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.91,
                                "point": 7.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.89,
                                "point": 235
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 235
                            }
                        ]
                    }
                ]
            },
            {
                "key": "barstool",
                "title": "Barstool Sportsbook",
                "last_update": "2022-03-28T04:11:37Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.3
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.6
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.91,
                                "point": -7.5
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.91,
                                "point": 7.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.89,
                                "point": 235
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 235
                            }
                        ]
                    }
                ]
            },
            {
                "key": "twinspires",
                "title": "TwinSpires",
                "last_update": "2022-03-28T04:11:58Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.3
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.6
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.91,
                                "point": -7.5
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.91,
                                "point": 7.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.89,
                                "point": 235
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 235
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betrivers",
                "title": "BetRivers",
                "last_update": "2022-03-28T04:10:09Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.3
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.6
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.91,
                                "point": -7.5
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.91,
                                "point": 7.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.89,
                                "point": 235
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 235
                            }
                        ]
                    }
                ]
            },
            {
                "key": "mybookieag",
                "title": "MyBookie.ag",
                "last_update": "2022-03-28T04:06:51Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.32
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 3.6
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Atlanta Hawks",
                                "price": 1.91,
                                "point": -7
                            },
                            {
                                "name": "Indiana Pacers",
                                "price": 1.91,
                                "point": 7
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 235
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 235
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "cba3a16fb4b68b1130fd2d41789401af",
        "sport_key": "basketball_nba",
        "sport_title": "NBA",
        "commence_time": "2022-03-28T23:30:00Z",
        "home_team": "Toronto Raptors",
        "away_team": "Boston Celtics",
        "bookmakers": [
            {
                "key": "unibet",
                "title": "Unibet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 2.14
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.7
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 1.92,
                                "point": 3
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.9,
                                "point": -3
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 218
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 218
                            }
                        ]
                    }
                ]
            },
            {
                "key": "sugarhouse",
                "title": "SugarHouse",
                "last_update": "2022-03-28T04:11:29Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 2.14
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.7
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 1.92,
                                "point": 3
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.89,
                                "point": -3
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 218
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 218
                            }
                        ]
                    }
                ]
            },
            {
                "key": "barstool",
                "title": "Barstool Sportsbook",
                "last_update": "2022-03-28T04:11:37Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 2.14
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.7
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 1.92,
                                "point": 3
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.89,
                                "point": -3
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 218
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 218
                            }
                        ]
                    }
                ]
            },
            {
                "key": "twinspires",
                "title": "TwinSpires",
                "last_update": "2022-03-28T04:11:58Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 2.14
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.7
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 1.92,
                                "point": 3
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.89,
                                "point": -3
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 218
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 218
                            }
                        ]
                    }
                ]
            },
            {
                "key": "lowvig",
                "title": "LowVig.ag",
                "last_update": "2022-03-28T04:13:05Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 1.95,
                                "point": 2.5
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.95,
                                "point": -2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.95,
                                "point": 217.5
                            },
                            {
                                "name": "Under",
                                "price": 1.95,
                                "point": 217.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betmgm",
                "title": "BetMGM",
                "last_update": "2022-03-28T04:12:32Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 2.15
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.71
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 1.91,
                                "point": 2.5
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.91,
                                "point": -2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 217.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 217.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "gtbets",
                "title": "GTbets",
                "last_update": "2022-03-28T04:12:38Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 2.25
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.69
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 1.92,
                                "point": 2.5
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.92,
                                "point": -2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.92,
                                "point": 218
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 218
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betfair",
                "title": "Betfair",
                "last_update": "2022-03-28T04:12:15Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 2.24
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.72
                            }
                        ]
                    },
                    {
                        "key": "h2h_lay",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 2.4
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.8
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betrivers",
                "title": "BetRivers",
                "last_update": "2022-03-28T04:10:09Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 2.14
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.7
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 1.92,
                                "point": 3
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.89,
                                "point": -3
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 218
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 218
                            }
                        ]
                    }
                ]
            },
            {
                "key": "draftkings",
                "title": "DraftKings",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 2.25
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.69
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 1.95,
                                "point": 2.5
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.87,
                                "point": -2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 218
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 218
                            }
                        ]
                    }
                ]
            },
            {
                "key": "fanduel",
                "title": "FanDuel",
                "last_update": "2022-03-28T04:10:44Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 2.24
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.68
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 1.91,
                                "point": 3
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.91,
                                "point": -3
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 218
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 218
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betonlineag",
                "title": "BetOnline.ag",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 1.9,
                                "point": 2.5
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.9,
                                "point": -2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.9,
                                "point": 217.5
                            },
                            {
                                "name": "Under",
                                "price": 1.9,
                                "point": 217.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "wynnbet",
                "title": "WynnBET",
                "last_update": "2022-03-28T04:11:00Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 2.2
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.69
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 1.91,
                                "point": 2.5
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.91,
                                "point": -2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 218
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 218
                            }
                        ]
                    }
                ]
            },
            {
                "key": "williamhill_us",
                "title": "William Hill (US)",
                "last_update": "2022-03-28T04:11:11Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 2.3
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.67
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 1.91,
                                "point": 2.5
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.91,
                                "point": -2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 218
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 218
                            }
                        ]
                    }
                ]
            },
            {
                "key": "mybookieag",
                "title": "MyBookie.ag",
                "last_update": "2022-03-28T04:06:51Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 2.25
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.69
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Boston Celtics",
                                "price": 1.91,
                                "point": 2.5
                            },
                            {
                                "name": "Toronto Raptors",
                                "price": 1.91,
                                "point": -2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 218
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 218
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "b8f5c1a9fcb064c4fdb52c4bcf174b78",
        "sport_key": "basketball_nba",
        "sport_title": "NBA",
        "commence_time": "2022-03-28T23:40:00Z",
        "home_team": "New York Knicks",
        "away_team": "Chicago Bulls",
        "bookmakers": [
            {
                "key": "foxbet",
                "title": "FOX Bet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.47
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.55
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.91,
                                "point": -5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.91,
                                "point": 5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 223.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 223.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "fanduel",
                "title": "FanDuel",
                "last_update": "2022-03-28T04:10:44Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.48
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.76
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.91,
                                "point": -5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.91,
                                "point": 5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 223
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 223
                            }
                        ]
                    }
                ]
            },
            {
                "key": "gtbets",
                "title": "GTbets",
                "last_update": "2022-03-28T04:12:38Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.51
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.65
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.92,
                                "point": -5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.92,
                                "point": 5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.92,
                                "point": 223.5
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 223.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betmgm",
                "title": "BetMGM",
                "last_update": "2022-03-28T04:12:32Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.53
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.55
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.91,
                                "point": -4.5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.91,
                                "point": 4.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 223.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 223.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "draftkings",
                "title": "DraftKings",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.51
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.65
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.91,
                                "point": -4.5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.91,
                                "point": 4.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 223.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 223.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "williamhill_us",
                "title": "William Hill (US)",
                "last_update": "2022-03-28T04:11:11Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.7
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.91,
                                "point": -5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.91,
                                "point": 5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 223
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 223
                            }
                        ]
                    }
                ]
            },
            {
                "key": "bovada",
                "title": "Bovada",
                "last_update": "2022-03-28T04:06:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.51
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.65
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.91,
                                "point": -5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.91,
                                "point": 5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 223.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 223.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "wynnbet",
                "title": "WynnBET",
                "last_update": "2022-03-28T04:11:00Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.53
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.55
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.91,
                                "point": -4.5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.91,
                                "point": 4.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 223
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 223
                            }
                        ]
                    }
                ]
            },
            {
                "key": "pointsbetus",
                "title": "PointsBet (US)",
                "last_update": "2022-03-28T04:11:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.65
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.91,
                                "point": -4.5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.91,
                                "point": 4.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 223.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 223.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betfair",
                "title": "Betfair",
                "last_update": "2022-03-28T04:12:15Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.55
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.02
                            }
                        ]
                    },
                    {
                        "key": "h2h_lay",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.56
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.88
                            }
                        ]
                    }
                ]
            },
            {
                "key": "lowvig",
                "title": "LowVig.ag",
                "last_update": "2022-03-28T04:13:05Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.95,
                                "point": -5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.95,
                                "point": 5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.95,
                                "point": 223
                            },
                            {
                                "name": "Under",
                                "price": 1.95,
                                "point": 223
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betonlineag",
                "title": "BetOnline.ag",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.9,
                                "point": -5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.9,
                                "point": 5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.9,
                                "point": 223
                            },
                            {
                                "name": "Under",
                                "price": 1.9,
                                "point": 223
                            }
                        ]
                    }
                ]
            },
            {
                "key": "unibet",
                "title": "Unibet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.53
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.55
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.9,
                                "point": -4.5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.92,
                                "point": 4.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 223.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 223.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "sugarhouse",
                "title": "SugarHouse",
                "last_update": "2022-03-28T04:11:29Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.53
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.55
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.89,
                                "point": -4.5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.92,
                                "point": 4.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 223.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 223.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "barstool",
                "title": "Barstool Sportsbook",
                "last_update": "2022-03-28T04:11:37Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.53
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.55
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.89,
                                "point": -4.5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.92,
                                "point": 4.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 223.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 223.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "twinspires",
                "title": "TwinSpires",
                "last_update": "2022-03-28T04:11:58Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.53
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.55
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.89,
                                "point": -4.5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.92,
                                "point": 4.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 223.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 223.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betrivers",
                "title": "BetRivers",
                "last_update": "2022-03-28T04:10:09Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.53
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.55
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.89,
                                "point": -4.5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.92,
                                "point": 4.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 223.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 223.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "mybookieag",
                "title": "MyBookie.ag",
                "last_update": "2022-03-28T04:06:51Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.51
                            },
                            {
                                "name": "New York Knicks",
                                "price": 2.65
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Chicago Bulls",
                                "price": 1.91,
                                "point": -5
                            },
                            {
                                "name": "New York Knicks",
                                "price": 1.91,
                                "point": 5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 223.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 223.5
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "0d0f0e6fe7ea357f854ab579db4190e2",
        "sport_key": "basketball_nba",
        "sport_title": "NBA",
        "commence_time": "2022-03-28T23:40:00Z",
        "home_team": "Miami Heat",
        "away_team": "Sacramento Kings",
        "bookmakers": [
            {
                "key": "draftkings",
                "title": "DraftKings",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.1
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 7.5
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.95,
                                "point": -13.5
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.87,
                                "point": 13.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 220
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 220
                            }
                        ]
                    }
                ]
            },
            {
                "key": "pointsbetus",
                "title": "PointsBet (US)",
                "last_update": "2022-03-28T04:11:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.1
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 7.5
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.87,
                                "point": -13.5
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.95,
                                "point": 13.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 219
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 219
                            }
                        ]
                    }
                ]
            },
            {
                "key": "fanduel",
                "title": "FanDuel",
                "last_update": "2022-03-28T04:10:44Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.11
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 7.4
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.91,
                                "point": -13
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.91,
                                "point": 13
                            }
                        ]
                    }
                ]
            },
            {
                "key": "foxbet",
                "title": "FOX Bet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.08
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 7
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.85,
                                "point": -13
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 2,
                                "point": 13
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.85,
                                "point": 219
                            },
                            {
                                "name": "Under",
                                "price": 2,
                                "point": 219
                            }
                        ]
                    }
                ]
            },
            {
                "key": "wynnbet",
                "title": "WynnBET",
                "last_update": "2022-03-28T04:11:00Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.09
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 8
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.91,
                                "point": -13.5
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.91,
                                "point": 13.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 219.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 219.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betmgm",
                "title": "BetMGM",
                "last_update": "2022-03-28T04:12:32Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.11
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 7
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.91,
                                "point": -13.5
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.91,
                                "point": 13.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 219.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 219.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betfair",
                "title": "Betfair",
                "last_update": "2022-03-28T04:12:15Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.1
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 8
                            }
                        ]
                    },
                    {
                        "key": "h2h_lay",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.15
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 11
                            }
                        ]
                    }
                ]
            },
            {
                "key": "lowvig",
                "title": "LowVig.ag",
                "last_update": "2022-03-28T04:13:05Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.95,
                                "point": -13
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.95,
                                "point": 13
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.95,
                                "point": 219
                            },
                            {
                                "name": "Under",
                                "price": 1.95,
                                "point": 219
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betonlineag",
                "title": "BetOnline.ag",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.9,
                                "point": -13
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.9,
                                "point": 13
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.9,
                                "point": 219
                            },
                            {
                                "name": "Under",
                                "price": 1.9,
                                "point": 219
                            }
                        ]
                    }
                ]
            },
            {
                "key": "williamhill_us",
                "title": "William Hill (US)",
                "last_update": "2022-03-28T04:11:11Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.1
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 7.5
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.91,
                                "point": -13
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.91,
                                "point": 13
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 219.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 219.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "unibet",
                "title": "Unibet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.08
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 9
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.9,
                                "point": -13.5
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.91,
                                "point": 13.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.9,
                                "point": 219.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 219.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "sugarhouse",
                "title": "SugarHouse",
                "last_update": "2022-03-28T04:11:29Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.08
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 9
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.89,
                                "point": -13.5
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.91,
                                "point": 13.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.89,
                                "point": 219.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 219.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "barstool",
                "title": "Barstool Sportsbook",
                "last_update": "2022-03-28T04:11:37Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.08
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 9
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.89,
                                "point": -13.5
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.91,
                                "point": 13.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.89,
                                "point": 219.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 219.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "twinspires",
                "title": "TwinSpires",
                "last_update": "2022-03-28T04:11:58Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.08
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 8.5
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.89,
                                "point": -13.5
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.91,
                                "point": 13.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.89,
                                "point": 219.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 219.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betrivers",
                "title": "BetRivers",
                "last_update": "2022-03-28T04:10:09Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.08
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 9
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.89,
                                "point": -13.5
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.91,
                                "point": 13.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.89,
                                "point": 219.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 219.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "gtbets",
                "title": "GTbets",
                "last_update": "2022-03-28T04:12:38Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.11
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 6.6
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.92,
                                "point": -13
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.92,
                                "point": 13
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.92,
                                "point": 219.5
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 219.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "mybookieag",
                "title": "MyBookie.ag",
                "last_update": "2022-03-28T04:06:51Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.11
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 7.1
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Miami Heat",
                                "price": 1.91,
                                "point": -13
                            },
                            {
                                "name": "Sacramento Kings",
                                "price": 1.91,
                                "point": 13
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 219.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 219.5
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "9db1ca4b20fade57d8ecde60166b7294",
        "sport_key": "basketball_nba",
        "sport_title": "NBA",
        "commence_time": "2022-03-29T00:00:00Z",
        "home_team": "Houston Rockets",
        "away_team": "San Antonio Spurs",
        "bookmakers": [
            {
                "key": "unibet",
                "title": "Unibet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.15
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.38
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.91,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 237.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 237.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "sugarhouse",
                "title": "SugarHouse",
                "last_update": "2022-03-28T04:11:29Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.15
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.38
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.91,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 237.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 237.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "barstool",
                "title": "Barstool Sportsbook",
                "last_update": "2022-03-28T04:11:37Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.15
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.38
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.91,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 237.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 237.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "twinspires",
                "title": "TwinSpires",
                "last_update": "2022-03-28T04:11:58Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.15
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.38
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.91,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 237.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 237.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "lowvig",
                "title": "LowVig.ag",
                "last_update": "2022-03-28T04:13:05Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 2,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.95,
                                "point": 237.5
                            },
                            {
                                "name": "Under",
                                "price": 1.95,
                                "point": 237.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betmgm",
                "title": "BetMGM",
                "last_update": "2022-03-28T04:12:32Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.2
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.36
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.91,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 237.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 237.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "gtbets",
                "title": "GTbets",
                "last_update": "2022-03-28T04:12:38Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.25
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.37
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.92,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.92,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.92,
                                "point": 237.5
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 237.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betfair",
                "title": "Betfair",
                "last_update": "2022-03-28T04:12:15Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.2
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.43
                            }
                        ]
                    },
                    {
                        "key": "h2h_lay",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.3
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.46
                            }
                        ]
                    }
                ]
            },
            {
                "key": "bovada",
                "title": "Bovada",
                "last_update": "2022-03-28T04:06:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.2
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.37
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.91,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 237.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 237.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betrivers",
                "title": "BetRivers",
                "last_update": "2022-03-28T04:10:09Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.15
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.38
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.91,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 237.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 237.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betus",
                "title": "BetUS",
                "last_update": "2022-03-28T04:10:26Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.91,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 237.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 237.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "draftkings",
                "title": "DraftKings",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.15
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.38
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.91,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 237
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 237
                            }
                        ]
                    }
                ]
            },
            {
                "key": "fanduel",
                "title": "FanDuel",
                "last_update": "2022-03-28T04:10:44Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.2
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.37
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.89,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 237.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 237.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betonlineag",
                "title": "BetOnline.ag",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 2,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.83,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.9,
                                "point": 237.5
                            },
                            {
                                "name": "Under",
                                "price": 1.9,
                                "point": 237.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "foxbet",
                "title": "FOX Bet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.36
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.85,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 2,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.85,
                                "point": 237
                            },
                            {
                                "name": "Under",
                                "price": 2,
                                "point": 237
                            }
                        ]
                    }
                ]
            },
            {
                "key": "wynnbet",
                "title": "WynnBET",
                "last_update": "2022-03-28T04:11:00Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.4
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.91,
                                "point": 6
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 238
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 238
                            }
                        ]
                    }
                ]
            },
            {
                "key": "williamhill_us",
                "title": "William Hill (US)",
                "last_update": "2022-03-28T04:11:11Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.2
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.37
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.91,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 237.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 237.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "pointsbetus",
                "title": "PointsBet (US)",
                "last_update": "2022-03-28T04:11:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.2
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.36
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.91,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.87,
                                "point": 237
                            },
                            {
                                "name": "Under",
                                "price": 1.95,
                                "point": 237
                            }
                        ]
                    }
                ]
            },
            {
                "key": "mybookieag",
                "title": "MyBookie.ag",
                "last_update": "2022-03-28T04:06:51Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 3.2
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.37
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Houston Rockets",
                                "price": 1.91,
                                "point": 6.5
                            },
                            {
                                "name": "San Antonio Spurs",
                                "price": 1.91,
                                "point": -6.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 237.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 237.5
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "cd820924cd5a8966f148dcdda9f11cd9",
        "sport_key": "basketball_nba",
        "sport_title": "NBA",
        "commence_time": "2022-03-29T00:10:00Z",
        "home_team": "Memphis Grizzlies",
        "away_team": "Golden State Warriors",
        "bookmakers": [
            {
                "key": "draftkings",
                "title": "DraftKings",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 5.1
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.17
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.91,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.91,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 222.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 222.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betonlineag",
                "title": "BetOnline.ag",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.9,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.9,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.9,
                                "point": 222
                            },
                            {
                                "name": "Under",
                                "price": 1.9,
                                "point": 222
                            }
                        ]
                    }
                ]
            },
            {
                "key": "lowvig",
                "title": "LowVig.ag",
                "last_update": "2022-03-28T04:13:05Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.95,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.95,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.95,
                                "point": 222
                            },
                            {
                                "name": "Under",
                                "price": 1.95,
                                "point": 222
                            }
                        ]
                    }
                ]
            },
            {
                "key": "williamhill_us",
                "title": "William Hill (US)",
                "last_update": "2022-03-28T04:11:11Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 5.75
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.14
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.91,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.91,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 222.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 222.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "gtbets",
                "title": "GTbets",
                "last_update": "2022-03-28T04:12:38Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.17
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.92,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.92,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.92,
                                "point": 222.5
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 222.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "fanduel",
                "title": "FanDuel",
                "last_update": "2022-03-28T04:10:44Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 5.2
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.18
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.91,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.91,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 222
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 222
                            }
                        ]
                    }
                ]
            },
            {
                "key": "bovada",
                "title": "Bovada",
                "last_update": "2022-03-28T04:06:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 4.95
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.18
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.91,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.91,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 222.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 222.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "wynnbet",
                "title": "WynnBET",
                "last_update": "2022-03-28T04:11:00Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.19
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.91,
                                "point": 10
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.91,
                                "point": -10
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 222
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 222
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betmgm",
                "title": "BetMGM",
                "last_update": "2022-03-28T04:12:32Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.18
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.91,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.91,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 222.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 222.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betus",
                "title": "BetUS",
                "last_update": "2022-03-28T04:10:26Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.91,
                                "point": 10
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.91,
                                "point": -10
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 222
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 222
                            }
                        ]
                    }
                ]
            },
            {
                "key": "pointsbetus",
                "title": "PointsBet (US)",
                "last_update": "2022-03-28T04:11:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 5.25
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.17
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.91,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.91,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 222.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 222.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betfair",
                "title": "Betfair",
                "last_update": "2022-03-28T04:12:15Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 5.3
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.19
                            }
                        ]
                    },
                    {
                        "key": "h2h_lay",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 6.4
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.24
                            }
                        ]
                    }
                ]
            },
            {
                "key": "unibet",
                "title": "Unibet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 5.25
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.17
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.91,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.91,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.89,
                                "point": 222.5
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 222.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "sugarhouse",
                "title": "SugarHouse",
                "last_update": "2022-03-28T04:11:29Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 5.25
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.17
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.91,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.91,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.88,
                                "point": 222.5
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 222.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "barstool",
                "title": "Barstool Sportsbook",
                "last_update": "2022-03-28T04:11:37Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 5.25
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.17
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.91,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.91,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.88,
                                "point": 222.5
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 222.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "twinspires",
                "title": "TwinSpires",
                "last_update": "2022-03-28T04:11:58Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 5.25
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.17
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.91,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.91,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.88,
                                "point": 222.5
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 222.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betrivers",
                "title": "BetRivers",
                "last_update": "2022-03-28T04:10:09Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 5.25
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.17
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.91,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.91,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.88,
                                "point": 222.5
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 222.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "mybookieag",
                "title": "MyBookie.ag",
                "last_update": "2022-03-28T04:06:51Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 5.1
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.18
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Golden State Warriors",
                                "price": 1.91,
                                "point": 10.5
                            },
                            {
                                "name": "Memphis Grizzlies",
                                "price": 1.91,
                                "point": -10.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 222.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 222.5
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "d02573a54c08d7561dd61867127ab048",
        "sport_key": "basketball_nba",
        "sport_title": "NBA",
        "commence_time": "2022-03-29T02:10:00Z",
        "home_team": "Portland Trail Blazers",
        "away_team": "Oklahoma City Thunder",
        "bookmakers": [
            {
                "key": "lowvig",
                "title": "LowVig.ag",
                "last_update": "2022-03-28T04:13:05Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.95,
                                "point": -2
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 1.95,
                                "point": 2
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.95,
                                "point": 220.5
                            },
                            {
                                "name": "Under",
                                "price": 1.95,
                                "point": 220.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "draftkings",
                "title": "DraftKings",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.71
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 2.2
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.91,
                                "point": -2.5
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 1.91,
                                "point": 2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 221.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 221.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "gtbets",
                "title": "GTbets",
                "last_update": "2022-03-28T04:12:38Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.69
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 2.25
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.92,
                                "point": -2.5
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 1.92,
                                "point": 2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.92,
                                "point": 221
                            },
                            {
                                "name": "Under",
                                "price": 1.92,
                                "point": 221
                            }
                        ]
                    }
                ]
            },
            {
                "key": "wynnbet",
                "title": "WynnBET",
                "last_update": "2022-03-28T04:11:00Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.74
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 2.12
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.91,
                                "point": -2
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 1.91,
                                "point": 2
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 220
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 220
                            }
                        ]
                    }
                ]
            },
            {
                "key": "fanduel",
                "title": "FanDuel",
                "last_update": "2022-03-28T04:10:44Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.7
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 2.2
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.91,
                                "point": -2.5
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 1.91,
                                "point": 2.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "pointsbetus",
                "title": "PointsBet (US)",
                "last_update": "2022-03-28T04:11:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.69
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 2.25
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.91,
                                "point": -2.5
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 1.91,
                                "point": 2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 221.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 221.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "williamhill_us",
                "title": "William Hill (US)",
                "last_update": "2022-03-28T04:11:11Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.69
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 2.25
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.91,
                                "point": -2.5
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 1.91,
                                "point": 2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 221
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 221
                            }
                        ]
                    }
                ]
            },
            {
                "key": "bovada",
                "title": "Bovada",
                "last_update": "2022-03-28T04:06:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.69
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 2.25
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.91,
                                "point": -2.5
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 1.91,
                                "point": 2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 221.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 221.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betonlineag",
                "title": "BetOnline.ag",
                "last_update": "2022-03-28T04:10:50Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.9,
                                "point": -2
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 1.9,
                                "point": 2
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.9,
                                "point": 220.5
                            },
                            {
                                "name": "Under",
                                "price": 1.9,
                                "point": 220.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betmgm",
                "title": "BetMGM",
                "last_update": "2022-03-28T04:12:32Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.71
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 2.15
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.91,
                                "point": -2.5
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 1.91,
                                "point": 2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 221.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 221.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betus",
                "title": "BetUS",
                "last_update": "2022-03-28T04:10:26Z",
                "markets": [
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.91,
                                "point": -2.5
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 1.91,
                                "point": 2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 221
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 221
                            }
                        ]
                    }
                ]
            },
            {
                "key": "betfair",
                "title": "Betfair",
                "last_update": "2022-03-28T04:12:15Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.74
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 2.2
                            }
                        ]
                    },
                    {
                        "key": "h2h_lay",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.84
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 2.36
                            }
                        ]
                    }
                ]
            },
            {
                "key": "foxbet",
                "title": "FOX Bet",
                "last_update": "2022-03-28T04:10:33Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.7
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 2.1
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.85,
                                "point": -2.5
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 2,
                                "point": 2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 221.5
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 221.5
                            }
                        ]
                    }
                ]
            },
            {
                "key": "mybookieag",
                "title": "MyBookie.ag",
                "last_update": "2022-03-28T04:06:51Z",
                "markets": [
                    {
                        "key": "h2h",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.69
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 2.25
                            }
                        ]
                    },
                    {
                        "key": "spreads",
                        "outcomes": [
                            {
                                "name": "Oklahoma City Thunder",
                                "price": 1.91,
                                "point": -2.5
                            },
                            {
                                "name": "Portland Trail Blazers",
                                "price": 1.91,
                                "point": 2.5
                            }
                        ]
                    },
                    {
                        "key": "totals",
                        "outcomes": [
                            {
                                "name": "Over",
                                "price": 1.91,
                                "point": 221
                            },
                            {
                                "name": "Under",
                                "price": 1.91,
                                "point": 221
                            }
                        ]
                    }
                ]
            }
        ]
    }
])
        const oddsDataList2 = ref([])

        onMounted(() => {
            console.log('onMounted')
            // getList()
            console.log(oddsDataList.value)
        })
        function getList() {
            Api('/basketball_nba/odds', {
                params: {
                    markets: 'h2h,spreads,totals', // 獨贏 讓分 大小
                    oddsFormat: 'decimal',
                },
            })
                .then((res) => {
                    console.log(res)
                    oddsDataList.value = res.data
                })
                .catch((err) => {
                    console.error(err)
                })
        }
        function timeFormat(timeStamp) {
            return Utils.dateFormat(timeStamp, '-', true)
        }
        function betRateConvert(value) {
            switch (selectValue.value) {
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
        function getOddsLine(){

        }
        watch(selectValue, () => {
            betRateConvert()
        })
        return {
            ImgUrl,
            showModal,
            selectValue,
            oddsDataList,
            getList,
            timeFormat,
            betRateConvert,
        }
    },
}
</script>
<style lang="postcss">
.primary-btn {
    @apply border border-orange-500 text-center py-1 px-2 rounded-md cursor-pointer hover:bg-orange-600 hover:text-white hover:duration-100;
}
</style>