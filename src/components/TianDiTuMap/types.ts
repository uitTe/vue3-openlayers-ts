// components/TianDiTuMap/types.ts
export interface MapPoint {
  lng: number
  lat: number
}

// 使用字面量联合类型
export type MapType = 'vector' | 'image' | 'terrain'

export interface MapTypeConfig {
  label: string
  baseLayer: string
  labelLayer: string
}

export interface MapConfig {
  center: MapPoint
  zoom: number
  minZoom: number
  maxZoom: number
}

// 天地图API类型
export interface TianDiTuAPI {
  Map: new (container: HTMLElement, options?: any) => any
  LngLat: new (lng: number, lat: number) => any
  TileLayer: new (url: string, options?: any) => any
  Control: {
    Scale: new (options?: any) => any
    Zoom: new (options?: any) => any
  }
  [key: string]: any
}

// 组件props
export interface TianDiTuMapProps {
  center?: MapPoint
  zoom?: number
  minZoom?: number
  maxZoom?: number
  showCoordinate?: boolean
  defaultMapType?: MapType
  showControls?: boolean
}

// 导出函数类型
export interface TianDiTuMapExposed {
  switchMapType: (type: MapType) => void
  centerMap: () => void
  zoomIn: () => void
  zoomOut: () => void
  showCurrentLocation: () => void
  reloadMap: () => void
  getCurrentCenter: () => MapPoint
  getCurrentZoom: () => number
  getCurrentMapType: () => MapType
}