<template>
    <div id="app">
        <router-view></router-view>
        <el-dialog title="提示" :visible.sync="warn.show" size="tiny" :show-close="close">
            <span>{{warn.content}}</span>
            <div class="text-center">
		    <el-button type="primary" @click="warn.show=false">我知道了</el-button>
		  </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            close: false
        }
    }
}
</script>