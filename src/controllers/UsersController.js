const Users = require('../model/users');

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty"
        });
    }
    //create users
    const users = new Users({
        email: req.body.email,
        senha: req.body.senha,

    });
    //save users    
    Users.create(users,(err, data) => {
        if(err) 
            res.status(500).send({
            message: 
            err.message || "Some error occurred while creating the user."
        });
        else res.send(data);
    })
}