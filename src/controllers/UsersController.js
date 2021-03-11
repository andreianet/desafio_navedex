const Users = require('../model/users');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {  
    
    console.log(bcrypt);
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty"
        })
    } 
    //create users 
    var salt = await bcrypt.genSaltSync(10);
    var hashedPassword  = await bcrypt.hashSync(req.body.senha.toString(), salt);;


    const users = new Users({        
        email: req.body.email,
        senha:hashedPassword 
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