
// import les modules nécessaires pour serveur
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
// const cookieParser = require('cookie-parser')

const app = express();

//import les modules pour une protection api
const cors = require("cors");
const helmet = require('helmet');
const rateLimit = require('express-rate-limit'); 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100  // limit each IP to 100 requests per windowMs
});
const expressSanitizer = require('express-sanitizer');

// load .env file pour garder secret les infos confidentiels
require('dotenv').config(); 

// setHeader
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTION');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(cors());
app.use(limiter);
app.use (expressSanitizer());
app.use(helmet.contentSecurityPolicy({
  useDefaults: true,
  directives: {
    "default-src": ["'self'", "https://image.tmdb.org", "https://www.themoviedb.org", "https://scrapingfilm-production.up.railway.app"],
    "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    "style-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'",],
    "img-src": ["'self'", "https://image.tmdb.org",]
  },
}));

  // imports les route
  const scrapingRoute = require('./routes/scrapingfilm')

  app.use('/api/films', scrapingRoute)


  app.use(express.static(__dirname + '/dist'))

  // handle VueJS
  app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/dist', 'index.html')));


module.exports = app;