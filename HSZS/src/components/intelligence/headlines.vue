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
                                  <div class="list-title">今日头条</div>
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
	export default{
		components:{
              'labelList':labelList
		},
		data(){
			return{
                 mediaData:[ {value:310, name:'论坛'},
                    {value:335, name:'微信'},
                    {value:335,name:'贴吧'},
                    {value:150,name:'微博'},
                    
                  ],
                  wordData:[{
			            name: 'Sam S Club',
			            value: 10000,
			            // textStyle: {
			            //     normal: {
			            //         color: 'black'
			            //     },
			            //     emphasis: {
			            //         color: 'red'
			            //     }
			            // }
			        }, {
			            name: 'Macys',
			            value: 6181
			        }, {
			            name: 'Amy Schumer',
			            value: 4386
			        }, {
			            name: 'Jurassic World',
			            value: 4055
			        }, {
			            name: 'Charter Communications',
			            value: 2467
			        }],
                  media:[
                     {title:'东盟各国正深入对接“一带一路”倡议 广西打造重要节点 中国经济网',
                      content:'三是开展通关一体化，提升通关便利化水平；四是开展物流服务，构建智能物流体系；五是开展信息服务，推进跨境电子商 务、大数据、物联',
                      time:'2017-02-13',
                      id:1
                    }
                  ],
                  keyInfo:[
                     {title:'东盟各国正深入对接“一带一路”倡议 广西打造重要节点 中国经济网',
                      content:'三是开展通关一体化，提升通关便利化水平；四是开展物流服务，构建智能物流体系；五是开展信息服务，推进跨境电子商 务、大数据、物联',
                      time:'2017-02-13',
                      id:2
                    }
                  ],
                  activeWord:''
			}
		},
			methods:{
			labelInfo(data){
                // this.$ajax.post('',{'msg':["互联网","不限","今日"]}).then( res =>{
                //     console.log(res);
                // }).catch( err => console.log(err));
			},	
		    getMedia(){

		    },
		    getKey(){

		    },		
            mediaFocus(data){
			 let mediapie= echarts.init(document.getElementById('media-pie'));

			    let option = {
			        tooltip: {


				        },
				        legend: {

				        },

				        series: [
				            {
				                name:'媒体聚焦',
				                type:'pie',
				                center:['50%','50%'],
				                radius: ['50%', '70%'],
				                avoidLabelOverlap: false,
				                label: {
				                    normal: {
				                        show:true,
				                        position: 'outside'
				                    },
				                    emphasis: {
				                        show:false,
				                        textStyle: {
				                            fontSize:14

				                        }
				                    }
				                },
				                labelLine: {
				                    normal: {
				                        show:true,
				                        lineStyle: {
				                            color:"#5d71f1"
				                        },
				                        smooth: 0.2,
				                        length: 10,
				                        length2: 20
				                    }
				                },
				                color:['#55bdff','#f8427f','#5584ff','#22b3ca'
				                    ]
				                ,
			                data:[
			                   

			                ]
			            }
			        ]
			    };
				    option.series[0].data=data;
				    mediapie.setOption(option);
				     mediapie.on('click', function (params) {
								console.log(params.name);		       
					});

			     },
		  keyCloud(data){
           let dom = this.$refs.mychart;
			let yun= echarts.init(dom);
			   let option = {
			    title:{
			      
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
				   option.series[0].data=data;
				    yun.setOption(option);
				    yun.on('click', function (params) {
								console.log(params.name);		       
					});
				},
			     
			},
			mounted(){
				     
                    this.mediaFocus(this.mediaData);
                    this.keyCloud(this.wordData);
                    this.activeWord=this.wordData[0].name;
                     
                   
			},
		}
	
</script>