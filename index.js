var express = require('express')
var server = express()
var PUBLIC_DIR = __dirname + '/dist/public';


server.set('port', process.env.PORT || 5000);

server.use(express.static(PUBLIC_DIR));

server.get('/', (request, response) => {
  response.sendFile(PUBLIC_DIR+'/index.html');
});

server.listen(server.get('port'), () => {
  console.log('starting server at http://localhost:'+server.get('port'))
});
