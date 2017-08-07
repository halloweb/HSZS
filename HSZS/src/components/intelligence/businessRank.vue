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
                        {{item.publishDateTime}}
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
        this.$ajax.post('/business/findCompaniesDesc.json',{'msg':['互联网','不限','2019']}).then(res =>{
              this.article=res.data.data;
        }).catch(err => console.log(err))
      }
		}, 
    mounted(){
               this.getList()
      },
	}
</script>