var
    createTweet,
    createStars

createTweet = function ({ 
    title,
    year,
    review,
    score
  })
{
    let stars = createStars(score)
    year = year 
        ? ` (${year})`
        : ""
    return `${title}${year}: ${review} ${stars}`
}
module.exports.createTweet = createTweet



createStars = function (score)
{
    let new_score = Math.round(score / 10)
    let full_stars = "★".repeat(new_score/2)
    let half_star = new_score % 2 ? "½" : ""
    let stars = full_stars + half_star

    return stars
}
module.exports.createStars = createStars