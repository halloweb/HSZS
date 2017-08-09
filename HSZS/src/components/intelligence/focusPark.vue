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
                          <span v-for="(item,index) in area" :class="{active:index==areaCode}"  @click="select(item,index)">{{item}}</span>
                          </p>
                     </li> 
                     <li>
                        <div class="head">
                        产业类型
                        </div >
                         <p class="type-list"> 
                          <span v-for="(item,index) in type" :class="{active:index==typeCode}" @click="select2(item,index)">{{item}}</span>
                          </p>
                     </li>     
                  </ul>
                  <ul class="park-l-menu">
                      <li>
                           <img src="../../assets/images/park-picture.png" alt="" class="park-picture">
                           <div class="right-content">
                              <div >
                                <a class="article-title" href="javascript:void(0);">
                                  大数据与分析创新峰会
                                </a>
                                <span class="article-time">2017-07-07 00-00-00</span>
                               </div>
                               <p class="article-content">
                                本次会议将涵盖大数据相关的最新行业内应用实践和前沿研究成果，我们将关注于以下主题： 20+ 主题演讲，Workshop和Panss <a class="blue" href="javascript:void(0);">[详情]</a>
                               </p>
                               <div class="sub-info">
                                 <span>
                                 <img src="../../assets/images/location-h.png" alt="">
                                  地址：河北石家庄
                                 </span>
                                  <span>
                                    <img src="../../assets/images/company.png" alt="">
                                    涉及公司：中科点击
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
                 area:["不限","北京","上海"],
                 type:["不限","动漫"],
                 areaCode:0,
                 typeCode:0
			}
		},
		methods:{
         getList(){

         },
         select(item,index){
             this.areaCode=index;
         },
         select2(item,index){
            this.typeCode=index;
         },
         }, 
         mounted(){

         },  
	}
</script>