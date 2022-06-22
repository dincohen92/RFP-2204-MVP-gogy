const Projects = require('../db');

module.exports.getProjectById = async (req, res) => {
  try {
    const project = await Projects.findOne(
      {objectId: req.body.objectId}
    )
    console.log(project)
    res.send({
      name: project.name,
      description: project.description,
      groupSize: project.groupSize,
      age: project.age,
      materials: project.materials,
      tools: project.tools,
      hazards: project.hazards,
      tags: project.tags,
      comments: project.comments
    }).status(200)
  } catch {
    res.status(404)
		res.send({ error: "project doesn't exist!" })
  }
};