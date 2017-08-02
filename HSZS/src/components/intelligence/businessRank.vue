<template>
	<div>
		<label-list @labelInfo='labelInfo'></label-list>
       <div class="content-block">
          <div class="title policy-title">
           <img src="../../assets/images/rank.png" alt="">企业排行
          </div>
           
              <ul class="list-box" id="rank">
                 <li v-for="(item,index) in article">
                    <div >
                      <a class="article-title" href="javascript:void(0);">
                        {{item.title}}
                      </a>
                     
                    </div>
                    <p class="article-content">
                      {{item.content}}
                    </p>
                    <div class="sub-info">
                       <span>
                       <img src="../../assets/images/chat-h.png" alt="">
                        微信公众号
                       </span>
                       <span>
                       <img src="../../assets/images/time.png" alt="">
                        {{item.time}}
                       </span>
                     </div>
                 </li>
                 
              </ul>
            
             
          </div> 
	</div>
</template>
<script>
	import labelList from './label.vue'
	export default{
		components:{
           'labelList': labelList
		},
		data(){
			return{
           article:[
               {
                title:'大数据与分析创新峰会',
                time:'2017-07-07 00-00-00',
                content:'本次会议将涵盖大数据相关的最新行业内应用实践和前沿研究成果，我们将关注于以下主题： 20+ 主题演讲，Workshop和Panss'
               }
           ]
			}
		},
		methods:{
			labelInfo(data){
                 console.log(data);
			},
		},
	}
</script>