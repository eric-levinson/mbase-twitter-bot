require('babel-polyfill')
const config = require('./config')
const Twit = require('twit')
const bot = new Twit(config)
tool = require('./sub/tweetinteract.js')

/*const stream = bot.stream('statuses/filter', {
  follow: '837387713355603969'
});

stream.on('data', function (data) {
    console.log(data)
    followBack()
})*/

const stream = bot.get('friends/ids', {
    screen_name: 'mbase_eric'
}, (err, data, response) => {
    if (err) {
        console.log(err)
    } else {
        idArray = data.ids
        
        unFollowList = idArray.forEach( function(data) {
            tool.unFollow(data)
        })
    }
})