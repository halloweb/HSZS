<template>
    <div>
        <ul class="type-box">
            <li>
                <div class="head"><img src="../../../assets/images/bq.png" height="15" width="15" alt="">企业标签</div>
                <p class="type-list">
                    <span v-for="(item,index) in label" :class="{active:index==labelCode}" @click="select1(index)">{{item}}</span>
                </p>
            </li>
            <li>
                <div class="head"><img src="../../../assets/images/state.png" height="12" width="23" style="margin-left:-8px;" alt="">状态</div>
                <p class="type-list">
                    <span v-for="(item,index) in state" :class="{active:index==stateCode}" @click="select2(index)">{{item}}</span>
                </p>
            </li>
            <li >
                <div class="head">
                    <img src="../../../assets/images/time.png" alt="">时间
                </div>
                <p class="type-list">
                    <span v-for="(item,index) in time" :class="{active:index==timeCode}" @click="select3(index)">{{item}}</span>
                </p>
            </li>
           
        </ul>
         <div class="search">
                         <el-input
                              
                              icon="search"
                              v-model="keyWord"
                              :on-icon-click="search">
                        </el-input>
         </div> 
         <div class="table-box">
         <table class="table-zs">
         	<thead>
         		<tr>
         			<th>企业名</th>
         			<th>子企业</th>
         			<th>产业领域</th>
         			<th>所属地区</th>
         			<th>负责人</th>
         			<th>状态</th>
         		</tr>
         	</thead>
         	<tbody>
         		<tr>
         			<td :rowspan="count" class="first">中国石油化工股份有限公司</td>
         			<td><router-link to='/user/requires/requireDetails'>中国石油齐鲁股份有限公司</router-link></td>
         			<td>大数据、人工智能、区块链</td>
         			<td>北京</td>
         			<td>北京</td>
         			<td>北京</td>
         		</tr>
         		 <tr>
         			<td :rowspan="count" v-if="1==0">中国石油化工股份有限公司</td>
         			<td>中国石油齐鲁股份有限公司</td>
         			<td>大数据、人工智能、区块链</td>
         			<td>北京</td>
         			<td>北京</td>
         			<td>北京</td>
         		</tr>

         	</tbody>
         	<tbody>
         		<tr>
         			<td :rowspan="count" class="first">中国石油化工股份有限公司</td>
         			<td>中国石油齐鲁股份有限公司</td>
         			<td>大数据、人工智能、区块链</td>
         			<td>北京</td>
         			<td>北京</td>
         			<td>北京</td>
         		</tr>
         		 <tr>
         			<td :rowspan="count" v-if="1==0">中国石油化工股份有限公司</td>
         			<td>中国石油齐鲁股份有限公司</td>
         			<td>大数据、人工智能、区块链</td>
         			<td>北京</td>
         			<td>北京</td>
         			<td>北京</td>
         		</tr>

         	</tbody>
         </table>  
         </div>  
    </div>
</template>
<script>
export default {
       data(){
       	 return{
       	 	label:["世界500强","中国500强"],
       	 	state:['全部',"已入住","未入住"],
       	 	time:['全部', '近一周','近三个月', '近六个月', '近一年'],
            labelCode:0,
            stateCode:0,
            timeCode:0,
            keyWord:'',
            count:2

       	 }
       },
       methods:{
       	 select1(){

       	 },
       	  select2(){

       	 },
       	  select3(){

       	 },
       	 search(){

       	 },
       }
}
</script>
<style lang="less" scoped>
.type-box {
    margin: 0 -24px;
    background-color: #fafafa;
    padding-bottom:10px;
    border:none; 
    border-bottom:1px solid #e8ebf2;
}
	.search{
		padding:10px 0;
		.el-input{
			width:240px;
			
		}

	}
	.el-input__inner{border-radius: 30px;}
	.table-box{
		margin-top:0;

	}
	.first{border-right:1px solid #e8ebf2;}
</style>