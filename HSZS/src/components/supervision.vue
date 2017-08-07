<template>
	<div>
	  	<head-bar></head-bar>
	    <div class="wrapper">
           <div class="left-bar">
		         <ul class="left-nav">
			     	<li>
		                <router-link to="/supervision/companys" active-class="active" >
		                <img src="../assets/images/n5.png" height="18" width="18" alt="">
		                园区企业</router-link>
		            </li>  
		            <li>
		               <a href="javascript:void(0);"  >
		                 <img src="../assets/images/n6.png" height="16" width="18" alt="">企业动态</a>
                         <ol>
                         	<li>
                         	<router-link to="/supervision/goodNews" active-class="active" > 
                         	<img src="../assets/images/n5.png" height="18" width="18" alt="">
		                    企业捷报</router-link>
		                    </li>
		                    <li>
                         	<router-link to="/supervision/badNews" active-class="active" > 
                         	<img src="../assets/images/n5.png" height="18" width="18" alt="">
		                    企业负面</router-link>
		                    </li>
                         </ol>
		                  
		            </li>   
		            <li>
		                <a href="javascript:void(0);">  
		                <img src="../assets/images/n7.png" height="19" width="18" alt="">园区预警</a>
		                 <ol>
                         	<li>
                         	<router-link to="/supervision/outflow" active-class="active" > 
                         	<img src="../assets/images/n5.png" height="18" width="18" alt="">
		                    企业疑似外流</router-link>
		                    </li>
		                    <li>
                         	<router-link to="/supervision/infoChange" active-class="active" > 
                         	<img src="../assets/images/n5.png" height="18" width="18" alt="">
		                    信息变更预警</router-link>
		                    </li>
                         </ol>
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