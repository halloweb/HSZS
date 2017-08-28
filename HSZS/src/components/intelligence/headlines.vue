<template>
    <div>
        <label-list @labelInfo='labelInfo' :time-show='true'></label-list>
        <div class="content-block">
            <div class="row" >
                <div class="col-xs-6">
                    <p class="title"><img src="../../assets/images/media.png" alt="">媒体聚焦</p>
                    <div id="media-pie" v-show="showMedia">
                    </div>
                </div>
                <div class="col-xs-6" >
                    <div class="tody-headlines" v-if="showMedia"> 
                        <div class="list-title">{{activedMedia}}</div>
                        <ul class="list-box" id="tody-headlines">
                            <li v-for="(item,index) in media">
                                <h4>
                                          <router-link class="article-title" :to="{ path:'/intelligence/article/'+item.id}">{{item.title}}</router-link> 
                                          <span class="article-time">{{item.time}}</span>
                                          </h4>
                                <p class="article-content">
                                    {{item.summary}}
                                </p>
                                <div class="sub-info">
                                    <span>
                                                <img src="../../assets/images/company.png" alt="">
                                                涉及公司：<a href="">{{media.business}}</a>
                                             </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-block">
            <div class="row" >
                <div class="col-xs-6">
                    <p class="title"><img src="../../assets/images/key.png" alt="">关键词云</p>
                    <div id="key-yun" ref="mychart" v-if="showKey">
                    </div>
                </div>
                <div class="col-xs-6">
                    <div class="tody-headlines" v-if="showKey">
                        <div class="list-title">{{activeWord}}</div>
                        <ul class="list-box" id="key-info">
                            <li v-for="(item,index) in keyInfo">
                                <h4>
                                          <router-link class="article-title" :to="{ path:'/intelligence/article/'+item.id}">{{item.title}}</router-link> 
                                          <span class="article-time">{{item.time}}</span>
                                          </h4>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
import wordcloud from 'echarts-wordcloud'

import labelList from './label.vue'
export default {
    components: {
        'labelList': labelList
    },
    data() {
        return {
            mediaData: [],
            wordData: [],
            media: [],
            keyInfo: [],
            activedMedia: '',
            activeWord: '',
            mediasParams: [],
            WordParams: [],
            mediapie: '',
            yun: '',
            showMedia: true,
            showKey: true,
        }
    },
    methods: {
        labelInfo(data) {

            this.getMedia(data);

            this.getKey(data);

        },
        getMedia(val) {
            this.$ajax.post('/apis/Headlines/getClondChartList.json', { 'msg': val }).then(res => {
                if (res.data.data.length!=0) {
                    
                    this.showMedia=true;
                    this.mediaData = res.data.data;

                    this.mediaFocus(this.mediaData);
                    this.activedMedia = res.data.data[0].name;
                    this.mediasParams = [];
                    val.forEach(value => {
                        this.mediasParams.push(value)
                    })


                    this.mediasParams.push(this.activedMedia);



                    this.mediaList(this.mediasParams);

                } else {
                        this.showMedia=false;
                }
            }).catch(err => console.log(err))
        },
        mediaList(val) {

            this.$ajax.post('/apis/Headlines/getArticleByVectorList.json', { 'msg': val }).then(res => {
                this.media = res.data.data.content;

            }).catch(err => console.log(err))
        },
        getKey(vals) {

            this.$ajax.post('/apis/Headlines/getWordClond.json', { 'msg': vals }).then(res => {
            if (res.data.data.length!=0) {
                this.showKey= true;
                this.wordData = res.data.data[0];
                this.keyCloud(this.wordData);
                this.activeWord = this.wordData[0].name;
                this.WordParams = [];


                vals.forEach(value => {
                    this.WordParams.push(value)
                })


                this.WordParams.push(this.activeWord);



                this.keyList(this.WordParams);
            }else{
                this.showKey= false;
              }
            }).catch(err => console.log(err))
        },
        keyList(vals) {
            this.$ajax.post('/apis/Headlines/getArticleByKeyWordList.json', { msg: vals }).then(res => {
                this.keyInfo = res.data.data.content;
            }).catch(err => console.log(err))
        },
        mediaFocus(data) {

            let vm = this;



            let option = {
                tooltip: {


                },
                legend: {

                },

                series: [{
                    name: '媒体聚焦',
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'outside'
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                fontSize: 14

                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            lineStyle: {
                                color: "#5d71f1"
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    color: ['#55bdff', '#f8427f', '#5584ff', '#22b3ca'],
                    data: [


                    ]
                }]
            };
            option.series[0].data = data;
            vm.mediapie.setOption(option);


        },
        keyCloud(datas) {
            let vm = this;
            let option = {
                title: {

                },
                tooltip: {},
                series: [{
                    type: 'wordCloud',
                    gridSize: 20,
                    sizeRange: [12, 50],
                    rotationRange: [0, 0],
                    shape: 'circle',
                    textStyle: {
                        normal: {
                            color: function() {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: []
                }]
            };
            option.series[0].data = datas;
            vm.yun.setOption(option);

        },


    },
    mounted() {
        let vm = this;
        //媒体
        this.mediapie = echarts.init(document.getElementById('media-pie'));
        this.mediapie.on('click', function(params) {

            vm.activedMedia = params.name;

            vm.mediasParams.splice(3, 1, vm.activedMedia);

            vm.mediaList(vm.mediasParams);
        });
        //词云
        let dom = this.$refs.mychart;
        this.yun = echarts.init(dom);
        this.yun.on('click', function(params) {

            vm.activeWord = params.name;
            vm.WordParams.splice(3, 1, vm.activeWord);
            vm.keyList(vm.WordParams);
        });


    },
}
</script>