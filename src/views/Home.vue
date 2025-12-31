<template>
    <div class="home">
        <div class="ol-title">
            openlayersDemo
            <span @click="toDemo" class="to-page">跳转组件demo页面</span>
        </div>
        <ol-map class="ol-map" />
    </div>
</template>
<script setup lang="ts">
    import router from '@/router';
    import olMap from './openLayers.vue';

    const toDemo = () => {
        router.push('/mapDemo');
    };
</script>
<style lang="scss" scoped>
    .home {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        .ol-title {
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            margin: 10px;
            line-height: 20px;
        }
    }
    .to-page {
        text-decoration: underline;
    }
</style>
