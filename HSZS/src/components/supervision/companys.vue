<template>
    <div class="content-block">
        <ul class="type-box">
            <li>
                <div class="head">
                    产业描述
                </div>
                <p class="type-list">
                    <el-select v-model="industry" size="small" @change="select">
                        <el-option v-for="item in option1" :key="item.value" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="regCapital" size="small" @change="select1">
                        <el-option v-for="item in option2" :key="item.value" :value="item.value">
                        </el-option>
                    </el-select>
                </p>
            </li>
            <li>
                <div class="head">
                    产业分组
                </div>
                <p class="type-list">
                    <span v-for="(item,index) in group" @click="select2(item,index)" :class="{active:activeIndex==index}">{{item}}</span>
                    <span class="type-item" @click="addVisible = true">添加企业分组</span>
                    <span class="type-item" @click="removeVisible = true">删除企业分组</span>
                </p>
                <el-dialog :visible.sync="addVisible" size="tiny" class="text-center" title="添加企业分组">
                    <el-input v-model="addGroup" placeholder="请输入组名"></el-input>
                    <span slot="footer" class="dialog-footer">
							    <el-button @click="addVisible = false">取 消</el-button>
							    <el-button type="primary" @click="addlist(item)">确 定</el-button>
					</span>
                </el-dialog>
                <el-dialog :visible.sync="removeVisible" size="tiny" class="text-center" title="删除企业分组">
                    <el-select v-model="removes" multiple placeholder="请选择">
                        <el-option v-for="item in removeGroup" :key="item.value" :value="item.value">
                        </el-option>
                    </el-select>
                    <span slot="footer" class="dialog-footer">
							    <el-button @click="removeVisible=false">取 消</el-button>
							    <el-button type="primary" @click="removelist()">确 定</el-button>
					</span>
                </el-dialog>
            </li>
        </ul>
        <!-- <div class="top-tool">
			<el-input
					icon="search"
					v-model="keyWord"
					:on-icon-click="search">
			</el-input>
			
		</div> -->
        <ul>
            <li class="content-box" v-for="(item,index) in company">
                <div class="main-body">
                    <img :src="item.logo" height="100" width="162" alt="">
                    <div class="company-info">
                        <router-link to="/supervision/parkCompanys/companyDetail/" class="blue">{{item.companyName}}</router-link>
                        <div class="sub-list">
                            <span>
        				<img src="../../assets/images/person.png" height="15" width="13" alt="">
        				法定代表人：{{item.businessLegal}}
        				</span>
                            <span>
        				<img src="../../assets/images/money.png" height="15" width="13" alt="">
        				注册资本：{{item.registerCapital}}万
        				</span>
                            <span>
        				<img src="../../assets/images/time-h.png" height="15" width="13" alt="">
        				注册时间：{{item.registerDate}}
        				</span>
                            <span>
        				<img src="../../assets/images/location-h.png" height="15" width="13" alt="">
        				位置：{{item.area}}
        				</span>
                        </div>
                    </div>
                </div>
                <el-button @click="collect(item)">收藏企业</el-button>
            </li>
            <el-dialog :visible.sync="selectVisible" size="tiny" class="text-center" title="选择组名">
                <el-select v-model="selectGroup" placeholder="请选择">
                    <el-option v-for="item in removeGroup" :key="item.value" :value="item.value">
                    </el-option>
                </el-select>
                <span slot="footer" class="dialog-footer">
							    <el-button @click="selectVisible=false">取 消</el-button>
							    <el-button type="primary" @click="confirmCollect">确 定</el-button>
					</span>
            </el-dialog>
        </ul>
        <div class="text-center" v-if="total!=0">
            <el-pagination @current-change="change" layout="prev, pager, next" :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageNumber: 1,
            pageSize: 8,

            group: ["全部"],

            option1: [
                { value: '互联网' },
                { value: '高科技' },
                { value: '文化创意' },
                { value: '精英配套' },
                { value: '滨海旅游' },
                { value: '港口物流' },
            ],
            industry: "互联网",
            option2: [
                 { value: '全部' },
                { value: '0-100万' },
                { value: '100-200万' },
                { value: '200-500万' },
                { value: '500-1000万' },
                { value: '1000万以上' },
            ],
            regCapital: "全部",
            keyWord: '',
            removeVisible: false,
            addVisible: false,
            selectVisible: false,
            addGroup: '',
            removeGroup: [],
            removes: [],

            company: [],
            selectGroup: '',
            activeIndex: 0,
            activeGroup: '',
            collectID:'',
            total:0

        }
    },
    methods: {
        search() {
            this.getcompany();
        },
        getcompany() {
            this.$ajax.post('/apis/supervise/searchCompanyFromGardenForPage.json', { industry: this.industry, regCapital: this.regCapital,pageNumber: this.pageNumber, pageSize: this.pageSize }).then(res => {
                 if(res.data.data!=null){
                     this.company = res.data.data[0].content;
                     this.total=res.data.data[0].totalElements;
                 }
               
            }).catch(err => console.log(err))
        },
        select() {
            this.getcompany();
        },
        select1() {
            this.getcompany();
        },
        select2(item, index) {
            this.activeIndex = index;
            this.activeGroup = item;
            this.getcompany();
        },
        getGroup() {
            this.$ajax.get('/apis/supervise/selectCompanyGroup.json').then(res => {
                this.group = ['全部'];
                this.removeGroup = [];
                let groups = res.data.data;
                groups.forEach(val => {
                    this.group.push(val.groupName);
                    this.removeGroup.push({ value: val.groupName });
                })


            }).catch(err => console.log(err))
        },
        addlist() {

            this.$ajax.get('/apis/supervise/addCompanyGroup.json', { params: { groupName: this.addGroup } }).then(res => {
                if (res.data.data.state == "success") {
                    this.addVisible = false;
                    this.getGroup();
                    this.$message({
                        message: '添加分组成功',
                        type: 'success'
                    });
                } else if (res.data.data.state == "分组已经存在") {
                    this.$message({
                        message: '组名已存在',
                        type: 'warning'
                    });
                } else {
                    this.$message.error('添加分组失败');
                }



            }).catch(err => console.log(err))

        },
        removelist() {
            let p = this.removes.join();
            this.$ajax.get('/apis/supervise/dropCompanyGroup.json', { params: { groupNames: this.removes } }).then(res => {
                if (res.data.data == true) {
                    this.$message({
                        message: '删除分组成功',
                        type: 'success'
                    });
                    this.removeVisible = false;
                    this.getGroup();

                } else {
                    this.$message.error('删除分组失败');
                }

            }).catch(err => {
                console.log(err);
                this.$message.error('删除分组失败');
            })
        },
        collect(item) {
            this.selectVisible = true;
            this.collectID= item.cid;
        },
        confirmCollect() {
           if(this.selectGroup==''){
             this.$message.error('请选择组名');
             return;
           };
            this.$ajax.post('/apis/supervise/saveCompanyByGroupId.json', {companyId:this.collectID,groupname:this.selectGroup}).then(res => {
                if(res.data.data==true){
                    this.$message({
                        message: '分组成功',
                        type: 'success'
                    });
                    this.selectVisible=false;
                }else{
                    alert("操作失败")
                }
                  
            }).catch(err => console.log(err))
               
        },
        change(val) {
            this.pageNumber = val;
            this.getcompany();
        },
    },
    mounted() {
        this.getcompany();
        this.getGroup();
    },
}
</script>
<style lang="less" scoped>
.type-item {
    border-radius: 2px;
    height: 24px;
    color: #959595;
    display: inline-block;
    border: 1px solid #cdcdcd;
    margin-left: 20px;
    line-height: 24px;
}

