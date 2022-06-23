const Projects = require('../db');

module.exports.getProjectById = async (req, res) => {
  try {
    const project = await Projects.findOne(
      {_id: req.params.project_id}
    )
    res.send(project)
    res.status(200)
  } catch {
    res.status(404)
		res.send({ error: "project doesn't exist!" })
  }
};