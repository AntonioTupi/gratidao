const express = require('express');
const gratidaoController = require('../controllers/gratidaoControllers');

const router = express.Router();

router.get('/mensagem', gratidaoController.getMensagem);
router.get('/historia/:palavra', gratidaoController.getHistoria);
router.post('/mensagem', gratidaoController.createMensagem);


module.exports = router;
