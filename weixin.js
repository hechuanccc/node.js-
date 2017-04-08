'use strict'

var path = require('path');
var picUrl = path.join(__dirname,'/img/2.jpg');
var config = require('./config');

var Wechat = require('./wechat/wechat');

var fs = require('fs');

var wechatApi = new Wechat(config.wechat);
exports.reply = function* (next){
	var message = this.weixin;

	if (message.MsgType==='event') {
		if (message.Event==='subscribe') {
			if (message.EventKey) {
				console.log('扫二维码进来：'+message.EventKey+' '+message.ticket)
			}

			this.body = '哈哈,你订阅了我这个号'
		}else if (message.Event==='unsubscribe') {
			console.log('无情取关');
			this.body='';
		}else if (message.Event==='LOCATION') {
			this.body='您上报的位置是：'+message.Latitude+'/'+message.Longitude+'-'+
			message.Precision;
		}else if (message.Event==='CLICK') {
			this.body = '您点击了菜单：'+message.EventKey;	
		}else if (message.Event=='SCAN') {
			console.log('关注后扫二维码'+message.EventKey+' '+message.Ticket)	
			this.body = '看到你扫了一下哦'
		}else if (message.Event=='VIEW') {
			this.body = '您点击了菜单中的链接: '+message.EventKey	
		}	
	}else if(message.MsgType==='text') { 
		var content = message.Content;
		var reply = '额,你说的 '+message.Content +' 太复杂了'
		if (content==='1') {
		 	reply='code as poetry'
		 } else if (content==='2') {
		    reply='醒来便觉甚是想你－mi'	
		 }else if (content==='3') {
		 	reply='miss you mi'
		 }else if (content==='4') {
		 	reply = [{
		 		title:'My Goddess',
		 		description:'A girl destiny',
		 		picUrl:'http://www.qingclass.com/temp-test/img/2.jpg',
		 		url:'https://nodejs.org/'
		 	}]
		 }else if (content==='5') {
		 	var data = yield wechatApi.uploadMaterial('image',__dirname+'/img/2.jpg');
		 	reply = {
		 		type:'image',
		 		media_id:data.media_id
		 	}	
		 }else if (content === '6') {
		 	var data = yield wechatApi.uploadMaterial('image',__dirname+'/img/2.jpg',{type:'image'});
		 	reply = {
		 		type:'image',
		 		media_id:data.media_id
		 	}

		 }else if (content==='7') {
		 	//var 
		 }

		 this.body=reply;
	}else if (message.MsgType==='location') {
		var reply = '您上报的位置是：'+message.Location_X+'/'+message.Location_X+'-'+
			message.Label;
			this.body = reply;
	}

	yield next
}