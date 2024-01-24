const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./configdb');
const Usuario = require('./models/Usuarios');

const app = express();

(async () => {
    try {
        await sequelize.sync({force: true});
    } catch (error) {
        console.error('Erro ao sincronizar: ', error);
    }
})();

//Configurar engine do Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render("home");
})

app.listen(3000);