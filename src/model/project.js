const con = require('./db.js')

//constructor
const Projects = function(project){
    this.name = project.name;
    this.navers = project.navers;
};
Projects.create = (newProjects,result) => {
    con.query("INSERT INTO projects SET ? ", newProjects,(err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        console.log("Created new project:", {id: res.insertId, ...newProjects});
        result(null, {id: res.insertId, ...newProjects});
    })
}
Projects.getAll = result => {
    con.query("SELECT * FROM projects", (err, res) => {
        if(err) {
            console.log("error:", err);
            result(null, err);
            return;
        }
        console.log("projects: ", res);
        result(null, res);
    })
};
Projects.findById = (projectId, result) => {
    con.query(`SELECT projects.id, projects.name, projects.navers AS projects, navers.id, navers.name, navers.birthdate, navers.admission_date, navers.job_role AS navers FROM projects INNER JOIN navers ON projects.id = navers.id;`, (err, res) => {
        if(err) {
            console.log("error:", err);
            console.log(result);
            result(err, null);
            return;
        }
        console.log("Found projects: ", res);
        result(null, res);
    })
};
Projects.findByName = (name,err) => {
    con.query(`SELECT * FROM projects WHERE name = ${name}`, (res, result) => {
        if(err) {
            log("error:", err);
            result(err, null);
            return;
        }
        console.log("Found name projects: ", res);
        result(null, res);
        
    })
};
Projects.updateById = (id, project, result) => {
    con.query("UPDATE projects SET name = ? WHERE id = ?",
    [project.name, id],
        (err, res) => {
            if(err) {
                console.log("error:", err);
                result(null, err);
                return
            }
            if(res.affectedRows === 0) {
                //not found projects the ID
                result({Kind: "not found"}, null);
                return
            }
            console.log("Update projects: ", {id: id, ...project});
            result(null, {id: id, ...project});
        }
    );
};
Projects.remove = (id, result) => {
    con.query("DELETE FROM projects WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }  
      if (res.affectedRows == 0) {
        // not found Project with the id
        result({ kind: "not_found" }, null);
        return;
      }  
      console.log("deleted projects with id: ", id);
      result(null, res);
    });
  };

module.exports = Projects;