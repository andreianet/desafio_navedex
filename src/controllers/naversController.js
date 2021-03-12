const Navers = require('../model/navers.js');
const Projects = require('../model/project');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty"
        });
    }
    const nave = new Navers({
        name: req.body.name,
        birthdate : req.body.birthdate,
        admission_date: req.body.admission_date,
        job_role: req.body.job_role,
        projects: req.body.projects

    })
    Navers.create(nave, (err, data) => {
        if (err) 
            res.status(500).send({
            message: 
                err.message || "Some error occurred while creating the Navers."
            })
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Navers.getAll((err, data) => {
       if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving all the Navers."
            })
        else res.send(data);
    });
}

/*exports.findOne = (req, res) => {
    Navers.findById(req.params.naversId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Navers with id ${req.params.naversId}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving Navers with id " + req.params.naversId
              });
            }
        } else res.send(data);
    });
};*/

exports.find = (req, res) => {
  Navers.findByName(req.params.name,(err, data) => {
      if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Navers with ${req.params.name}.`
            });
          } else {
            res.status(500).send({
              message: `Error retrieving Navers ${req.params.name }`
            });
          }
      } else res.send(data);
  });
};

exports.update = (req, res) => {
    //validate req
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);

    Navers.updateById(
        req.params.naversId,
        new Navers(req.body),
        (err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.status(404).send({
                  message: `Not found Navers with id ${req.params.naversId}.`
                });
              } else {
                res.status(500).send({
                  message: "Error updating Navers with id " + req.params.naversId
                });
              }
            } else res.send(data);
        }
    ) 
};

//DELETE NAVERS FROM id
exports.delete = (req, res) => {
    Navers.remove(req.params.naversId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Navers with id ${req.params.naversId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Navers with id " + req.params.naversId
          });
        }
      } else res.send({ message: `Navers was deleted successfully!` });
    });
  };

  exports.findByProjects = (req, res) => {
    Navers.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Navers with ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: `Error retrieving Navers + ${req.params.id }`
              });
            }
        } else {
          const projectId = data.projects;
          console.log(projectId)

          const infoProjects = Projects.findById(projectId);
          console.log(infoProjects)
          const response = {
            ...data,
            infoProjects
          }

          res.send(response);
        }
    });
  };