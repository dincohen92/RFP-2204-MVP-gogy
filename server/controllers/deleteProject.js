const Projects = require('../db');

module.exports.deleteProject = async (req, res) => {
  try {
    console.log(req.params.project_id)
    await Projects.deleteOne(
      {_id: req.params.project_id}
    )
    res.sendStatus(200)
  } catch {
    res.status(400)
		res.send({ error: "project not deleted" })
  }
};