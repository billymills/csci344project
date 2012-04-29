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
    { track: ['barack', 'obama']},
    function(stream) {
        stream.on('data', function(tweet) {
            	
				client.flushall;
				if(tweet.text.match(/barack/i) && tweet.text.match(/obama/i)) {
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].expanded_url);
                 		client.zadd('beerLink',1, tweet.entities.urls[0].expanded_url);
               		}
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].url);
                 		client.zadd('beerLink',1, tweet.entities.urls[0].url);
               		}	
            	}
				
            	
        });
    }
);

};

module.exports = runTwitter;