const Navers = require('../model/navers.js');

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
}
