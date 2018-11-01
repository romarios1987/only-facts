// connection mongoose
const mongoose = require('mongoose');

// Create Schema
const Schema = mongoose.Schema;

const postSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);


postSchema.set('toJSON', {
    virtual: true
});


module.exports = mongoose.model('posts', postSchema);