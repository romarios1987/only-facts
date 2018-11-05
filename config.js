module.exports = {
    PORT: 3000,
    mongoURI: 'mongodb://Remi:remi111@ds147033.mlab.com:47033/facts',
    IS_PRODUCTION: process.env.NODE_ENV === 'production'
};
