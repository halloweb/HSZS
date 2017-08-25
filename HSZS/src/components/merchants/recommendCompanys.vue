<template>
    <div class="recommend clearfix">
      <ul class="list-wrapper">
        <li class="item" v-for="(item,index) in companys" @click="select(item)">
         <div>
        	<span>{{item.companyName}}</span>
        </div>
        </li>
       
    </ul>
     <div class="info-panel">
     	 <div class="info-box">
     	 	 <div class="title">{{details.company}}</div>
     	 	 <table>
     	 	 	<tr>
     	 	 		<td>法定代表人：</td>
     	 	 		<td>{{details.boss}}</td>
     	 	 	</tr>
     	 	 	<tr>
     	 	 		<td>注册资本：</td>
     	 	 		<td>{{details.registerCapital}}</td>
     	 	 	</tr>
     	 	 	<tr>
     	 	 		<td>成立日期：</td>
     	 	 		<td>{{details.createTime}}</td>
     	 	 	</tr>
     	 	 	
     	 	 	<tr>
     	 	 		<td>行业领域：</td>
     	 	 		<td>{{details.industryType}}</td>
     	 	 	</tr>
     	 	 	<tr>
     	 	 		<td>企业地址：</td>
     	 	 		<td>{{details.registerAddress}}</td>
     	 	 	</tr>
     	 	 </table>
     	 	 <div class="text-center">
             <a :href="details.companyUrl" target="_blank">
     	 	 <button class="btn">
     	 	 	查看详情
     	 	 </button>
             </a>
     	 	 </div>
     	 	 
     	 </div>
     </div>
    </div>
</template>
<script>
    export default{
    	data(){
    		return{
    			companys:[],
                details:{}
    		}
    	},
        methods:{
            getCompanys(data){
                  this.$ajax.post('/apis/indus/getCompanyInfoByIndustry.json',{industry:data}).then(res => {
                     this.companys=res.data.data;
                  }).catch(err => console.log(err))
            },
            getInfo(data){
                 this.$ajax.post('/apis/comp/getCompanyInfoByCompany.json',{company:data}).then(res => {
                            this.details=res.data.data;       
                  }).catch(err => console.log(err))
            },
            select(item){    
                  this.getInfo(item.company);
            },
        },
        mounted(){
             this.getCompanys(this.$route.query.query);
            
        },

    }
</script>
<style lang="less" scoped>
	.recommend{
		background-color:#ffffff;
		min-height:400px;
		padding:20px;
		border:1px solid #e8ebf2;
	}
	ul{
		width:60%;
        font-size:0;
        float:left;
		.item{
		width:25%;
		padding:0 10px;
		margin-bottom:15px;
		display:inline-block;
		vertical-align: top;
		div{	
		width:100%;
		height:50px;
		padding:5px;
		text-align:center;
		font-size:16px;
		background-color:rgba(0,145,244,0.98);
        transition:all .2s;
		color:#ffffff;
		cursor:pointer;
         &:hover{
         	background-color:rgba(0,160,255,0.98);
         }
         span{
         	display:inline-block;
         	margin-top:20px;
         	transform:translateY(-50%);

         }
		}
	}
	}
	.info-panel{
		 
		width:40%;
		float:right;



	}
     .info-box{
     	width:80%;
     	margin:0 auto;
     	border:1px solid #e8ebf2;
     	min-height:300px;
     	padding:0 10px;
     	.title{
     		height:40px;
     		line-height:40px;
     		margin:0 -10px;
     		padding:0 10px;
     		 overflow: hidden;
			 white-space: nowrap;
			 text-overflow: ellipsis;
			 color:#00a5ff;
			 font-size:16px;
			 border-bottom:1px solid #e8ebf2;
     	}
     	table{
     		width:100%;
     		margin:20px 0;

     		td{
     			padding:3px 0;
     		&:first-child{
     			width:90px;
     			vertical-align: top;

     		}
     		}
     	}
     	button{
     		width:150px;
     		border-radius:20px;
     		background-color:#00a5ff;
     		color:#fff;
     	}
     }
</style>