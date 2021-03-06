const con = require('./db.js');
//const hash = require('bcrypt');


const Users = function(user) {
    this.email = user.email;
    this.senha = user.senha;
};

Users.signup = (newUsers, result) => {
    con.query("INSERT INTO users SET ? ", newUsers,(err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        console.log("Created new User:", {id: res.insertId, ...newUsers});
        result(null, {id: res.insertId, ...newUsers});
    })
}

module.exports = Users