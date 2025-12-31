// components/TianDiTuMap/defaults.ts
import type { MapPoint } from './types'

// 在模块作用域定义默认值函数
export const getDefaultCenter = (): MapPoint => ({ lng: 116.404, lat: 39.915 })