var Koa = require('koa');

var app = new Koa();

app.use(function* (next){
	
		var a = yield sum();
		console.log('继续了')
		console.log(a);
	
})

function sum(i){
	return new Promise(function(resolve,reject){
			setTimeout(function(){
				console.log('延迟2s')
				resolve(5);
			}, 2000)
	})

}

app.listen(3000,function(){
	console.log('koa正在监听3000端口: ');
})