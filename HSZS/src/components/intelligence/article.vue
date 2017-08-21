<template>
    <div class="article-details">
        <a href="javascript:void(0);" class="blue" @click="back">返回</a>
        <h4 class="text-center">{{article.title}}
        <span v-if="isShow">
        <button class="pull-right btn btn-zs" @click="collect" v-if="isCollect">收藏</button>
        <button class="pull-right btn btn-zs"  v-if="!isCollect" @click="cancel">取消收藏</button>
        </span>
        </h4>
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
            isShow: false,
            isCollect: true
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        collect() {
            this.$ajax.get('/apis/expert/collectExpertOpinion.json', { params: { id: this.article.id } }).then(res => {
                if (res.data.data.state == "success") {
                    this.isCollect = false;

                };

            }).catch(err => console.log(err))
        },
        cancel() {
            this.$ajax.get('/apis/expert/cancelCollectExpertOpinion.json', { params: { id: this.article.id } }).then(res => {

                this.isCollect = true;


            }).catch(err => console.log(err))
        },
    },
    mounted() {

        this.$ajax.get('/apis/industry/getIndustrialPolicyDetailById.json', {
            params: {
                "id": this.$route.params.id
            }
        }).then(res => {
            this.article = res.data.data[0];
            if (res.data.data[0].dimension == "专家论" || res.data.data[0].dimension == "政策解读") {
                this.isShow = true;
            };
            if (res.data.data[0].isCollect == "true") {
                this.isCollect = false;
            } else {
                this.isCollect = true;
            }
        }).catch(err => console.log(err))
    }

}
</script>