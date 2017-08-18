<template>
    <div class="outflowDetails">
        <a href="#" @click="back()" class="back">返回</a>
        <div class="title"><span class="blue">[{{article.articleType}}] </span>{{article.title}}</div>
        <div class="sub-info">
            <span>
             <img src="../../assets/images/time.png" alt="">
              发布时间：{{article.publishDateTime}}
             </span>
        </div>
        <p class="content">
            {{article.content}}
        </p>
        <div class="sub-info">
            <span>
             <img src="../../assets/images/pencil.png" alt="">
              情报采集：{{article.source}}
             </span>
            <span>
             <img src="../../assets/images/internet.png" alt="">
              情报原址：{{article.sourceLink}}
             </span>
            <span>
             <img src="../../assets/images/company.png" alt="">
             涉及公司：{{article.business}}
             </span>
        </div>
    </div>
</template>
<style lang="less" scoped>
.outflowDetails {
    padding: 20px;
    background-color: #ffffff;
    .title {

        font-size: 18px;
    }
}

.back {
    display: block;
    margin-top: 10px;
    color: #00a5ff;
    font-size: 16px;
    float: right;
}
</style>
<script>
export default {
    data() {
        return {
            article: {}
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
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