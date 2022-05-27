<template>
    <div class="wrapper text-left">
        <div class="text-center mb-5">
            <h1 class="text-4xl">Game Results</h1>
            <p class="text-xl my-2">{{ currentDay }}</p>
        </div>
        <div class="flex flex-wrap">
            <!-- 比賽結果 -->
            <template v-for="item in data.gamesScoreList" :key="item.id">
                <div class="w-full lg:w-1/2 border bg-cyan-100">
                    <div class="flex justify-around w-full p-2">
                        <div class="flex flex-col items-center w-1/3">
                            <span class="text-center">
                                {{ item.away_team }}
                            </span>
                            <img
                                class="w-12 h-12 md:w-16 md:h-16"
                                :src="
                                    '/' +
                                    this.sportImgUrl +
                                    '/' +
                                    item.away_team +
                                    this.ImgUrl
                                "
                                alt=""
                            />
                        </div>
                        <div class="flex justify-center items-center w-1/3">
                            <span class="text-2xl font-extrabold">
                                {{ item.scores ? item.scores[1]['score'] : '' }}
                            </span>
                            <span class="mx-3 text-emerald-600 font-bold">
                                {{ item.scores ? 'Final' : '' }}
                            </span>
                            <span class="text-2xl font-extrabold">
                                {{ item.scores ? item.scores[0]['score'] : '' }}
                            </span>
                        </div>
                        <div class="flex flex-col items-center w-1/3">
                            <span class="text-center">
                                {{ item.home_team }}
                            </span>
                            <img
                                class="w-12 h-12 md:w-16 md:h-16"
                                :src="
                                    '/' +
                                    this.sportImgUrl +
                                    '/' +
                                    item.home_team +
                                    this.ImgUrl
                                "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </template>
        </div>

        <div class="text-center my-5">
            <h1 class="text-4xl">Upcoming Games</h1>
        </div>
        <div class="flex flex-wrap">
            <!-- 明日賽程 -->
            <template v-for="item in data.upcomingGamesList" :key="item.id">
                <div class="w-full lg:w-1/2 border bg-cyan-100">
                    <div class="flex justify-around w-full p-2">
                        <div class="flex flex-col items-center w-1/3">
                            <span class="text-center">
                                {{ item.away_team }}
                            </span>
                            <img
                                class="w-12 h-12 md:w-16 md:h-16"
                                :src="
                                    '/' +
                                    this.sportImgUrl +
                                    '/' +
                                    item.away_team +
                                    this.ImgUrl
                                "
                                alt=""
                            />
                        </div>
                        <div class="flex justify-center items-center w-1/3">
                            <span class="text-2xl font-extrabold">
                                {{ item.scores ? item.scores[1]['score'] : '' }}
                            </span>
                            <span class="mx-3 text-emerald-600 font-bold">
                                {{ item.scores ? 'Final' : '' }}
                            </span>
                            <span class="text-2xl font-extrabold">
                                {{ item.scores ? item.scores[0]['score'] : '' }}
                            </span>
                        </div>
                        <div class="flex flex-col items-center w-1/3">
                            <span class="text-center">
                                {{ item.home_team }}
                            </span>
                            <img
                                class="w-12 h-12 md:w-16 md:h-16"
                                :src="
                                    '/' +
                                    this.sportImgUrl +
                                    '/' +
                                    item.home_team +
                                    this.ImgUrl
                                "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import Utils from '../utility/util.js'
import Api from '../api/request.js'
import { ref, reactive, onMounted, watch } from 'vue'
export default {
    setup() {
        const ImgUrl = ref('.svg')
        const sportImgUrl = ref('NBA')
        const sportSelectValue = ref('basketball_nba')
        const currentDay = ref('')
        const data = reactive({
            gamesScoreList: [],
            upcomingGamesList: [],
        })
        onMounted(() => {
            getScoreInfo()
        })
        watch(sportSelectValue, () => {
            switch (sportSelectValue.value) {
                case 'basketball_nba':
                    sportImgUrl.value = 'NBA'
                case 'baseball_mlb':
                    sportImgUrl.value = 'MLB'
            }
            getList()
        })
        function getScoreInfo() {
            Api(`/${sportSelectValue.value}/scores`, {
                params: {
                    daysFrom: '1',
                },
            })
                .then((res) => {
                    // 篩選已完成比賽
                    data.gamesScoreList = res.data.filter((value) => {
                        return value.completed === true
                    })
                    data.upcomingGamesList = res.data.filter((value) => {
                        return value.completed === false
                    })
                    currentDay.value = Utils.dateFormat(
                        new Date(data.gamesScoreList[0].last_update).getTime(),
                        '-',
                        false
                    )
                    // console.log(gamesScoreList.value)
                })
                .catch((err) => {
                    console.error(err)
                })
        }
        return {
            data,
            ImgUrl,
            sportImgUrl,
            currentDay,
            sportSelectValue,
            getScoreInfo,
        }
    },
}
</script>
<style lang="postcss">
.wrapper {
    max-width: 980px;
    @apply mt-12 mx-auto;
}
</style>