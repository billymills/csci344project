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
    { track: ['awesome', 'cool', 'gnarly', 'groovy', 'rad']},
    function(stream) {
        stream.on('data', function(tweet) {
            	
				client.flushall;
				if(tweet.text.match(/awesome/)) {
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].expanded_url);
                 		client.zadd('awesomeLink',1, tweet.entities.urls[0].expanded_url);
               		}
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].url);
                 		client.zadd('awesomeLink',1, tweet.entities.urls[0].url);
               		}	
            	}

            	if(tweet.text.match(/cool/)) {
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].expanded_url);
                 		client.zadd('coolLink',1, tweet.entities.urls[0].expanded_url);
               		}
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].url);
                 		client.zadd('coolLink',1, tweet.entities.urls[0].url);
               		}	
            	}
            	
            	if(tweet.text.match(/gnarly/)) {
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].expanded_url);
                 		client.zadd('gnarlyLink',1, tweet.entities.urls[0].expanded_url);
               		}
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].url);
                 		client.zadd('gnarlyLink',1, tweet.entities.urls[0].url);
               		}	
            	}
            	
            	if(tweet.text.match(/groovy/)) {
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].expanded_url);
                 		client.zadd('groovyLink',1, tweet.entities.urls[0].expanded_url);
               		}
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].url);
                 		client.zadd('groovyLink',1, tweet.entities.urls[0].url);
               		}	
            	}
            	
            	if(tweet.text.match(/rad/)) {
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].expanded_url);
                 		client.zadd('radLink',1, tweet.entities.urls[0].expanded_url);
               		}
               		if(tweet.entities.urls[0]) {
                 		console.log(tweet.entities.urls[0].url);
                 		client.zadd('radLink',1, tweet.entities.urls[0].url);
               		}	
            	}
            	
        });
    }
);

};

module.exports = runTwitter;