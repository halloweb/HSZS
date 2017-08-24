<template>
    <div>
        <label-list @labelInfo='labelInfo' :time-show='true'></label-list>
        <div class="content-block">
            <div class="row">
                <div class="col-xs-6">
                    <p class="title"><img src="../../assets/images/media.png" alt="">媒体聚焦</p>
                    <div id="media-pie">
                    </div>
                </div>
                <div class="col-xs-6">
                    <div class="tody-headlines">
                        <div class="list-title">{{activeMedia}}</div>
                        <ul class="list-box" id="tody-headlines">
                            <li v-for="(item,index) in media">
                                <h4>
                                          <router-link class="article-title" :to="{ path:'/intelligence/article/'+item.id}">{{item.title}}</router-link> 
                                          <span class="article-time">{{item.time}}</span>
                                          </h4>
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
        </div>
        <div class="content-block">
            <div class="row">
                <div class="col-xs-6">
                    <p class="title"><img src="../../assets/images/key.png" alt="">关键词云</p>
                    <div id="key-yun" ref="mychart">
                    </div>
                </div>
                <div class="col-xs-6">
                    <div class="tody-headlines">
                        <div class="list-title">{{activeWord}}</div>
                        <ul class="list-box" id="key-info">
                            <li v-for="(item,index) in keyInfo">
                                <h4>
                                          <router-link class="article-title" :to="{ path:'/intelligence/article/'+item.id}">{{item.title}}</router-link> 
                                          <span class="article-time">{{item.time}}</span>
                                          </h4>
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
            activeMedia: '',
            wordData: [],
            media: [],
            keyInfo: [],
            activeWord: '',
            mediaParams: [],
            WordParams:[],
            mediapie: '',
            yun: ''
        }
    },
    methods: {
        labelInfo(data) {

            this.getMedia(data);
            this.getKey(data);

        },
        getMedia(data) {
            this.$ajax.post('/apis/Headlines/getClondChartList.json', { 'msg': data }).then(res => {
                if(res.data.data!=[]){
                this.mediaData = res.data.data;

                this.mediaFocus(this.mediaData);
                this.activeMedia = this.mediaData[0].name;

                data.push(this.activeMedia);

                this.mediaParams = data;
               

                this.mediaList(this.mediaParams);
                }
            }).catch(err => console.log(err))
        },
        mediaList(data) {
            
            this.$ajax.post('/apis/Headlines/getArticleByVectorList.json', { 'msg': data }).then(res => {
                this.media = res.data.data.content;
                 console.log(this.mediaParams);
            }).catch(err => console.log(err))
        },
        getKey(data) {
            let params=data;
            this.$ajax.post('/apis/Headlines/getWordClond.json', { 'msg':  params }).then(res => {

                this.wordData = res.data.data[0];
                this.keyCloud(this.wordData);
                this.activeWord = this.wordData[0].name;
                console.log(this.activeWord)
                 params.push(this.activeWord);

                 
                this.WordParams =  params;
                 
                this.keyList(this.WordParams);
            }).catch(err => console.log(err))
        },
        keyList(data) {
            this.$ajax.post('/apis/Headlines/getArticleByKeyWordList.json', { msg: data }).then(res => {
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
             console.log(vm.mediaParams);
           
        },
        keyCloud(data) {
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
            option.series[0].data = data;
            vm.yun.setOption(option);
             
        },
        

    },
    mounted() {
           let vm=this;
           //媒体
        this.mediapie = echarts.init(document.getElementById('media-pie'));
        this.mediapie.on('click', function(params) {
                
                vm.activeMedia = params.name;
              
                vm.mediaParams.splice(3, 1, vm.activeMedia);
               
                vm.mediaList(vm.mediaParams);
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