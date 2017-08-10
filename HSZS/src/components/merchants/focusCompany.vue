<template>
	<div class="content-block">
		<ul class="type-box">
                    <li>
                        <div class="head">
                         产业描述
                        </div >
                         <p class="type-list"> 
                             <el-select v-model="value1" size="small">
							    <el-option
							      v-for="item in option1"
							      :key="item.value"
							      
							      :value="item.value">
							    </el-option>
							  </el-select>
							  <el-select v-model="value2"  size="small">
							    <el-option
							      v-for="item in option2"
							      :key="item.value"
							      
							      :value="item.value">
							    </el-option>
							  </el-select>
                          </p>
                     </li>
					<li>
				<div class="head">
					产业分组
				</div >
				<p class="type-list"  >

					<span  v-for="(item,index) in group">{{item}}</span>
					<span class="type-item" @click="addVisible = true">添加企业分组</span>
				</p>
				<el-dialog
						:visible.sync="addVisible"
						size="tiny"
						class="text-center"
						title="添加企业分组">
					<el-input v-model="addGroup" placeholder="龙头企业"></el-input>
					<span slot="footer" class="dialog-footer">
							    <el-button @click="cancelList()">取 消</el-button>
							    <el-button type="primary" @click="addlist()">确 定</el-button>
					</span>
				</el-dialog>
			</li>
			        <li>
                        <div class="head">
                        收藏时间
                        </div >
                         <p class="type-list"> 
                          <span v-for="(item,index) in time" :class="{active:index==timeCode}" @click="select2(item,index)">{{item}}</span>
                          </p>
                    </li>     
        </ul>
        <div class="top-tool">
        	<el-checkbox v-model="checkedAll">全选</el-checkbox> 
        	 <el-input 
                  icon="search"

                  v-model="input2"
                  :on-icon-click="search">
             </el-input>
              <el-button type="danger" class="pull-right"@click="removeVisible = true">删除</el-button>
              <el-dialog
			 
			  :visible.sync="removeVisible"
			  size="tiny"
			  class="text-center"
			  >
			  <img src="../../assets/images/trash.png" height="84" width="73" alt="">
			  <p>确认删除企业关注吗？</p>
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="removeVisible = false">取 消</el-button>
			    <el-button type="primary" @click="removeVisible = false">确 定</el-button>
			  </span>
			</el-dialog>
        </div>
        <ul>

				<li class="content-box" v-for="(item,index) in company">
					<el-checkbox v-model="checked"></el-checkbox>
					<div class="main-body">
						<img src="../../assets/images/gstp.png" height="100" width="162" alt="">
						<div class="company-info">
							<router-link to="/merchants/merchantsDetail" class="blue">{{item.name}}</router-link>
							<div class="sub-list">
        				<span>
        				<img src="../../assets/images/person.png" height="15" width="13" alt="">
        				法定代表人：{{item.people}}
        				</span>
								<span>
        				<img src="../../assets/images/money.png" height="15" width="13" alt="">
        				注册资本：{{item.money}}
        				</span>
								<span>
        				<img src="../../assets/images/time-h.png" height="15" width="13" alt="">
        				注册时间：{{item.time}}
        				</span>
								<span>
        				<img src="../../assets/images/location-h.png" height="15" width="13" alt="">
        				位置：{{item.location}}
        				</span>
							</div>

						</div>
					</div>
					<div class="rate blue">
						<span class="circle"></span>
						评分：100
					</div>
				</li>

        </ul>
	</div>
</template>
<style lang="less" scoped>
	.type-box{
		margin: -24px -24px;
		border:none;
		li{
			margin:20px 0;
		}
		.el-select{
			width:150px;
			margin-top:-20px;
			margin-right:20px;
		}
		.type-item{
			border-radius: 2px;
			height: 24px;
			color: #959595;
			display: inline-block;
			border: 1px solid #cdcdcd;
			margin-left: 20px;
			line-height: 24px;
		}
	}
	.top-tool{
		height:60px;
		margin: 0 -24px;
		padding:0 24px;
		line-height:60px;
		background-color:#fafafa;
		 border-top: 1px solid #e8ebf2;
		 border-bottom:1px solid #e8ebf2;
		 .el-input{
     		width:200px;
     		margin-left:50px;
     	}
     	.el-button{
     		margin-top:10px;
     	}
     	
	}
	.content-box{
		 display: -webkit-box;
		  display: -ms-flexbox;
		  display: flex;
		   align-items: center;
		   padding:15px 0; 
		    border-bottom:1px solid #e8ebf2;
		.main-body{
			 display: -webkit-box;
		  display: -ms-flexbox;
		  display: flex;
           -webkit-flex: 1;
			  -ms-flex: 1;
			  flex: 1;
			  margin:0 30px;
			  .company-info{
			  	-webkit-flex: 1;
			  -ms-flex: 1;
			  flex: 1;
			  margin-left:30px;

			  }
	   }
	}
	
	.rate{
		 float:right;
		.circle{
	        display:inline-block;
			width:10px;
			height:10px;
			border-radius:50%;
			background-color:#00a5ff;

		}
	}
	.company-info{
		padding-top:15px;
		a{
			font-size:16px;
		}
		.sub-list{
			margin-top:15px;
			span{
				margin-right:15px;
				color:#808080;
				img{
					margin-right:6px;
					margin-top:-3px;
				}
			}
		}
	}
</style>
<script>
	export default{
		data(){
			return{
                time:["3天","7天","30天","半年"],
                timeCode:0,
                group:["全部"],
                groupCode:0,
                option1: [{
			          value: '互联网',
			         
			        }, {
			          value: '新能源',
			         
			        }],
			    value1:"互联网",
			     option2: [{
			          value: '互联网',
			         
			        }, {
			          value: '新能源',
			         
			        }],
			    value2:"互联网",
			    checkedAll: false,
			    checked:false,
			    input2:'',
			    removeVisible: false,
			    addVisible: false,
			    addGroup:'',
			    company:[
                   {
                   	name:"中科点击（北京）科技有限公司",
                   	people:'张三',
                   	time:'2017-02-01',
                   	money:"200",
                   	location:'北京'

                   }
			    ]

			}
		},
        methods:{
            search(){

            },
            addlist(){
                this.addVisible = false
                if(!this.addGroup){
                    return
                }else{
                    this.group.push(this.addGroup)
                    this.addGroup = ""

                }

            },
            cancelList(){
                this.addVisible = false
                this.addGroup = ""
            }
        },
	}
</script>