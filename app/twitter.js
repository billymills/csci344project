var twitter = require('ntwitter');
var redis = require('redis');
var credentials = require('./credentials.js');

function runTwitter() {
                                                                                                                                                                                                               
var client = redis.createClient();

var t = new twitter({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret
});

t.stream(
    'statuses/filter',
    { track: ['asheville', 'beer', 'brewery', 'pisgah', 'brewing', 'craggie', 'mountain', 'wedge', 'highland']},
    function(stream) {
        stream.on('data', function(tweet) {
            	
//				client.flushall;
				if(tweet.text.match(/asheville/i) && tweet.text.match(/brewery/i)) {
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].expanded_url);
                 		client.zadd('beerLink',1, tweet.entities.urls[0].expanded_url);
               		}
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].url);
                 		client.zadd('beerLink',1, tweet.entities.urls[0].url);
               		}	
            	}
            	
            	if(tweet.text.match(/pisgah/i) && tweet.text.match(/brewing/i)) {
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].expanded_url);
                 		client.zadd('pisgahLink',1, tweet.entities.urls[0].expanded_url);
               		}
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].url);
                 		client.zadd('pisgahLink',1, tweet.entities.urls[0].url);
               		}	
            	}
            	
            	if(tweet.text.match(/craggie/i) && tweet.text.match(/mountain/i)) {
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].expanded_url);
                 		client.zadd('craggieLink',1, tweet.entities.urls[0].expanded_url);
               		}
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].url);
                 		client.zadd('craggieLink',1, tweet.entities.urls[0].url);
               		}	
            	}
            	
            	if(tweet.text.match(/wedge/i) && tweet.text.match(/brewery/i)) {
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].expanded_url);
                 		client.zadd('wedgeLink',1, tweet.entities.urls[0].expanded_url);
               		}
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].url);
                 		client.zadd('wedgeLink',1, tweet.entities.urls[0].url);
               		}	
            	}
            	
            	if(tweet.text.match(/highland/i) && tweet.text.match(/brewing/i)) {
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].expanded_url);
                 		client.zadd('highlandLink',1, tweet.entities.urls[0].expanded_url);
               		}
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].url);
                 		client.zadd('highlandLink',1, tweet.entities.urls[0].url);
               		}	
            	}
				
            	
        });
    }
);

};

module.exports = runTwitter;