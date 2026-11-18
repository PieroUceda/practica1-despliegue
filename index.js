// Librerías
const express = require('express');
const mongoose = require('mongoose');

// Enrutadores
const recintos = require(__dirname + '/routes/recintos');
const eventos = require(__dirname + '/routes/eventos');

// Conexión con la BD 
mongoose.connect(process.env.MONGO_URL);

// Servidor Express
let app = express();

// Middleware para peticiones POST, PUT y enrutadores
app.use(express.json());
app.use('/recintos', recintos);
app.use('/eventos', eventos);

// Puesta en marcha
app.listen(process.env.PORT || 8080);