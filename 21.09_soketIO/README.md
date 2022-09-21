 1- install Socket.io `npm i socket.io`
 2- require that library


 in clint

    <script src="/socket.io/socket.io.min.js"></script>

     <script>
      // establish the connection to ws server
      // to the origin host (localhost:3000)
      const socket = io();
      // to another host:
      // const socket = io('hostName')
    </script>

in server
     // module.exports = app;
     const server = app.listen(app.get('port'), ()=>log('the server is running on port: '+app.get('port')))
     
     // start Websocket (ws) Server
     // log(server)
     
     const io = require('socket.io')(server)
     // events
     io.on('connection', (socket)=>{
       log("somebody is connected")