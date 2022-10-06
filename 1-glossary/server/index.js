require("dotenv").config();
const express = require("express");
const path = require("path");



//Middleware
var morgan = require('morgan');
var cors = require('cors');

//Router
var router = require('./routes.js')

const app = express();
module.exports.app = app;

//Logging and Parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routes
app.use('/api', router);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
