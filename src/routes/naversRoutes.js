module.exports = app => {
const navers = require('../controllers/naversController')

//@description: Create a new Navers
app.post('/navers', navers.create);

//@description:
app.get('/navers', navers.findAll);

//@description:
//app.get('/navers/:naversId', navers.findOne);

//@description: Search name (Navers)
app.get('/navers/:NameNavers', navers.find)

app.get('/navers/project/:name', navers.findByProjects)

//@description:
app.put('/navers/:naversId', navers.update);

//@description:
app.delete('/navers/:naversId', navers.delete);
}