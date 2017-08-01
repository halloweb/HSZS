<template>
	 <div class="left-bar">
            
            <ul class="left-bar-menu">
               <li>
                <a href="javascript:void(0);" > <i class="icon-left1"></i>产业情报</a>
               <ol>
                   <li class="active">
                     <router-link to="/intelligence/"> <i class="icon-left2"></i>产业头条</router-link>
                   </li>
                   <li>
                     <router-link to="/policy"> <i class="icon-left3"></i>产业政策</router-link>
                   </li>
                   <li>
                    <router-link to="/expert"> <i class="icon-left4"></i>专家观点</router-link>
                   </li>
                   <li>
                     <a href="javascript:void(0);"> <i class="icon-left5"></i>企业排行</a>
                   </li>
                  
               </ol>
               </li> 
               <li> <a href="javascript:void(0);" style="padding-left:20px;"> 
                     <i class="icon-left6"></i>园区情报</a>
                   <ol>  
                    <li>
                     <a href="javascript:void(0);"> <i class="icon-left7"></i>园区概览</a>
                    </li>
                    <li>
                     <a href="javascript:void(0);"> <i class="icon-left8"></i>关注园区</a>
                    </li>
                   </ol>   
               </li>
            </ul>
      </div>    
</template>
<script>
	export default{

	}
</script>