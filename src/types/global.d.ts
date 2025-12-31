// types/global.d.ts
import type { TianDiTuAPI } from '../components/TianDiTuMap/types'

declare global {
  interface Window {
    T: TianDiTuAPI
  }
}