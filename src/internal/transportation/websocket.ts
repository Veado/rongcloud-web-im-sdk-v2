module RongIMLib {
    export class SocketTransportation implements Transportation {
        /* .en
         * url for connection 
        */
        //连接URL
        url: string;
        /* .en
         * status of connection
         * true : connected
         * false : no connect 
        */
        //连接状态 true:已连接 false:未连接
        connected: boolean = false;
        /* .en
         * whether close
         * true : closed
         * false : no close 
        */
        //是否关闭： true:已关闭 false：未关闭
        isClose: boolean = false;
        /* .en
         * object of WebSocket 
        */
        //WebSocketd对象
        socket: WebSocket;
        /* .en
         * temp variable thar store message queue 
        */
        //存放消息队列的临时变量
        queue: Array<any> = [];
        empty: any = new Function;
        _socket: Socket;
        _status: number;
        /**
         * [constructor]
         * @param  {string} url [连接地址：包含token、version]
         */
        /* .en
         * [constructor]
         * @param  {string} url [connection addt=ress：include token、version] 
        */
        constructor(_socket: Socket) {
            this._socket = _socket;
            return this;
        }
        /**
         * [createTransport 创建WebScoket对象]
         */
        /* .en
         * [createTransport create WebScoket object]
        */
        createTransport(url: string, method?: string): any {
            if (!url) { throw new Error("URL can't be empty"); };
            this.url = url;
            this.socket = new WebSocket(MessageUtil.schemeArrs[RongIMClient.schemeType][1] + "://" + url);
            this.socket.binaryType = "arraybuffer";
            this.addEvent();
            return this.socket;
        }
        /**
         * [send 传送消息流]
         * @param  {ArrayBuffer} data [二进制消息流]
         */
        /* .en
         * [send stream of send message]
         * @param  {ArrayBuffer} data [binary message stream]
        */
        send(data: any): any {
            if (!this.connected && !this.isClose) {
                /* .en
                 * insert message queue when the trnsport unavailable
                */
                //当通道不可用时，加入消息队列
                this.queue.push(data);
                return;
            }
            if (this.isClose) {
                throw new Error("The Connection is closed,Please open the Connection!!!");
            }
            var stream: RongIMStream = new RongIMStream([]), msg: MessageOutputStream = new MessageOutputStream(stream);
            msg.writeMessage(data);
            var val = stream.getBytesArray(true);
            var binary = new Int8Array(val);
            this.socket.send(binary.buffer);
            return this;
        }
        /**
         * [onData 通道返回数据时调用的方法，用来想上层传递服务器返回的二进制消息流]
         * @param  {ArrayBuffer}    data [二进制消息流]
         */
        /* .en
         * [onData transmit binary message stream from server to upper]
         * @param  {ArrayBuffer}    data [binary message stream]
        */
        onData(data: any): string {
            if (MessageUtil.isArray(data)) {
                this._socket.onMessage(new MessageInputStream(data).readMessage());
            } else {
                this._socket.onMessage(new MessageInputStream(MessageUtil.ArrayFormInput(data)).readMessage());
            }
            return "";
        }
        /**
         * [onClose 通道关闭时触发的方法]
         */
        /* .en
         * [onClose trigger function when transport closed]
        */
        onClose(ev: any): any {
            var me = this;
            me.isClose = true;
            me.socket = this.empty;

            RongIMLib.Bridge._client.clearHeartbeat();
            if (ev.code == 1006 && !this._status) {
                me._socket.fire("StatusChanged", RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE);
            }
            else {
                me._status = 0;
            }
        }
        /**
         * [onError 通道报错时触发的方法]
         * @param {any} error [抛出异常]
         */
        /* .en
         * [onError trigger function when transport error]
         * @param {any} error [throw exception]
        */
        onError(error: any): void {
            throw new Error(error);
        }
        /**
         * [addEvent 为通道绑定事件]
         */
        /* .en
         * [addEvent bind event for transport]
        */
        addEvent(): void {
            var self = this;
            self.socket.onopen = function() {
                self.connected = true;
                self.isClose = false;
                /* .en
                 * send all message that wait when the transport actived
                */
                //通道可以用后，调用发送队列方法，把所有等得发送的消息发出
                self.doQueue();
                self._socket.fire("connect");
            };
            self.socket.onmessage = function(ev) {
                /* .en
                 * Figure out whether the data string, if the string is then to get the flash.
                */
                //判断数据是不是字符串，如果是字符串那么就是flash传过来的。
                if (typeof ev.data == "string") {
                    self.onData(ev.data.split(","));
                } else {
                    self.onData(ev.data);
                }
            };
            self.socket.onerror = function(ev) {
                self.onError(ev);
            };
            self.socket.onclose = function(ev) {
                self.onClose(ev);
            };
        }
        /**
         * [doQueue 消息队列，把队列中消息发出]
         */
        /* .en
         * [doQueue send message in queue]
        */
        doQueue(): void {
            var self = this;
            for (let i = 0, len = self.queue.length; i < len; i++) {
                self.send(self.queue[i]);
            }
        }
        /**
         * [disconnect 断开连接]
         */
        /* .en
         * [disconnect]
        */
        disconnect(status?: number): void {
            var me = this;
            if (me.socket.readyState) {
                me.isClose = true;
                if (status) {
                    me._status = status;
                }
                this.socket.close();
            }
        }
        /**
         * [reconnect 重新连接]
         */
        /* .en
         * [reconnect]
        */
        reconnect(): void {
            this.disconnect();
            this.createTransport(this.url);
        }
    }
}
