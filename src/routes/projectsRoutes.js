module.exports = app => {
        const projects = require('../controllers/projectsController.js')

//@description: Create a new project
app.post('/projects', projects.create );

//@description: Retrieve all project
app.get('/projects', projects.index);

//@description: Retrieve projectId
app.get('/projects/:projectId', projects.findOne);

//Search name
app.get('/projects/index/:name', projects.findName); //NÃO ESTÀ TRAZENDO NADA

//@description: Update a Projects with projectId
app.put('/projects/:projectId', projects.update);

//@description: Delete a Project with projectId
app.delete('/projects/:projectId', projects.delete);




};