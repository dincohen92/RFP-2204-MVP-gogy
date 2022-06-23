const Projects = require('../db');

module.exports.getProjectById = async (req, res) => {
  try {
    const project = await Projects.findOne(
      {objectId: req.body.objectId}
    )
    res.send(project).status(200)
  } catch {
    res.status(404)
		res.send({ error: "project doesn't exist!" })
  }
};