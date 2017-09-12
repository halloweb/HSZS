<template>
    <div>
        <div class="tree well">
            <ul>
                <li>
                    <span class="title">节能环保和新能源企业</span> 
                    <ul>
                        <li v-for="(item,index) in list">
                            <span><i ></i>{{item.name}}</span> 
                            <ul v-if="item.child" >
                                <li v-for="(item2,index2) in item.child">
                                    <span><i ></i> {{item2.name}}</span> 
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
             list:[{name:2,child:[{name:3,child:[]},{name:3,child:[]}]},
             {name:2}
             ],
             activeLabel:''
        }
    },
    mounted() {
        let vm=this;

        $(function() {

            $('.tree li:has(ul)').addClass('parent_li').find(' > span i').addClass('glyphicon glyphicon-minus-sign')

            $('.tree li.parent_li > span').on('click', function(e) {

                var children = $(this).parent('li.parent_li').find(' > ul > li');

                if (children.is(":visible")) {

                    children.hide('fast');

                    $(this).find(' > i').addClass('glyphicon glyphicon-plus-sign').removeClass('glyphicon glyphicon-minus-sign');

                } else {

                    children.show('fast');

                    $(this).find(' > i').addClass('glyphicon glyphicon-minus-sign').removeClass('glyphicon glyphicon-plus-sign');

                }

                e.stopPropagation();

            });

            $('.tree span').on('click',function(e){
            	if(!$(this).parent('li').hasClass("parent_li")){
                     vm.activeLabel=$(this).text();
            	}
            })

        });
    },
}
</script>
<style scoped>
ul{padding-left:80px;}
.tree {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color:#fff;
    border: 1px solid #e8ebf2;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05)
}

.tree li {
    list-style-type: none;
    margin: 0;
    padding: 10px 5px 0 5px;
    position: relative
}

.tree li::before,
.tree li::after {
    content: '';
    left: -20px;
    position: absolute;
    right: auto
}

.tree li::before {
    border-left: 1px solid #e6e6e6;
    bottom: 50px;
    height: 100%;
    top: 0;
    width: 1px
}

.tree li::after {
    border-top: 1px solid #e6e6e6;
    height: 20px;
    top: 25px;
    width: 25px
}

.tree li span {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border: 1px solid #00a5ff;
    border-radius: 5px;
    display: inline-block;
    padding: 3px 18px;
    width:140px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    position: relative;
}
.tree i{
	color:#00a5ff;
	position:absolute;
	left:10px;
	top:5px;
	font-style:normal;
}
.tree .title {
    
    background-color:#e7f7ff;
}

.tree>ul>li::before,
.tree>ul>li::after {
    border: 0
}

.tree li:last-child::before {
    height: 30px
}

.tree span:hover
 {
   color:#00a5ff;
}
</style>