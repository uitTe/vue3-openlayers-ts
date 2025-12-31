// components/TianDiTuMap/index.ts
import TianDiTuMap from './TianDiTuMap.vue'

export default TianDiTuMap

// 导出类型
export type { 
  TianDiTuMapProps, 
  MapPoint, 
  MapType,
  TianDiTuMapExposed 
} from './types'

// 导出配置
export { 
  MAP_TYPES, 
  DEFAULT_CONFIG, 
  CITY_COORDINATES,
  TDT_TK 
} from './config'

// 导出工具函数
export { 
  getTileUrl, 
  getMapTypeUrls, 
  validateTK,
  loadTianDiTuAPI 
} from './utils'