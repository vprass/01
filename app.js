const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//Configurar engine do Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render("home");
})

app.listen(3000);