<template>

        <div class="content-block">
         <h4 class="text-center">中关村软件园<button class="pull-right btn btn-zs">关注</button></h4>
        
          <bd-map :park-info="info"></bd-map>
         <div class="company-sort">
              <a href="#leadCompany" class="fc" data-toggle="tab">龙头企业</a>
              <a href="#parkPolicy" data-toggle="tab">园区政策</a>
              <a href="#parkDynamics" data-toggle="tab">园区动态</a>
         </div>
         <div class="tab-content">
              <div class="tab-pane fade in active clearfix" id="leadCompany">
                  <div class=" col-xs-6">
                     中科点击（北京）科技有限公司 
                      <router-link to="/merchants/merchantsDetail" class="pull-right blue">
                          详情
                      </router-link>
                  </div>
                  <div class=" col-xs-6">
                     中科点击（北京）科技有限公司 
                      <router-link to="/merchants/merchantsDetail" class="pull-right blue">
                          详情
                      </router-link>
                  </div>

              </div>
              <div class="tab-pane fade" id="parkPolicy"> 
              2
              </div>
              <div class="tab-pane fade" id="parkDynamics"> 
              3
              </div>
         </div>
           
        
    </div>
</template>
<script>
     import bdMap from '../commonParts/bdMap.vue'
	export default{
    components:{
         'bdMap': bdMap
    },
		data(){
			return{
             info:{
              name:'中关村软件园'
             }   
			}
		},
		methods:{
      
		},
		mounted(){
			 $(function(){
				$(".company-sort a").on("click",function(){
					$(this).addClass("fc").siblings().removeClass("fc");
				})
			});
         console.log($route.params.id);

		},
	}
</script>


