const Projects = require('../db');

module.exports.postProject = async (req, res) => {
  try {
    const project = await Projects.findOne(
      {name: req.body.name}
    )
    if (!project){
      Projects.create(req.body)
      res.sendStatus(201)
    } else {
      alert("project already exists")
      res.sendStatus(401)
    }
  } catch {
    res.status(401)
		res.send({ error: "project doesn't exist!" })
  }
};