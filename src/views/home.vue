<template>
    <div class="wrapper text-left">
        <div class="flex flex-wrap">
            <template v-for="item in scoreList" :key="item.id">
                <!-- 比賽結果 -->
                <div class="w-1/2 border">
                    <div class="flex justify-around">
                        <div class="flex flex-col items-center w-1/3">
                            <span class="text-center">
                                {{ item.away_team }}
                            </span>
                            <img
                                class="w-16 h-16"
                                :src="/NBA/ + item.away_team + this.ImgUrl"
                                alt=""
                            />
                        </div>
                        <div class="flex items-center w-1/4">
                            <span class="text-2xl font-extrabold">
                                {{item.scores ? item.scores[1]['score'] : ''}}
                            </span>
                            <span class="mx-3 text-emerald-600 font-bold">
                                {{item.scores ? 'Final' : ''}}
                            </span>
                            <span class="text-2xl font-extrabold">
                                {{item.scores ? item.scores[0]['score'] : ''}}
                            </span>
                        </div>
                        <div class="flex flex-col items-center w-1/3">
                            <span class="text-center">
                                {{ item.home_team }}
                            </span>
                            <img
                                class="w-16 h-16"
                                :src="/NBA/ + item.home_team + this.ImgUrl"
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
import Api from '../api/request.js'
import { ref, onMounted } from 'vue'
export default {
    setup() {
        const ImgUrl = ref('.svg')
        const gamesScoreList = ref([
            {
                id: '98671efce3a818cc1addd9d2e83b2d23',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-27T19:41:26Z',
                completed: true,
                home_team: 'Detroit Pistons',
                away_team: 'New York Knicks',
                scores: [
                    {
                        name: 'Detroit Pistons',
                        score: '102',
                    },
                    {
                        name: 'New York Knicks',
                        score: '104',
                    },
                ],
                last_update: '2022-03-27T21:55:04Z',
            },
            {
                id: '000ece942643247eb4e3baabec89290f',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-27T22:10:39Z',
                completed: true,
                home_team: 'Phoenix Suns',
                away_team: 'Philadelphia 76ers',
                scores: [
                    {
                        name: 'Phoenix Suns',
                        score: '114',
                    },
                    {
                        name: 'Philadelphia 76ers',
                        score: '104',
                    },
                ],
                last_update: '2022-03-28T00:27:26Z',
            },
            {
                id: '100647ee0a528029c5c3cf2fa00dd423',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-27T22:10:47Z',
                completed: true,
                home_team: 'Boston Celtics',
                away_team: 'Minnesota Timberwolves',
                scores: [
                    {
                        name: 'Boston Celtics',
                        score: '134',
                    },
                    {
                        name: 'Minnesota Timberwolves',
                        score: '112',
                    },
                ],
                last_update: '2022-03-28T00:18:19Z',
            },
            {
                id: '22730e573f5cdd98145c6edccb722328',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-27T22:11:02Z',
                completed: true,
                home_team: 'Washington Wizards',
                away_team: 'Golden State Warriors',
                scores: [
                    {
                        name: 'Washington Wizards',
                        score: '123',
                    },
                    {
                        name: 'Golden State Warriors',
                        score: '115',
                    },
                ],
                last_update: '2022-03-28T00:36:35Z',
            },
            {
                id: '911f5711db1a0cdb9b954057d3000e59',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-27T23:10:41Z',
                completed: true,
                home_team: 'New Orleans Pelicans',
                away_team: 'Los Angeles Lakers',
                scores: [
                    {
                        name: 'New Orleans Pelicans',
                        score: '116',
                    },
                    {
                        name: 'Los Angeles Lakers',
                        score: '108',
                    },
                ],
                last_update: '2022-03-28T01:23:28Z',
            },
            {
                id: 'af89aa429b117d40e638ce1c261ed63a',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-27T23:40:57Z',
                completed: true,
                home_team: 'Brooklyn Nets',
                away_team: 'Charlotte Hornets',
                scores: [
                    {
                        name: 'Brooklyn Nets',
                        score: '110',
                    },
                    {
                        name: 'Charlotte Hornets',
                        score: '119',
                    },
                ],
                last_update: '2022-03-28T01:58:01Z',
            },
            {
                id: 'cf5d1fde6278ca5d8100d0d88a7df809',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-27T23:41:12Z',
                completed: true,
                home_team: 'Dallas Mavericks',
                away_team: 'Utah Jazz',
                scores: [
                    {
                        name: 'Dallas Mavericks',
                        score: '114',
                    },
                    {
                        name: 'Utah Jazz',
                        score: '100',
                    },
                ],
                last_update: '2022-03-28T01:48:17Z',
            },
            {
                id: 'e996cfe67a28cda1e93772a1ccf3f11d',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-28T23:00:00Z',
                completed: false,
                home_team: 'Charlotte Hornets',
                away_team: 'Denver Nuggets',
                scores: null,
                last_update: null,
            },
            {
                id: '3c99e985f703a996950f1b7fab0b925d',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-28T23:00:00Z',
                completed: false,
                home_team: 'Cleveland Cavaliers',
                away_team: 'Orlando Magic',
                scores: null,
                last_update: null,
            },
            {
                id: '48e71c9d401eaabf9c7b763e957e77ed',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-28T23:10:00Z',
                completed: false,
                home_team: 'Indiana Pacers',
                away_team: 'Atlanta Hawks',
                scores: null,
                last_update: null,
            },
            {
                id: 'cba3a16fb4b68b1130fd2d41789401af',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-28T23:30:00Z',
                completed: false,
                home_team: 'Toronto Raptors',
                away_team: 'Boston Celtics',
                scores: null,
                last_update: null,
            },
            {
                id: 'b8f5c1a9fcb064c4fdb52c4bcf174b78',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-28T23:40:00Z',
                completed: false,
                home_team: 'New York Knicks',
                away_team: 'Chicago Bulls',
                scores: null,
                last_update: null,
            },
            {
                id: '0d0f0e6fe7ea357f854ab579db4190e2',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-28T23:40:00Z',
                completed: false,
                home_team: 'Miami Heat',
                away_team: 'Sacramento Kings',
                scores: null,
                last_update: null,
            },
            {
                id: '9db1ca4b20fade57d8ecde60166b7294',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-29T00:00:00Z',
                completed: false,
                home_team: 'Houston Rockets',
                away_team: 'San Antonio Spurs',
                scores: null,
                last_update: null,
            },
            {
                id: 'cd820924cd5a8966f148dcdda9f11cd9',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-29T00:10:00Z',
                completed: false,
                home_team: 'Memphis Grizzlies',
                away_team: 'Golden State Warriors',
                scores: null,
                last_update: null,
            },
            {
                id: 'd02573a54c08d7561dd61867127ab048',
                sport_key: 'basketball_nba',
                sport_title: 'NBA',
                commence_time: '2022-03-29T02:10:00Z',
                completed: false,
                home_team: 'Portland Trail Blazers',
                away_team: 'Oklahoma City Thunder',
                scores: null,
                last_update: null,
            },
        ])
        const upcomingGamesList = ref([])
        onMounted(() => {
            console.log(scoreList.value)
            // getScoreInfo()
        })
        // watch(gamesScoreList,(value)=>{
        //     console.log(value)
        // })
        function getScoreInfo() {
            Api('/basketball_nba/scores', {
                params: {
                    daysFrom: '1',
                },
            })
                .then((res) => {
                    console.log(res)
                    // 篩選已完成比賽
                    gamesScoreList.value = res.data.filter((value) => {
                        return value.completed === true
                    })
                    upcomingGamesList.value = res.data.filter((value) => {
                        return value.completed === false
                    })
                    console.log(gamesScoreList.value)
                })
                .catch((err) => {
                    console.error(err)
                })
        }
        return {
            ImgUrl,
            gamesScoreList,
            upcomingGamesList,
            getScoreInfo,
        }
    },
}
</script>
<style lang="postcss">
.wrapper {
    width: 980px;
    @apply mt-12 mx-auto;
}
</style>