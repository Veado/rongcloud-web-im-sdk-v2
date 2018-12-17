module RongIMLib {
  interface WxLocalStorageInterface {
    length:number
    getItem(keyName:string): string | null
    removeItem(keyName:string): void
    setItem(keyName:string, keyValue: any): void
  }

  class WxLocalStorage implements WxLocalStorageInterface {
    [index: string]: any 
    length: number
    constructor() {
      this.init()
    }

    init() {
      const {keys, currentSize} = wx.getStorageInfoSync()
      this.length = keys.length
      
      for(let k in keys) {
        this[k] = keys[k]
      }
    }

    refresh() {
      for(let k in this) {
        this.hasOwnProperty(k) && delete this[k]
      }
    }

    getItem(keyName:string){
      return this[keyName] || null
    }

    removeItem(keyName:string) {
      wx.removeStorageSync(keyName)
      this.refresh()
      this.init()
    }

    setItem(keyName:string,keyValue:any) {
      keyValue = keyValue.toString()
      wx.setStorage({
        key: keyName,
        data: keyValue
      })
    }
  }

  var wxLocalStorage = new WxLocalStorage()
  
  export function getLocalStorage() {
    return wxLocalStorage
  }
}