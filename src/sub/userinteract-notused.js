module.exports = {
	followBack: function () {
		const config = require('../config')
	    const Twit = require('twit')
	    const bot = new Twit(config)
	    return bot.post(
	        'friendships/create', {
	            user_id: u.id
	        },
	        //error response code
	        (err, response) => {
	            if (err) {
	                console.log('error: unable to follow user'),
	                console.log(err)
	                console.log('display name:', u.name),
	                console.log('handle:', u.screen_name),
	                console.log('\n')
	            }
	            //success code
	            else {
	                console.log('successfully followed user')
	                console.log('display name:', u.name),
	                console.log('handle:', u.screen_name),
	                console.log('\n')
	            }
	        }
		)
	}
}