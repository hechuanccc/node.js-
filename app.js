

var Koa = require('koa');
var path = require('path');

var wechat = require('./wechat/g');
var wechat_file = path.join(__dirname,'config/wechat.txt');

var util = require('./libs/util');

var config = require('./config');

var weixin = require('./weixin');




var app = new Koa();

app.use(wechat(config.wechat,weixin.reply))


app.listen(8000);
console.log('Listening:1234')