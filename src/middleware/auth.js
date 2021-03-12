/*NÃO FINALIZADO --------------------------------------------
const {verify} = require('jsonwebtoken');

exports.login = async (request, response, next) => {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(401).json({error: "User not authorizated!"})
    }

    //Bearer token
    const [, token] = authHeader.split("");
    try {
        verify(token, process.env.SECRET_API);        

        return next();
    } catch (err) {
        return response.status(401).json({error: "Invalid Jwt Token"});
    }
}

*/