<template>
  <h1 class="text-2xl font-extrabold">NBA Odds & Betting Lines</h1>
  <div class="flex box-border">
    <table class="table">
      <thead class="h-10 border-b">
        <tr>
          <th class="px-2">Time</th>
          <th class="px-2">Game</th>
          <th class="px-2"></th>
          <th class="px-2">Open</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in oddsDataList" :key="item.id">
          <tr class="border">
            <td class="px-2">
              {{ this.timeFormat(new Date(item.commence_time).getTime()) }}
            </td>
            <td class="px-2 flex flex-col">
              <div class="flex my-2">
                <img
                  class="w-6 h-6 mr-2"
                  src="https://img.covers.com/covers/data/svg_logos/nba/atl.svg"
                  alt=""
                />
                <span class="hover:bg-orange-400 hover:text-white hover:duration-200">
                  {{ item.away_team }}
                </span>
              </div>
              <div class="flex my-2">
                <img
                  class="w-6 h-6 mr-2"
                  src="https://img.covers.com/covers/data/svg_logos/nba/det.svg"
                  alt=""
                />
                <span class="hover:bg-orange-400 hover:text-white hover:duration-200">
                  {{ item.home_team }}
                </span>
              </div>
            </td>
            <td class="px-2">
                <div @click="getOddsLine()" class="primary-btn">
                    Line
                </div>
            </td>
            <td class="text-sm text-gray-600 flex flex-col items-center">
              <div>
                O {{ item.bookmakers[3]["markets"][2]["outcomes"][0]["point"] }}
              </div>
              <div>
                {{ (item.bookmakers[3]["markets"][1]["outcomes"][1]["point"]).toFixed(1) }}
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>

    <table>
      <thead class="flex border-b h-10">
        <tr class="px-2 mx-5">
          <td>
            <a href="https://www.bet365.com/#/HO/">
              <img class="w-28 h-8" src="/bet365.svg" alt="" />
            </a>
          </td>
        </tr>
        <tr class="px-2 mx-5">
          <td>
            <img class="w-28 h-8" src="/betway.svg" alt="" />
          </td>
        </tr>
        <tr class="px-2 mx-5">
          <td>
            <a href="https://sports.williamhill.com/betting/en-gb">
              <img class="w-28 h-8" src="/williamhill.svg" alt="" />
            </a>
          </td>
        </tr>
        <tr class="px-2 mx-5">
          <td>
            <a href="https://www.888sport.com/spt/100percent.htm">
              <img class="w-10 h-8" src="/888sport.svg" alt="" />
            </a>
          </td>
        </tr>
        <tr class="px-2 mx-5">
          <td>
            <a href="https://www.betvictor.com/">
              <img class="w-28 h-8" src="/betvictor.svg" alt="" />
            </a>
          </td>
        </tr>
      </thead>
      <tbody class="border-b">
          <template v-for="item in oddsDataList" :key="item.id">
              <tr class="border">
                  <td>
                      {{ item.bookmakers[0]['markets'][2]['outcomes'][0]['point']}}
                  </td>
              </tr>
          </template>
      </tbody>
    </table>
  </div>
