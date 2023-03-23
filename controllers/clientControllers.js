const models = require("../models/index");
const Client = models.Client;
const Logement = models.Logement;

const getAllClients = (req, res) => {
  Client.findAll().then((client) => {
    res.json(client);
  });
};

//*EXEMPLE DE JSON A ENVOYE AVEC POSTMAN POUR TESTER
// {
//     "nom": "jeffrey",
//     "prenom":"Bush",
//     "dateNaissance":"24/06/1975",
//     "numero":"36636340"
// }
const createClient = (req, res) => {
  Client.create({
    nom: req.body.nom,
    prenom: req.body.prenom,
    dateNaissance: req.body.dateNaissance,
    numero: req.body.numero,
  }).then((result) => {
    res.send("Client créé");
  });
};

const clientParLogement = (req, res) => {
  const idLogement = req.params.idLogement;
  Logement.findOne({
    where: {
      id: parseInt(idLogement),
    },
  }).then((logement) => {
    console.log(logement);
    if(logement === null){
        res.send('pas de logement avec cet id')
    }else{
        Client.findAll({
          where: {
            id: logement.signataire,
          },
        }).then((client) => {
          res.send(client);
        });
    }
  });
};
//*EXEMPLE DE JSON A ENVOYE AVEC POSTMAN POUR TESTER
// {
//     "nom": "jeffrey",
//     "prenom":"Busher",
//     "dateNaissance":"24/06/1975",
//     "numero":"36636340"
// }
const majClient = (req, res) => {
  const idClient = parseInt(req.params.idClient);
  Client.update(
    {
      nom: req.body.nom,
      prenom: req.body.prenom,
      dateNaissance: req.body.dateNaissance,
      numero: req.body.numero,
    },
    {
      where: { id: idClient },
    }
  ).then(() => {
    res.send("client modifié");
  });
};

const suppClient = (req, res) => {
  const idClient = req.params.idClient;
  Client.destroy({ where: { id: idClient } }).then(() => {
    res.send("client supprimé");
  });
};
module.exports = {
  getAllClients,
  createClient,
  clientParLogement,
  majClient,
  suppClient,
};