.type-box {
    margin: -24px -24px;
    border: none;
    li {
        margin-bottom: 25px;
    }
    p {
        .el-select {
            width: 150px;
            text-align: left;
            margin-top: -20px;
            margin-right: 20px;
        }
    }
}

.top-tool {
    height: 60px;
    margin: 0 -24px;
    padding: 0 24px;
    line-height: 60px;
    background-color: #fafafa;
    border-top: 1px solid #e8ebf2;
    border-bottom: 1px solid #e8ebf2;
    .el-input {
        width: 200px;
        margin-left: 30px;
    }
    .el-button {
        width: 80px;
        color: white;
        background: #00a5ff;
        margin-left: 47px;
        margin-top: 10px;
    }
}

.content-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #e8ebf2;
    .main-body {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        margin: 0 30px;
        .company-info {
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            margin-left: 30px;
        }
    }
}

.rate {
    float: right;
    .circle {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #00a5ff;
    }
}

.company-info {
    padding-top: 15px;
    a {
        font-size: 16px;
    }
    .sub-list {
        margin-top: 15px;
        span {
            margin-right: 15px;
            color: #808080;
            img {
                margin-right: 6px;
                margin-top: -3px;
            }
        }
    }
}

.el-pagination {
    display: inline-block;

    margin-top: 60px
}
</style>