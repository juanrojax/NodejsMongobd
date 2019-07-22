//Conexion
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notesapp',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
    .then(db => console.log('DB is Connected'))
    .catch(err => console.error(err));

