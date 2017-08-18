<template>
	<div class="expert-wz">
		                 
                      <div class="expert-info clearfix">
                       <img src="../../assets/images/people.png" alt="" width="85" height="85">
                       <div>{{personInfo.name}}</div>
                       <p class="blue">{{personInfo.professionalTitle}}</p>

                      </div>
                       
                          <ul class="list-box">
                             <li v-for="(item,index) in article">
                                <div >
                                  <router-link class="article-title" :to="{ path:'/intelligence/article/'+item.id}">
                                   <span class="blue">【{{item.dimension}}】</span>
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
</template>
<style scoped>
  .expert-wz{
    background-color:#ffffff;
    
  }
  .article-title{
    margin-left:-8px;
  }
</style>
<script>
	export default{
		data(){
			return{
          pageNumber:1,
          pageSize:8,
          personInfo:{},
          article:[],
          number:0,
          author:''

			}
		},
		methods:{
      getList(data){
        this.$ajax.post('/apis/expert/findExpertOpinionByAuthor.json',{'author':data,pageNumber:this.pageNumber,pageSize:this.pageSize}).then(res => {
              let list=res.data.data;
              for(let y in list){
                this.article.push(list[y]);
              }
        }).catch(err => console.log(err));

      },
      viewMore(){
        this.pageNumber++;
        this.getList(this.personInfo.name);
      },

		},
		mounted(){
        this.personInfo=JSON.parse(this.$route.query.query);
        
        this.getList(this.personInfo.name);
      },
         
	}
</script>