<template>
	<div>
		<label-list @labelInfo='labelInfo' :time-list="time" :time-show="true"></label-list>
       <div class="content-block">
          <div class="title policy-title">
           <img src="../../assets/images/rank.png" alt="">企业排行
          </div>
           
              <ul class="list-box" id="rank">
                 <li v-for="(item,index) in article">
                    <div >
                      <router-link class="article-title" :to="{ path:'/intelligence/article/'+item.id}">
                      {{item.title}}
                      </router-link> 
                     
                    </div>
                    <p class="article-content">
                      {{item.content}}
                    </p>
                    <div class="sub-info">
                       <span>
                       <img src="../../assets/images/laiyuan.png" alt="">
                        {{item.vector}}
                       </span>
                       <span v-if="item.publishDate">
                       <img src="../../assets/images/time.png" alt="">
                        {{item.publishDate}}
                       </span>
                     </div>
                 </li>
                 
              </ul>
            
             
          </div> 
	</div>
</template>
<script>
	import labelList from './label.vue'
    import axios from "axios"
	export default{
		components:{
           'labelList': labelList
		},
		data(){
			return{
           article:[],
           time:["2017","2015","2016","2014"],
           labels:[],
			}
		},
		methods:{
			labelInfo(data){
                
                // this.getList(data);
			},
      getList(data){

        this.$ajax.post('/apis/business/findCompaniesDesc.json',{'msg':data}).then(res =>{
              this.article=res.data.data;
        }).catch(err => console.log(err))


      }
		}, 
    mounted(){
               this.getList(['互联网','不限','2019'])
      },
	}
</script>