module.exports = app => {
const navers = require('../controllers/naversController')

//@description: Create a new Navers
app.post('/navers', navers.store);

//@description: List a Navers(Todos)
app.get('/navers', navers.index);

//@description:
//app.get('/navers/:naversId', navers.findOne);
//@description: Search name (Navers especifico)
app.get('/navers/:NameNavers', navers.find)

//@description: Listar naversxproject
app.get('/navers/project/:name', navers.show)

//@description: Update a Navers
app.put('/navers/:naversId', navers.update);

//@description: Delete a Navers
app.delete('/navers/:naversId', navers.delete);
}