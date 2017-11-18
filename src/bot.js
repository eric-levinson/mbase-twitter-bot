require('babel-polyfill')
const config = require('./config')
const Twit = require('twit')


const bot = new Twit(config)

//gets member list into array then forces to string
//i don't want to talk about streaming.
bot.get('lists/members', {
    slug: 'rt-list',
    owner_screen_name: 'mbase_eric'
}, (err, data, response) => {
    if (err) {
        console.log(err)
    } else {
        uData = []
        data.users.forEach(u => {
            uData.push(u.id_str)
        })
        uList = uData.toString()

        stream = bot.stream('statuses/filter', {
            follow: `${uList}`
        })
        function favTweet() {
            return bot.post(
                'favorites/create', {
                    id: tId
                },
                //error response code
                (err, response) => {
	                if (err) {
	                    console.log('error: unable to favorite: (probably already favorited..)'), //s.id, s.user.screen_name,
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
        }
        function reTweet() {
            return bot.post(
                'statuses/retweet/:id', {
                    id: tId
                },
                //error response code
                (err, response) => {
	                if (err) {
	                    console.log('error: unable to retweet: (probably already retweeted..)') //s.id, s.user.screen_name,
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
        }
        stream.on('tweet', t => {
            /* 
            console.log(`\n`)
            console.log(`${t.text}\n`)
            console.log(`${t.created_at}\n`)
            console.log(`${t.user.screen_name}\n`)*/
            //console.log(t.entities.urls)

            sCloud = t.entities.urls

            function findUrl(eurl) {
                return eurl.url
            }
            sObj = sCloud.find(findUrl)
            //console.log(sObj)
            if (sCloud.length > 0) {
                sArray = Object.values(sObj)
                //console.log(sArray)
                sString = sArray.toString()
                tId = t.id_str
                tText = t.text
                tName = t.user.screen_name


                if (sString.indexOf('soundcloud') >= 0){
                    favTweet(),
                    reTweet()
                }
                else if (sString.indexOf('youtu.be') >= 0){
                    favTweet(),
                    reTweet()
                }
                else if (sString.indexOf('youtube') >= 0){
                    favTweet(),
                    reTweet()
                }
                else if (sString.indexOf('lilpeep') >= 0){
                    favTweet(),
                    reTweet()
                }
                else if (sString.indexOf('nojumper') >= 0){
                    favTweet(),
                    reTweet()
                }
                else if (sString.indexOf('itunes') >= 0){
                    favTweet(),
                    reTweet()
                }
                else if (sString.indexOf('spotify') >= 0){
                    favTweet(),
                    reTweet()
                }
                 else if (sString.indexOf('twitter') >= 0){
                    favTweet()
                }
            }
        })
    }
})


//stream test..
/*const stream = bot.stream('statuses/filter', { follow: 'list:mbase_eric/rt-list' });

stream.on('tweet', t => {
  console.log(`${t.text}\n`)
})*/