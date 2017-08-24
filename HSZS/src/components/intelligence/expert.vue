<template>
    <div>
        <label-list @labelInfo='labelInfo' :time-show='false'></label-list>
        <div class="content-block">
            <div class="title policy-title">
                <img src="../../assets/images/zj.png" alt="">专家说
            </div>
            <div class="swiper-container expert-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide expert-slider" v-for="(item,index) in experts">
                        <div>
                            <div class="expert-img" @click="select(item)">
                                <img src="../../assets/images/people.png" alt="">
                                <p class="name">{{item.name}}</p>
                                <p class="Introduction">{{item.professionalTitle}}</p>
                            </div>
                            <div class="article-box">
                                <router-link class="title" :to="{ path:'/intelligence/article/'+item.articleId}">{{item.title}}</router-link>
                                <p class="content">{{item.content}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide expert-slider">
                        <div>
                            <div class="expert-add" @click="loadMore">
                                <img src="../../assets/images/add.png" alt="">
                                <h3>更多</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        <div class="content-block">
            <div class="title policy-title">
                <img src="../../assets/images/bj.png" alt="">百家论
            </div>
            <ul class="list-box balance" id="lunT">
                <li v-for="(item,index) in lunT">
                    <div>
                        <router-link class="article-title" :to="{ path:'/intelligence/article/'+item.id}">{{item.title}}</router-link>
                        <span class="article-time">{{item.time}}</span>
                    </div>
                    <p class="article-content">
                        {{item.content}}
                    </p>
                    <div class="blue article-author"><span class="glyphicon glyphicon-user"></span> {{item.author}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
@import '../../common/js/swiper/swiper-3.4.2.min.css'
</style>
<script>
import '../../common/js/swiper/swiper.js'
import labelList from './label.vue'
export default {
    components: {
        'labelList': labelList
    },
    data() {
        return {
            experts: [],

            lunT: [{

                title: '创新峰会大数据与分析',
                time: '2017-02-02',
                content: '创新峰会大数据与分析',
                author: '张三',
                id: 1
            }]

        }
    },
    methods: {
        labelInfo(data) {

            this.getArticle(data);

        },
        getExpert() {
            let vm = this;
            vm.$ajax.get('/apis/expert/getSpecialist.json').then(res => {
                vm.experts = res.data.data;

            }).catch(err => console.log(err))
        },

        getArticle(data) {
            this.$ajax.post('/apis/expert/findaExpertOpinion.json', { 'msg': data }).then(res => {
                this.lunT = res.data.data;
            }).catch(err => console.log(err))
        },
        select(item) {
            var item = JSON.stringify(item);
            this.$router.push({ path: '/intelligence/expertView/expertList', query: { query: item } });
        },
        loadMore() {
            this.getExpert();
        },

    },
    created() {
        this.getExpert();
        this.getArticle(['互联网', '不限']);

        let mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            // spaceBetween : 58,
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
        })

    },
}
</script>