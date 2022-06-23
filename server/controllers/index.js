const {getAllProjects} = require('./getAllProjects');
const {getAllVerifiedProjects} = require('./getAllVerifiedProjects');
const {getProjectById} = require('./getProjectById');
const {postProject} = require('./postProject');
const {getReviews} = require('./getReviews')


module.exports = {
  getAllProjects: getAllProjects,
  getAllVerifiedProjects: getAllVerifiedProjects,
  getProjectById: getProjectById,
  postProject: postProject,
  getReviews: getReviews,
}