const app = require('./app');
const config = require('./config');
const mongoose = require('mongoose');

mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDb connect'))
    .catch(err => console.error(err));

app.listen(config.PORT, () =>
    console.log(`Example app listening on port ${config.PORT}!`)
);
