require('./src/unfollow-bot')
//test for tweets
/*sString = 'meh is the best'

rtArray = ['soundcloud','youtu.be','youtube','lilpeep','nojumper','itunes','spotify','instagram','facebook']
favArray = ['twimg','twitter.com/twitter/','twitter','t.co']




idUser = 3168133467
idString = '3168133467,3060237649,2699105311,2647999849,2586341939,2574090878,2202205950,1958188166,1859316974,1599608046,1365982178,936204583,618425337,526765568,480969221,442360071,400333494,352129069,350096943,319445464'

idSimple = idUser.toString()

if (idString.indexOf(idSimple) >= 0 && rtArray.some(function(v) { return sString.indexOf(v) >= 0 })) {
    console.log ('rt - both list users working...')
}
else if (idString.indexOf(idSimple) >= 0 && favArray.some(function(v) { return sString.indexOf(v) >= 0 })) {
    console.log ('fav -both list users working...')
}
else if (rtArray.some(function(v) { return sString.indexOf(v) >= 0 }) || favArray.some(function(v) { return sString.indexOf(v) >= 0 })) {
    console.log ('fav all mention list users working...')
}
else {
    console.log ('tweet is garbage and does not contain content..')
}*/


//user follow algorithm testing..
/*
followers_count = 21
friends_count = 10

verified = false

fRatio = followers_count / friends_count

if (fRatio >= 1 || verified === true)
{
    console.log('person followed..')
}
else {
    console.log('person not followed..')
}

require('babel-polyfill')
const config = require('./config')
const Twit = require('twit')
const bot = new Twit(config)
tool = require('./sub/tweetinteract.js')

const stream = bot.stream('statuses/filter', {
  follow: '837387713355603969'
});

stream.on('data', function (data) {
    console.log(data)
    followBack()
})

const stream = bot.stream()

stream.on('follow', function (followMsg) {
  console.log(followMsg)
})
*/

