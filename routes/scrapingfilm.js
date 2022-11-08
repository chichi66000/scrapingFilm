const express = require('express');
const router = express.Router();
const filmCtrl = require('../controllers/scrapingfilm')

router.get('/', filmCtrl.scrapingfilm)
router.post('/:dateChoosen', filmCtrl.filmsSelect)

module.exports = router;