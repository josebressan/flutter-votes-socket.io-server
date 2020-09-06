const express = require('express');
const path = require('path');

//Read the .env file
require('dotenv').config();

//Express App
const app = express();
//Path public folder
const publicPath = path.resolve( __dirname, 'public');
app.use( express.static( publicPath ) );


//Node Server http
const server = require('http').createServer(app);
//Socket Server
module.exports.io = require('socket.io')(server);
//Load Socket App
require('./sockets/socket');


server.listen( process.env.PORT, ( err ) => {
   if ( err ) throw new Error( err );

   console.log('Server running on port', process.env.PORT);
});