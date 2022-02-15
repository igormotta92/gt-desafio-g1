require('module-alias/register')
require('moment/locale/pt-br');

/** Data Base */
require('@/src/database');

/** Server */
const express = require('express');
const cors = require('cors');
const path = require('path');

const routes = require('@/src/routes');

/** App */
const app = express();

/** Middlewares */
app.use(cors()); /** Segurança de Api */
app.use(express.json()); /*Informar que a requisição a ser usada será de json*/

/** Routes */
app.use(routes);

/** Not found */
app.use((err, req, res, next) => {
  console.log(err.statusCode);
  res.status(404).json(err.message);
  next()
})

module.exports = app;


