<template>
    <div class="content-block">
        <h4 class="text-center">{{info.name}}<router-link to="/supervision/companyOut" class="pull-right btn btn-red">辖区预警</router-link></h4>
        <bd-map :park-info="info"></bd-map>
        <div class="company-sort">
            <a href="javascript:void(0);">企业动态</a>
            <button class="pull-right btn btn-zs" @click="more">
                更多
            </button>
        </div>
        <div class="clearfix dt">
            <div class=" col-xs-6" v-for="(item,index) in list">
                <router-link :to="{path:'/supervision/articleList/'+item.id}">
                    {{item.title}}
                </router-link>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
a.btn-red {
    background-color: #f84242;
    color: #fff;
    border-radius: 15px;
    margin-top: -5px;
}

.dt .col-xs-6 {
    border: 1px solid #e8ebf2;
    height: 30px;
    line-height: 30px;
}

button.btn-zs {
    padding: 2px 10px;
    border-radius: 20px;
}
</style>
<script>
import bdMap from '../commonParts/bdMap.vue'
export default {
    components: {
        'bdMap': bdMap
    },
    data() {
        return {
            info: {
                name: ''
            },
            pageNumber:1,
            pageSize:8,
            list: [],
            park: []
        }
    },
    methods: {
        more() {
            this.pageNumber++;
            this.getList();

        },
        getList() {
            this.$ajax.post('/apis/business/getParkBehaviours.json', {pageNumber:this.pageNumber,pageSize:this.pageSize}).then(res => {
                res.data.data.page.forEach(val =>{
                    this.list.push(val);
                });
            }).catch(err => console.log(err))
        },
        getInfo() {
            this.$ajax.get('/apis/supervise/getGardenInfo.json').then(res => {
                this.info.name = res.data.data.park;
                this.park = res.data.data;
            }).catch(err => console.log(err))
        },
    },
    created() {
        this.getInfo();
        this.getList();


    },
}
</script>