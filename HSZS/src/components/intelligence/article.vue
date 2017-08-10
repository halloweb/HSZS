<template>

       <div class="article-details">
           <a href="javascript:void(0);" class="blue" @click="back">返回</a>
           <h4 class="text-center">余典范：把握新常态下的“变与不变” <button class="pull-right btn btn-zs">收藏</button></h4>
           <div class="sub-info">
             <span>
             <img src="../../assets/images/company.png" alt="">
              涉及公司：中科点击
             </span>
             <span>
             <img src="../../assets/images/time.png" alt="">
              发布时间：2017-02-02 01:00:00
             </span>
           </div>
           <p>创新是经济发展不变的动力，对于新常态下产业的转型升级具有重要的意义。从创新资源的投入来看，近几年我们取得了长足的发展。2013 拷贝</p>

            <div class="sub-info">
             <span>
             <img src="../../assets/images/pencil.png" alt="">
              情报采集：中科点击
             </span>
             <span>
             <img src="../../assets/images/internet.png" alt="">
              情报原址：www.ss.com
             </span>
           </div>
       </div>
   

</template>
<script>
	export default{
      methods:{
        back(){
          this.$router.go(-1);
        }
      }
	}
</script>