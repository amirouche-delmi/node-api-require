const { PostsModel } = require('../models/postsModel');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllPosts = (req, res) => {
    PostsModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log('error to get data : ' + err);
    });
};

module.exports.createPost = (req, res) => {
    const newPost = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });

    newPost.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error creating new data : ' + err);
    });
};

module.exports.updatePost = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unkown : " + req.params.id);
    
    const updatePost = {
        author: req.body.author,
        message: req.body.message
    };

    PostsModel.findByIdAndUpdate(
        req.params.id,
        { $set: updatePost },
        { new: true},
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log('Update error : ' + err);
        }
    );
};

module.exports.deletePost = (req, res) =>  {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unkown : " + req.params.id);

    PostsModel.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('Delete error : ' + err);
    });  
}