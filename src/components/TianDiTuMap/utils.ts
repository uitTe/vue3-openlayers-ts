// components/TianDiTuMap/utils.ts
import { TDT_TK } from './config'
import type { MapType } from './types'
import { MAP_TYPES } from './config'

// 定义默认TK常量
const DEFAULT_TK = '你的天地图tk'

// 获取瓦片URL
export const getTileUrl = (layerType: string): string => {
  // 使用环境变量
  if (!TDT_TK || TDT_TK === DEFAULT_TK) {
    console.error('天地图TK未配置，请设置VITE_TIAN_DI_TU_TK环境变量')
    return ''
  }
  return `https://t0.tianditu.gov.cn/DataServer?T=${layerType}&x={x}&y={y}&l={z}&tk=${TDT_TK}`
}

// 获取指定地图类型的图层URL
export const getMapTypeUrls = (mapType: MapType) => {
  const config = MAP_TYPES[mapType]
  if (!config) {
    return { baseUrl: '', labelUrl: '' }
  }
  
  return {
    baseUrl: getTileUrl(config.baseLayer),
    labelUrl: getTileUrl(config.labelLayer)
  }
}

// 验证TK有效性
export const validateTK = (): boolean => {
  return !!TDT_TK && TDT_TK.length > 20 && TDT_TK !== DEFAULT_TK
}

// 获取TK错误信息
export const getTKError = (): string => {
  if (!TDT_TK) {
    return '天地图TK未配置，请设置VITE_TIAN_DI_TU_TK环境变量'
  }
  if (TDT_TK === DEFAULT_TK) {
    return '请设置天地图TK，创建.env文件并添加VITE_TIAN_DI_TU_TK=你的实际tk'
  }
  if (TDT_TK.length <= 20) {
    return '天地图TK格式不正确，长度应大于20位'
  }
  return ''
}

// 动态加载天地图API
export const loadTianDiTuAPI = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.T) {
      resolve()
      return
    }
    
    const tkError = getTKError()
    if (tkError) {
      reject(new Error(tkError))
      return
    }
    
    const script = document.createElement('script')
    script.src = `https://api.tianditu.gov.cn/api?v=4.0&tk=${TDT_TK}`
    
    script.onload = () => {
      setTimeout(() => {
        if (window.T && window.T.Map) {
          resolve()
        } else {
          reject(new Error('天地图API加载失败'))
        }
      }, 100)
    }
    
    script.onerror = () => {
      reject(new Error('天地图API加载失败'))
    }
    
    document.head.appendChild(script)
  })
}

// 格式坐标显示
export const formatCoordinate = (value: number, decimalPlaces: number = 6): string => {
  return value.toFixed(decimalPlaces)
}

// 判断位置信息
export const getLocationInfo = (center: { lng: number; lat: number }): string => {
  const { lng, lat } = center
  
  if (lng > 73 && lng < 135 && lat > 18 && lat < 54) {
    // 中国范围内
    if (lng > 116.3 && lng < 116.5 && lat > 39.8 && lat < 40) {
      return '北京市区'
    } else if (lng > 121.4 && lng < 121.5 && lat > 31.2 && lat < 31.3) {
      return '上海市中心'
    } else if (lng > 113 && lng < 114 && lat > 22.5 && lat < 23.5) {
      return '广州/深圳地区'
    } else {
      return '中国地区'
    }
  } else {
    return '其他地区'
  }
}