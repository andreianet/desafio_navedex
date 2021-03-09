const Users = require('../model/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {    
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty"
        })
    } 
    //create users   
    const salt = await bcrypt.genSalt(8)
    const passhash =  bcrypt.hashSync(req.body.senha, salt); //ERROR AQUI   
    const users = new Users({        
        email: req.body.email,
        senha: result.passhash
    })   
    //save users    
    Users.signup(users,(err, data) => {
        if(err) 
            res.status(500).send({
            message: 
            err.message || "Some error occurred while creating the users."
        });
        else res.send(data);
    })
}
