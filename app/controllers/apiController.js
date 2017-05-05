const Post = require('../models/post');

module.exports = {
    showPosts: showPosts 
}

function showPosts(req, res){
    Post.find({}, (err, posts) => {
        if(err){
            res.json(err);
        }
        res.json(posts);
    })
}