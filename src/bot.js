require('babel-polyfill')
const config = require('./config')
const Twit = require('twit')
const bot = new Twit(config)
tool = require('./sub/tweetinteract.js')

//gets member list into array then forces to string
bot.get('lists/members', {
    slug: 'rt-list',
    owner_screen_name: 'mbase_eric'
}, (err, data, response) => {
    if (err) {
        console.log(err)
    } else {
    	//array of user id's
        uData = []
        data.users.forEach(u => {
            uData.push(u.id_str)
        })
        uList = uData.toString()
        //console.log(uList)
        //stream of tweets from my list starts here.
        stream = bot.stream('statuses/filter', {
            follow: `${uList}`
        })
        stream.on('tweet', t => {
        	//not real sure why this is sCloud but it shall remain for pull tweet urls..
        	//the 't.entities.urls' is an array in an object in an array, lovely, i know..
            sCloud = t.entities.urls
            function findUrl(eurl) {
                return eurl.url
            }
            sObj = sCloud.find(findUrl)

            //Does tweet contain a URL?
            if (sCloud.length > 0) {
                sArray = Object.values(sObj)
                //tweet info
                sString = sArray.toString()
                tId = t.id_str
                tText = t.text
                tName = t.user.screen_name

                //user cross ref info
                idString = uData.toString()
                idSimple = t.user.id_str

                //url query parameters
                rtArray = ['soundcloud','youtu.be','youtube','lilpeep','nojumper','itunes','spotify','instagram']
                favArray = ['twimg','twitter.com/twitter/','twitter']
                //rt's for only list members
                if (idString.indexOf(idSimple) >= 0 && rtArray.some(function(v) { return sString.indexOf(v) >= 0 })) {
                    tool.favTweet(),
                    tool.reTweet()
                }
                //favs for all
                else if (rtArray.some(function(v) { return sString.indexOf(v) >= 0 }) || favArray.some(function(v) { return sString.indexOf(v) >= 0 })) {
                    tool.favTweet()
                }
            }
        })
    }
})