</template>
<script>
import Utils from "../utility/util.js";
import Api from "../api/request.js";
export default {
  name: "App",
  components: {
    Utils,
    Api,
  },
  data() {
    return {
      showModal: false,
      oddsDataList: [
        {
          id: "b098a5956e3da40312b9a0ff4377005b",
          sport_key: "basketball_nba",
          sport_title: "NBA",
          commence_time: "2022-03-23T23:10:00Z",
          home_team: "Detroit Pistons",
          away_team: "Atlanta Hawks",
          bookmakers: [
            {
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T12:28:30Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.51,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.66,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T12:26:41Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.44,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.7,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T12:28:27Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.45,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.48,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.7,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T12:27:16Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.48,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.92,
                      point: -5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.92,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T12:27:17Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.44,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "bovada",
              title: "Bovada",
              last_update: "2022-03-23T12:28:22Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.48,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T12:23:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.49,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.97,
                      point: -5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.94,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 226.5,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 226.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.48,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.92,
                      point: -5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.89,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 226.5,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 226.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betfair",
              title: "Betfair",
              last_update: "2022-03-23T12:24:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.52,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.8,
                    },
                  ],
                },
                {
                  key: "h2h_lay",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.56,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.98,
                    },
                  ],
                },
              ],
            },
            {
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T12:29:40Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.48,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.87,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T12:29:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.43,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.95,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225,
                    },
                  ],
                },
              ],
            },
            {
              key: "barstool",
              title: "Barstool Sportsbook",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.43,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T12:28:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.43,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "unibet",
              title: "Unibet",
              last_update: "2022-03-23T12:23:44Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.44,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "twinspires",
              title: "TwinSpires",
              last_update: "2022-03-23T12:29:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.43,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T12:27:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.43,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betus",
              title: "BetUS",
              last_update: "2022-03-23T12:27:32Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.48,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 2.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Atlanta Hawks",
                      price: 1.91,
                      point: -5,
                    },
                    {
                      name: "Detroit Pistons",
                      price: 1.91,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "fe331a779682c5fb93f1b5f6e221d18a",
          sport_key: "basketball_nba",
          sport_title: "NBA",
          commence_time: "2022-03-23T23:10:00Z",
          home_team: "Charlotte Hornets",
          away_team: "New York Knicks",
          bookmakers: [
            {
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T12:28:30Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.37,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.2,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.91,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T12:26:41Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.35,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.05,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -6.5,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.91,
                      point: 6.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.34,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.45,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.87,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.95,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T12:28:27Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.33,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.4,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.87,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.95,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 227,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 227,
                    },
                  ],
                },
              ],
            },
            {
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.36,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.25,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.91,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.33,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.4,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.91,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T12:23:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.34,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.45,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 2,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T12:27:16Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.34,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.4,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.92,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.92,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "bovada",
              title: "Bovada",
              last_update: "2022-03-23T12:28:22Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.36,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.3,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.91,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T12:27:17Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.36,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.2,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -6.5,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.91,
                      point: 6.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betfair",
              title: "Betfair",
              last_update: "2022-03-23T12:24:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.38,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.35,
                    },
                  ],
                },
                {
                  key: "h2h_lay",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.42,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.75,
                    },
                  ],
                },
              ],
            },
            {
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T12:29:40Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.36,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.2,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.91,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T12:29:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.36,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.35,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -6.5,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.91,
                      point: 6.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "barstool",
              title: "Barstool Sportsbook",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.35,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.3,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.91,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.89,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T12:28:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.35,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.3,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.91,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.89,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "unibet",
              title: "Unibet",
              last_update: "2022-03-23T12:23:44Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.35,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.3,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.91,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "twinspires",
              title: "TwinSpires",
              last_update: "2022-03-23T12:29:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.35,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.3,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.91,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.89,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T12:27:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.35,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.3,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.91,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.89,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "betus",
              title: "BetUS",
              last_update: "2022-03-23T12:27:32Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.34,
                    },
                    {
                      name: "New York Knicks",
                      price: 3.4,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Charlotte Hornets",
                      price: 1.91,
                      point: -7,
                    },
                    {
                      name: "New York Knicks",
                      price: 1.91,
                      point: 7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 226,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "1d079e138a8bde082dad08a54ff4581e",
          sport_key: "basketball_nba",
          sport_title: "NBA",
          commence_time: "2022-03-23T23:10:00Z",
          home_team: "Indiana Pacers",
          away_team: "Sacramento Kings",
          bookmakers: [
            {
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.44,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.85,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.91,
                      point: -6,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.91,
                      point: 6,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T12:26:41Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.44,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.7,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T12:28:27Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.4,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 3,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.91,
                      point: -6,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.91,
                      point: 6,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.43,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.9,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.91,
                      point: -6,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.91,
                      point: 6,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T12:28:30Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.42,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.98,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.91,
                      point: -6,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.91,
                      point: 6,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T12:27:16Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.45,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.85,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.92,
                      point: -5.5,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.92,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 237,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 237,
                    },
                  ],
                },
              ],
            },
            {
              key: "bovada",
              title: "Bovada",
              last_update: "2022-03-23T12:28:22Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.44,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.85,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 237,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 237,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T12:27:17Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.44,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T12:23:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.44,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.95,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 237,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 237,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.44,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.95,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.87,
                      point: -5.5,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.95,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 237,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 237,
                    },
                  ],
                },
              ],
            },
            {
              key: "betfair",
              title: "Betfair",
              last_update: "2022-03-23T12:24:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.48,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.96,
                    },
                  ],
                },
                {
                  key: "h2h_lay",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.51,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 3.1,
                    },
                  ],
                },
              ],
            },
            {
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T12:29:40Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.4,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 3,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.91,
                      point: -6,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.91,
                      point: 6,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T12:29:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.44,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.95,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "barstool",
              title: "Barstool Sportsbook",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.43,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.88,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.89,
                      point: -6,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.92,
                      point: 6,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T12:28:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.43,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.88,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.89,
                      point: -6,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.92,
                      point: 6,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "unibet",
              title: "Unibet",
              last_update: "2022-03-23T12:23:44Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.44,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.88,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.9,
                      point: -6,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.92,
                      point: 6,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "twinspires",
              title: "TwinSpires",
              last_update: "2022-03-23T12:29:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.43,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.88,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.89,
                      point: -6,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.92,
                      point: 6,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T12:27:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.43,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.88,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.89,
                      point: -6,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.92,
                      point: 6,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "betus",
              title: "BetUS",
              last_update: "2022-03-23T12:27:32Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.45,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 2.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Indiana Pacers",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Sacramento Kings",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 237,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 237,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "04e391f405764f95b798b761a58786b2",
          sport_key: "basketball_nba",
          sport_title: "NBA",
          commence_time: "2022-03-23T23:40:00Z",
          home_team: "Boston Celtics",
          away_team: "Utah Jazz",
          bookmakers: [
            {
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.48,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.87,
                      point: -5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.95,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 219.5,
                    },
                    {
                      name: "Under",
                      price: 1.87,
                      point: 219.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T12:26:41Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.44,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.65,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 2,
                      point: -5.5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.85,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T12:28:27Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.65,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.95,
                      point: -5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.87,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.45,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.9,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.9,
                      point: -5.5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.9,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.48,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.91,
                      point: -4.5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.91,
                      point: 4.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T12:28:30Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.47,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.91,
                      point: -5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.91,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T12:23:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.46,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.9,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.95,
                      point: -5.5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.95,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T12:27:16Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.48,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.92,
                      point: -5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.92,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "bovada",
              title: "Bovada",
              last_update: "2022-03-23T12:28:22Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.7,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.91,
                      point: -5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.91,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T12:27:17Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.44,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betfair",
              title: "Betfair",
              last_update: "2022-03-23T12:24:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.96,
                    },
                  ],
                },
                {
                  key: "h2h_lay",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.51,
                    },
                    {
                      name: "Utah Jazz",
                      price: 3,
                    },
                  ],
                },
              ],
            },
            {
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T12:29:40Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.44,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.85,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.91,
                      point: -5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.91,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.87,
                      point: 219.5,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 219.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betus",
              title: "BetUS",
              last_update: "2022-03-23T12:27:32Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.48,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.91,
                      point: -5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.91,
                      point: 5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T12:29:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.45,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.9,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 220,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 220,
                    },
                  ],
                },
              ],
            },
            {
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T12:28:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.48,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.89,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "unibet",
              title: "Unibet",
              last_update: "2022-03-23T12:23:44Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.48,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "twinspires",
              title: "TwinSpires",
              last_update: "2022-03-23T12:29:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.48,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.89,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "barstool",
              title: "Barstool Sportsbook",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.48,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.89,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T12:27:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.48,
                    },
                    {
                      name: "Utah Jazz",
                      price: 2.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Boston Celtics",
                      price: 1.91,
                      point: -5.5,
                    },
                    {
                      name: "Utah Jazz",
                      price: 1.91,
                      point: 5.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.89,
                      point: 219,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "2520dd01fee561a28e30c85e2ac69854",
          sport_key: "basketball_nba",
          sport_title: "NBA",
          commence_time: "2022-03-23T23:40:00Z",
          home_team: "Memphis Grizzlies",
          away_team: "Brooklyn Nets",
          bookmakers: [
            {
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T12:28:30Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.69,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.22,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.93,
                      point: -3,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.89,
                      point: 3,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.69,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.25,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.87,
                      point: -2.5,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.95,
                      point: 2.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 237,
                    },
                    {
                      name: "Under",
                      price: 1.87,
                      point: 237,
                    },
                  ],
                },
              ],
            },
            {
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T12:26:41Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.67,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.15,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.91,
                      point: -3,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.91,
                      point: 3,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 235.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 235.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T12:28:27Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.67,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.25,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.91,
                      point: -3,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.91,
                      point: 3,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 235,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 235,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.71,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.2,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.91,
                      point: -2.5,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.91,
                      point: 2.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T12:27:16Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.69,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.25,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.92,
                      point: -2.5,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.92,
                      point: 2.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "bovada",
              title: "Bovada",
              last_update: "2022-03-23T12:28:22Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.67,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.3,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.91,
                      point: -3,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.91,
                      point: 3,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T12:27:17Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.71,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.15,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.91,
                      point: -2.5,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.91,
                      point: 2.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T12:23:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.71,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.2,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.95,
                      point: -2.5,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.95,
                      point: 2.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 237.5,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 237.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.71,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.2,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.9,
                      point: -2.5,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.9,
                      point: 2.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 237.5,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 237.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T12:29:40Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.69,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.25,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.87,
                      point: -2.5,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.95,
                      point: 2.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 235.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 235.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betus",
              title: "BetUS",
              last_update: "2022-03-23T12:27:32Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.69,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.25,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.91,
                      point: -2.5,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.91,
                      point: 2.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 237,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 237,
                    },
                  ],
                },
              ],
            },
            {
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T12:29:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.69,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.25,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.87,
                      point: -2.5,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.95,
                      point: 2.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 235.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 235.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "unibet",
              title: "Unibet",
              last_update: "2022-03-23T12:23:44Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.67,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.23,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.9,
                      point: -2.5,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.91,
                      point: 2.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 235.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 235.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "twinspires",
              title: "TwinSpires",
              last_update: "2022-03-23T12:29:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.67,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.23,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.89,
                      point: -2.5,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.91,
                      point: 2.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "barstool",
              title: "Barstool Sportsbook",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.67,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.23,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.89,
                      point: -2.5,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.91,
                      point: 2.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T12:28:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.67,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.23,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.89,
                      point: -2.5,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.91,
                      point: 2.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betfair",
              title: "Betfair",
              last_update: "2022-03-23T12:24:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.76,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.3,
                    },
                  ],
                },
                {
                  key: "h2h_lay",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.77,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.32,
                    },
                  ],
                },
              ],
            },
            {
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T12:27:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.67,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 2.23,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Brooklyn Nets",
                      price: 1.89,
                      point: -2.5,
                    },
                    {
                      name: "Memphis Grizzlies",
                      price: 1.91,
                      point: 2.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "385d6a7b9b71b2f469edd22f98c923c3",
          sport_key: "basketball_nba",
          sport_title: "NBA",
          commence_time: "2022-03-23T23:40:00Z",
          home_team: "Miami Heat",
          away_team: "Golden State Warriors",
          bookmakers: [
            {
              key: "bovada",
              title: "Bovada",
              last_update: "2022-03-23T12:28:22Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.3,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.36,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.91,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.91,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 213,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 213,
                    },
                  ],
                },
              ],
            },
            {
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T12:28:30Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.45,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.33,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.91,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.91,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 213.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 213.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.35,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.35,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.9,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.9,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 213,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 213,
                    },
                  ],
                },
              ],
            },
            {
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.1,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.38,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.87,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.95,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 213.5,
                    },
                    {
                      name: "Under",
                      price: 1.87,
                      point: 213.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T12:27:17Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.4,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.87,
                      point: 6.5,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.95,
                      point: -6.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 213.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 213.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T12:27:16Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.35,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.36,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.92,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.92,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 213.5,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 213.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T12:28:27Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.2,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.37,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.91,
                      point: 6.5,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.91,
                      point: -6.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 213.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 213.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T12:23:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.35,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.36,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.95,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.95,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 213,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 213,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.3,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.36,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.91,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.91,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 213.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 213.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T12:29:40Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.4,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.33,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.91,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.91,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 214.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 214.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T12:29:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.4,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.36,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.91,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.91,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 214.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 214.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "barstool",
              title: "Barstool Sportsbook",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.35,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.34,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.91,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.91,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 214.5,
                    },
                    {
                      name: "Under",
                      price: 1.89,
                      point: 214.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T12:28:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.35,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.34,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.91,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.91,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 214.5,
                    },
                    {
                      name: "Under",
                      price: 1.89,
                      point: 214.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "unibet",
              title: "Unibet",
              last_update: "2022-03-23T12:23:44Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.35,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.34,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.91,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.91,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 214.5,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 214.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "twinspires",
              title: "TwinSpires",
              last_update: "2022-03-23T12:29:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.35,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.34,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.91,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.91,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 214.5,
                    },
                    {
                      name: "Under",
                      price: 1.89,
                      point: 214.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betfair",
              title: "Betfair",
              last_update: "2022-03-23T12:24:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.2,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.43,
                    },
                  ],
                },
                {
                  key: "h2h_lay",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.5,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.44,
                    },
                  ],
                },
              ],
            },
            {
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T12:27:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.35,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.34,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.91,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.91,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 214.5,
                    },
                    {
                      name: "Under",
                      price: 1.89,
                      point: 214.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T12:26:41Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.15,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.33,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.91,
                      point: 6.5,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.91,
                      point: -6.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.85,
                      point: 214,
                    },
                    {
                      name: "Under",
                      price: 2,
                      point: 214,
                    },
                  ],
                },
              ],
            },
            {
              key: "betus",
              title: "BetUS",
              last_update: "2022-03-23T12:27:32Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 3.4,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.34,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Golden State Warriors",
                      price: 1.91,
                      point: 7,
                    },
                    {
                      name: "Miami Heat",
                      price: 1.91,
                      point: -7,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 213.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 213.5,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "1617c9adbc5207f2f1b15816387bb232",
          sport_key: "basketball_nba",
          sport_title: "NBA",
          commence_time: "2022-03-24T00:10:00Z",
          home_team: "Minnesota Timberwolves",
          away_team: "Phoenix Suns",
          bookmakers: [
            {
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.83,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.87,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T12:26:41Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.95,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T12:28:27Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.95,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.87,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.91,
                      point: 1,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.91,
                      point: -1,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 235.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 235.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2.02,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.81,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.9,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.9,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 237,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 237,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2.05,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T12:28:30Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2.02,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.83,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T12:23:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2.12,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.76,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.97,
                      point: 2,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.94,
                      point: -2,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 237,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 237,
                    },
                  ],
                },
              ],
            },
            {
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T12:27:16Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2.05,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.92,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.92,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "bovada",
              title: "Bovada",
              last_update: "2022-03-23T12:28:22Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2.05,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T12:27:17Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.83,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betfair",
              title: "Betfair",
              last_update: "2022-03-23T12:24:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2.04,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.86,
                    },
                  ],
                },
                {
                  key: "h2h_lay",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2.18,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.96,
                    },
                  ],
                },
              ],
            },
            {
              key: "betus",
              title: "BetUS",
              last_update: "2022-03-23T12:27:32Z",
              markets: [
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T12:29:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2.05,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "barstool",
              title: "Barstool Sportsbook",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2.02,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.83,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T12:28:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2.02,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.83,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "unibet",
              title: "Unibet",
              last_update: "2022-03-23T12:23:44Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2.02,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.83,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "twinspires",
              title: "TwinSpires",
              last_update: "2022-03-23T12:29:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2.02,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.83,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T12:27:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 2.02,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.83,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Minnesota Timberwolves",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Phoenix Suns",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 236,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "f1d90a64a4e3e04f2e7afed5919a49fe",
          sport_key: "basketball_nba",
          sport_title: "NBA",
          commence_time: "2022-03-24T00:10:00Z",
          home_team: "Oklahoma City Thunder",
          away_team: "Orlando Magic",
          bookmakers: [
            {
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T12:28:30Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.04,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.82,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.89,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.97,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.85,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.94,
                      point: 1,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.87,
                      point: -1,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 220.5,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 220.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.83,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 220.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 220.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T12:27:17Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.05,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 220.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 220.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T12:27:16Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.05,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.92,
                      point: 1.5,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.92,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 220.5,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 220.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T12:28:27Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.05,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.91,
                      point: 2,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.91,
                      point: -2,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T12:23:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.97,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.85,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.99,
                      point: 1,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.92,
                      point: -1,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 220.5,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 220.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.05,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 220.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 220.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T12:26:41Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.75,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "betus",
              title: "BetUS",
              last_update: "2022-03-23T12:27:32Z",
              markets: [
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 220,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 220,
                    },
                  ],
                },
              ],
            },
            {
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T12:29:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.1,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.77,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.91,
                      point: 2,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.91,
                      point: -2,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "barstool",
              title: "Barstool Sportsbook",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.02,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.82,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.92,
                      point: 1.5,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.88,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T12:28:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.02,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.82,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.92,
                      point: 1.5,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.88,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "unibet",
              title: "Unibet",
              last_update: "2022-03-23T12:23:44Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.02,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.82,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.92,
                      point: 1.5,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.89,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "twinspires",
              title: "TwinSpires",
              last_update: "2022-03-23T12:29:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.02,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.82,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.92,
                      point: 1.5,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.88,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "betfair",
              title: "Betfair",
              last_update: "2022-03-23T12:24:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.06,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.84,
                    },
                  ],
                },
                {
                  key: "h2h_lay",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.18,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.94,
                    },
                  ],
                },
              ],
            },
            {
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T12:27:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.02,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.82,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.92,
                      point: 1.5,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.88,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 219,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 219,
                    },
                  ],
                },
              ],
            },
            {
              key: "bovada",
              title: "Bovada",
              last_update: "2022-03-23T12:28:22Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.05,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.91,
                      point: 1.5,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.91,
                      point: -1.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 220.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 220.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T12:29:40Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 2.05,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.8,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Oklahoma City Thunder",
                      price: 1.91,
                      point: 2,
                    },
                    {
                      name: "Orlando Magic",
                      price: 1.91,
                      point: -2,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 219.5,
                    },
                    {
                      name: "Under",
                      price: 1.87,
                      point: 219.5,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "efc6ba33b4a70cc1325e9421d122c50c",
          sport_key: "basketball_nba",
          sport_title: "NBA",
          commence_time: "2022-03-24T00:40:00Z",
          home_team: "Dallas Mavericks",
          away_team: "Houston Rockets",
          bookmakers: [
            {
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T12:28:27Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.22,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.5,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.91,
                      point: -9,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.91,
                      point: 9,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225,
                    },
                  ],
                },
              ],
            },
            {
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T12:28:30Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.22,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.5,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.91,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.91,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.89,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.21,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.6,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.91,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.91,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.24,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.1,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.95,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.87,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T12:27:16Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.22,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.35,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.92,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.92,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "bovada",
              title: "Bovada",
              last_update: "2022-03-23T12:28:22Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.22,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.35,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.91,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.91,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T12:27:17Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.22,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.4,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.91,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.91,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betfair",
              title: "Betfair",
              last_update: "2022-03-23T12:24:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.25,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.5,
                    },
                  ],
                },
                {
                  key: "h2h_lay",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.29,
                    },
                    {
                      name: "Houston Rockets",
                      price: 5,
                    },
                  ],
                },
              ],
            },
            {
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T12:23:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.22,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.6,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.95,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.95,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.22,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.59,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.9,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.9,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.88,
                      point: 225,
                    },
                    {
                      name: "Under",
                      price: 1.93,
                      point: 225,
                    },
                  ],
                },
              ],
            },
            {
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T12:29:40Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.2,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.6,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.91,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.91,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betus",
              title: "BetUS",
              last_update: "2022-03-23T12:27:32Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.22,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.5,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.91,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.91,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T12:29:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.22,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.6,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.91,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.91,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "barstool",
              title: "Barstool Sportsbook",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.23,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.35,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.93,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.88,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.89,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T12:28:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.23,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.35,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.93,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.88,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.89,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "unibet",
              title: "Unibet",
              last_update: "2022-03-23T12:23:44Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.23,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.35,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.94,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.88,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "twinspires",
              title: "TwinSpires",
              last_update: "2022-03-23T12:29:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.23,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.35,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.93,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.88,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.89,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T12:27:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.23,
                    },
                    {
                      name: "Houston Rockets",
                      price: 4.35,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.93,
                      point: -9.5,
                    },
                    {
                      name: "Houston Rockets",
                      price: 1.88,
                      point: 9.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.89,
                      point: 226,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 226,
                    },
                  ],
                },
              ],
            },
            {
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T12:26:41Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.22,
                    },
                    {
                      name: "Houston Rockets",
                      price: 3.9,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Dallas Mavericks",
                      price: 1.85,
                      point: -9,
                    },
                    {
                      name: "Houston Rockets",
                      price: 2,
                      point: 9,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 225.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 225.5,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "9737043bb9893f0c879c750a437e41da",
          sport_key: "basketball_nba",
          sport_title: "NBA",
          commence_time: "2022-03-24T02:10:00Z",
          home_team: "Los Angeles Lakers",
          away_team: "Philadelphia 76ers",
          bookmakers: [
            {
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.3,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.34,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 230,
                    },
                    {
                      name: "Under",
                      price: 1.87,
                      point: 230,
                    },
                  ],
                },
              ],
            },
            {
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T12:28:27Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.7,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.29,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 8,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -8,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 229,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 229,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.7,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.29,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 229.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 229.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T12:26:41Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.3,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.33,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 229.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 229.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T12:27:16Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.45,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.32,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.92,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.92,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 229.5,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 229.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T12:28:30Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.45,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.33,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 229.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 229.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "bovada",
              title: "Bovada",
              last_update: "2022-03-23T12:28:22Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.55,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.32,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 229.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 229.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T12:27:17Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.4,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.33,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 229.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 229.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betfair",
              title: "Betfair",
              last_update: "2022-03-23T12:24:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.45,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.35,
                    },
                  ],
                },
                {
                  key: "h2h_lay",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.85,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.41,
                    },
                  ],
                },
              ],
            },
            {
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T12:23:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.33,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.95,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.95,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 229,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 229,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.33,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.9,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.9,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 229,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 229,
                    },
                  ],
                },
              ],
            },
            {
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T12:29:40Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.31,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 229.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 229.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betus",
              title: "BetUS",
              last_update: "2022-03-23T12:27:32Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.33,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 229,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 229,
                    },
                  ],
                },
              ],
            },
            {
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T12:29:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.65,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.32,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 229.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 229.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "barstool",
              title: "Barstool Sportsbook",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.55,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.32,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.89,
                      point: 230,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 230,
                    },
                  ],
                },
              ],
            },
            {
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T12:28:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.55,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.32,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.89,
                      point: 230,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 230,
                    },
                  ],
                },
              ],
            },
            {
              key: "unibet",
              title: "Unibet",
              last_update: "2022-03-23T12:23:44Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.55,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.32,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 230,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 230,
                    },
                  ],
                },
              ],
            },
            {
              key: "twinspires",
              title: "TwinSpires",
              last_update: "2022-03-23T12:29:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.55,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.32,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.89,
                      point: 230,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 230,
                    },
                  ],
                },
              ],
            },
            {
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T12:27:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 3.55,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.32,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Los Angeles Lakers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "Philadelphia 76ers",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.89,
                      point: 230,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 230,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "c69c4912530dedd48d09c3aca28d8497",
          sport_key: "basketball_nba",
          sport_title: "NBA",
          commence_time: "2022-03-24T02:10:00Z",
          home_team: "Portland Trail Blazers",
          away_team: "San Antonio Spurs",
          bookmakers: [
            {
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.7,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.29,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.91,
                      point: 8.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.91,
                      point: -8.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 233,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 233,
                    },
                  ],
                },
              ],
            },
            {
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T12:28:27Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.7,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.29,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.91,
                      point: 8,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.91,
                      point: -8,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 233.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 233.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.8,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.28,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.92,
                      point: 8.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.89,
                      point: -8.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 232,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 232,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T12:28:38Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.85,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.28,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.91,
                      point: 8.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.91,
                      point: -8.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 232.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 232.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T12:23:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.8,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.29,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.95,
                      point: 8.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.95,
                      point: -8.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 232,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 232,
                    },
                  ],
                },
              ],
            },
            {
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T12:26:41Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.28,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 2,
                      point: 8,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.85,
                      point: -8,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 233.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 233.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T12:27:16Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.7,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.28,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.92,
                      point: 8.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.92,
                      point: -8.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 232.5,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 232.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T12:28:30Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.95,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.27,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.91,
                      point: 8.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.91,
                      point: -8.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 232.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 232.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T12:27:17Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 4,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.25,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.91,
                      point: 8.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.91,
                      point: -8.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 232.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 232.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "bovada",
              title: "Bovada",
              last_update: "2022-03-23T12:28:22Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.85,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.27,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.91,
                      point: 8.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.91,
                      point: -8.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 233,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 233,
                    },
                  ],
                },
              ],
            },
            {
              key: "betfair",
              title: "Betfair",
              last_update: "2022-03-23T12:24:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.9,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.31,
                    },
                  ],
                },
                {
                  key: "h2h_lay",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 4.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.35,
                    },
                  ],
                },
              ],
            },
            {
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T12:29:40Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.6,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.28,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.91,
                      point: 8.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.91,
                      point: -8.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 232.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 232.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betus",
              title: "BetUS",
              last_update: "2022-03-23T12:27:32Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.9,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.29,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.91,
                      point: 8.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.91,
                      point: -8.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 232.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 232.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T12:29:45Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.65,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.32,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.91,
                      point: 7.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.91,
                      point: -7.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 233.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 233.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "barstool",
              title: "Barstool Sportsbook",
              last_update: "2022-03-23T12:29:19Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.9,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.27,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.91,
                      point: 8.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.91,
                      point: -8.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.89,
                      point: 232.5,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 232.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T12:28:33Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.65,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.3,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.91,
                      point: 8,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.91,
                      point: -8,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 233.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 233.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "unibet",
              title: "Unibet",
              last_update: "2022-03-23T12:23:44Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.65,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.3,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.91,
                      point: 8,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.91,
                      point: -8,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 233.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 233.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "twinspires",
              title: "TwinSpires",
              last_update: "2022-03-23T12:29:07Z",
              markets: [
                {
                  key: "h2h",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 3.9,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.27,
                    },
                  ],
                },
                {
                  key: "spreads",
                  outcomes: [
                    {
                      name: "Portland Trail Blazers",
                      price: 1.91,
                      point: 8.5,
                    },
                    {
                      name: "San Antonio Spurs",
                      price: 1.91,
                      point: -8.5,
                    },
                  ],
                },
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.89,
                      point: 232.5,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 232.5,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  mounted() {
    console.log(this.oddsDataList);
    // this.getList();
  },
  methods: {
    getList() {
      Api("/basketball_nba/odds", {
        params: {
          markets: "h2h,spreads,totals",
          oddsFormat: "decimal",
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getOddsLine() {
        console.log('getOddsLine')
    },
    timeFormat(timeStamp) {
      return Utils.dateFormat(timeStamp, "-", true);
    },
  },
};
</script>
<style lang="postcss">
    .primary-btn{
        @apply border border-orange-500 py-1 px-2 rounded-md cursor-pointer hover:bg-orange-600 hover:text-white hover:duration-100
    }
</style>