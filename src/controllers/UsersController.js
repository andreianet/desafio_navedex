const Users = require('../model/users');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');


exports.signup = async (req, res) => {     
    try {
        console.log(bcrypt);
        if(!req.body){
            res.status(400).send({
                message: "Content can not be empty"
            })
        } 
        //create users 
        var salt = await bcrypt.genSaltSync(10);
        var hashedPassword  = await bcrypt.hashSync(req.body.senha.toString(), salt);   
    
        const users = new Users({        
            email: req.body.email,
            senha:hashedPassword 
        })   
        //save users    
        Users.signup(users,(err, data) => {
            if(err) 
                res.status(500).send({
                message: 
                err.message || "Some error occurred while creating the Users."
            });
            else res.send(data);
        }) 
    } catch (error) {
        return res.status(500).json({error: message})
    }    
}
/*NÃO FINALIZADO -----------------------------------
exports.login = async (request, response) => {
    const {email, senha} = request.body

    //Verificar se Email existe:
    const user = await Users.findOne({email})
    if(!email){
        return response.status(404).json({error: "User not found"})
    }

    //Verificar se Senha existe:
    const matchPassword = await compare(senha, user.senha);
    if (!matchPassword) {
        return response.status(404).json({error: "Incorrect or email"});
    }

    const token = sign({}, process.env.SECRET_API,{
        subject: new String(user.id),
        expiresIn: "1d",
    });

    return response.json({
        token,
        user,
    });
}*/