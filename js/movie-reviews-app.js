const { 
  createTweet,
  createStars
} = require("./functions.js")

const MovieReviewsApp = function(reviews, movies) {
  let tweets = [];


  for (let review of reviews)
  {
    let movie = movies.find( movie => movie.title === review.title )

    let payload = {
      review: review.review,
      score: review.score,
      title: review.title,
      year: movie && movie.year || null,
    }

    let tweet = createTweet(payload)
    // shorten title to 25
    if (tweet.length > 140)
    {
      payload.title = payload.title.slice(0, 25)
      tweet = createTweet(payload)
    }
    
    // if tweet is still greater than 140, then shorten review
    if (tweet.length > 140)
    {
      // get stars for appending
      let stars = createStars(payload.score)
      
      if (stars.length)
      {
        // extra 1 for space
        tweet = tweet.slice(0, 140-stars.length-1) + " " + stars
      }
      // if no stars, then no extra trimming needed
      else
      {
        tweet = tweet.slice(0, 140)
      }
    }

    tweets.push(tweet)
  }

  return {
    getTweets: function() {
      return tweets;
    }
  };
};

module.exports = MovieReviewsApp;
