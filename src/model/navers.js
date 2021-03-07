const con = require('./db.js')

//constructor
const Navers = function(naver){
    this.name = naver.name;
    this.birthdate = naver.birthdate;
    this.admission_date = naver.admission_date;
    this.job_role = naver.job_role;
    this.projects = naver.projects;
};

Navers.create = (newNavers, result) => {
    con.query("INSERT INTO navers SET ? ", newNavers,(err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        console.log("Created new navers:", {id: res.insertId, ...newNavers});
        result(null, {id: res.insertId, ...newNavers});
    })
}

module.exports = Navers;
    