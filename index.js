const express = require('express')
const app = express();
const models = require("./models/index");
var bodyParser = require('body-parser')

app.use(bodyParser.json())

models.sequelize.sync().then(()=>{
    console.log('bdd synchorinise');
})


app.get("/", (req,res)=>{
    res.send('Hello')
})

const logement_routes = require('./routes/logementRoutes')
app.use('/logement', logement_routes)

const client_routes = require('./routes/clientRoutes')
app.use('/client', client_routes)

app.listen(3000, ()=>{
    console.log("lancer sur 3000");
})