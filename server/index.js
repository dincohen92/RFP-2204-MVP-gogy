const express = require('express');
const app = express();
const controllers = require('./controllers')
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 8080;

app.use(express.json());
app.use(cors({origin:["http://localhost:3000"]}))

app.get('/gogy/projects', controllers.getAllProjects)

app.get('/gogy/projects/verified', controllers.getAllVerifiedProjects)

app.get('/gogy/projects/:project_id', controllers.getProjectById);

app.post('/gogy/projects', controllers.postProject);

app.get('/gogy/projects/:project_id/reviews', controllers.getReviews)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});