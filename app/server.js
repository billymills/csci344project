var http = require('http');
var redis = require('redis');
var client = redis.createClient();

http.createServer(function (req, res) {
	/*
	client.get('awesome', function (error, awesomeCount) {
	if(error) {
		awesomeCount = error;
	}
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('awesomeCount:' + awesomeCount + );
	}
	*/

	client.mget(['awesome','cool','rad','gnarly', 'groovy'], function (error, response){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('awesomeCount:'+ response[0]+'<br>coolCount:'+ response[1]+'<br>radCount:'+ response[2]+'<br>gnarlyCount:'+response[3]+'<br>groovyCount:'+response[4]);
	});

	//client.get('awesome', function (error, awesomeCount) {
    //	res.writeHead(200, {'Content-Type': 'text/html'});
    //	res.end('awesomeCount:'+ awesomeCount);
	//});
}).listen(3000);

console.log('Server running on port 3000');
