<template>
    <div class="article-details">
    <div class="top">
        <a href="javascript:void(0);" class="blue" @click="back">返回</a>
        <el-button   class="pull-right">PDF下载</el-button>
        <el-button type="primary" class="pull-right">word下载</el-button>
        
     </div>   
      <h4 class="text-center">{{article.title}}
           
     

        </h4>
        <div class="sub-info" v-if="article.length>0">
            <span>
             <img src="../../assets/images/company.png" alt="">
              涉及公司：{{article.business}}
             </span>
            <span>
             <img src="../../assets/images/time.png" alt="">
              发布时间：{{article.publishTime}}
             </span>
        </div>
        <div v-html="article.content" class="article-block"></div>
        <div class="sub-info" v-if="article.length>0">
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
<style scoped>
  .top{margin-bottom:40px;}
  .el-button{
    margin-left:40px;
    border:1px solid #20a0ff;
    border-radius:5px;
  }
.top  .el-button:nth-child(2){
    color:#20a0ff;
  }
</style>
<script>
export default {
    data() {
        return {
            article: {},
            
           
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
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