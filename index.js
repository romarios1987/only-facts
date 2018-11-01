const app = require('./app');
//const database = require('./database');
const config = require('./config');
const mongoose = require('mongoose');

// database().then((info) => {
//     console.log(`Connected to ok `);
//
//     app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}!`));
// }).catch(() => {
//     console.error('Unable to connect database');
//     process.exit(1);
// });
//

mongoose.connect(config.mongoURI)
//promise
// if connect - Ok
.then(() => console.log('MongoDb connect'))
// if connect - NOT
    .catch(err => console.error(err));


app.listen(config.PORT, () =>
    console.log(`Example app listening on port ${config.PORT}!`)
);


/*
database()
    .then(info => {
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
        app.listen(config.PORT, () =>
            console.log(`Example app listening on port ${config.PORT}!`)
        );
    })
    .catch(() => {
        console.error('Unable to connect to database');
        process.exit(1);
    });
*/
