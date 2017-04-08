var Promise = require('bluebird');

var a = new Promise(function(resolve,request){
	setTimeout(function(){
		console.log('begin');
		resolve(1);
	},3000)
}).then(function(n){
	console.log('start then inner')
	console.log('n = ' +n);
})