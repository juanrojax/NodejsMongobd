const express = require('express');
//Requierir modulo path de node
const path = require('path');
//requerir expresshablebars
const exphbs = require('express-handlebars');
const methotOverride = require('method-override');
const session = require('express-session');

//Inicalizacion
const app = express();
require('./database');



//Settings
//Le estamos diciendo que si hay un puesto disponible lo tome de lo contrario utilice el 3000
app.set('port',process.env.PORT || 3000);
//Decirle a node donde esta la carpeta views
app.set('views',path.join(__dirname,'views'));
//alt 124 ||

app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    //Acceder hasta layouts
    layoutsDir: path.join(app.get('views'),'layouts'),
    //Reutilizar partes de html en diversas vistas
    partialsDir: path.join(app.get('views'),'partials'),
    //que extenciones van a tener nuestros archivos
    extname: '.hbs'
}));
//Utilizar el motor de las vistas
app.set('view engine','.hbs');




//Middlewares

//Metodo para entender datos recibidos de una url
app.use(express.urlencoded({extended: false}));

//Permiti que los formularios envien otros metodos como PUT
app.use(methotOverride('_method'));

//autenticar al usuario y almacer los datos temporalmente
app.use(session({
    secret: 'juancho05',
    resave:true,
    saveUninitialized: true
}));




//Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));





//Static File
app.use(express.static(path.join(__dirname,'public')));

//Server is listennig
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});