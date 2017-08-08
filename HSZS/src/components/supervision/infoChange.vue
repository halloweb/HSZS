<template>
	<div class="content-block">
		<div class="title policy-title">
           <img src="../../assets/images/yanz.png" alt="">信息变更预警
        </div>
        <div class="change-search">
         <el-input placeholder="变更搜索" v-model="searchVal">
		    <el-button slot="append" icon="search" @click="search"></el-button>
		  </el-input>
		 </div>
	  <div class="table-box"> 
        <table class="table-zs">
        	<thead>
        		<tr>
        			<th>所属单位</th>
        			<th>类型标签</th>
        			<th>更新属性</th>
        			<th>变更时间</th>
        			<th>操作</th>
        		</tr>
        	</thead>
        	<tbody>
        		<tr>
        			<td>爱心人寿保险股份有限公司</td>
        			<td>企业</td>
        			<td>董事</td>
        			<td>2017-01-02</td>
        			<td><router-link class="blue" to="/supervision/infoWarning/warningDetails">查看详情</router-link></td>
        		</tr>
        		<tr>
        			<td>爱心人寿保险股份有限公司</td>
        			<td>企业</td>
        			<td>董事</td>
        			<td>2017-01-02</td>
        			<td><router-link class="blue" to="/supervision/infoWarning/warningDetails">查看详情</router-link></td>
        		</tr>
        	</tbody>
        </table>
        <p class="loadMore text-center"><a href="javascript:void(0);" class="blue" @click="loadMore">加载更多</a></p>	
      </div>  

	</div>
</template>
<style lang="less" scoped>
	.change-search{
         padding:20px 35px;
         .el-input{
         	width:300px;
         }
	}
    .table-box{
    	margin:0 -24px;
    }
    .load-more{
    	margin-top:60px;
    }
</style>
<script> 
	export default{
		data(){
			return{
				searchVal:''
			}
		},
		methods:{
			search(){

			},
			loadMore(){

			}
		}
	}
</script>