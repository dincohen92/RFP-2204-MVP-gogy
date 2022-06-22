const Reviews = require('../db');

module.exports.getReviews = async(req, res) => {
  try {
    const reviews = await Reviews.find()
    res.send(reviews).status(200)
  } catch {
    res.status(404)
		res.send({ error: "reviews don't exist!" })
  }
};