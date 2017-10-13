<template>
    <div id="app">
        
        <router-view></router-view>
       <el-dialog
       title="提示"
       :visible.sync="warnInfo.isWarn"
       size="tiny"
       >
  
       <span>您的账号将于{{warnInfo.message}}过期</span>
      <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="apply">申请转为正式</el-button>
     </span>
     </el-dialog>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
           
            
        }
    },
    computed:mapState({
    warnInfo:state => state.warnInfo,
    }),
    methods:{
        apply(){
         this.$ajax.get('/apis/user/applyFormal.json?userId=').then(res=>{
             
                 this.$message(res.data.message);
                 this.$store.commit('CANCLE_WARN');
            
            
         }).catch(err=>console.log(err))
        }
    }

    

}
</script>