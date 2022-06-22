const Projects = require('../db');

module.exports.getAllProjects = async(req, res) => {
  try {
    const projects = await Projects.find()
    console.log(projects)
    res.send(projects).status(200)
  } catch {
    res.status(404)
		res.send({ error: "projects dont exist!" })
  }
};