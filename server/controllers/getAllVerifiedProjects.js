const Projects = require('../db');

module.exports.getAllVerifiedProjects = async (req, res) => {
  try {
    const projects = await Projects.find({verified: true});
    res.send(projects).status(200);
  } catch {
    res.status(404)
		res.send({ error: "projects dont exist!" })
  }
};