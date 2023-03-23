const express = require("express");
const router = express.Router();

const {getAllLogements, createLogement, logementParClient, majlogement, suppLogement} = require('../controllers/logementControllers')

router.get('/all', getAllLogements)
router.post('/create', createLogement)
router.get('/logementde/:client', logementParClient)
router.put('/modifLogement/:idLogement', majlogement)
router.delete('/logement/:idLogement', suppLogement)

module.exports = router