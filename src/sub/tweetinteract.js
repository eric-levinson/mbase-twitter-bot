module.exports = {
	favTweet: function () {
		const config = require('../config')
	    const Twit = require('twit')
	    const bot = new Twit(config)
	    return bot.post(
	        'favorites/create', {
	            id: tId
	        },
	        //error response code
	        (err, response) => {
	            if (err) {
	                console.log('error: unable to favorite: (probably already favorited..)'),
	                //console.log(err)
	                console.log(tText),
	                console.log('author:', tName),
	                console.log('tweet id:', tId),
	                console.log('\n')
	            }
	            //success code
	            else {
	                console.log('successfully favorited tweet:')
	                console.log(tText),
	                console.log('author:', tName),
	                console.log('tweet id:', tId),
	                console.log('\n')
	            }
	        }
		)
	},
	reTweet: function () {
		const config = require('../config')
	    const Twit = require('twit')
	    const bot = new Twit(config)
	    return bot.post(
	        'statuses/retweet/:id', {
	            id: tId
	        },
	        //error response code
	        (err, response) => {
	            if (err) {
	                console.log('error: unable to retweet: (probably already retweeted..)')
	                //console.log(err)
	                console.log(tText),
	                console.log('author:', tName),
	                console.log('tweet id:', tId),
	                console.log('\n')
	            }
	            //success code
	            else {
	                console.log('successfully retweeted tweet:')
	                console.log(tText),
	                console.log('author:', tName),
	                console.log('tweet id:', tId),
	                console.log('\n')
	            }
	        }
		)
	},
	followBack: function(follower) {
		const config = require('../config')
	    const Twit = require('twit')
	    const bot = new Twit(config)

		followerUser = follower.source.id
		followers_count = follower.source.followers_count
		friends_count = follower.source.friends_count
		verified = follower.source.verified
		fRatio = followers_count / friends_count


		if (fRatio >= 1 || verified === true){
			return bot.post(
		        'friendships/create', {
		            user_id: followerUser
		        },
		        //error response code
		        (err, response) => {
		            if (err) {
		                console.log('error: unable to follow user'),
		                console.log(err)
		                console.log('display name:', follower.source.name),
		                console.log('handle:', follower.source.screen_name),
		                console.log('\n')
		            }
		            //success code
		            else {
		                console.log('successfully followed user')
		                console.log('display name:', follower.source.name),
		                console.log('handle:', follower.source.screen_name),
		                console.log('\n')
		            }
		        }
	        )
		}
	},
    unFollow: function (data) {
        const config = require('../config')
	    const Twit = require('twit')
	    const bot = new Twit(config)
        
        return bot.post(
            'friendships/destroy', {
                user_id: data
            },
            (err, response) => {
                if(err) {
                    console.log('error: unable to unfollow user'),
                    console.log(err),
                    console.log('id: ', data),
                    console.log('\n')
                }
                else {
                    console.log('successfully unfollowed user'),
                    console.log('id: ', data),
                    console.log('\n')
                }
            }
        )
    }
}