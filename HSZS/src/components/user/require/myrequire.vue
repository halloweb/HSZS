<template>
    <div>
        <ul class="type-box">
            <li>
                <div class="head" style="padding-top:3px;"><img src="../../../assets/images/bq.png" height="15" width="15" alt="">企业标签</div>
                <p class="type-list">
                    <span v-for="(item,index) in label" :class="{active:index==labelCode}" @click="select1(index)">{{item}}</span>
                    <span class="type-item" @click="addVisible = true">+ 添加企业标签</span>
                    <span class="type-item" @click="removeVisible = true">删除企业标签</span>
                </p>
                <el-dialog :visible.sync="addVisible" size="tiny" class="text-center" title="添加企业标签">
                    <el-input v-model="addLabel" placeholder="请输入标签名"></el-input>
                    <span slot="footer" class="dialog-footer">
                                <el-button @click="addOff">取 消</el-button>
                                <el-button type="primary" @click="addLabels">确 定</el-button>
                    </span>
                </el-dialog>
                <el-dialog :visible.sync="removeVisible" size="tiny" class="text-center" title="删除企业分标签">
                    <el-select v-model="removes" multiple placeholder="请选择标签名">
                        <el-option v-for="item in removeLabel" :key="item.value" :value="item.value">
                        </el-option>
                    </el-select>
                    <span slot="footer" class="dialog-footer">
                                <el-button @click="removeOff">取 消</el-button>
                                <el-button type="primary" @click="removelist">确 定</el-button>
                    </span>
                </el-dialog>
            </li>
            <li>
                <div class="head"><img src="../../../assets/images/state.png" height="12" width="23" style="margin-left:-8px;" alt="">状态</div>
                <p class="type-list">
                    <span v-for="(item,index) in state" :class="{active:index==stateCode}" @click="select2(index)">{{item}}</span>
                </p>
            </li>
            <li>
                <div class="head">
                    <img src="../../../assets/images/time.png" alt="">时间
                </div>
                <p class="type-list">
                    <span v-for="(item,index) in time" :class="{active:index==timeCode}" @click="select3(index)">{{item}}</span>
                </p>
            </li>
        </ul>
        <div class="addRequire">
            <a href="javascript:void(0);" @click="formVisible = true"><img src="../../../assets/images/add-small.png" height="21" width="21" alt="">添加需求</a>
        </div>
        <el-dialog title="添加需求" :visible.sync="formVisible">
            <el-form :model="infos">
                <el-form-item label="企业名" label-width="120px">
                    <el-input v-model="infos.companyName" placeholder="请输入企业名"></el-input>
                </el-form-item>
                <el-form-item label="所属企业" label-width="120px">
                    <el-input v-model="infos.parentCompany" placeholder="请输入总部企业名"></el-input>
                </el-form-item>
                <el-form-item label="企业标签" label-width="120px">
                    <el-select v-model="infos.label" placeholder="请选择企业标签">
                        <el-option label="世界500强" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="企业关系" label-width="120px">
                    <el-input v-model="infos.relation" placeholder="子,父企业,投资企业"></el-input>
                </el-form-item>
                <el-form-item label="企业关系备注" label-width="120px">
                    <el-input v-model="infos.relationRemark"></el-input>
                </el-form-item>
                <el-form-item label="企业状态" label-width="120px">
                    <el-input v-model="infos.companyState" placeholder="请输入营业状态"></el-input>
                </el-form-item>
                <el-form-item label="负责人" label-width="120px">
                    <el-input v-model="infos.principal" placeholder="请输入负责人姓名"></el-input>
                </el-form-item>
                <el-form-item label="招商状态" label-width="120px">
                    <el-select v-model="infos.state" placeholder="请选择招商状态">
                        <el-option label="目标企业" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="招商备注" label-width="120px">
                    <el-input type="textarea" v-model="infos.remark"></el-input>
                </el-form-item>
            </el-form>
            <div class="footer">
                <el-button type="primary" @click="addRequire">保存</el-button>
            </div>
        </el-dialog>
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
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td :rowspan="count" class="first">中国石油化工股份有限公司</td>
                        <td>
                            <router-link to='/user/requires/requireDetails/a'>中国石油齐鲁股份有限公司</router-link>
                        </td>
                        <td>大数据、人工智能、区块链</td>
                        <td>北京</td>
                        <td>北京</td>
                        <td>北京</td>
                        <td><a href="javascript:void(0);" class="blue">编辑</a></td>
                    </tr>
                    <tr>
                        <td :rowspan="count" v-if="1==0">中国石油化工股份有限公司</td>
                        <td>中国石油齐鲁股份有限公司</td>
                        <td>大数据、人工智能、区块链</td>
                        <td>北京</td>
                        <td>北京</td>
                        <td>北京</td>
                        <td><a href="javascript:void(0);" class="blue">编辑</a></td>
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
                        <td><a href="javascript:void(0);" class="blue">编辑</a></td>
                    </tr>
                    <tr>
                        <td :rowspan="count" v-if="1==0">中国石油化工股份有限公司</td>
                        <td>中国石油齐鲁股份有限公司</td>
                        <td>大数据、人工智能、区块链</td>
                        <td>北京</td>
                        <td>北京</td>
                        <td>北京</td>
                        <td><a href="javascript:void(0);" class="blue">编辑</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            label: [],
            state: ['全部', "已入住", "未入住"],
            time: ['全部', '近一周', '近三个月', '近六个月', '近一年'],
            labelCode: 0,
            stateCode: 0,
            timeCode: 0,
            keyWord: '',
            count: 2,
            addVisible: false,
            addLabel: '',
            removeVisible: false,
            removes: [],
            removeLabel: [],
            formVisible: false,
            infos: {
                companyName: '',
                parentCompany: '',
                label: '',
                relation: '',
                relationRemark: '',
                companyState: '',
                principal: '',
                state: '',
                remark: ''
            }


        }
    },
    methods:{
        select1(index){
            this.labelCode = index
            this.update()
        },
        select2(index){
            this.stateCode = index
            this.update()
        },
        select3(index){
            this.timeCode = index
            this.update()
        },
        search(){

        },
         getLabel(){
           this.$ajax.get('/apis/label/getMyLabel.json').then(res => {
            this.label=['全部'];
            this.removeLabel = [];
              res.data.data.forEach(val=>{
                this.label.push(val.label)
                this.removeLabel.push({ value: val.label });
              })
           })
       },
        msg(data,type){
            this.$message({
                message: data,
                type: type
            });
        },
        addLabels() {
            let rex=/(^[\u4E00-\u9FA5a-zA-Z0-9_]+$)/;
            if(!rex.test(this.addLabel)){
                this.msg('组名由中英文数字下划线组成并不能为空','warning');
                return;
            };
            if(this.addLabel.length>10){
                this.msg('组名不能超过十个字符','warning');
                return;
            };
            this.$ajax.get('/apis/label/addMyLabel.json', { params: { name: this.addLabel } }).then(res => {
                if (res.data.success == true) {
                    this.addVisible = false;
                    this.getLabel();
                    this.msg('添加标签成功','success');
                    this.addLabel='';
                } else if (res.data.message == "标签已经存在") {
                    this.msg('标签已存在','warning')
                } else {
                    this.$message.error('添加标签失败');
                }
            }).catch(err => console.log(err))
        },
        addOff(){
            this.addVisible = false;
            this.addLabel='';
        },
        removelist() {
            if(this.removes.length==0){
                this.msg('请选择要删除组名','warning');
                return;
            }
            let p = this.removes.join();
            this.$ajax.post('/apis/label/dropMyLabel.json', {msg: this.removes}).then(res => {
                if (res.data.data == true) {

                    this.msg('删除标签成功','success');
                    this.removeVisible = false;
                    this.getLabels();
                    this.labelCode=0;
                    this.removes=[];
                } else {
                    this.$message.error('删除标签失败');
                }

            }).catch(err => {
                console.log(err);
                this.$message.error('删除标签失败');
            })
        },
        removeOff(){
            this.removeVisible = false;
            this.removes=[];
        },
        update(){
            var msg = [this.label[this.labelCode],this.state[this.stateCode],this.time[this.timeCode]]
            this.$ajax.post('/apis/pool/getMyCompanyList.json', {msg}).then((res) => {
                this.list = res.data.data.list
            }).catch(err => console.log(err))
        },
        addRequire(){
            this.$ajax.post('/apis/pool/addPoolCompany.json',{poolCompany:this.infos}).then(res =>{
                if(res.data.success){
                    this.formVisible=false;
                }
            }).catch(err=>{this.formVisible=false;})
        }
    },
    mounted(){
        this.update()
        this.getLabel();

    }
}
</script>
<style lang="less" scoped>
.type-box {
    margin: 0 -24px;
    background-color: #fafafa;
    padding-bottom: 10px;
    border: none;
    border-bottom: 1px solid #e8ebf2;
}

.type-item {
    border-radius: 2px;
    height: 24px;
    color: #959595;
    display: inline-block;
    border: 1px solid #cdcdcd;
    margin-left: 20px;
    line-height: 24px;
    background-color: #fff;
}

.addRequire {
    padding: 10px 0;
    text-align: right;

    a {
        color: #999999;

        img {
            margin-right: 5px;
            margin-top: -3px;
        }
    }
}

.table-box {
    margin-top: 0;
}

.first {
    border-right: 1px solid #e8ebf2;
}

.el-form {
    width: 500px;
    margin: 0 auto;
}

.footer {
    text-align: center;
    .el-button {
        width: 150px;
    }
}
</style>