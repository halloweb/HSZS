<template>
	<div>
		                 <div class="content-block">
                      <div class="expert-info clearfix">
                       <img src="../../assets/images/people.png" alt="" >
                       <div>朱倩</div>
                       <p class="blue">资深产品研究员</p>

                      </div>
                       
                          <ul class="list-box">
                             <li v-for="(item,index) in article">
                                <div >
                                  <a class="article-title" href="javascript:void(0);">
                                    <span class="blue">【{{item.location}}】</span>{{item.title}}
                                  </a>
                                  <span class="article-time">{{item.time}}</span>
                                </div>
                                <p class="article-content">
                                  {{item.content}}
                                </p>
                             
                             </li>
  
                          </ul>
                        
                         <div class="text-center loadMore"><a href="javascript:void(0);" class="blue " @click="viewMore">查看更多</a></div>
                      </div> 
                </div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
          article:[
             {
               location:"北京",
               title:'大数据与分析创新峰会',
               content:"本次会议将涵盖大数据相关的最新行业内应用实践和前沿研究成果，我们将关注于以下主题： 20+ 主题演讲，Workshop和Panss",
               time:'2017-07-07 00-00-00'
             }
          ],
          number:0
			}
		},
		methods:{
      getList(){
        

      },
      viewMore(){
        this.getList();
      },

		},
		mounted(){
          console.log(this.$route.params);
		},
	}
</script>