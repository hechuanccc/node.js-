'use strict'

var fs = require('fs');

var Promise = require('bluebird');

module.exports.readFileAsync = function(fpath,encoding){
	return new Promise(function(resolve,reject){
		fs.readFile(fpath,function(err,content){
			if (err) {
				reject(err)
			}else {
				//content = content.toString();
				resolve(content);
			}
		})
	})
}

module.exports.writeFileAsync = function(fpath,content){
	return new Promise(function(resolve,reject){
		fs.writeFile(fpath,content,function(err){
			if (err) {
				reject(err)
			}else {
				resolve();
			}
		})
	})
}