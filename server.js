const express = require('express')
const app = express();

const hbs = require('hbs');
require('./hbs/helpers')


const port = process.env.PORT || 3000;
app.use( express.static( __dirname + '/public'))

// Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales', (err) => {});
app.set('view engine', 'hbs');

app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'alexis nava s'
    });
});

app.get('/about', (req, res) => {


    res.render('about');
});
 
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});