const Project = require('../model/project')


exports.create = (req, res) => {
  try {
    if(!req.body){
      res.status(400).send({
          message: "Content can not be empty"
      });
  }
  //create project
  const projects = new Project({
      name: req.body.name,
      navers: req.body.navers

  });
  //save projects    
  Project.create(projects,(err, data) => {
      if(err) 
          res.status(500).send({
          message: 
          err.message || "Some error occurred while creating the project."
      });
      else res.send(data);
  });
  } catch (error) {
      return res.status(500).json({error: message})
  }
   
}
// List Projects
exports.index = (req, res) => {
  try {
    Project.getAll((err, data) => {
        if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving projects."
      });
    else res.send(data);
  });
  } catch (error) {
      return res.status(500).json({error: message})
  }
    
};

exports.findOne = (req, res) => {
  try {
     Project.findById(req.params.projectId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Projects with id ${req.params.projectId}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving Projects with id " + req.params.projectId
              });
            }
        } else res.send(data);
    });
  } catch (error) {
    return res.status(500).json({error: message})
  }
   
};

exports.findName = (req, res) => {
  try {
     Project.findByName(req.params.name, (err, data) => {
    if(err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Projects with name ${req.params.name}.`
        });
      }else{
        res.status(500).send({
          message: "Error Project Name " + req.params.name
        });
      }      
    }else res.send(data)
  })
  } catch (error) {
    return res.status(500).json({error: message})
  } 
};

//UPDATE a PROJECTS -> ID
exports.update = (req, res) => {
    //validate req
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);

    Project.updateById(
        req.params.projectId,
        new Project(req.body),
        (err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.status(404).send({
                  message: `Not found Projects with id ${req.params.projectId}.`
                });
              }else {
                res.status(500).send({
                  message: "Error updating Projects with id " + req.params.projectId
                });
              }
            }else res.send(data);
        }
    ) 
};

//DELETE PROJECTS FROM id
exports.delete = (req, res) => {
  try {
    Project.remove(req.params.projectId, (err, data) => {
      if(err) {
        if(err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Projects with id ${req.params.projectId}.`
          });
        }else {
          res.status(500).send({
            message: "Could not delete Project with id " + req.params.projectId
          });
        }
      }else res.send({ message: `Projects was deleted successfully!` });
    });
  }catch(error) {
    return res.status(500).json({error: message})
  }   
};
