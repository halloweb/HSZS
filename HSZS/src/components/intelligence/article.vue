<template>
    <div class="article-details">
        <a href="javascript:void(0);" class="blue" @click="back">返回</a>
        <h4 class="text-center">{{article.title}}<button class="pull-right btn btn-zs" @click="collect" v-if="isShow">收藏</button></h4>
        <div class="sub-info">
            <span>
             <img src="../../assets/images/company.png" alt="">
              涉及公司：{{article.business}}
             </span>
            <span>
             <img src="../../assets/images/time.png" alt="">
              发布时间：{{article.publishDateTime}}
             </span>
        </div>
        <p>{{article.content}}</p>
        <div class="sub-info">
            <span>
             <img src="../../assets/images/pencil.png" alt="">
              情报采集：{{article.source}}
             </span>
            <span>
             <img src="../../assets/images/internet.png" alt="">
              情报原址：{{article.sourceLink}}
             </span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            article: {},
            isShow:false
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        collect() {

        },
    },
    mounted() {

        this.$ajax.get('/apis/industry/getIndustrialPolicyDetailById.json', {
            params: {
                "id": this.$route.params.id
            }
        }).then(res => {
            this.article = res.data.data;
        }).catch(err => console.log(err))
    }

}
</script>