module.exports = app => {
    const user = require('../controllers/UsersController');


app.post('/users', user.create);

}