<template>
	<div>
		<div class="content-block search">
			<div class="search-btn">
				<input type="text" placeholder="请输入企业名称"/>
                <button class="btn">搜索</button>
			</div>
		</div>
		<div class="content-block">
			
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

</style>