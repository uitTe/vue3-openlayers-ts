<!-- views/MapDemo.vue -->
<template>
    <div class="map-demo">
        <p>天地图组件演示</p>

        <div class="map-container">
            <TianDiTuMap
                ref="mapRef"
                :center="currentCenter"
                :zoom="currentZoom"
                :default-map-type="currentMapType"
            />
        </div>

        <!-- <div class="control-panel">
            <div class="control-group">
                <h3>地图类型</h3>
                <el-space>
                    <el-button
                        v-for="type in mapTypes"
                        :key="type.value"
                        :type="currentMapType === type.value ? 'primary' : 'default'"
                        @click="handleMapTypeClick(type.value)"
                    >
                        {{ type.label }}
                    </el-button>
                </el-space>
            </div>

            <div class="control-group">
                <h3>快速定位</h3>
                <el-space>
                    <el-button @click="gotoBeijing">北京</el-button>
                    <el-button @click="gotoShanghai">上海</el-button>
                    <el-button @click="gotoGuangzhou">广州</el-button>
                    <el-button @click="gotoShenzhen">深圳</el-button>
                </el-space>
            </div>

            <div class="control-group">
                <h3>地图控制</h3>
                <el-space>
                    <el-button @click="zoomIn">放大</el-button>
                    <el-button @click="zoomOut">缩小</el-button>
                    <el-button @click="centerMap">回到中心</el-button>
                    <el-button @click="showLocation">当前位置</el-button>
                    <el-button @click="reloadMap" type="warning">重载地图</el-button>
                </el-space>
            </div>
        </div> -->
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { ElButton, ElSpace, ElMessage } from 'element-plus';
    import { TianDiTuMap, type MapPoint, type MapType } from '@/components';
    import { CITY_COORDINATES } from '@/components/TianDiTuMap/config';

    const mapRef = ref<InstanceType<typeof TianDiTuMap>>();
    const currentCenter = ref<MapPoint>(CITY_COORDINATES.BEIJING);
    const currentZoom = ref(12);
    const currentMapType = ref<MapType>('vector');

    // 使用类型安全的mapTypes
    const mapTypes = [
        { value: 'vector' as const, label: '矢量地图' },
        { value: 'image' as const, label: '影像地图' },
        { value: 'terrain' as const, label: '地形地图' },
    ];

    // 修复：添加类型安全的点击处理
    const handleMapTypeClick = (type: MapType) => {
        if (mapRef.value) {
            mapRef.value.switchMapType(type);
            currentMapType.value = type;
            ElMessage.success(
                `切换到${type === 'vector' ? '矢量' : type === 'image' ? '影像' : '地形'}地图`
            );
        }
    };

    // 定位到城市
    const gotoBeijing = () => {
        currentCenter.value = CITY_COORDINATES.BEIJING;
        currentZoom.value = 12;
        if (mapRef.value) {
            mapRef.value.centerMap();
        }
        ElMessage.success('定位到北京');
    };

    const gotoShanghai = () => {
        currentCenter.value = CITY_COORDINATES.SHANGHAI;
        currentZoom.value = 13;
        if (mapRef.value) {
            mapRef.value.centerMap();
        }
        ElMessage.success('定位到上海');
    };

    const gotoGuangzhou = () => {
        currentCenter.value = CITY_COORDINATES.GUANGZHOU;
        currentZoom.value = 12;
        if (mapRef.value) {
            mapRef.value.centerMap();
        }
        ElMessage.success('定位到广州');
    };

    const gotoShenzhen = () => {
        currentCenter.value = CITY_COORDINATES.SHENZHEN;
        currentZoom.value = 12;
        if (mapRef.value) {
            mapRef.value.centerMap();
        }
        ElMessage.success('定位到深圳');
    };

    // 地图控制
    const zoomIn = () => {
        if (mapRef.value) {
            mapRef.value.zoomIn();
        }
    };

    const zoomOut = () => {
        if (mapRef.value) {
            mapRef.value.zoomOut();
        }
    };

    const centerMap = () => {
        if (mapRef.value) {
            mapRef.value.centerMap();
        }
    };

    const showLocation = () => {
        if (mapRef.value) {
            mapRef.value.showCurrentLocation();
        }
    };

    const reloadMap = () => {
        if (mapRef.value) {
            mapRef.value.reloadMap();
            ElMessage.info('正在重新加载地图...');
        }
    };
</script>

<style scoped>
    /* 样式保持不变 */
    .map-demo {
        /* padding: 20px; */
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        p {
            text-align: center;
            font-weight: bold;
            font-size: 1.5em;
        }
    }

    .map-container {
        /* margin: 20px 0; */
        border: 1px solid #dcdfe6;
        border-radius: 8px;
        overflow: hidden;
        flex: 1;
    }

    .control-panel {
        padding: 20px;
        background: #f5f7fa;
        border-radius: 8px;
        margin-top: 20px;
    }

    .control-group {
        margin-bottom: 20px;
    }

    .control-group:last-child {
        margin-bottom: 0;
    }

    .control-group h3 {
        margin: 0 0 10px 0;
        color: #606266;
        font-size: 16px;
        font-weight: normal;
    }
</style>
