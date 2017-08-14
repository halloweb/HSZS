<template>
		<div class="content-block">
	    <div class="title policy-title">
           <img src="../../assets/images/bad.png" alt="">关注园区动态
        </div>
		<ul class="list-box">
             <li v-for="(item,index) in article">
                <div >
                  <a class="article-title" href="javascript:void(0);">
                    <span class="blue m-left">【{{item.park}}】</span>{{item.title}}
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

          ],
			}
		},
		methods:{
			change(val){

			},
		},
        mounted(){
            this.$ajax.post('/apis/area/findGardensCondition.json',{}).then(res => {
                this.article = res.data.data
                console.log(this.article)
            }).catch(err => console.log(err))
        }
	}

</script>