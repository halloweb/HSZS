<template>
	<div>
	  	<head-bar></head-bar>
	    <div class="wrapper">
           <div class="left-bar">
		         <ul class="left-nav">
			     	<li>
		                <router-link to="/merchants/" active-class="active" >
		                <img src="../assets/images/n5.png" height="18" width="18" alt="">
		                园区企业</router-link>
		            </li>  
		            <li>
		               <router-link to="/intelligence/parkInfo" active-class="active" >
		                 <img src="../assets/images/n6.png" height="16" width="18" alt="">企业动态</router-link>

		                  
		            </li>   
		            <li>
		                <router-link to="/intelligence/parkInfo" active-class="active" >  
		                <img src="../assets/images/n7.png" height="19" width="18" alt="">园区预警</router-link>
		            </li>
		            
		       </ul>
		
	      </div>
	       <div class="home">
            <div class="main-content">
		     <router-view></router-view>
		     </div>
              <footer>
                Copyright©2008-2016 中科点击（北京）科技有限公司-版权所有  京ICP备11012241-3号
            </footer>
		    </div> 
		</div>
	</div>
</template>
<script>
  import headBar from './commonParts/headBar.vue'
   export default{
   	    components:{
           'headBar': headBar
   	    },
   	    data(){
   	    	return{

   	    	}
   	    },
   	    mounted(){
               $(function(){

			    var min_height=$(window).height()-212+"px";

				$(".main-content").css({"min-height":min_height}); 
				$(window).resize(function(){
					    var min_height=$(window).height()-212+"px";

				$(".main-content").css({"min-height":min_height}); 
			   });
			   
		

   				});
   	    },
   }
</script>