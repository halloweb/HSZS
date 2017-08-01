<template>
	 <header>
         <div class="logo">
                    <router-link to="/" class="icon-logo"></router-link>
         </div>
        <ul class="top-bar">
            <li class="active">
                <router-link to="/intelligence">
                   <i class="i1"></i>招商情报
                </router-link>
            </li>
            <li>
                <router-link to="/">
                   <i class="i2"></i>园区监管
                </router-link>
            </li>
            <li>
                <router-link to="/">
                   <i class="i3"></i>精准招商
                </router-link>
            </li>
           
        </ul>
         <router-link class="user" to="/">
                <i class="icon-user"></i>个人中心
            </router-link>
  </header>
</template>
<script>
	export default{
		data(){
			return{
 
			}
		},
		mounted(){
                 //头部导航切换   
    $(".top-bar li a").on("click",function(){
          $(this).parent("li").addClass("active").siblings().removeClass("active");
    });
		},
	}
</script>