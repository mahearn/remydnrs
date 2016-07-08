var express = require('express'),
	// Firebase = require('firebase'),
	app = express();

	app
		.use(express.static('./'))
		.get('*', function(req, res) {
			res.sendFile('/index.html');
			// res.setHeader('Content-Type', 'application/json');
   //  		res.send(JSON.stringify({ a: 1 }));
   			res.setHeader('Content-Type', 'text/html');
   			res.send();
		})
		.listen(3000);


		// res.type('.html');              // => 'text/html'
		// res.type('html');               // => 'text/html'
		// res.type('json');               // => 'application/json'
		// res.type('application/json');   // => 'application/json'
		// res.type('png');                // => image/png



/* version using connect and serve-static
	npm install connect serve-static
	*/
// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(3000, function(){
// 	console.log(__dirname);
//     console.log('Server running on 3000...');
// });