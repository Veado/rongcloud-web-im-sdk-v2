module RongIMLib {

    export enum MentionedType {
       ALL =  1,
       PART = 2
    }

    export enum BlacklistStatus {
        /**
         * 在黑名单中。
         */
        /* .en
         * on blacklist
        */
        IN_BLACK_LIST = 0,
        /**
         * 不在黑名单中。
         */
        /* .en
         * not on blacklist
        */
        NOT_IN_BLACK_LIST = 1
    }

    export enum ConnectionChannel {

        XHR_POLLING = 0,

        WEBSOCKET = 1,
        /* .en
         * external call
        */
        //外部调用
        HTTP = 0,
        /* .en
         * external call
        */
        //外部调用
        HTTPS = 1
    }

    export enum CustomerType {

        ONLY_ROBOT = 1,

        ONLY_HUMAN = 2,

        ROBOT_FIRST = 3,

        HUMAN_FIRST = 4

    }

    export enum GetChatRoomType {

        NONE = 0,

        SQQUENCE = 1,

        REVERSE = 2
    }

    export enum ConnectionStatus {
        /**
         * 连接成功。
         */
        /* .en
         * connection success
        */
        CONNECTED = 0,

        /**
         * 连接中。
         */
        /* .en
         * connecting
        */
        CONNECTING = 1,

        /**
         * 断开连接。
         */
        /* .en
         * disconnect
        */
        DISCONNECTED = 2,

        /**
         * 用户账户在其他设备登录，本机会被踢掉线。
         */
        /* .en
         * if users login on other devices, current devices will be offline
        */
        KICKED_OFFLINE_BY_OTHER_CLIENT = 6,

        /**
         * 网络不可用。
         */
        /* .en
         * the network is not available
        */
        NETWORK_UNAVAILABLE = 3,

        /**
         * 网络不可用。
         */
        /* .en
         * the network is not available
        */
        DOMAIN_INCORRECT = 12
    }

    export enum ConversationNotificationStatus {
        /**
         * 免打扰状态，关闭对应会话的通知提醒。
         */
        /* .en
         *  no disturbing mode，close the notification of the session
        */
        DO_NOT_DISTURB,

        /**
         * 提醒。
         */
        /* .en
         * notify
        */
        NOTIFY
    }

    export enum ConversationType {
        NONE = 0,
        PRIVATE = 1,
        DISCUSSION = 2,
        GROUP = 3,
        CHATROOM = 4,
        CUSTOMER_SERVICE = 5,
        SYSTEM = 6,
        /* .en
         * set follow MC as default
        */
        //默认关注 MC
        APP_PUBLIC_SERVICE = 7,
        /* .en
         * set follow MP as manual
        */
        //手工关注 MP
        PUBLIC_SERVICE = 8
    }

    export enum DiscussionInviteStatus {
        /**
         * 开放邀请。
         */
        /* .en
         * invite opened
        */
        OPENED = 0,

        /**
         * 关闭邀请。
         */
        /* .en
         * invite closed
        */
        CLOSED = 1
    }

    export enum ErrorCode {

        /**
         * 发送频率过快
         */
        /* .en
         * frequency of send too fast
        */
        SEND_FREQUENCY_TOO_FAST = 20604,

        RC_MSG_UNAUTHORIZED = 20406,
        /**
         * 群组 Id 无效
         */
        /* .en
         * the group Id invilid
        */
        RC_DISCUSSION_GROUP_ID_INVALID = 20407,
        /**
         * 群组被禁言
         */
        /* .en
         * forbidden in group
        */
        FORBIDDEN_IN_GROUP = 22408,
        /**
         * 不在讨论组。
         */
        /* .en
         * not in discussion
        */
        NOT_IN_DISCUSSION = 21406,
        /**
         * 不在群组。
         */
        /* .en
         * not in group
        */
        NOT_IN_GROUP = 22406,
        /**
         * 不在聊天室。
         */
        /* .en
         * not in chatroom
        */
        NOT_IN_CHATROOM = 23406,
        /**
         *聊天室被禁言
         */
        /* .en
         * forbidden in chatroom
        */
        FORBIDDEN_IN_CHATROOM = 23408,
        /**
         * 聊天室中成员被踢出
         */
        /* .en
         * chatroom member has been kicked off
        */
        RC_CHATROOM_USER_KICKED = 23409,
        /**
         * 聊天室不存在
         */
        /* .en
         * the chatroom not exist
        */
        RC_CHATROOM_NOT_EXIST = 23410,
        /**
         * 聊天室成员已满
         */
        /* .en
         * chatroom are fulled
        */
        RC_CHATROOM_IS_FULL = 23411,
        /**
         * 获取聊天室信息参数无效
         */
        /* .en
         * chatroom patameter invalid
        */
        RC_CHATROOM_PATAMETER_INVALID = 23412,

        TIMEOUT = -1,
        /**
         * 未知原因失败。
         */
        /* .en
         * unknow reason to fail
        */
        UNKNOWN = -2,
        /**
         * 加入讨论失败
         */
        /* .en
         * join discussion failed
        */
        JOIN_IN_DISCUSSION = 21407,
        /**
         * 创建讨论组失败
         */
        /* .en
         * create discussion failed
        */
        CREATE_DISCUSSION = 21408,
        /**
         * 设置讨论组邀请状态失败
         */
        /* .en
         * set invite of dicussion failed
        */
        INVITE_DICUSSION = 21409,



        /**
         *获取用户失败
         */
        /* .en
         * get user info failed
        */
        GET_USERINFO_ERROR = 23407,

        /**
         * 在黑名单中。
         */
        /* .en
         * in blacklist
        */
        REJECTED_BY_BLACKLIST = 405,

        /**
         * 通信过程中，当前 Socket 不存在。
         */
        /* .en
         * the currect Socket invalid in process of communicate
        */
        RC_NET_CHANNEL_INVALID = 30001,

        /**
         * Socket 连接不可用。
         */
        /* .en
         * connect of Socket unavailable
        */
        RC_NET_UNAVAILABLE = 30002,

        /**
         * 通信超时。
         */
        /* .en
         * communicate timeout
        */
        RC_MSG_RESP_TIMEOUT = 30003,

        /**
         * 导航操作时，Http 请求失败。
         */
        /* .en
         * the HTTP request failed when navigation operate
        */
        RC_HTTP_SEND_FAIL = 30004,

        /**
         * HTTP 请求失败。
         */
        /* .en
         * the HTTP request timeout
        */
        RC_HTTP_REQ_TIMEOUT = 30005,

        /**
         * HTTP 接收失败。
         */
        /* .en
         * receive failed
        */
        RC_HTTP_RECV_FAIL = 30006,

        /**
         * 导航操作的 HTTP 请求，返回不是200。
         */
        /* .en
         * the return value that HTTP request of navigation operate is not 200
        */
        RC_NAVI_RESOURCE_ERROR = 30007,

        /**
         * 导航数据解析后，其中不存在有效数据。
         */
        /* .en
         * there are no valid data in data set after navigation data analyzation
        */
        RC_NODE_NOT_FOUND = 30008,

        /**
         * 导航数据解析后，其中不存在有效 IP 地址。
         */
        /* .en
         * there are no valid IP adress in data set after navigation data analyzation
        */
        RC_DOMAIN_NOT_RESOLVE = 30009,

        /**
         * 创建 Socket 失败。
         */
        /* .en
         * create Socket failed
        */
        RC_SOCKET_NOT_CREATED = 30010,

        /**
         * Socket 被断开。
         */
        /* .en
         * Socket disconnectec
        */
        RC_SOCKET_DISCONNECTED = 30011,

        /**
         * PING 操作失败。
         */
        /* .en
         * operation of ping failed
        */
        RC_PING_SEND_FAIL = 30012,

        /**
         * PING 超时。
         */
        /* .en
         * operation of ping timeout
        */
        RC_PONG_RECV_FAIL = 30013,
        /**
         * 消息发送失败。
         */
        /* .en
         * message sent failed
        */
        RC_MSG_SEND_FAIL = 30014,

        /**
         * 做 connect 连接时，收到的 ACK 超时。
         */
        /* .en
         * ACK timeout on connecting
        */
        RC_CONN_ACK_TIMEOUT = 31000,

        /**
         * 参数错误。
         */
        /* .en
         * parameter error
        */
        RC_CONN_PROTO_VERSION_ERROR = 31001,

        /**
         * 参数错误，App Id 错误。
         */
        /* .en
         * parameter error,App Id error
        */
        RC_CONN_ID_REJECT = 31002,

        /**
         * 服务器不可用。
         */
        /* .en
         * Server unavailable
        */
        RC_CONN_SERVER_UNAVAILABLE = 31003,

        /**
         * Token 错误。
         */
        /* .en
         * Token error
        */
        RC_CONN_USER_OR_PASSWD_ERROR = 31004,

        /**
         * App Id 与 Token 不匹配。
         */
        /* .en
         * Not authrorized App Id and Token
        */
        RC_CONN_NOT_AUTHRORIZED = 31005,

        /**
         * 重定向，地址错误。
         */
        /* .en
         * redirect address error
        */
        RC_CONN_REDIRECTED = 31006,

        /**
         * NAME 与后台注册信息不一致。
         */
        /* .en
         * Not authrorized Name and information in registed
        */
        RC_CONN_PACKAGE_NAME_INVALID = 31007,

        /**
         * APP 被屏蔽、删除或不存在。
         */
        /* .en
         * App has been blocked or deleted
        */
        RC_CONN_APP_BLOCKED_OR_DELETED = 31008,

        /**
         * 用户被屏蔽。
         */
        /* .en
         * User has been blocked
        */
        RC_CONN_USER_BLOCKED = 31009,

        /**
         * Disconnect，由服务器返回，比如用户互踢。
         */
        /* .en
         * Disconnect,return by Server.
        */
        RC_DISCONN_KICK = 31010,

        /**
         * Disconnect，由服务器返回，比如用户互踢。
         */
        /* .en
         * Disconnect,return by server
        */
        RC_DISCONN_EXCEPTION = 31011,

        /**
         * 协议层内部错误。query，上传下载过程中数据错误。
         */
        /* .en
         * Error in protocol layer，query,upload,download error
        */
        RC_QUERY_ACK_NO_DATA = 32001,

        /**
         * error in protocol layer
         */
        /* .en
         * App has been blocked or deleted
        */
        RC_MSG_DATA_INCOMPLETE = 32002,

        /**
         * 未调用 init 初始化函数。
         */
        /* .en
         * do not call init
        */
        BIZ_ERROR_CLIENT_NOT_INIT = 33001,

        /**
         * 数据库初始化失败。
         */
        /* .en
         * database initialize falied
        */
        BIZ_ERROR_DATABASE_ERROR = 33002,

        /**
         * 传入参数无效。
         */
        /* .en
         * parameter invaild
        */
        BIZ_ERROR_INVALID_PARAMETER = 33003,

        /**
         * 通道无效。
         */
        /* .en
         * channel invalid
        */
        BIZ_ERROR_NO_CHANNEL = 33004,

        /**
         * 重新连接成功。
         */
        /* .en
         * reconnect success
        */
        BIZ_ERROR_RECONNECT_SUCCESS = 33005,
        /**
         * 连接中，再调用 connect 被拒绝。
         */
        /* .en
         * reconnection error
        */
        BIZ_ERROR_CONNECTING = 33006,
        /**
         * 消息漫游服务未开通
         */
        /* .en
         * message roaming service unavailble
        */
        MSG_ROAMING_SERVICE_UNAVAILABLE = 33007,

        /**
         * 删除会话失败
         */
        /* .en
         * session remove error
        */
        CONVER_REMOVE_ERROR = 34001,
        /**
         *拉取历史消息
         */
        /* .en
         * get history message list error
        */
        CONVER_GETLIST_ERROR = 34002,
        /**
         * 会话指定异常
         */
        /* .en
         * session error
        */
        CONVER_SETOP_ERROR = 34003,
        /**
         * 获取会话未读消息总数失败
         */
        /* .en
         * get total of unread messages error
        */
        CONVER_TOTAL_UNREAD_ERROR = 34004
        /**
         * 获取指定会话类型未读消息数异常
         */
        /* .en
         * get total of unread messages who specified error
        */
        CONVER_TYPE_UNREAD_ERROR = 34005,
        /**
         * 获取指定用户ID&会话类型未读消息数异常
         */
        /* .en
         * get user ID who specified error
        */
        CONVER_ID_TYPE_UNREAD_ERROR = 34006,
        /**
         * 群组异常信息
         */
        /* .en
         * group error
        */
        GROUP_SYNC_ERROR = 35001,
        /**
         * 匹配群信息系异常
         */
        /* .en
         * match group error
        */
        GROUP_MATCH_ERROR = 35002,

        /* .en
         * chatroom error
        */
        //聊天室异常
        /**
         * 加入聊天室Id为空
         */
        /* .en
         * join chatroom error,chatroom is empty
        */
        CHATROOM_ID_ISNULL = 36001,
        /**
         * 加入聊天室失败
         */
        /* .en
         * join chatroom failed
        */
        CHARTOOM_JOIN_ERROR = 36002,
        /**
         * 拉取聊天室历史消息失败
         */
        /* .en
         * get history messages failed
        */
        CHATROOM_HISMESSAGE_ERROR = 36003,
        /* .en
         * blacklist error
        */
        //黑名单异常
        /**
         * 加入黑名单异常
         */
        /* .en
         * add to blacklist error
        */
        BLACK_ADD_ERROR = 37001,
        /**
         * 获得指定人员再黑名单中的状态异常
         */
        /* .en
         * get status of member who specified in blacklist error
        */
        BLACK_GETSTATUS_ERROR = 37002,
        /**
         * 移除黑名单异常
         */
        /* .en
         * remove blacklist error
        */
        BLACK_REMOVE_ERROR = 37003,
        /**
         * 获取草稿失败
         */
        /* .en
         * get darft error
        */
        DRAF_GET_ERROR = 38001,
        /**
         * 保存草稿失败
         */
        /* .en
         * save darft error
        */
        DRAF_SAVE_ERROR = 38002,
        /**
         * 删除草稿失败
         */
        /* .en
         * delete darft error
        */
        DRAF_REMOVE_ERROR = 38003,
        /**
         * 关注公众号失败
         */
        /* .en
         * follow public account failed
        */
        SUBSCRIBE_ERROR = 39001,
        /**
         * 关注公众号失败
         */
        /* .en
         * follow public account failed
        */
        QNTKN_FILETYPE_ERROR = 41001,
        /**
         * 获取七牛token失败
         */
        /* .en
         * get token from Qiniu failed
        */
        QNTKN_GET_ERROR = 41002,
        /**
         * cookie被禁用
         */
        /* .en
         * cookie disabled
        */
        COOKIE_ENABLE = 51001,

        // 没有注册DeviveId 也就是用户没有登陆
        /* .en
         * unlogin
        */
        HAVNODEVICEID = 24001,

        /* .en
         * has been existed
        */
        // 已经存在
        DEVICEIDISHAVE = 24002,

        /* .en
         * success
        */
        // 成功
        SUCCESS = 0,

        /* .en
         * none token
        */
        // 没有对应的用户或token
        FEILD = 24009,

        /* .en
         * voip is empty
        */
        // voip为空
        VOIPISNULL = 24013,

        /* .en
         * the engine of voip is unsupported
        */
        // 不支持的Voip引擎
        NOENGINETYPE = 24010,

        /* .en
         * null channel name
        */
        // channleName 是空
        NULLCHANNELNAME = 24011,

        /* .en
         * create voip key failed
        */
        // 生成Voipkey失败
        VOIPDYANMICERROR = 24012,

        /* .en
         * no voip
        */
        // 没有配置voip
        NOVOIP = 24014,

        /* .en
         * intetnal error on server
        */
        // 服务器内部错误
        INTERNALERRROR = 24015,

        //VOIP close
        VOIPCLOSE = 24016,

        CLOSE_BEFORE_OPEN = 51001,

        ALREADY_IN_USE = 51002,

        INVALID_CHANNEL_NAME = 51003,

        VIDEO_CONTAINER_IS_NULL = 51004,
        /*!
        己方取消已发出的通话请求
        */
        /* .en
         * request of talk canceled
        */
        CANCEL = 1,
        /*!
         己方拒绝收到的通话请求
         */
        /* .en
         * request of talk refused
        */
        REJECT = 2,
        /*!
         己方挂断
         */
        /* .en
         * hang up
        */
        HANGUP = 3,
        /*!
         己方忙碌
         */
        /* .en
         * busy line
        */
        BUSYLINE = 4,
        /*!
         己方未接听
         */
        /* .en
         * no response
        */
        NO_RESPONSE = 5,
        /*!
         己方不支持当前引擎
         */
        /* .en
         * currently engine un supported
        */
        ENGINE_UN_SUPPORTED = 6,
        /*!
         己方网络出错
         */
        /* .en
         * network error
        */
        NETWORK_ERROR = 7,
        /*!
         对方取消已发出的通话请求
         */
        /* .en
         * remote request cancel
        */
        REMOTE_CANCEL = 11,

        /*!
         对方拒绝收到的通话请求
         */
        /* .en
         * remote reject
        */
        REMOTE_REJECT = 12,
        /*!
         通话过程对方挂断
         */
        /* .en
         * remote hang up
        */
        REMOTE_HANGUP = 13,

        /*!
         对方忙碌
         */
        /* .en
         * remote busy line
        */
        REMOTE_BUSYLINE = 14,
        /*!
         对方未接听
         */
        /* .en
         * remote no response
        */
        REMOTE_NO_RESPONSE = 15,
        /*!
         对方网络错误
         */
        /* .en
         * remote engine un supported
        */
        REMOTE_ENGINE_UN_SUPPORTED = 16,
        /*!
         对方网络错误
         */
        /* .en
         * remote network error
        */
        REMOTE_NETWORK_ERROR = 17,
        /*!
         VoIP 不可用
         */
        /* .en
         * voip not avaliable
        */
        VOIP_NOT_AVALIABLE = 18

    }
    export enum VoIPMediaType {

        MEDIA_AUDIO = 1,

        MEDIA_VEDIO = 2,
    }

    export enum MediaType {
        /**
         * 图片。
         */
        /* .en
         * image
        */
        IMAGE = 1,

        /**
         * 声音。
         */
        /* .en
         * audio
        */
        AUDIO = 2,

        /**
         * 视频。
         */
        /* .en
         * video
        */
        VIDEO = 3,

        /**
         * 通用文件。
         */
        /* .en
         * file
        */
        FILE = 100
    }

    export enum MessageDirection {
        /**
         * 发送消息。
         */
        /* .en
         * send
        */
        SEND = 1,

        /**
         * 接收消息。
         */
        /* .en
         * receive
        */
        RECEIVE = 2
    }

    export enum FileType {
        IMAGE = 1,
        AUDIO = 2,
        VIDEO = 3
    }

    export enum RealTimeLocationErrorCode {
        /**
         * 未初始化 RealTimeLocation 实例
         */
        /* .en
         * RealTimeLocation not initializated
        */
        RC_REAL_TIME_LOCATION_NOT_INIT = -1,

        /**
         * 执行成功。
         */
        /* .en
         * success
        */
        RC_REAL_TIME_LOCATION_SUCCESS = 0,

        /**
         * 获取 RealTimeLocation 实例时返回
         * GPS 未打开。
         */
        /* .en
         * return value when get RealTimeLocation instance
         * GPS disabled
        */
        RC_REAL_TIME_LOCATION_GPS_DISABLED = 1,
        /**
         * 获取 RealTimeLocation 实例时返回
         * 当前会话不支持位置共享。
         */
        /* .en
         * return value when get RealTimeLocation instance
         * Location share not supported
        */
        RC_REAL_TIME_LOCATION_CONVERSATION_NOT_SUPPORT = 2,

        /**
         * 获取 RealTimeLocation 实例时返回
         * 对方已发起位置共享。
         */
        /* .en
         * return value when get RealTimeLocation instance
         * Location share is on going
        */
        RC_REAL_TIME_LOCATION_IS_ON_GOING = 3,
        /**
         * Join 时返回
         * 当前位置共享已超过最大支持人数。
         */
        /* .en
         * return value when join
         * The current position to share more than the biggest support.
        */
        RC_REAL_TIME_LOCATION_EXCEED_MAX_PARTICIPANT = 4,
        /**
         * Join 时返回
         * 加入位置共享失败。
         */
        /* .en
         * return value when join
         * join location share failed
        */
        RC_REAL_TIME_LOCATION_JOIN_FAILURE = 5,
        /**
         * Start 时返回
         * 发起位置共享失败。
         */
        /* .en
         * return value when start
         * launch location share failed
        */
        RC_REAL_TIME_LOCATION_START_FAILURE = 6,

        /**
         * 网络不可用。
         */
        /* .en
         * network unavailable
        */
        RC_REAL_TIME_LOCATION_NETWORK_UNAVAILABLE = 7
    }

    export enum RealTimeLocationStatus {
        /**
         * 空闲状态 （默认状态）
         * 对方或者自己都未发起位置共享业务，或者位置共享业务已结束。
         */
        /* .en
         * idle state (default state)
         * Each other or are not a position Shared business yourself, or position is Shared business is over.
        */
        RC_REAL_TIME_LOCATION_STATUS_IDLE = 0,
        /**
         * 呼入状态 （待加入）
         * 1. 对方发起了位置共享业务，此状态下，自己只能选择加入。
         * 2. 自己从已连接的位置共享中退出。
         */
        /* .en
         * incoming state (wait to join)
         * 1.The other party has launched a position Shared business, under this condition, can only choose to join.
         * 2.His exit from the connected location sharing
        */
        RC_REAL_TIME_LOCATION_STATUS_INCOMING = 1,

        /**
         * 呼出状态 =（自己创建）
         * 1. 自己发起位置共享业务，对方只能选择加入。
         * 2. 对方从已连接的位置共享业务中退出。
         */
        /* .en
         * outcoming state (created by self)
         * 1.A position Shared business, the other can only choose to join.
         * 2.The other exit from the Shared business connected position.
        */
        RC_REAL_TIME_LOCATION_STATUS_OUTGOING = 2,

        /**
         * 连接状态 （自己加入）
         * 对方加入了自己发起的位置共享，或者自己加入了对方发起的位置共享。
         */
        /* .en
         * connected state (join by self)
         * Share each other joined the own position or the position of each other by sharing you join.
        */
        RC_REAL_TIME_LOCATION_STATUS_CONNECTED = 3
    }

    export enum ReceivedStatus {
        READ = 0x1,
        LISTENED = 0x2,
        DOWNLOADED = 0x4,
        RETRIEVED = 0x8
    }

    export enum SearchType {
        /**
         * 精确。
         */
        /* .en
         * exact
        */
        EXACT = 0,

        /**
         * 模糊。
         */
        /* .en
         * fuzzy
        */
        FUZZY = 1
    }

    export enum SentStatus {
        /**
         * 发送中。
         */
        /* .en
         * sending
        */
        SENDING = 10,

        /**
         * 发送失败。
         */
        /* .en
         * failed
        */
        FAILED = 20,

        /**
         * 已发送。
         */
        /* .en
         * sent
        */
        SENT = 30,

        /**
         * 对方已接收。
         */
        /* .en
         * received
        */
        RECEIVED = 40,

        /**
         * 对方已读。
         */
        /* .en
         * read
        */
        READ = 50,

        /**
         * 对方已销毁。
         */
        /* .en
         * destroyed
        */
        DESTROYED = 60
    }


    export enum ConnectionState {

        ACCEPTED = 0,

        UNACCEPTABLE_PROTOCOL_VERSION = 1,

        IDENTIFIER_REJECTED = 2,

        SERVER_UNAVAILABLE = 3,
        /**
         * token无效
         */
        /* .en
         * token incorrect
        */
        TOKEN_INCORRECT = 4,

        NOT_AUTHORIZED = 5,

        REDIRECT = 6,

        PACKAGE_ERROR = 7,

        APP_BLOCK_OR_DELETE = 8,

        BLOCK = 9,

        TOKEN_EXPIRE = 10,

        DEVICE_ERROR = 11
    }
}
