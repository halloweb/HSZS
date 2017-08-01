<template>
	<div>
		<label-list @labelInfo='labelInfo'></label-list>
		                <div class="content-block">
                       <div class="title policy-title">
                         <img src="../../assets/images/zj.png" alt="">专家说
                       </div>
                       <div class="swiper-container expert-container">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide expert-slider">
                            <div>
                              <div class="expert-img">
                                   <img src="../../assets/images/people.png" alt="">
                                   <p class="name">朱倩</p>
                                   <p class="Introduction">资深产品研究员、分析师</p>
                              </div>
                              <div class="article-box">
                                  <p class="title">世界石墨烯创新大会召开，我国石墨烯从 优化级到引领级还有多远？</p>
                                  <p class="content">2017年第一季度，中国石墨烯产业经期调查指数为130.41， 处于较为经期区间，产品市场应用程度从生产级迈向优化级.....</p>
                              </div>
                             </div> 
                          </div>
                          <div class="swiper-slide expert-slider">
                            <div>
                              <div class="expert-img">
                                   <img src="../../assets/images/people.png" alt="">
                                   <p class="name">朱倩</p>
                                   <p class="Introduction">资深产品研究员、分析师</p>
                              </div>
                              <div class="article-box">
                                  <p class="title">世界石墨烯创新大会召开，我国石墨烯从 优化级到引领级还有多远？</p>
                                  <p class="content">2017年第一季度，中国石墨烯产业经期调查指数为130.41， 处于较为经期区间，产品市场应用程度从生产级迈向优化级.....</p>
                              </div>
                              </div>
                          </div>
                                                    <div class="swiper-slide expert-slider">
                            <div>
                              <div class="expert-img">
                                   <img src="../../assets/images/people.png" alt="">
                                   <p class="name">朱倩</p>
                                   <p class="Introduction">资深产品研究员、分析师</p>
                              </div>
                              <div class="article-box">
                                  <p class="title">世界石墨烯创新大会召开，我国石墨烯从 优化级到引领级还有多远？</p>
                                  <p class="content">2017年第一季度，中国石墨烯产业经期调查指数为130.41， 处于较为经期区间，产品市场应用程度从生产级迈向优化级.....</p>
                              </div>
                              </div>
                          </div>
                                                    <div class="swiper-slide expert-slider">
                            <div>
                              <div class="expert-img">
                                   <img src="../../assets/images/people.png" alt="">
                                   <p class="name">朱倩</p>
                                   <p class="Introduction">资深产品研究员、分析师</p>
                              </div>
                              <div class="article-box">
                                  <p class="title">世界石墨烯创新大会召开，我国石墨烯从 优化级到引领级还有多远？</p>
                                  <p class="content">2017年第一季度，中国石墨烯产业经期调查指数为130.41， 处于较为经期区间，产品市场应用程度从生产级迈向优化级.....</p>
                              </div>
                              </div>
                          </div>
                           <div class="swiper-slide expert-slider">
                            <div>
                              <div class="expert-add">
                                   <img src="../../assets/images/add.png" alt="">
                                   <h3>更多</h3>
                              </div>
                             
                                  
                              
                              </div>
                          </div>
                         
                        </div>
                       <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                      </div> 
                       
                      
                </div>
             
                 <div class="content-block">
                      <div class="title policy-title">
                       <img src="../../assets/images/bj.png" alt="">百家论
                      </div>
                       
                          <ul class="list-box" id="lunT">
                             <li >
                                <div >
                                  <a class="article-title" href="javascript:void(0);">
                                    大数据与分析创新峰会
                                  </a>
                                  <span class="article-time">2017-07-07 00-00-00</span>
                                </div>
                                <p class="article-content">
                                  本次会议将涵盖大数据相关的最新行业内应用实践和前沿研究成果，我们将关注于以下主题： 20+ 主题演讲，Workshop和Panss
                                </p>
                                <div class="blue article-author"><span class="glyphicon glyphicon-user"></span> 王老五</div>
                             </li>
  
                          </ul>
                        
                         
                      </div> 
	</div>
</template>
<style scoped>
	/*import '../../common/js/swiper/swiper-3.4.2.min.css'*/
</style>
<script>
 // import '../../common/js/swiper/swiper-3.4.2.jquery.min.js'
 import labelList from './label.vue'
	export default{
		components:{
           'labelList': labelList
		},
		data(){
			return{

			}
		},
		methods:{
			labelInfo(data){
                 console.log(data);
			},	
		},
		mounted(){
			let mySwiper = new Swiper('.swiper-container', {
			      slidesPerView : 'auto',
			      // spaceBetween : 58,
			      prevButton:'.swiper-button-prev',
			            nextButton:'.swiper-button-next',
			    })
          
	     },
		}
</script>