// // Créer server, utiliser port 3000, utiliser app comment fichier d'entrée
// const http = require('http');
// const app = require ('./app.js');

// const normalizePort = val => {
//     const port = parseInt(val, 10);
  
//     if (isNaN(port)) {
//       return val;
//     }
//     if (port >= 0) {
//       return port;
//     }
//     return false;
//   };
  
//   // let port = process.env.PORT;
//   // if (port == null || port == "") {
//   //   port = 3000;
//   // }
//   const port = normalizePort(process.env.PORT || '3001');
//   app.set('port', port);
  
//   const errorHandler = error => {
//     if (error.syscall !== 'listen') {
//       throw error;
//     }
//     const address = server.address();
//     const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
//     switch (error.code) {
//       case 'EACCES':
//         console.error(bind + ' requires elevated privileges.');
//         process.exit(1);
//         break;
//       case 'EADDRINUSE':
//         console.error(bind + ' is already in use.');
//         process.exit(1);
//         break;
//       default:
//         throw error;
//     }
//   };
  
//   const server = http.createServer(app);
  
//   server.on('listening', () => {
//     const address = server.address();
//     const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
//     console.log('Listening on ' + bind);
//   })
//   // .catch((error) => console.log(error));
// server.on('error', errorHandler);

// server.listen(port);

const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
const app = require('./app');
const server = http.createServer(app);
let port = process.env.PORT;
  if (port == null || port == "") {
    port = 3000;
  }
  server.on('listening', () => {
        const address = server.address();
        const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
        console.log('Listening on ' + bind);
      })
  server.listen(port)
