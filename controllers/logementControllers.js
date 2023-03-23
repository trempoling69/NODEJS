const models = require("../models/index");
const Logement = models.Logement

const getAllLogements = (req,res) => {
    Logement.findAll().then((logement)=>{
        res.json(logement)
    })
}

//*EXEMPLE DE JSON A ENVOYE AVEC POSTMAN POUR TESTER
// {
//     "nomCommune": "Confluence",
//     "quartier":"lyon2",
//     "type":"appartement",
//     "signataire":2, //ID DU CLIENT
//     "surface":50,
//     "adresse": "80 rue des petits oiseaux",
//     "loyer": 500
// }
const createLogement = (req,res)=>{
    Logement.create({
        nomCommune: req.body.nomCommune,
        quartier: req.body.quartier,
        type: req.body.type,
        signataire: req.body.signataire,
        surface: req.body.surface,
        adresse: req.body.adresse,
        loyer: req.body.loyer,
    }).then((result)=>{
        res.send("Logement créé")
    })
}

const logementParClient = (req,res) => {
    const client = req.params.client
    Logement.findAll({
        where : {
            signataire: parseInt(client)
        }
    }).then((logement)=>{
        res.json(logement)
    })
}

//*EXEMPLE DE MODIF 
// {
//     "nomCommune": "Confluence",
//     "quartier":"lyon2",
//     "type":"appartement",
//     "signataire":"jeffrey",
//    "surface":57,
//     "adresse": "80 rue des petits oiseaux",
//     "loyer": 500
// }
const majlogement = (req,res) => {
    const idLogement = parseInt(req.params.idLogement)
    Logement.update({
        nomCommune: req.body.nomCommune,
        quartier: req.body.quartier,
        type: req.body.type,
        signataire: req.body.signataire,
        surface: req.body.surface,
        adresse: req.body.adresse,
        loyer: req.body.loyer,
    }, {
        where: {id:idLogement}
    }).then(()=>{
        res.send('logement modifié')
    })
}

const suppLogement = (req,res) => {
    const idLogement = req.params.idLogement
    Logement.destroy({where: {id: idLogement}}).then(()=>{
        res.send('logement supprimé')
    })
}
module.exports = {getAllLogements, createLogement, logementParClient,majlogement, suppLogement}