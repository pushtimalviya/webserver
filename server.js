var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requiredAuth : function( req,res, next) {
		console.log('secure route');
		next();
	},

	logger: function (req,res,next) {

		var str = new Date().toString();
		console.log('requestd url'+ str+req.method+'  '+ req.originalUrl);
		next();
	}
}

	 app.use(middleware.logger);

 // app.use(middleware.requiredAuth);

 app.get( '/', function ( req,res) { 
 			res.send('helloooo..');
 });

 app.get('/about',middleware.requiredAuth, function ( req, res) {

 	res.send('about page');
 })

//console.log(__dirname);
 app.use(express.static(__dirname + '/public'));
 
 var port = 3000
 app.listen(PORT, function () { 
 		console.log('server started @ port' +PORT);
 });