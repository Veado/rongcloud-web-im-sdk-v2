module RongIMLib {

  export interface WxLocalStorageInterface {
    length:number;
    getItem(keyName:string): any 
    removeItem(keyName:string): void
    setItem(keyName:string, keyValue: any): void
  }

  export class WxLocalStorage implements WxLocalStorageInterface {
    [index: string]: any 
    length: number
    constructor() {
      this.init()
    }

    init() {
      const {keys, currentSize} = wx.getStorageInfoSync()
      this.length = keys.length
      
      for(let k in keys) {
        // console.log('k', k)
        this[keys[k]] = wx.getStorageSync(keys[k]).toString()
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

  // var wxLocalStorage:any = new WxLocalStorage()
  
  // export function getLocalStorage():any {
  //   return wxLocalStorage
  // }
}