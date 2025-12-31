// config/map-config.ts
export interface MapPoint {
  lng: number
  lat: number
}

export interface MapConfig {
  center: MapPoint
  zoom: number
  minZoom: number
  maxZoom: number
}

export type MapType = 'vector' | 'image' | 'terrain'

export interface MapTypeConfig {
  label: string
  layerType: string
  labelType: string
}

// 地图类型配置
export const MAP_TYPES: Record<MapType, MapTypeConfig> = {
  vector: {
    label: '矢量地图',
    layerType: 'vec_w',
    labelType: 'cva_w'
  },
  image: {
    label: '影像地图',
    layerType: 'img_w',
    labelType: 'cia_w'
  },
  terrain: {
    label: '地形地图',
    layerType: 'ter_w',
    labelType: 'cta_w'
  }
}

// 天地图配置
export class TianDiTuConfig {
  // 必须替换为你的实际tk
  private static _tk: string = '7fef10e5fcc6a72f4aa0fbd33d7ef015'
  
  static get tk(): string {
    return this._tk
  }
  
  // 设置TK的方法
  static setTK(value: string): void {
    if (!value || value.trim() === '') {
      throw new Error('天地图TK不能为空')
    }
    this._tk = value.trim()
  }
  
  // 获取瓦片URL
  static getTileUrl(layerType: string): string {
    if (!this.tk) {
      console.error('天地图TK未配置')
      return ''
    }
    
    // 使用固定域名t0
    const domain = 't0.tianditu.gov.cn'
    return `https://${domain}/DataServer?T=${layerType}&x={x}&y={y}&l={z}&tk=${this.tk}`
  }
  
  // 验证TK是否有效
  static validateTK(): boolean {
    return !!this.tk && this.tk.length > 20 && this.tk !== '你的天地图tk'
  }
}

// 默认地图配置 - 北京
export const DEFAULT_MAP_CONFIG: MapConfig = {
  center: { lng: 116.404, lat: 39.915 }, // 北京中心
  zoom: 12,  // 调整缩放级别
  minZoom: 3,
  maxZoom: 18
}