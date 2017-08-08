<template>
	<div class="content-block">
		<div class="title policy-title">
           <img src="../../assets/images/qywl.png" alt="">企业疑似外流
        </div>
        <div class="table-box">
        	<table class="table-zs">
        	<thead>
        		<tr>
        			<th>企业名称</th>
        			<th>相关情报</th>
        			
        			<th>预警时间</th>
        			<th></th>
        		</tr>
        	</thead>
        	<tbody>
        		<tr>
        			<td>爱心人寿保险股份有限公司</td>
        			<td>7月11日，北京市投资促进局与石景山区政府、首钢集团有限公司联合举办“驻京中外知名企业石景山·首钢行”活动。 图为签约现国酒店</td>
        		
        			<td>2017-01-02</td>
        			<td><router-link class="blue" to="/supervision/companyOut/outflowDetails">查看详情</router-link></td>
        		</tr>
        		</tbody>
        </table>	
        <p class="loadMore text-center"><a href="javascript:void(0);" class="blue" @click="loadMore">加载更多</a></p>
        </div>
        

	</div>
</template>
<style scoped>
	.table-box{
		margin:30px -24px 0 -24px ;
	}
	 .load-more{
    	margin-top:60px;
    }
    .table-zs tbody tr td:nth-child(2){
    	max-width:400px;
    }
</style>
<script> 
	export default{
		data(){
			return{

			}
		},
		methods:{
			loadMore(){

			},
		},
	}
</script>