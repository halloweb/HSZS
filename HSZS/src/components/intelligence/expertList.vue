<template>
	<div>
		                 <div class="content-block">
                      <div class="expert-info clearfix">
                       <img src="../../assets/images/people.png" alt="" >
                       <div>{{author}}</div>
                       <p class="blue">员</p>

                      </div>
                       
                          <ul class="list-box">
                             <li v-for="(item,index) in article">
                                <div >
                                  <router-link class="article-title" :to="{ path:'/intelligence/article/'+item.id}">
                                   <span class="blue">【{{item.location}}】</span>
                                   {{item.title}}</router-link> 
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
                        
                         <div class="text-center loadMore"><a href="javascript:void(0);" class="blue " @click="viewMore">查看更多</a></div>
                      </div> 
                </div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
          article:[],
          number:0,
          author:''
			}
		},
		methods:{
      getList(data){
        this.$ajax.post('/apis/expert/findExpertOpinionByAuthor.json',{'author':data}).then(res => {
              this.article=res.data.data;
        }).catch(err => console.log(err));

      },
      getInfo(){

      },
      viewMore(){
        this.getList();
      },

		},
		mounted(){
        console.log(this.$route.query.id)
        
        this.getList(this.$route.query.id);
      },
         
	}
</script>