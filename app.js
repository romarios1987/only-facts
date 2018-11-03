const express = require('express');
const bodyParser = require('body-parser');
const staticAsset = require('static-asset');
const path = require('path');


// express
const app = express();

// set
app.set('view engine', 'ejs');


// use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(staticAsset(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/javascript', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
app.use('/javascript', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));


// routes
app.get('/', (req, res) => {
    res.render('index')
});

module.exports = app;