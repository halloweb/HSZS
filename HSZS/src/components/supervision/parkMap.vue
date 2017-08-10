<template>

        <div class="content-block">
         <h4 class="text-center">中关村软件园<button class="pull-right btn btn-red">辖区预警</button></h4>
        
          <bd-map :park-info="info"></bd-map>
         <div class="company-sort">
              <a href="javascript:void(0);">企业动态</a>

                 <button class="pull-right btn btn-zs" @click="more">
                     更多
                 </button>
         </div>
        
        <div class="clearfix dt">
            <div class=" col-xs-6">
                中科点击（北京）科技有限公司
                <router-link to="/supervision/parkCompanys/companyDetail/" class="pull-right blue">
                详情
                </router-link>
            </div>
            <div class=" col-xs-6">
                中科点击（北京）科技有限公司
                <router-link to="/supervision/parkCompanys/companyDetail/" class="pull-right blue">
                    详情
                </router-link>
            </div>


        </div>
            
           
        
    </div>
</template>
<style lang="less" scoped>
   button.btn-red{
     background-color:#f84242;
     color:#fff;
     border-radius:15px;
     margin-top:-5px;
   }  
    .dt .col-xs-6 {
    border: 1px solid #e8ebf2;
    height: 30px;
    line-height: 30px;
}
 button.btn-zs{
   padding:2px 10px;
   border-radius:20px;
 }

</style>
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
           more(){
            
           }
		},
		mounted(){



		},
	}
</script>
