<template>

	 <div id="map">
              
     </div>
</template>
<script>
	 import {MP} from '../../common/js/map.js'
	 export default{
	 	props: ['parkInfo','cityInfo'],
		data(){
			return{

			}
		},
		methods:{
             init(BMap) {
			    var map = new BMap.Map("map",{enableMapClick: false});            // 创建Map实例
			    // var point = new BMap.Point(116.404, 39.915); // 创建点坐标
			    // map.centerAndZoom(point,12);
			    map.enableScrollWheelZoom();
			    map.disableDoubleClickZoom();
			    map.addControl(new BMap.ScaleControl());
                 // 创建地址解析器实例
					var myGeo = new BMap.Geocoder();
			    if(this.parkInfo!==undefined){
                     
					// 将地址解析结果显示在地图上,并调整地图视野
					myGeo.getPoint(this.parkInfo.name, function(point){
										if (point) {
											map.centerAndZoom(point, 17);
											map.addOverlay(new BMap.Marker(point));
										}else{
											alert("地址解析失败!");
										}
	                              });
	                };
	             if(this.cityInfo!==undefined){
                     
					// 将地址解析结果显示在地图上,并调整地图视野
					myGeo.getPoint(this.cityInfo.name, function(point){
										if (point) {
											map.centerAndZoom(point, 11);
											map.addOverlay(new BMap.Marker(point));
										}else{
											alert("地址解析失败!");
										}
	                              });
					//解析并标注园区
							var adds = [
								"包河区金寨路1号（金寨路与望江西路交叉口）",
								"庐阳区凤台路209号（凤台路与蒙城北路交叉口）",
								"蜀山区金寨路217号(近安医附院公交车站)",
								"蜀山区梅山路10号(近安徽饭店) ",
								"蜀山区 长丰南路159号铜锣湾广场312室",
								"合肥市寿春路93号钱柜星乐町KTV（逍遥津公园对面）",
								"庐阳区长江中路177号",
								"新站区胜利路89"
							];
							function bdGEO(){
								var add = adds[index];
								geocodeSearch(add);
								index++;
							}
							function geocodeSearch(add){
								if(index < adds.length){
									setTimeout(window.bdGEO,100);
								} 
								myGeo.getPoint(add, function(point){
									if (point) {

										var address = new BMap.Point(point.lng, point.lat);
										addMarker(address,new BMap.Label(index+":"+add,{offset:new BMap.Size(20,-10)}));
									}
								});
							}
							// 编写自定义函数,创建标注
							function addMarker(point,label){
								var marker = new BMap.Marker(point);
								map.addOverlay(marker);
								marker.setLabel(label);
							}

                        //结束
	                };    
                

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