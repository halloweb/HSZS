<template>
	<div class="content-block" id="focusPark">
         <div class="title policy-title">
           <img src="../../assets/images/love.png" alt="">关注园区
          </div> 
          <ul class="type-box">
                    <li>
                        <div class="head">
                         区域
                        </div >
                         <p class="type-list"> 
                          <span v-for="(item,index) in area" :class="{active:index==areaCode}"  @click="select(index)">{{item}}</span>
                          </p>
                     </li> 
                     <li>
                        <div class="head">
                        产业类型
                        </div >
                         <p class="type-list"> 
                          <span v-for="(item,index) in industryType" :class="{active:index==typeCode}" @click="select2(index)">{{item}}</span>
                          </p>
                     </li>     
                  </ul>
                  <ul class="park-l-menu">
                      <li  v-for="(item,index) in list">
                           <img src="../../assets/images/park-picture.png" alt="" class="park-picture">
                           <div class="right-content">
                              <div >
                                 <router-link class="article-title" :to="{path:'/intelligence/focusPark/parkDetails/',query:{query:item.gardenName,id:item.id}}">
                                  {{item.gardenName}}
                                </router-link>
                                
                               </div>
                               <p class="article-content">
                                {{item.description}}
                               </p>
                               <div class="sub-info">
                                 <span>
                                 <img src="../../assets/images/location-h.png" alt="">
                                  地址：{{item.address}}
                                 </span>
                                  

                               </div>
                           </div>
                      </li>
            </ul>  
	</div>
</template>
<script>
	export default{
		data(){
			return{
				         list:[],
                 area:["不限","北京","上海","广州","深圳","杭州","苏州","南京","天津","青岛","大连"],
                 industryType:["不限","互联网","高科技","文化创意","精英配套","滨海旅游","港口物流"],
                 areaCode:0,
                 typeCode:0
			}
		},
		methods:{
         getList(data){
            this.$ajax.post('/apis/area/getAttentionGardenList.json',{'msg':data}).then(res => {
                this.list=res.data.data.content;
            }).catch(err => console.log(err))
         },
         select(index){
             this.areaCode=index;
            
             this.getList([this.area[this.areaCode],this.industryType[this.typeCode]]);

         },
         select2(index){
            this.typeCode=index;
            this.getList([this.area[this.areaCode],this.industryType[this.typeCode]]);

         },
         }, 
         mounted(){
             this.select(0);

         },  
	}
</script>