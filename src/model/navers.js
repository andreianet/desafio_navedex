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
// List the Navers
Navers.getAll = result => {
    con.query("SELECT * FROM navers", (err, res) => {
        if(err){
            console.log("error:", err);
            result(null, err);
            return;
        }
        console.log("navers: ", res);
        result(null, res);
    })
}
Navers.findById = (naversId, result) => {
    con.query(`SELECT * FROM navers WHERE id = ${naversId}`, (err, res) => {
        if(err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        console.log("Found navers: ", res);
        result(null, res);
    });
};
    


Navers.updateById = (id, navers, result) => {
    con.query("UPDATE navers SET name = ? WHERE id = ?",
    [navers.name, id],
        (err, res) => {
            if(err) {
                console.log("error:", err);
                result(null, err);
                return
            }
            if(res.affectedRows === 0) {
                //not found navers the ID
                result({Kind: "not found"}, null);
                return
            }
            console.log("Update navers: ", {id: id, ...navers});
            result(null, {id: id, ...navers});
        }
    );
};


Navers.remove = (id, result) => {
    con.query("DELETE FROM navers WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }  
      if (res.affectedRows == 0) {
        // not found Navers with the id
        result({ kind: "not_found" }, null);
        return;
      }  
      console.log("deleted navers with id: ", id);
      result(null, res);
    });
  };

module.exports = Navers;
    