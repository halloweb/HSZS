<template>
    <div class="recommend clearfix">
      <ul class="list-wrapper">
        <li class="item">
         <div>
        	<span>中科点击</span>
        </div>
        </li> <li class="item">
           <div>
        	<span>中科点击中科点击中科点</span>
        	 </div>
        </li><li class="item">
           <div>
        	<span>中科点击中科点击中科点</span>
        	 </div>
        </li><li class="item">
           <div>
        	<span>中科点击中科点击中科点</span>
        	 </div>
        </li><li class="item">
           <div>
        	<span>中科点击中科点击中科点</span>
        	 </div>
        </li>
       
    </ul>
     <div class="info-panel">
     	 <div class="info-box">
     	 	 <div class="title">贵州九次方</div>
     	 	 <table>
     	 	 	<tr>
     	 	 		<td>法定代表人：</td>
     	 	 		<td>加乐坛</td>
     	 	 	</tr>
     	 	 	<tr>
     	 	 		<td>注册资本：</td>
     	 	 		<td>15855万人民币</td>
     	 	 	</tr>
     	 	 	<tr>
     	 	 		<td>成立日期：</td>
     	 	 		<td>1999.01.02</td>
     	 	 	</tr>
     	 	 	<tr>
     	 	 		<td>征信等级：</td>
     	 	 		<td>A</td>
     	 	 	</tr>
     	 	 	<tr>
     	 	 		<td>行业领域：</td>
     	 	 		<td>新闻</td>
     	 	 	</tr>
     	 	 	<tr>
     	 	 		<td>企业地址：</td>
     	 	 		<td>北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区</td>
     	 	 	</tr>
     	 	 </table>
     	 	 <div class="text-center">
     	 	 <button class="btn">
     	 	 	查看详情
     	 	 </button>
     	 	 </div>
     	 	 
     	 </div>
     </div>
    </div>
</template>
<script>
    export default{
    	data(){
    		return{
    			companys:[]
    		}
    	},
        methods:{
            getCompanys(){
                  this.$ajax.get('/apis/indus/getCompanyInfoByIndustry.json',{params:{industry:'大数据'}}).then(res => {
                    
                  }).catch(err => console.log(err))
            },
            getInfo(){
                 this.$ajax.post('/apis/indus/findInfo.json',{company:'中科点击（北京）科技有限公司'}).then(res => {

                  }).catch(err => console.log(err))
            },
        },
        mounted(){
             this.getCompanys();
             this.getInfo();
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
		float:left;



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