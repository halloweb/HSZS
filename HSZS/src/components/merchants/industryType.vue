<template>
	<ul class="industryType">
		<li class="type-item text-center" >
			<img src="../../assets/images/jinrong.png" alt="">
			<p class="type-name ">金融</p>
		</li>
		<li class="type-item text-center">
			<img src="../../assets/images/add1.png"  alt="">
			<p class="type-name ">更多</p>
		</li>
	</ul>
</template>
<style lang="less" scoped>
	.industryType{
		padding:30px 35px;
		border:1px solid #e8ebf2;
		background-color:#ffffff;
		.type-item{
			   display:inline-block;
               width:24%;
     		   margin-left:1.33%;   
     		   box-shadow: 0 0 10px #e8ebf2;
     		   cursor:pointer;
     		   margin-bottom:60px;

     		   &:hover{
     		   	box-shadow: 0 0 25px #ddd;
     		   }
     		   img{
     		   	width:100%;
     		   }
     		   .type-name{
     		   	border-top:1px solid #e8ebf2;
				font-size:16px;
				height:45px;
				line-height:40px;
		         }
		         .add{
		         	width:auto;
		         }
		}
		

	}
</style>
<script>
	export default{
        data(){
        	return{
                type:[{
                	name:'金融',
                }]
        	}
        }
	}
</script>