'use strict';

var http = require('http')
  , app = require('../app');

// Criamos o servidor http com o gerenciador de rotas do nosso app
var httpServer = http.createServer(app);

// Mandamos o servidor escutar a porta 3000
httpServer.listen(3000, function() {
  console.log('Servidor escutando a porta ' + 3000);
});
