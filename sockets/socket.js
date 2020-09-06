//Import io from index.js
const { io } = require('../index');

//socket messages
io.on('connection', client => {
   console.log('Client connect');

   client.on('disconnect', () => { 
      console.log('Client disconnect');
    });

    client.on('msg', ( payload ) => {
       console.log('Message!!!', payload );

       io.emit( 'msg', { admin: 'New Message' } );
    });
 });