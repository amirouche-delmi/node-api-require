const mongoose = require('mongoose');

const PostsModel = mongoose.model(
    'node-api', // db name
    {
        author: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    'posts' // collection name
)

module.exports = { PostsModel };