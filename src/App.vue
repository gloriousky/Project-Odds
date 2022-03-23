<template>
  <vue-final-modal
    v-model="showModal"
    content-class="relative flex flex-col max-h-full mx-4 p-4 border dark:border-gray-800 rounded bg-white dark:bg-gray-900"
  >
    Modal Content Here
  </vue-final-modal>
  <button @click="showModal = true">Open Modal</button>
</template>
<script>
import Header from "./components/header.vue";
import Api from "./api/request.js";
export default {
  name: "App",
  components: {
    Header,
    Api,
  },
  data() {
    return {
      showModal: false,
      data: [
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
              last_update: "2022-03-23T09:26:35Z",
              markets: [
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
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T09:25:29Z",
              markets: [
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
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T09:21:38Z",
              markets: [
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
              last_update: "2022-03-23T09:26:39Z",
              markets: [
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
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T09:21:56Z",
              markets: [
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
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T09:25:15Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 225,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 225,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T09:25:20Z",
              markets: [
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
              last_update: "2022-03-23T09:25:41Z",
              markets: [
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
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T09:20:17Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 224.5,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 224.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T09:21:39Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 224.5,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 224.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T09:19:56Z",
              markets: [
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
              last_update: "2022-03-23T09:22:19Z",
              markets: [
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
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T09:26:25Z",
              markets: [
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
              key: "unibet",
              title: "Unibet",
              last_update: "2022-03-23T09:22:59Z",
              markets: [
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
              key: "twinspires",
              title: "TwinSpires",
              last_update: "2022-03-23T09:22:02Z",
              markets: [
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
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T09:26:04Z",
              markets: [
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
              key: "betus",
              title: "BetUS",
              last_update: "2022-03-23T09:26:16Z",
              markets: [
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
              last_update: "2022-03-23T09:26:35Z",
              markets: [
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
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T09:25:29Z",
              markets: [
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
              last_update: "2022-03-23T09:21:38Z",
              markets: [
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
              last_update: "2022-03-23T09:21:56Z",
              markets: [
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
              last_update: "2022-03-23T09:26:39Z",
              markets: [
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
              last_update: "2022-03-23T09:25:15Z",
              markets: [
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
              last_update: "2022-03-23T09:25:41Z",
              markets: [
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
              last_update: "2022-03-23T09:25:20Z",
              markets: [
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
              last_update: "2022-03-23T09:19:56Z",
              markets: [
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
              last_update: "2022-03-23T09:22:19Z",
              markets: [
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
              last_update: "2022-03-23T09:26:25Z",
              markets: [
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
              last_update: "2022-03-23T09:22:59Z",
              markets: [
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
              last_update: "2022-03-23T09:22:02Z",
              markets: [
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
              last_update: "2022-03-23T09:26:04Z",
              markets: [
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
              last_update: "2022-03-23T09:21:56Z",
              markets: [
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
              last_update: "2022-03-23T09:25:29Z",
              markets: [
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
              last_update: "2022-03-23T09:21:38Z",
              markets: [
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
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T09:26:39Z",
              markets: [
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
              last_update: "2022-03-23T09:26:35Z",
              markets: [
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
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T09:25:15Z",
              markets: [
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
              last_update: "2022-03-23T09:25:41Z",
              markets: [
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
              last_update: "2022-03-23T09:25:20Z",
              markets: [
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
              last_update: "2022-03-23T09:20:17Z",
              markets: [
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
                      price: 2,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T09:21:39Z",
              markets: [
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
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T09:22:11Z",
              markets: [
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
              last_update: "2022-03-23T09:19:56Z",
              markets: [
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
              last_update: "2022-03-23T09:22:19Z",
              markets: [
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
              last_update: "2022-03-23T09:26:25Z",
              markets: [
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
              last_update: "2022-03-23T09:22:59Z",
              markets: [
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
              last_update: "2022-03-23T09:22:02Z",
              markets: [
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
              last_update: "2022-03-23T09:26:04Z",
              markets: [
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
              last_update: "2022-03-23T09:26:16Z",
              markets: [
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
              last_update: "2022-03-23T09:21:56Z",
              markets: [
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
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T09:25:29Z",
              markets: [
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
              last_update: "2022-03-23T09:21:38Z",
              markets: [
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
              last_update: "2022-03-23T09:21:39Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 219.5,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 219.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T09:26:39Z",
              markets: [
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
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T09:26:35Z",
              markets: [
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
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T09:20:17Z",
              markets: [
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
                      price: 1.95,
                      point: 219.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T09:25:15Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 220,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 220,
                    },
                  ],
                },
              ],
            },
            {
              key: "bovada",
              title: "Bovada",
              last_update: "2022-03-23T09:25:41Z",
              markets: [
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
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T09:25:20Z",
              markets: [
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
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T09:22:11Z",
              markets: [
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
              last_update: "2022-03-23T09:26:16Z",
              markets: [
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
              last_update: "2022-03-23T09:19:56Z",
              markets: [
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
              last_update: "2022-03-23T09:26:25Z",
              markets: [
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
              key: "unibet",
              title: "Unibet",
              last_update: "2022-03-23T09:22:59Z",
              markets: [
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
              key: "twinspires",
              title: "TwinSpires",
              last_update: "2022-03-23T09:22:02Z",
              markets: [
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
              key: "barstool",
              title: "Barstool Sportsbook",
              last_update: "2022-03-23T09:22:19Z",
              markets: [
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
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T09:26:04Z",
              markets: [
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
              last_update: "2022-03-23T09:26:35Z",
              markets: [
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
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T09:21:56Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.87,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T09:21:38Z",
              markets: [
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
              last_update: "2022-03-23T09:26:39Z",
              markets: [
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
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T09:25:15Z",
              markets: [
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
              last_update: "2022-03-23T09:25:41Z",
              markets: [
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
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T09:25:20Z",
              markets: [
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
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T09:20:17Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
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
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T09:21:39Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T09:22:11Z",
              markets: [
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
              last_update: "2022-03-23T09:26:16Z",
              markets: [
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
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T09:19:56Z",
              markets: [
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
              last_update: "2022-03-23T09:22:59Z",
              markets: [
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
              last_update: "2022-03-23T09:22:02Z",
              markets: [
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
              key: "barstool",
              title: "Barstool Sportsbook",
              last_update: "2022-03-23T09:22:19Z",
              markets: [
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
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T09:26:25Z",
              markets: [
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
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T09:26:04Z",
              markets: [
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
              last_update: "2022-03-23T09:25:41Z",
              markets: [
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
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T09:26:35Z",
              markets: [
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
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T09:21:56Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 214.5,
                    },
                    {
                      name: "Under",
                      price: 1.87,
                      point: 214.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T09:25:20Z",
              markets: [
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
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T09:25:15Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 214.5,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 214.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T09:21:38Z",
              markets: [
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
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T09:26:39Z",
              markets: [
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
              last_update: "2022-03-23T09:19:56Z",
              markets: [
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
              last_update: "2022-03-23T09:22:19Z",
              markets: [
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
              last_update: "2022-03-23T09:26:25Z",
              markets: [
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
              last_update: "2022-03-23T09:22:59Z",
              markets: [
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
              last_update: "2022-03-23T09:22:02Z",
              markets: [
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
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T09:26:04Z",
              markets: [
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
              last_update: "2022-03-23T09:25:29Z",
              markets: [
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
              last_update: "2022-03-23T09:21:56Z",
              markets: [
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
              last_update: "2022-03-23T09:25:29Z",
              markets: [
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
              last_update: "2022-03-23T09:21:38Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 234.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 234.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T09:21:39Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 236,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 236,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T09:26:39Z",
              markets: [
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
              last_update: "2022-03-23T09:26:35Z",
              markets: [
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
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T09:20:17Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
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
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T09:25:15Z",
              markets: [
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
              last_update: "2022-03-23T09:25:41Z",
              markets: [
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
              last_update: "2022-03-23T09:25:20Z",
              markets: [
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
              last_update: "2022-03-23T09:26:16Z",
              markets: [
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
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T09:19:56Z",
              markets: [
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
              last_update: "2022-03-23T09:22:19Z",
              markets: [
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
              last_update: "2022-03-23T09:26:25Z",
              markets: [
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
              last_update: "2022-03-23T09:22:59Z",
              markets: [
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
              last_update: "2022-03-23T09:22:02Z",
              markets: [
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
              last_update: "2022-03-23T09:26:04Z",
              markets: [
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
              last_update: "2022-03-23T09:26:35Z",
              markets: [
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
              last_update: "2022-03-23T09:21:39Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 219.5,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 219.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "draftkings",
              title: "DraftKings",
              last_update: "2022-03-23T09:21:56Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.87,
                      point: 218,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 218,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T09:25:20Z",
              markets: [
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
              key: "gtbets",
              title: "GTbets",
              last_update: "2022-03-23T09:25:15Z",
              markets: [
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
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T09:21:38Z",
              markets: [
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
              last_update: "2022-03-23T09:20:17Z",
              markets: [
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
                      price: 1.95,
                      point: 219.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T09:26:39Z",
              markets: [
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
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T09:25:29Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.91,
                      point: 218.5,
                    },
                    {
                      name: "Under",
                      price: 1.91,
                      point: 218.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betus",
              title: "BetUS",
              last_update: "2022-03-23T09:26:16Z",
              markets: [
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
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T09:19:56Z",
              markets: [
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
              last_update: "2022-03-23T09:22:19Z",
              markets: [
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
              last_update: "2022-03-23T09:26:25Z",
              markets: [
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
              last_update: "2022-03-23T09:22:59Z",
              markets: [
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
              last_update: "2022-03-23T09:22:02Z",
              markets: [
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
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T09:26:04Z",
              markets: [
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
              last_update: "2022-03-23T09:25:41Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.87,
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
              last_update: "2022-03-23T09:21:38Z",
              markets: [
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
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T09:26:35Z",
              markets: [
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
              last_update: "2022-03-23T09:26:39Z",
              markets: [
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
              last_update: "2022-03-23T09:21:56Z",
              markets: [
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
              last_update: "2022-03-23T09:25:15Z",
              markets: [
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
              last_update: "2022-03-23T09:25:41Z",
              markets: [
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
              last_update: "2022-03-23T09:25:20Z",
              markets: [
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
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T09:20:17Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 225,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 225,
                    },
                  ],
                },
              ],
            },
            {
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T09:21:39Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 225,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 225,
                    },
                  ],
                },
              ],
            },
            {
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T09:22:11Z",
              markets: [
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
              last_update: "2022-03-23T09:26:16Z",
              markets: [
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
              last_update: "2022-03-23T09:19:56Z",
              markets: [
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
              last_update: "2022-03-23T09:22:19Z",
              markets: [
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
              last_update: "2022-03-23T09:26:25Z",
              markets: [
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
              last_update: "2022-03-23T09:22:59Z",
              markets: [
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
              last_update: "2022-03-23T09:22:02Z",
              markets: [
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
              last_update: "2022-03-23T09:26:04Z",
              markets: [
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
              last_update: "2022-03-23T09:25:29Z",
              markets: [
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
              last_update: "2022-03-23T09:21:56Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 229.5,
                    },
                    {
                      name: "Under",
                      price: 1.87,
                      point: 229.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "wynnbet",
              title: "WynnBET",
              last_update: "2022-03-23T09:21:38Z",
              markets: [
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
              last_update: "2022-03-23T09:26:39Z",
              markets: [
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
              last_update: "2022-03-23T09:25:29Z",
              markets: [
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
              last_update: "2022-03-23T09:25:15Z",
              markets: [
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
              last_update: "2022-03-23T09:26:35Z",
              markets: [
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
              last_update: "2022-03-23T09:25:41Z",
              markets: [
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
              last_update: "2022-03-23T09:25:20Z",
              markets: [
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
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T09:20:17Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 2,
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
              key: "betonlineag",
              title: "BetOnline.ag",
              last_update: "2022-03-23T09:21:39Z",
              markets: [
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
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T09:22:11Z",
              markets: [
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
              last_update: "2022-03-23T09:26:16Z",
              markets: [
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
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T09:19:56Z",
              markets: [
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
              last_update: "2022-03-23T09:22:19Z",
              markets: [
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
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T09:26:25Z",
              markets: [
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
              key: "unibet",
              title: "Unibet",
              last_update: "2022-03-23T09:22:59Z",
              markets: [
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
              key: "twinspires",
              title: "TwinSpires",
              last_update: "2022-03-23T09:22:02Z",
              markets: [
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
              key: "betrivers",
              title: "BetRivers",
              last_update: "2022-03-23T09:26:04Z",
              markets: [
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
              last_update: "2022-03-23T09:21:56Z",
              markets: [
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
              last_update: "2022-03-23T09:21:38Z",
              markets: [
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
              last_update: "2022-03-23T09:21:39Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.9,
                      point: 233.5,
                    },
                    {
                      name: "Under",
                      price: 1.9,
                      point: 233.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "williamhill_us",
              title: "William Hill (US)",
              last_update: "2022-03-23T09:26:39Z",
              markets: [
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
              key: "lowvig",
              title: "LowVig.ag",
              last_update: "2022-03-23T09:20:17Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.95,
                      point: 233.5,
                    },
                    {
                      name: "Under",
                      price: 1.95,
                      point: 233.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "foxbet",
              title: "FOX Bet",
              last_update: "2022-03-23T09:25:29Z",
              markets: [
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
              last_update: "2022-03-23T09:25:15Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.92,
                      point: 233.5,
                    },
                    {
                      name: "Under",
                      price: 1.92,
                      point: 233.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "fanduel",
              title: "FanDuel",
              last_update: "2022-03-23T09:26:35Z",
              markets: [
                {
                  key: "totals",
                  outcomes: [
                    {
                      name: "Over",
                      price: 1.89,
                      point: 233.5,
                    },
                    {
                      name: "Under",
                      price: 1.93,
                      point: 233.5,
                    },
                  ],
                },
              ],
            },
            {
              key: "betmgm",
              title: "BetMGM",
              last_update: "2022-03-23T09:25:20Z",
              markets: [
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
              key: "bovada",
              title: "Bovada",
              last_update: "2022-03-23T09:25:41Z",
              markets: [
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
              key: "pointsbetus",
              title: "PointsBet (US)",
              last_update: "2022-03-23T09:22:11Z",
              markets: [
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
              key: "betus",
              title: "BetUS",
              last_update: "2022-03-23T09:26:16Z",
              markets: [
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
              key: "mybookieag",
              title: "MyBookie.ag",
              last_update: "2022-03-23T09:19:56Z",
              markets: [
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
              last_update: "2022-03-23T09:22:19Z",
              markets: [
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
              key: "sugarhouse",
              title: "SugarHouse",
              last_update: "2022-03-23T09:26:25Z",
              markets: [
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
              last_update: "2022-03-23T09:22:59Z",
              markets: [
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
              last_update: "2022-03-23T09:22:02Z",
              markets: [
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
          ],
        },
      ],
    };
  },
  mounted() {
    console.log(this.data)
    // this.getList();
  },
  methods: {
    getList() {
      Api("/basketball_nba/odds", {
        params: {
          markets: "totals",
          oddsFormat: "decimal",
        },
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style>
</style>
