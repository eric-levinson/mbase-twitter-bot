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

const stream = bot.stream('user', {
    with: 'user'
})

stream.on('follow', function (follower) {
  tool.followBack(follower)
})
