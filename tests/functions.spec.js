const { 
    createTweet,
    createStars
} = require("../js/functions.js");

describe(
    "createStars",
    function ()
    {
        // ½
        let tests = [
            {
                stars: "★★★★★",
                score: 100,
                message: "5 stars"
            },
            {
                stars: "★★★★",
                score: 80,
                message: "4 stars"
            },
            {
                stars: "★★★½",
                score: 70,
                message: "3 stars and a half stars"
            },
            {
                stars: "½",
                score: 10,
                message: "half a star"
            },
            {
                stars: "½",
                score: 7,
                message: "half a star"
            },
            {
                stars: "",
                score: 0,
                message: "no star"
            },
            {
                stars: "",
                score: 3,
                message: "no star"
            },
        ]

        for (let test of tests)
        {
            it(
                `creates ${test.message} for score ${test.score}`,
                function ()
                {
                    let stars = createStars(test.score)
                    expect(stars).toEqual(test.stars)
                }
            )
        }
    }
)

describe(
    "createTweet",
    function ()
    {
        let 
            title = "Movie Title",
            year = "2000",
            review = "It was great",
            score = "70"
        it(
            "should return correct tweet format (with year)",
            function ()
            {
                let payload = {
                    title,
                    year,
                    review,
                    score
                }              
                
                let tweet = createTweet(payload)
                expect(tweet).toEqual(`${title} (${year}): ${review} ★★★½`)
            }
        )
        it(
            "should return correct tweet format (without year)",
            function ()
            {            
                let payload = {
                    title,
                    review,
                    score
                }              
                
                let tweet = createTweet(payload)
                expect(tweet).toEqual(`${title}: ${review} ★★★½`)
            }
        )
    }
)