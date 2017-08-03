<template>

	 <div id="map">
              
     </div>
</template>
<script>
	 import {MP} from '../../common/js/map.js'
	 export default{
		data(){
			return{

			}
		},
		methods:{
             init(BMap) {
			    var map = new BMap.Map("map",{enableMapClick: false});            // 创建Map实例
			    var point = new BMap.Point(116.404, 39.915); // 创建点坐标
			    map.centerAndZoom(point,15);
			    map.enableScrollWheelZoom();
			    map.disableDoubleClickZoom();
			    map.addControl(new BMap.ScaleControl());
          
			   },
		},
		mounted(){
			 

  this.$nextTick(function () {
        
              var vm=this;
              MP().then(BMap => {  
              
                vm.init(BMap) 
                  
              });
			  

			});
		},
	}
</script>