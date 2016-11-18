module RongIMLib {
    export interface Transportation {
        /* .en
         * create transport
        */
        //创建通道
        createTransport(url: string, method: string): any;
        /* .en
         * send message
        */
        //传送消息流
        send(data: any, url?: string, method?: string): any;
        /* .en
         * receive message from server
        */
        //接收服务器返回消息
        onData(data?: any): string;
        /* .en
         * deal with transport closed
        */
        //处理通道关闭操作
        onClose(ev?:any): any;
        /* .en
         * deal with transport error
        */
        //通道异常操作
        onError(error: any): void;
        /* .en
         * disconnect
        */
        //断开连接
        disconnect(): void;
    }
}
