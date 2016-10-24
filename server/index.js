/*dependencias*/
var http = require('http');
var express = require('express');
var server = express();

/*importo el modulo ws*/
var websockets = require('./ws');

/*se regresa al directorio padre y entra al directorio app*/
server.use(express.static(__dirname + '/../app'));

http.createServer(server).listen(3000,function(){
	console.log('Servidor en el puerto %d',this.address().port);
	/*uso el modulo importado previamente y this servidor lo envio al ws*/
	websockets(this);
});
