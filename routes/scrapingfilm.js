const express = require('express');
const router = express.Router();
const filmCtrl = require('../controllers/scrapingfilm')

// router.get('/', filmCtrl.scrapingfilm)
router.get('/upcoming', filmCtrl.upcoming)

module.exports = router;