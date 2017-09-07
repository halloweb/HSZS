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
        		<tr v-for="(item,index) in list">
        			<td>{{item.business}}</td>
        			<td>{{item.title}}</td>
        		
        			<td>2017-01-02</td>
        			<td><router-link class="blue" :to="{path:'/supervision/articleList/'+item.id}">查看详情</router-link></td>
        		</tr>
        		</tbody>
        </table>	
        <p class="loadMore text-center"><a href="javascript:void(0);" class="blue" @click="loadMore">{{state}}</a></p>
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
    .table-zs tbody tr td{
    	max-width:300px;
    }
     td a:visited{
       color:#999;
    }
</style>
<script> 
	export default{
		data(){
			return{
                 pageNumber:1,
                 pageSize:8,
                 totalPage:0,
                 list:[],
                 state:'加载更多'
			}
		},
		methods:{
            getList(){
              this.$ajax.post('/apis/warning/getBusinessOutflowList.json',{pageNumber:this.pageNumber,pageSize:this.pageSize}).then(res => {
                   this.totalPage=res.data.data.totalPage;
                   res.data.data.list.forEach(val => {
                    val.content=val.content.slice(0,70)+'...';
                    
                   });

                   this.list=res.data.data.list;
              }).catch(err => console.log(err))
            },
			loadMore(){
        
            this.pageNumber++;
            if(this.pageNumber>this.totalPage){
              this.state="已无更多数据";
              return;
            }
            this.getList();
			},
		},
        created(){
            this.getList();
        },
	}
</script>