<template>
	<div>
		<label-list @labelInfo='labelInfo' :time-show='true' ></label-list>
		                <div class="content-block">
                       <div class="title policy-title">
                       <img src="../../assets/images/policy.png" alt="">政策解读
                       <div class="pull-right area">
                         地域
                         <el-select v-model="area">
							    <el-option  
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value"

							      >
							    </el-option>
							 </el-select>
                       </div>
                       </div>
                       <ul class="area-policy clearfix">
                          <li class="col-xs-6" v-for="(item,index) in explanation">
                             <div>{{item.content}}</div>
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
                          <ul class="tab-pane fade in active list-box" id="lunT">
                             <li v-for="(item,index) in lunT">
                                <div >
                                   <router-link class="article-title" :to="{ path:'/intelligence/article/'+item.id}">
                                   <span class="blue m-left">【{{item.area}}】</span>
                                   {{item.title}}</router-link> 
                                  <span class="article-time">{{item.time}}</span>
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
                          <ul class="tab-pane fade list-box" id="keY">
                             <li v-for="(item,index) in keY">
                                <div>
                                  <router-link class="article-title" :to="{ path:'/intelligence/article/'+item.id}">
                                   <span class="blue m-left">【{{item.area}}】</span>
                                   {{item.title}}</router-link> 
                                  <span class="article-time">{{item.time}}</span>
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
	export default{
		components:{
              'labelList':labelList
		},
		data(){
			return{        
                  explanation:[
                    {content:'22222222222'}
                  ],
                  lunT:[
                     {   
                     	location:'北京',
                     	title:'创新峰会大数据与分析',
                     	time:'2017-02-02',
                     	content:'创新峰会大数据与分析',
                        id:3
                     }
                  ],
                  keY:[
	                  {   
	                     	location:'北京',
	                     	title:'创新峰会大数据与分析',
	                     	time:'2017-02-02',
	                     	content:'创新峰会大数据与分析',
                        id:4
	                     }
                  ],
                  options: [{
			          value: '天津',
			        }, {
			          value: '南京',
			        }],
			        area:'北京'

			}
		},
		methods:{
            labelInfo(data){
                data.push(this.area)
                console.log(data)
                this.$ajax.post('/apis/industry/getIndustrialPolicyList.json',{"labels":data
                })
                    .then(res =>{
                        var data = res.data.data
                        for(var i = 0;i<data.length; i++){
                            console.log(data[i].policy)
                            this.lunT = data[i].forun.content
                            this.keY = data[i].research.content
                            this.explanation = data[i].policy.content
                        }
                    })
                    .catch(err => console.log(err))
			},
			getPolicy(data){
                this.$ajax.post('/apis/industry/getIndustrialPolicyList.json',{"labels":data
                })
                    .then(res =>{
                        var data = res.data.data
                        for(var i = 0;i<data.length; i++){
                            console.log(data[i].policy)
                            this.lunT = data[i].forun.content
                            this.keY = data[i].research.content
                            this.explanation = data[i].policy.content
                        }
                    })
                    .catch(err => console.log(err))
			},
			getArticle(){
               
			}	  
		},
		mounted(){
			 $(".policy-title a").on("click",function(){
  	           $(this).addClass("fc").siblings().removeClass("fc");
              });
                this.getPolicy(["互联网","大数据","北京","不限"])

		},
	}
</script>