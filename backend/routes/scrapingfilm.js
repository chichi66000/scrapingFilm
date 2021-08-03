const express = require('express');
const router = express.Router();
const filmCtrl = require('../controllers/scrapingfilm')

router.post('/', filmCtrl.scrapingfilm)

module.exports = router;