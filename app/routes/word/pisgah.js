/*
Billy Mills
CSCI 344
awesome.js
April 4, 2012
*/

var redis = require('redis');
var client = redis.createClient();

exports.index = function(req, res) {
	//client.zrevrange(['awesomeLink', 0, 0], function(error, linkresult) {
	client.zrevrange('pisgahLink', 0, 4, function(error, linkResult) { // 0, -1 works
		var linkArray = new Array();
		if (error) {
			console.log (error);
		}  //end if
		
		else if (linkResult) {
			for (i=0; i<5; i++) {
				if (linkResult[i]) {
					linkArray[i]=linkResult[i];
				} //end internal if
				else {
					linkResult[i] = "";
				} //end else
			} //end for		
		} //end else if		

		res.render('pisgah', {link0:linkResult[0],
									link1:linkResult[1],
									link2:linkResult[2],
									link3:linkResult[3],
									link4:linkResult[4],
									}); //end render
	});  //end client.zrevrange
}; //end exports.index