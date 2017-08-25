<template>
    <div class="content-block">
        <h4 class="text-center">{{info.name}}
         <button class="pull-right btn btn-zs" v-if="!active" @click="focus">关注</button>
         <button class="pull-right btn btn-zs" v-else  @click="focus">取消关注</button>
         </h4>
        <bd-map :park-info="info"></bd-map>
        <div class="company-sort">
            <a href="#leadCompany" class="fc" data-toggle="tab">龙头企业</a>
            <a href="#parkPolicy" data-toggle="tab">园区政策</a>
            <a href="#parkDynamics" data-toggle="tab">园区动态</a>
        </div>
        <div class="tab-content">
            <div class="tab-pane fade in active clearfix" id="leadCompany">
                <div class=" col-xs-6" v-for="(item,index) in leadCompany">
                    {{item.business}}
                    <router-link :to="{path:'/merchants/merchantsDetail',query:{query:item.business}}" class="pull-right blue">
                        详情
                    </router-link>
                </div>
            </div>
            <div class="tab-pane fade clearfix" id="parkPolicy">
                <div class=" col-xs-6" v-for="(item,index) in  parkPolicy">
                    {{item.title}}
                    <router-link :to="{ path:'/intelligence/article/'+item.id}" class="pull-right blue">
                        详情
                    </router-link>
                </div>
            </div>
            <div class="tab-pane fade clearfix" id="parkDynamics">
                <div class=" col-xs-6" v-for="(item,index) in parkDynamics">
                    {{item.title}}
                    <router-link :to="{ path:'/intelligence/article/'+item.id}" class="pull-right blue">
                        详情
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import bdMap from '../commonParts/bdMap.vue'
export default {
    components: {
        'bdMap': bdMap
    },
    data() {
        return {
            info: {
                name: '中关村软件园',
                id: ''
            },
            leadCompany: [],
            parkPolicy: [],
            parkDynamics: [],
            active: true

        }
    },
    methods: {
        getList(data) {
            this.$ajax.get('/apis/area/getGardenTableData.json', { params: { 'gardenName': data } }).then(res => {

                if (res.data.data.isAttention == "no") {
                    this.active = false;

                } else {
                    this.active = true;
                }
                this.leadCompany = res.data.data.leadCompany;
                this.parkPolicy = res.data.data.parkPolicy;
                this.parkDynamics = res.data.data.parkDynamics;
            }).catch(err => console.log(err))
        },
        focus() {
            this.active = !this.active;
            console.log(this.info.id);
            this.$ajax.get('/apis/area/attentionGarden.json', { params: { 'gardenId': this.info.id, 'flag': this.active } }).then(res => {

            }).catch(err => console.log(err))
        }
    },
    mounted() {
        $(function() {
            $(".company-sort a").on("click", function() {
                $(this).addClass("fc").siblings().removeClass("fc");
            })
        });
        this.info.name = this.$route.query.query;
        this.info.id = this.$route.query.id;

        this.getList(this.$route.query.query);


    },
}
</script>