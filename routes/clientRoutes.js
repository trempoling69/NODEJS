const express = require("express");
const router = express.Router();

const {getAllClients, createClient,clientParLogement, majClient, suppClient} = require('../controllers/clientControllers')

router.get('/all', getAllClients)
router.post('/create', createClient)
router.get('/clientde/:idLogement', clientParLogement)
router.put('/clientmodif/:idClient',majClient)
router.delete('/client/:idClient', suppClient)

module.exports = router