require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
//parse request -content type
app.use(bodyParser.urlencoded({
    extended: true
}))

//rotas
app.get("/", (req, res) => {
    res.json({message: "Welcome NaveDex´s"});
});

require('./routes/projectsRoutes.js')(app);
require('./routes/naversRoutes.js')(app);


//set PORT, listen
const PORT = process.env.PORT || 3000 ;
app.listen(PORT, () => console.log(
    `Server started on port ${PORT}.`)
);

//module.exports = app;

