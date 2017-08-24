<template>
    <div id="map">
    </div>
</template>
<script>
import { MP } from '../../common/js/map.js'
export default {
    props: ['parkInfo', 'cityInfo'],
    data() {
        return {

        }
    },
    methods: {
        init(BMap) {
            var map = new BMap.Map("map", { enableMapClick: false }); // 创建Map实例
            // var point = new BMap.Point(116.404, 39.915); // 创建点坐标
            // map.centerAndZoom(point,12);
            map.enableScrollWheelZoom();
            map.disableDoubleClickZoom();
            map.addControl(new BMap.ScaleControl());
            // 创建地址解析器实例
            var myGeo = new BMap.Geocoder();
            if (this.parkInfo != undefined) {

                // 将地址解析结果显示在地图上,并调整地图视野
                myGeo.getPoint(this.parkInfo.name, function(point) {
                    if (point) {
                        map.centerAndZoom(point, 17);
                        map.addOverlay(new BMap.Marker(point));
                    } else {
                        alert("地址解析失败!");
                    }
                });
            };
            if (this.cityInfo != undefined) {

                // 将地址解析结果显示在地图上,并调整地图视野
                myGeo.getPoint(this.cityInfo.name, function(point) {
                    if (point) {
                        map.centerAndZoom(point, 11);
                        map.addOverlay(new BMap.Marker(point));
                    } else {
                        alert("地址解析失败!");
                    }
                });
                setTimeout(this.view(BMap, myGeo, map), 5000);

            };


        },
        view(BMap, myGeo, map) {
            //解析并标注园区
            var adds = this.cityInfo.park;
            console.log(adds);
            var index = 0;
            geocodeSearch();

            function bdGEO() {
                var add = adds[index].address;
                var name = adds[index].name;

                index++;
                geocodeSearch(add, name);


            };

            function geocodeSearch(add, name) {

                if (index < adds.length) {
                    setTimeout(bdGEO(), 100);
                }
                myGeo.getPoint(add, function(point) {
                    if (point) {
                        var label = new BMap.Label(name, { offset: new BMap.Size(20, -10) })
                        label.setStyle({ borderColor: "#fff" })
                        var address = new BMap.Point(point.lng, point.lat);
                        addMarker(address, label);
                    }
                });
            }
            // 编写自定义函数,创建标注
            function addMarker(point, label) {
                var marker = new BMap.Marker(point);
                map.addOverlay(marker);
                marker.setLabel(label);
            }

            //结束
        }
    },
    mounted() {

        console.log(this.cityInfo);
        this.$nextTick(function() {

            var vm = this;
            MP().then(BMap => {

                vm.init(BMap)

            });


        });
    },
}
</script>