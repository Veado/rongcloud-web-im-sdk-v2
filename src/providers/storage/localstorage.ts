
module RongIMLib {
   
    export class LocalStorageProvider implements StorageProvider {
        // localStorage = new WxLocalStorage()
        wxLocalStorage:any = new WxLocalStorage()

        prefix: string = 'rong_';

        _host: string = "";

        // static _instance: LocalStorageProvider = new LocalStorageProvider();

        constructor() {
            console.log('wxLocalStorage', this.wxLocalStorage) 
            var d = new Date(), m = d.getMonth() + 1, date = d.getFullYear() + '/' + (m.toString().length == 1 ? '0' + m : m) + '/' + d.getDate(),
                nowDate = new Date(date).getTime();
            for (var key in localStorage) {
                if (key.lastIndexOf('RECEIVED') > -1) {
                    var recObj = JSON.parse(this.wxLocalStorage.getItem(key));
                    for (let key in recObj) {
                        nowDate - recObj[key].dealtime > 0 && (delete recObj[key]);
                    }
                    if (RongUtil.isEmpty(recObj)) {
                        this.wxLocalStorage.removeItem(key);
                    } else {
                        this.wxLocalStorage.setItem(key, JSON.stringify(recObj));
                    }
                }
                if (key.lastIndexOf('SENT') > -1) {
                    var sentObj = JSON.parse(this.wxLocalStorage.getItem(key));
                    nowDate - sentObj.dealtime > 0 && (this.wxLocalStorage.removeItem(key));
                }
            }
        }

        setItem(composedKey: string, object: any): void {
            if (composedKey) {
                composedKey.indexOf(this.prefix) == -1 && (composedKey = this.prefix + composedKey);
                this.wxLocalStorage.setItem(composedKey, object);
            }
        }

        getItem(composedKey: string): string {
            if (composedKey) {
                composedKey.indexOf(this.prefix) == -1 && (composedKey = this.prefix + composedKey);
                return this.wxLocalStorage.getItem(composedKey ? composedKey : "");
            }
            return "";
        }

        getItemKey(composedStr: string): string {
            var item = "";
            var _key: string = this.prefix + composedStr;
            for (var key in localStorage) {
                if (key.indexOf(_key) == 0) {
                    item = key;
                    break;
                }
            }
            return item;
        }

        removeItem(composedKey: string): void {
            if (composedKey) {
                composedKey.indexOf(this.prefix) == -1 && (composedKey = this.prefix + composedKey);
                this.wxLocalStorage.removeItem(composedKey.toString());
            }
        }

        clearItem(): void {
            var me = this;
            for (var key in localStorage) {
                if (key.indexOf(me.prefix) > -1) {
                    me.removeItem(key);
                }
            }
        }
        //单位：字节
        onOutOfQuota(): number {
            return JSON.stringify(localStorage).length;
        }
    }
}
