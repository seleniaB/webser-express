 //El http para el webserver
 const http = require('http');

 //Para escuchar las peticiones HTTP, primero se deve de crear el servidor
 http.createServer((req, res) => {

         res.writeHead(200, { 'Content-Type': 'application/json' });

         let salida = {
             nombre: 'Selenia',
             edad: 21,
             url: req.url
         }

         res.write(JSON.stringify(salida));
         //res.write('Hola mundo');
         res.end();

     })
     .listen(8080);

 console.log('Escuchando el puerto 8080');