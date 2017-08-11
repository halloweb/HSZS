<template>
	<div class="outflowDetails">
        <a href="#" @click="back()" class="back">返回</a>

		<div class="title"><span class="blue">[京城快讯] </span>4家企业入驻北京保险产业园 </div>
		<div class="sub-info">
             <span>
             <img src="../../assets/images/time.png" alt="">
              发布时间：2017-02-02 01:00:00
             </span>
        </div>
        <p class="content">
        	新一轮科技革命和产业变革正在兴起，中国发展面临着发达国家蓄势占优和新兴经济体追赶比拼的“两头挤压”。特别是，我们的高端产业在国
        </p>
        <div class="sub-info">
             <span>
             <img src="../../assets/images/pencil.png" alt="">
              情报采集：中科点击
             </span>
             <span>
             <img src="../../assets/images/internet.png" alt="">
              情报原址：www.ss.com
             </span>
             <span>
             <img src="../../assets/images/company.png" alt="">
             涉及公司：中科点击
             </span>
        </div>
	</div>
</template>
<style lang="less" scoped>
	.outflowDetails{
		 padding:20px;
		background-color:#ffffff;
		.title{
			
			font-size:18px;
		}

	}
    .back{
        display: block;
        margin-top: 10px;
        color: #00a5ff;
        font-size: 20px;
        float: right;
    }
</style>
<script>
	export default{
        methods:{
            back(){
                this.$router.go(-1)
            }
        }
	}
</script>