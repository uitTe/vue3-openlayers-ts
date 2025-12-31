# 天地图组件使用文档

## 安装依赖

bash
npm install element-plus @element-plus/icons-vue

## 配置

### 1. 设置天地图 TK

推荐创建 env 文件设置
在根目录创建`.env` 中设置你的天地图 TK：
VITE_TIAN_DI_TU_TK=你的实际天地图 tk

或者在 `components/TianDiTuMap/config.ts` 中设置你的天地图 TK：
typescript
export const TDT_TK = '你的实际天地图 tk'

### 2. 引入 Element Plus

在 `main.ts` 中引入 Element Plus：
typescript
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import \* as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
app.use(ElementPlus)
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
app.component(key, component)
}

## 基本使用

### 1. 最简单的使用

vue
<template>

<div style="height: 600px;">
<TianDiTuMap />
</div>
</template>
<script setup>
import { TianDiTuMap } from '@/components'
</script>
### 2. 自定义配置
vue
<template>
<TianDiTuMap
:center="{ lng: 121.4737, lat: 31.2304 }"
:zoom="13"
default-map-type="image"
:show-coordinate="true"
style="height: 500px;"
/>
</template>
### 3. 通过ref控制地图
vue
<template>
<div>
<TianDiTuMap ref="mapRef" style="height: 500px;" />
<div style="margin-top: 20px;">
  <el-button @click="switchToImage">影像地图</el-button>
  <el-button @click="gotoBeijing">定位北京</el-button>
  <el-button @click="zoomIn">放大</el-button>
  <el-button @click="zoomOut">缩小</el-button>
  <el-button @click="showLocation">当前位置</el-button>
</div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { TianDiTuMap, type MapType } from '@/components'
import { CITY_COORDINATES } from '@/components/TianDiTuMap/config'
const mapRef = ref<InstanceType<typeof TianDiTuMap>>()
const switchToImage = () => {
mapRef.value?.switchMapType('image')
}
const gotoBeijing = () => {
if (mapRef.value) {
// 可以通过ref控制，也可以使用中心点props
mapRef.value.centerMap()
}
}
const zoomIn = () => mapRef.value?.zoomIn()
const zoomOut = () => mapRef.value?.zoomOut()
const showLocation = () => mapRef.value?.showCurrentLocation()
</script>
## API 参考

### Props

| 属性           | 类型     | 默认值                      | 说明             |
| -------------- | -------- | --------------------------- | ---------------- |
| center         | MapPoint | {lng: 116.404, lat: 39.915} | 地图中心点       |
| zoom           | number   | 12                          | 缩放级别         |
| minZoom        | number   | 3                           | 最小缩放级别     |
| maxZoom        | number   | 18                          | 最大缩放级别     |
| showCoordinate | boolean  | true                        | 是否显示坐标信息 |
| defaultMapType | MapType  | 'vector'                    | 默认地图类型     |
| showControls   | boolean  | true                        | 是否显示地图控件 |

### 暴露的方法

| 方法                  | 说明             |
| --------------------- | ---------------- |
| switchMapType(type)   | 切换地图类型     |
| centerMap()           | 回到中心点       |
| zoomIn()              | 放大地图         |
| zoomOut()             | 缩小地图         |
| showCurrentLocation() | 显示当前位置信息 |
| reloadMap()           | 重新加载地图     |
| getCurrentCenter()    | 获取当前中心点   |
| getCurrentZoom()      | 获取当前缩放级别 |
| getCurrentMapType()   | 获取当前地图类型 |

### 地图类型

typescript
type MapType = 'vector' | 'image' | 'terrain'

-   `vector`: 矢量地图
-   `image`: 影像地图
-   `terrain`: 地形地图

## 常用城市坐标

<!-- 组件内置了常用城市的坐标：
typescript
import { CITY_COORDINATES } from '@/components/TianDiTuMap/config'
// 可用城市
CITY_COORDINATES.BEIJING // 北京
CITY_COORDINATES.SHANGHAI // 上海
CITY_COORDINATES.GUANGZHOU // 广州
CITY_COORDINATES.SHENZHEN // 深圳
CITY_COORDINATES.HANGZHOU // 杭州
CITY_COORDINATES.CHENGDU // 成都
CITY_COORDINATES.WUHAN // 武汉
CITY_COORDINATES.XI_AN // 西安 -->

## 常见问题

### 1. 地图不显示

-   检查 TK 是否正确配置
-   检查网络连接
-   查看控制台错误信息

### 2. 坐标不正确

-   确保使用正确的经纬度坐标
-   坐标范围：经度(-180~180)，纬度(-90~90)

### 3. 地图切换失败

-   检查 TK 是否有效
-   查看控制台网络请求

### 4. 类型错误

-   确保 TypeScript 配置正确
-   使用正确的类型导入

### 5. 备注

`src\views\openLayers.vue` 此文件是单独的地图文件，一个文件包含所有基本功能，可直接使用，没有和其他配置文件关联
