<template>
	<div>
		<label-list @labelInfo='labelInfo' :time-show='false' ></label-list>
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
                                  <a class="article-title" href="javascript:void(0);">
                                    <span class="blue">【{{item.location}}】</span>
                                    {{item.title}}
                                  </a>
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
                                <div >
                                  <a class="article-title" href="javascript:void(0);">
                                    <span class="blue">【{{item.location}}】</span>
                                    {{item.title}}
                                  </a>
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
                     	content:'创新峰会大数据与分析'
                     }
                  ],
                  keY:[
	                  {   
	                     	location:'北京',
	                     	title:'创新峰会大数据与分析',
	                     	time:'2017-02-02',
	                     	content:'创新峰会大数据与分析'
	                     }
                  ],
                  options: [{
			          value: '选项1',
			          label: '黄金糕'
			        }, {
			          value: '选项2',
			          label: '双皮奶'
			        }],
			        area:'北京'

			}
		},
		methods:{
      labelInfo(data){
                 console.log(data);
			},
			getPolicy(){

			},
			getArticle(){
               
			}	  
		},
		mounted(){
			 $(".policy-title a").on("click",function(){
  	           $(this).addClass("fc").siblings().removeClass("fc");
  	  
              });

			 

		},
	}
</script>