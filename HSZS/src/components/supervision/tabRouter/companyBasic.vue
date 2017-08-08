<template>
    <div class="content-block clearFix">
        <p>基本信息</p>
        <div class="BasicInfo-warper">
            <div class="BasicInfo BasicInfo-left">
                <div class="BasicInfo-head">
                    法人信息
                </div>
                <div class="f-img">

                </div>
                <p class="f-name">雷军</p>
            </div>
        </div>
       <div class="BasicInfo-warper">

           <div class="BasicInfo BasicInfo-right">
               <div class="BasicInfo-head">
                   评分
               </div>
           </div>
       </div>
    </div>
</template>
<style>
    .clearFix:after{
        content: '';
        display: block;
        clear: both;
    }
    .BasicInfo-warper{
        float: left;
    }
    .BasicInfo-head{
        height: 57px;
        background-color: #e7f8ff;
        text-align: center;
        line-height: 57px;
    }
    .BasicInfo{
        height: 418px;
        border: 1px solid #e4e4e4;
        text-align: center;
    }

    .BasicInfo-left{
        width: 450px;
        margin-right: 30px;
    }
    .BasicInfo-right{
        width: 900px;
    }
    .f-img{
        width: 103px;
        height: 103px;
        border: 1px solid #333;
        border-radius: 50%;
        margin: 25px auto 10px;
    }
    .f-name{
        font-size: 18px;
        font-weight: 400;
    }

</style>
<script>
    export default{

    }
</script>
