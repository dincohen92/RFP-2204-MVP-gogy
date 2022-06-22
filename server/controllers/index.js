const {getProjectById} = require('./getProjectById');
const {postProject} = require('./postProject');
const {getAllProjects} = require('./getAllProjects');
const {getReviews} = require('./getReviews')


module.exports = {
  getProjectById: getProjectById,
  getAllProjects: getAllProjects,
  postProject: postProject,
  getReviews: getReviews,
}