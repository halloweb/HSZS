<template>
	<div>
		<div class="content-block search">
			<div class="search-btn">
				<input type="text" placeholder="请输入公司名称"/>
                <button class="btn">搜索</button>
			</div>
		</div>
		<div class="search-box">
			<div class="search-type">
                <a href="#byArea" data-toggle="tab" class="fc">按区域查询</a><a href="#byIndustry" data-toggle="tab">按行业查询</a><a href="#byCompany" data-toggle="tab">最近注册企业</a><a href="#byHot" data-toggle="tab">热门律所</a>
            </div>
            <div class="tab-content type-details">
                <div class="tab-pane fade in active" id="byArea">
                    <div class="bace" v-for="(item,index) in area">
                            <a href="javascript:void(0);" 
                               >{{item.title}}</a>
                            
                            <a href="https://bj.tianyancha.com/search" v-for="(item,index) in item.data">
                              <span class="c6 mrten in-block">•</span>
                              {{item}}</a>
            
                    </div>
                </div>
                <div class="tab-pane fade" id="byIndustry">
                     <div class="bace" v-for="(item,index) in industry">
                            <a href="javascript:void(0);" 
                               >{{item.title}}</a>
                            
                            <a href="https://bj.tianyancha.com/search" v-for="(item,index) in item.data">
                              <span class="c6 mrten in-block">•</span>
                              {{item}}</a>
            
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>
<style lang="less" scoped>
    .search{
    	height:300px;
    	background:url(../../assets/images/search-bg.png) center center no-repeat;
    	background-size:cover;
    	.search-btn{
    		
    		text-align:center;
    		margin-top:105px;
    		input{border-radius:3px 0 0 3px;padding-left:20px;width:582px;height:50px;line-height:50px;border:1px solid #ffffff;color:#999999;}
            button{border-radius:0 3px 3px 0;margin-left:-15px;vertical-align:top;width:100px; height:50px;background-color:#00a5ff;color:#fff;font-size:16px;}
    	}
    }
    .search-box{
        margin-top:15px;
        background-color:#ffffff;
       .search-type{
       width:100%;
       a{
         display:inline-block;
         width:25%;
         height:45px;
         line-height:45px;
         text-align:center;
          color:#333333;
         font-size:18px;
         border:1px solid #e6e6e6;
         &.fc{
            background-color:#00a5ff;
            color:#ffffff;
         }
         
           
        
       }
   }
    }
  .type-details{
    height:412px;
    overflow-y:auto;
    padding:30px;
        
           .bace{
            margin-bottom: 36px;
            min-width:42px;
            margin-right:10px;
            a{  
                width:100px;
                display:block;
                font-size:13px;
                padding-bottom: 13px;
                color:#333333;
                &:first-child{
                    font-size:15px;
                    color:#00a4ff;
                }
                span{
                    display:inline-block;
                    margin-right:10px;
                }
            }
   
      }
   
  }
    #byArea{
           height:1000px;
       }
</style>
<script>
    export default{
        data(){
            return{
                 area:[{title:"北京",data:["北京"]},{title:"天津",data:["天津"]}],
                 industry:[{title:"北京",data:["北京"]},{title:"天津",data:["天津"]}]
            }
        },
        methods:{

        },
        mounted(){
                 $(".search-type a").on("click",function(){
                    $(this).addClass("fc").siblings().removeClass("fc");
                 })
        },
    }
</script>