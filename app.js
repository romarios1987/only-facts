const express = require('express');
const bodyParser = require('body-parser');
const staticAsset = require('static-asset');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config');


// database
mongoose.Promise = global.Promise;
mongoose.set('debug', config.IS_PRODUCTION);
mongoose.connection
    .on('error', error => console.log(error))
    .on('close', () => console.log('Database connection closed.'))
    .once('open', () => {
        const info = mongoose.connections[0];
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    });
mongoose.connect(config.mongoURI, { useNewUrlParser: true });



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


app.listen(config.PORT, () =>
    console.log(`Example app listening on port ${config.PORT}!`)
);
