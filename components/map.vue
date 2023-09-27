<template>
    <div id="cMap" ref="mapEcharts" class="map-echart"></div>
</template>
<script setup lang="js">
import * as echarts from 'echarts'
import { data } from '../chinatotal.js'
import { ref, nextTick, onMounted } from 'vue'
import { defineEmits } from 'vue'
const emits = defineEmits(['province'])

    const mapEcharts = ref(null)
    
    function initEcharts() {
    
      echarts.registerMap('China', data)
      nextTick(() => {
        const map = echarts.init(mapEcharts.value, null, {
          renderer: 'canvas',
        })
        const option = {
          title: {
            text: 'China',
            left: 'center',
          },
          // 悬浮窗
          tooltip: {
            trigger: 'item',
          },
          geo: {
            map: 'China',
            zoom: 1.5,
            roam: true,
            label: {
              show: true,
              color: 'black',
              position: 'inside',
              distance: 0,
              fontSize: 10,
              rotate: 0,
            },
            
            // 所有地图的区域颜色
            itemStyle: {
              areaColor: '#eee',
              borderColor: '#02c0ff',
            },
            emphasis: {
              itemStyle: {
                areaColor: '#aaa',
                shadowColor: 'rgba(0,0,0,0.8)',
              },
            },
          },
          series: [
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              data: [
                { name: '肇庆市', value: [112.48461, 23.05196, 20] },
                { name: '佛山市', value: [113.130234, 23.018978, 30] },
                { name: '广州', value: [113.261081, 23.139856, 10] },
              ],
              symbolSize: (val) => {
                return val[2]
              },
              encode: {
                value: 2,
              },
              itemStyle: {
                color: '#ddb926',
              },
              emphasis: {
                label: {
                  show: true,
                },
              },
            },
          ],
        }
        map.setOption(option)
        map.on("click", function (params){
            emits("province")
            console.log("click")
            // this.emit("province",params)
            // // emit("province",params)
        })
      })
    }
    onMounted(() => {
      initEcharts()
    })

    



</script>
<style scoped>
.map-echart {
  height: 600px;
  width: 800px;
}
</style>