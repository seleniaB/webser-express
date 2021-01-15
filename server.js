const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//Para conocer el puerto que nos da heroku
const port = process.env.PORT || 3000;

//middleware = una instruccion o un callback que se 
//va a ejcutar siempre sin importar la url que pidan
//Para crear el middleware
app.use(express.static(__dirname + '/public'));

//HBS : Express HBS
//__dirname quiere decir que no importa donde se encuentre si no que tome
//todo la variable (directorio donde esta el script) y que contatene la ruta
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'selenia'
    });

});
app.get('/about', (req, res) => {

    res.render('about');

});

//Hay que crear como ingresar a la peticion
// app.get('/data', (req, res) => {
//     res.send('Hola Data');
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});