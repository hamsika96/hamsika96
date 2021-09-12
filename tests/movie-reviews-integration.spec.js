const MovieReviewsApp = require("../js/movie-reviews-app.js"); 

describe("MovieReviewsApp", function() {
  const reviews = [
    { title: "Star Wars", review: "Great, this film was", score: 77 },
    {
      title: "Star Wars The Force Awakens",
      review:
        "A long time ago in a galaxy far far away someone made the best sci-fi film of all time. Then some chap came along and basically made the same movie again",
      score: 50
    },
    {
      title: "Metropolis",
      review:
        "Another movie about a robot. Very strong futuristic look. But also very very old. Hard to understand what was happening because the audio was too low",
      score: 15
    },
    {
      title:
        "Dr. Strangelove or How I Learned to Stop Worrying and Love the Bomb",
      review: "Hilarious Kubrick satire",
      score: 100
    },
    { title: "Plan 9 from outer space", review: "So bad it's bad", score: 7 }
  ];

  const movies = [
    { title: "Star Wars", year: 1977 },
    { title: "Star Wars The Force Awakens", year: 2015 },
    {
      title:
        "Dr. Strangelove or How I Learned to Stop Worrying and Love the Bomb",
      year: 1964
    },
    { title: "Plan 9 from outer space", year: 1959 }
  ];

  describe("Tweets", function() {
    let tweets;

    beforeEach(function() {
      const movieReviewsApp = MovieReviewsApp(reviews, movies);
      tweets = movieReviewsApp.getTweets();
    });

    it("Formats the star wars review correctly", function() {
      expect(tweets[0]).toEqual("Star Wars (1977): Great, this film was ★★★★");
    });

    it("Formats the star wars: the force awakens review correctly", function() {
      expect(tweets[1]).toEqual(
        "Star Wars The Force Awake (2015): A long time ago in a galaxy far far away someone made the best sci-fi film of all time. Then some chap ★★½"
      );
    });

    it("Formats the Metropolis review correctly", function() {
      expect(tweets[2]).toEqual(
        "Metropolis: Another movie about a robot. Very strong futuristic look. But also very very old. Hard to understand what was happening becaus ★"
      );
    });

    it("Formats the Dr. Strangelve review correctly", function() {
      expect(tweets[3]).toEqual(
        "Dr. Strangelove or How I Learned to Stop Worrying and Love the Bomb (1964): Hilarious Kubrick satire ★★★★★"
      );
    });

    it("Formats the Plan 9 from outer space review correctly", function() {
      expect(tweets[4]).toEqual(
        "Plan 9 from outer space (1959): So bad it's bad ½"
      );
    });
  });
});
