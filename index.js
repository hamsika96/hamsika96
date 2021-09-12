const MovieReviewsApp = require("./js/movie-reviews-app.js");

const moviesJson = require("./assets/movies.json");
const reviewsJson = require("./assets/reviews.json");

// call the app, passing the data containing JSON
const movieReviewsApp = MovieReviewsApp(reviewsJson, moviesJson);

// retrieve tweets from the app
const tweets = movieReviewsApp.getTweets();

// pretty print the output
console.log("Tweets:");
console.log("-------");
console.log(tweets.join("\n")) ;
