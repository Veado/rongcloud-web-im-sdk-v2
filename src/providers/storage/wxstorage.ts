/**
 * provide same api as web's localstorage
 */

namespace Wxstorage {
  interface WxstorageInterface {
    getItem()
    setItem()
    removeItem()
  }
  
  export class Wxstorage implements WxstorageInterface{
    constructor() {
      // this.greeting = message;
      try {
        const res = wx.getStorageInfoSync()
        console.log(res.keys)
        console.log(res.currentSize)
        console.log(res.limitSize)
      } catch (e) {
        
      }
    }
    
    getItem(){
      
    }

    setItem() {

    }

    removeItem(){

    }
  }
}