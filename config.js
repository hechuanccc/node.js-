'use strict'

var path = require('path');

//var wechat = require('./wechat/g');
var wechat_file = path.join(__dirname,'config/wechat.txt');

var util = require('./libs/util');
var config = {
	wechat : {
		appID : 'wxf9c875f5caa77e43',
		appsecret: 'fe2ded4e7eb9a57e6f5b66feeaa1b81a',
		token: 'imoocreallyhechuanlovewx',
		getAccessToken: function(){
			return util.readFileAsync(wechat_file);
		},
		saveAccessToken:function(data){
			data = JSON.stringify(data);
			return util.writeFileAsync(wechat_file,data);
		}
	}
}

module.exports = config;