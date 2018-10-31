const app = require('./app');
const database = require('./database');
const config = require('./config');

database().then(info => {
    console.log(`Connected to ok`);

    app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}!`));
}).catch((er) => {
    console.log(er);
    console.error('Unable to connect database');
    process.exit(1);
});

