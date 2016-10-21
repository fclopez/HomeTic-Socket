/*dependencias*/
var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
/*inicia un modulo http*/
app.listen(8001, function(){
 console.log('listening on *.8001');
});

/*callback lectura del index.html*/
function handler (req, res) {
  fs.readFile('index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}
/*funcion del socket que transmite los datos a todos los clientes*/
io.on('connection', function (socket) {
  socket.on('led', function (data) {
    socket.broadcast.emit('led', data);
    console.log(data); });
  socket.on('ledstatus', function (data) {
    socket.broadcast.emit('ledstatus', data);
    console.log(data);
  });
});
