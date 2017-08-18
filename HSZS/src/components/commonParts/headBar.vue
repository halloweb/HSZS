<template>
	 <header>
         <div class="logo">
                    <router-link to="/" class="icon-logo"></router-link>
         </div>
        <ul class="top-bar">
            <li >
                <router-link to="/intelligence" active-class="active">
                   <i class="i1"></i>招商情报
                </router-link>
            </li>
            <li>
                <router-link to="/supervision"  active-class="active">
                   <i class="i2"></i>园区监管
                </router-link>
            </li>
            <li>
                <router-link to="/merchants" active-class="active">
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
        methods:{
         
        },
		mounted(){
                 
           
		},
	}
</script>