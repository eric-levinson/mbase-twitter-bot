function favTweet() {
    return bot.post(
        'favorites/create', {
            id: tId
        },
        //error response code
        (err, response) => {
            if (err) {
                console.log('error: unable to favorite: (probably already favorited..)'),
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