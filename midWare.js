
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
module.exports = middleware;

