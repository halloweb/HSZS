<template>
		<div class="content-block">
	    <div class="title policy-title">
           <img src="../../assets/images/bad.png" alt="">关注园区动态
        </div>
		<ul class="list-box">
                             <li v-for="(item,index) in article">
                                <div >
                                  <a class="article-title" href="javascript:void(0);">
                                    <span class="blue">【{{item.name}}】</span>{{item.title}}
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
        <div class="text-center">
        <el-pagination
		   @current-change="change"
		  layout="prev, pager, next"
		  :total="50">
		</el-pagination>
		</div>
	</div>
</template>
<style scoped>

	.list-box{
        margin:0 -24px;
	}
	.el-pagination{
		display:inline-block;
		
		margin-top:60px
	}
</style>
<script>
	export default{
          data(){
			return{
				article:[
             {
               name:"中关村软件园",
               title:'大数据与分析创新峰会',
               content:"本次会议将涵盖大数据相关的最新行业内应用实践和前沿研究成果，我们将关注于以下主题： 20+ 主题演讲，Workshop和Panss",
               time:'2017-07-07 00-00-00'
             },
             {
               name:"中关村软件园",
               title:'大数据与分析创新峰会',
               content:"本次会议将涵盖大数据相关的最新行业内应用实践和前沿研究成果，我们将关注于以下主题： 20+ 主题演讲，Workshop和Panss",
               time:'2017-07-07 00-00-00'
             }
          ],
			}
		},
		methods:{
			change(val){

			},
		},
	}

</script>