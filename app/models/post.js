const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const postSchema = new Schema({
    postId: {
        type: Number,
        unique: true
    },
    image: String,
    title: String,
    date: {
        type: Date,
        default: Date.now
    },
    body: String
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
