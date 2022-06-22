const express = require('express');
const app = express();
const controllers = require('./controllers')
const bodyParser = require('body-parser');

const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static(__dirname + '/../client/dist'));

app.get('/gogy/projects', controllers.getAllProjects)

app.get('/gogy/projects/:project_id', controllers.getProjectById);

app.post('/gogy/projects', controllers.postProject);

app.get('/gogy/projects/:project_id/reviews', controllers.getReviews)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});