const Projects = require('../db');

module.exports.updateProject = async (req, res) => {
  console.log(req.query.verified)
  try {
      await Projects.updateOne(
        {_id: req.params.project_id},
        {verified: req.query.verified,
        featured: req.query.featured,
        flagged: req.query.flagged}
      )
      res.sendStatus(201)
  } catch {
    res.status(401)
		res.send({ error: "error updating" })
  }
};