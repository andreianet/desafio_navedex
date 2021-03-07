module.exports = app => {
const navers = require('../controllers/naversController')

//@description: Create a new Navers
app.post('/navers', navers.create);

}