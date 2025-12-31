// components/TianDiTuMap/config.ts
import type { MapType, MapTypeConfig, MapConfig } from './types'

// 地图类型配置
export const MAP_TYPES: Record<MapType, MapTypeConfig> = {
  vector: {
    label: '矢量地图',
    baseLayer: 'vec_w',
    labelLayer: 'cva_w'
  },
  image: {
    label: '影像地图',
    baseLayer: 'img_w',
    labelLayer: 'cia_w'
  },
  terrain: {
    label: '地形地图',
    baseLayer: 'ter_w',
    labelLayer: 'cta_w'
  }
}

// 默认地图配置
export const DEFAULT_CONFIG: MapConfig = {
  center: { lng: 116.404, lat: 39.915 }, // 北京
  zoom: 12,
  minZoom: 3,
  maxZoom: 18
}

// 天地图TK - 这里设置你的TK
export const TDT_TK = import.meta.env.VITE_TIAN_DI_TU_TK || '你的天地图tk'

// 常用城市坐标
export const CITY_COORDINATES = {
  BEIJING: { lng: 116.404, lat: 39.915 },
  SHANGHAI: { lng: 121.4737, lat: 31.2304 },
  GUANGZHOU: { lng: 113.2644, lat: 23.1291 },
  SHENZHEN: { lng: 114.0579, lat: 22.5431 },
  HANGZHOU: { lng: 120.1551, lat: 30.2741 },
  CHENGDU: { lng: 104.0668, lat: 30.5728 },
  WUHAN: { lng: 114.3052, lat: 30.5928 },
  XI_AN: { lng: 108.9422, lat: 34.2644 }
} as const