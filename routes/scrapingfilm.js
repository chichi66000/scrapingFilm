const express = require('express');
const router = express.Router();
const filmCtrl = require('../controllers/scrapingfilm')

// router.get('/', filmCtrl.scrapingfilm)
router.get('/upcoming/:page', filmCtrl.upcoming)
router.get('/nowplaying', filmCtrl.nowplaying)
router.get('/toprated/:page', filmCtrl.toprated)

module.exports = router;