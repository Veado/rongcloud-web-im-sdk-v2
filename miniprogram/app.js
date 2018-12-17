
var RongIMLib = require('./release/RongIMLib')
var protobuf = require('./3rd/protobuf-2.3.3.min.js')
console.log('protobuf', protobuf)

//3_user  pkfcgjstpol38 GGY3izbPGsPhLvs9S11V3cXEnqil/lunxewlR/Kcs7ULDzunq04EdrXU2MYgU2eb9kqoAlshdzoX9f9wgiFuEA==
RongIMLib.RongIMClient.init("6tnym1br64d37", null, {protobuf});
var token = 'GGY3izbPGsPhLvs9S11V3cXEnqil/lunxewlR/Kcs7ULDzunq04EdrXU2MYgU2eb9kqoAlshdzoX9f9wgiFuEA=='

var _instance = RongIMLib.RongIMClient.getInstance();
	// 连接状态监听器
  RongIMLib.RongIMClient.setConnectionStatusListener({
		onChanged: function (status) {
			console.info(status)
		    switch (status) {
		        case RongIMLib.ConnectionStatus.CONNECTED:
                // showInfo("链接成功");
                console.log('链接成功');
		            break;
		        case RongIMLib.ConnectionStatus.CONNECTING:
		            console.log('正在链接');
		            break;
		        case RongIMLib.ConnectionStatus.DISCONNECTED:
		            console.log('断开连接');
		            break;
		        case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
		            console.log('其他设备登录');
		            break;
		          case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:
		            console.log('域名不正确');
		            break;
		        case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
		        	console.log('网络不可用');
		        	break;
		        }
		}
  });
  
  console.log('_instance', _instance)
	
	RongIMLib.RongIMClient.setOnReceiveMessageListener({
		// 接收到的消息
		onReceived: function (message) {
		    // 判断消息类型
		    // showTips("新消息，类型为：" + message.messageType);
            // showResult("新消息",message,start);
            console.log(message);

		    switch(message.messageType){
		        case RongIMClient.MessageType.TextMessage:
		        	/*
		        	显示消息方法： 
		        	消息里是 原生emoji
		        	RongIMLib.RongIMEmoji.emojiToHTML(message.content.content);
		            */
		            break;
		        case RongIMClient.MessageType.VoiceMessage:
		            // 对声音进行预加载                
		            // message.content.content 格式为 AMR 格式的 base64 码
		            break;
		        case RongIMClient.MessageType.ImageMessage:
		           // message.content.content => 图片缩略图 base64。
		           // message.content.imageUri => 原图 URL。
		           break;
		        case RongIMClient.MessageType.DiscussionNotificationMessage:
		           // message.content.extension => 讨论组中的人员。
		           break;
		        case RongIMClient.MessageType.LocationMessage:
		           // message.content.latiude => 纬度。
		           // message.content.longitude => 经度。
		           // message.content.content => 位置图片 base64。
		           break;
		        case RongIMClient.MessageType.RichContentMessage:
		           // message.content.content => 文本消息内容。
		           // message.content.imageUri => 图片 base64。
		           // message.content.url => 原图 URL。
		           break;
		        case RongIMClient.MessageType.InformationNotificationMessage:
		            // do something...
		           break;
		        case RongIMClient.MessageType.ContactNotificationMessage:
		            // do something...
		           break;
		        case RongIMClient.MessageType.ProfileNotificationMessage:
		            // do something...
		           break;
		        case RongIMClient.MessageType.CommandNotificationMessage:
		            // do something...
		           break;
		        case RongIMClient.MessageType.CommandMessage:
		            // do something...
		           break;
		        case RongIMClient.MessageType.UnknownMessage:
		            // do something...
		           break;
		        default:
		            // do something...
		    }
		}
	});
	
	
	//开始链接
	RongIMLib.RongIMClient.connect(token, {
		onSuccess: function(userId) {
			showInfo("链接成功，用户id：" + userId);
            sendMessage();
            getConversationList();
		},
		onTokenIncorrect: function() {
			showInfo('token无效');
		},
		onError:function(errorCode){
		  var info = '';
		  switch (errorCode) {
		    case RongIMLib.ErrorCode.TIMEOUT:
		      info = '超时';
		      break;
		    case RongIMLib.ErrorCode.UNKNOWN_ERROR:
		      info = '未知错误';
		      break;
		    case RongIMLib.ErrorCode.UNACCEPTABLE_PaROTOCOL_VERSION:
		      info = '不可接受的协议版本';
		      break;
		    case RongIMLib.ErrorCode.IDENTIFIER_REJECTED:
		      info = 'appkey不正确';
		      break;
		    case RongIMLib.ErrorCode.SERVER_UNAVAILABLE:
		      info = '服务器不可用';
		      break;
		  }
		  console.log(info);
		}
	});

	function getConversationList(){
		_instance.getConversationList({
			onSuccess: function(list){
				showInfo(JSON.stringify(list, null, '\t'));
			},
			onError:function(errorCode){
				 showInfo(errorCode);
			}
		}, null, 2);
	}
	
	function sendMessage(){
		var msg = new RongIMLib.TextMessage({content:"hello RongCloud!",extra:"附加信息"});
		var conversationtype = RongIMLib.ConversationType.PRIVATE;
		var targetId = "tester";
		_instance.sendMessage(conversationtype, targetId, msg, {
		        onSuccess: function (message) {
		        	console.log(message);
		            showInfo(JSON.stringify(message, null, '\t'));
		        },
		        onError: function (errorCode,message) {
		            showInfo(errorCode);
		        }
	    });
	}

console.log(RongIMLib)

//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})