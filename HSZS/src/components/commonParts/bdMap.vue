<template>

	 <div id="map">
              
     </div>
</template>
<script>
	 import {MP} from '../../common/js/map.js'
	 export default{
	 	props: ['parkInfo'],
		data(){
			return{

			}
		},
		methods:{
             init(BMap) {
			    var map = new BMap.Map("map",{enableMapClick: false});            // 创建Map实例
			    var point = new BMap.Point(116.404, 39.915); // 创建点坐标
			    map.centerAndZoom(point,12);
			    map.enableScrollWheelZoom();
			    map.disableDoubleClickZoom();
			    map.addControl(new BMap.ScaleControl());
                      // 创建地址解析器实例
					var myGeo = new BMap.Geocoder();
					// 将地址解析结果显示在地图上,并调整地图视野
					myGeo.getPoint(this.parkInfo.name, function(point){
						if (point) {
							map.centerAndZoom(point, 17);
							map.addOverlay(new BMap.Marker(point));
						}else{
							alert("地址解析失败!");
						}
	});
			   },
		},
		mounted(){
			 
              console.log(this.parkInfo);
  this.$nextTick(function () {
        
              var vm=this;
              MP().then(BMap => {  
              
                vm.init(BMap) 
                  
              });
			  

			});
		},
	}
</script>