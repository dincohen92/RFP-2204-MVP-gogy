const {getAllProjects} = require('./getAllProjects');
const {getAllVerifiedProjects} = require('./getAllVerifiedProjects');
const {getProjectById} = require('./getProjectById');
const {postProject} = require('./postProject');
const {getReviews} = require('./getReviews')
const {deleteProject} = require('./deleteProject');
const {updateProject} = require('./updateProject')

module.exports = {
  getAllProjects: getAllProjects,
  getAllVerifiedProjects: getAllVerifiedProjects,
  getProjectById: getProjectById,
  postProject: postProject,
  getReviews: getReviews,
  deleteProject: deleteProject,
  updateProject: updateProject
}