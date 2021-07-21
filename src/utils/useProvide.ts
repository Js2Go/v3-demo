import { provide, inject, readonly } from 'vue'

export const get = (key: string): any => {
  return inject(key)
}

export const set = (key: any, value: any) => {
  provide(key, readonly(value))
}
