require('babel-polyfill')
const config = require('./config')
const Twit = require('twit')
const bot = new Twit(config)
tool = require('./sub/tweetinteract.js')

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
        stream.on('tweet', t => {

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
                    tool.favTweet(),
                    tool.reTweet()
                }
                else if (sString.indexOf('youtu.be') >= 0){
                    tool.favTweet(),
                    tool.reTweet()
                }
                else if (sString.indexOf('youtube') >= 0){
                    tool.favTweet(),
                    tool.reTweet()
                }
                else if (sString.indexOf('lilpeep') >= 0){
                    tool.favTweet(),
                    tool.reTweet()
                }
                else if (sString.indexOf('nojumper') >= 0){
                    tool.favTweet(),
                    tool.reTweet()
                }
                else if (sString.indexOf('itunes') >= 0){
                    tool.favTweet(),
                    tool.reTweet()
                }
                else if (sString.indexOf('spotify') >= 0){
                    tool.favTweet(),
                    tool.reTweet()
                }
                else if (sString.indexOf('twimg') >= 0){
                    tool.favTweet()
                }
                else if (sString.indexOf('twitter.com/twitter/') >= 0){
                    tool.favTweet()
                }
            }
        })
    }
})

bot.get
