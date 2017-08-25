<template>
    <div>
        <label-list @labelInfo='labelInfo' :time-show='false'></label-list>
        <div class="content-block">
            <div class="title policy-title">
                <img src="../../assets/images/policy.png" alt="">政策解读
                <div class="pull-right area">
                    地域
                    <el-select v-model="area" @change='areaChange'>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <ul class="area-policy clearfix">
                <li class="col-xs-6" v-for="(item,index) in explanation">
                    <div>
                        <router-link :to="{ path:'/intelligence/article/'+item.id}">{{item.title}}</router-link>
                    </div>
                </li>
            </ul>
        </div>
        <div class="content-block">
            <div class="title policy-title">
                <a href="#lunT" class="fc" data-toggle="tab">
                       <img src="../../assets/images/chat.png" alt="">高峰论坛
                       </a>
                <a href="#keY" data-toggle="tab">
                       <img src="../../assets/images/yanjiu.png" alt="">科学研究
                       </a>
            </div>
            <div class="tab-content">
                <ul class="tab-pane fade in active list-box balance" id="lunT">
                    <li v-for="(item,index) in lunT">
                        <div>
                            <router-link class="article-title" :to="{ path:'/intelligence/article/'+item.id}">
                                <span class="blue m-left">【{{item.area}}】</span> {{item.title}}
                            </router-link>
                            <span class="article-time">{{item.publishDate}}</span>
                        </div>
                        <p class="article-content">
                            {{item.summary}}
                        </p>
                        <div class="sub-info">
                            <span>
                                                <img src="../../assets/images/company.png" alt="">
                                                涉及公司：中科点击
                                             </span>
                        </div>
                    </li>
                </ul>
                <ul class="tab-pane fade list-box balance" id="keY">
                    <li v-for="(item,index) in keY">
                        <div>
                            <router-link class="article-title" :to="{ path:'/intelligence/article/'+item.id}">
                                <span class="blue m-left">【{{item.area}}】</span> {{item.title}}
                            </router-link>
                            <span class="article-time">{{item.publishDate}}</span>
                        </div>
                        <p class="article-content">
                            {{item.content}}
                        </p>
                        <div class="sub-info">
                            <span>
                                                <img src="../../assets/images/company.png" alt="">
                                                涉及公司：中科点击
                                             </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>
<script>
import labelList from './label.vue'
export default {
    components: {
        'labelList': labelList
    },
    data() {
        return {
            explanation: [
                { content: '22222222222' }
            ],
            lunT: [{
                location: '北京',
                title: '创新峰会大数据与分析',
                time: '2017-02-02',
                content: '创新峰会大数据与分析',
                id: 3
            }],
            keY: [{
                location: '北京',
                title: '创新峰会大数据与分析',
                time: '2017-02-02',
                content: '创新峰会大数据与分析',
                id: 4
            }],
            params: [],
            options: [{ value: '北京' }, { value: '上海' }, { value: '广州' }, { value: '深圳' }, { value: '杭州' }, { value: '苏州' }, { value: '南京' }, { value: '天津' }, { value: '青岛' }, { value: '大连' }],
            area: '北京'

        }
    },
    methods: {
        labelInfo(data) {

            this.params = data;
            this.params.push(this.area);
            this.getPolicy(this.params);

        },
        getPolicy(data) {
            this.$ajax.post('/apis/industry/getIndustrialPolicyList.json', {
                "msg": data
            }).then(res => {
                this.lunT = res.data.data[0].forum.content;
                this.keY = res.data.data[0].research.content;
                this.explanation = res.data.data[0].policy.content;

            }).catch(err => console.log(err))
        },
        areaChange() {
            this.params.splice(2, 1, this.area);
            this.getPolicy(this.params);
        },

    },
    mounted() {
        $(".policy-title a").on("click", function() {
            $(this).addClass("fc").siblings().removeClass("fc");
        });
    },
}
</script>