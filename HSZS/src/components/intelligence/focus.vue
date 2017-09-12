<template>
    <div class="content-block" id="focusPark">
        <div class="title policy-title">
            <img src="../../assets/images/love.png" alt="">关注园区
        </div>
        <ul class="type-box type-box-g">
            <li>
                <div class="head">
                    区域
                </div>
                <p class="type-list">
                    <span v-for="(item,index) in area" :class="{active:index==areaCode}" @click="select(index)">{{item}}</span>
                </p>
            </li>
            <li>
                <div class="head">
                    产业类型
                </div>
                <p class="type-list">
                    <span v-for="(item,index) in industryType" :class="{active:index==typeCode}" @click="select2(index)">{{item}}</span>
                </p>
            </li>
        </ul>
        <ul class="park-l-menu">
            <div class="text-center no-data" v-if="list.length==0" >
                <img src="../../assets/images/noData.png" height="166" width="157" alt="">
            </div>
            <li v-for="(item,index) in list">
                <img :src="item.gardenPicture" alt="" class="park-picture" width="145" height="115">
                <div class="right-content">
                    <div>
                       <router-link class="article-title" :to="{path:'/intelligence/focusPark/parkDetails',query:{query:item.gardenName,id:item.id,address:item.address}}">
                                    {{item.gardenName}}
                        </router-link>
                    </div>
                    <p class="article-content">
                        {{item.description}}
                    </p>
                    <div class="sub-info">
                        <span>
                                 <img src="../../assets/images/location-h.png" alt="">
                                  地址：{{item.address}}
                                 </span>
                    </div>
                </div>
            </li>
        </ul>
         <div class="text-center" v-if="total!=0">
                    <el-pagination @current-change="change" :page-size="pageSize" layout="prev, pager, next" :total="total">
                    </el-pagination>
         </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageNumber:1,
            pageSize:10,
            total:0,
            list: [],
            area: ["不限", "北京", "上海", "广州", "深圳", "杭州", "苏州", "南京", "天津", "青岛", "大连"],
            industryType: ["不限", "互联网", "高科技", "文化创意", "精英配套", "滨海旅游", "港口物流"],
            areaCode: 0,
            typeCode: 0

        }
    },
    methods: {
        getList(data) {
            this.$ajax.post('/apis/area/getAttentionGardenList.json', { 'msg': data,pageNumber:this.pageNumber,pageSize:this.pageSize }).then(res => {
                
                    this.list = res.data.data.content;
                    this.total = res.data.data.totalElements;
            }).catch(err => console.log(err))
        },
        select(index) {
            this.areaCode = index;

            this.getList([this.area[this.areaCode], this.industryType[this.typeCode]]);

        },
        select2(index) {
            this.typeCode = index;
            this.getList([this.area[this.areaCode], this.industryType[this.typeCode]]);

        },
        change(val){
            this.pageNumber=val;
            this.getList([this.area[this.areaCode], this.industryType[this.typeCode]]);
        },
    },
    mounted() {
        this.select(0);

    },
}
</script>