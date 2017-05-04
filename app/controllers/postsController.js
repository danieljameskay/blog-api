const Post = require('../models/post');

module.exports = {
    showPosts: showPosts,
    showPost: showPost,
    seedPosts: seedPosts,
    createPost: createPost,
    createPost_post: createPost_post
}

function showPosts (req, res) {
    Post.find({}, (err, posts) => {
        if(err){
            // error locgic
        }
        res.render('pages/posts', {posts});
    })
}

function showPost (req, res) {
    Post.findOne({ postId: req.params.id }, (err, post) => {
        if(err){
            // error logic
        }
        res.render('pages/post', {post});
    })
}

function createPost (req, res){
    res.render('pages/create');
}

function createPost_post (req, res){
    const post = Post({
        postId: req.body.postId,
        image: req.body.image,
        title: req.body.title,
        date: req.body.date,
        body: req.body.body,
    });

    post.save((err) => {
        res.send("user created");
    })
}

function seedPosts (req,res) {
    const posts = [{
        'postId': '5',
        'image': 'http://lorempixel.com/400/200/cats',
        'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'body': 'dictum ornare. Donec et felis eget orci porta volutpat ut vitae enim.Etiam volutpat laoreet dolor, eget facilisis justo tempus sit amet. Nam scelerisque elit sed lacus tristique, vitae vulputate nulla consequat.Vestibulum lorem erat, accumsan nec nunc a, mollis dictum est. Aliquam erat volutpat. Ut blandit at dolor in consectetur. Curabitur hendrerit sit amet nunc sed porttitor. Mauris et turpis risus. Aliquam viverra ornare nisi, sit amet mollis erat lacinia non. Integer vitae maximus libero, eget commodo nisl. Pellentesque consequat elit justo, ut sodales leo fringilla eu. Ut eu iaculis metus.'
        },{
        'postId': '6',
        'image': 'http://lorempixel.com/400/200/animals',
        'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'body': 'dictum ornare. Donec et felis eget orci porta volutpat ut vitae enim.Etiam volutpat laoreet dolor, eget facilisis justo tempus sit amet. Nam scelerisque elit sed lacus tristique, vitae vulputate nulla consequat.Vestibulum lorem erat, accumsan nec nunc a, mollis dictum est. Aliquam erat volutpat. Ut blandit at dolor in consectetur. Curabitur hendrerit sit amet nunc sed porttitor. Mauris et turpis risus. Aliquam viverra ornare nisi, sit amet mollis erat lacinia non. Integer vitae maximus libero, eget commodo nisl. Pellentesque consequat elit justo, ut sodales leo fringilla eu. Ut eu iaculis metus.'
        },{
        'postId': '7',
        'image': 'http://lorempixel.com/400/200/cats',
        'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'body': 'dictum ornare. Donec et felis eget orci porta volutpat ut vitae enim.Etiam volutpat laoreet dolor, eget facilisis justo tempus sit amet. Nam scelerisque elit sed lacus tristique, vitae vulputate nulla consequat.Vestibulum lorem erat, accumsan nec nunc a, mollis dictum est. Aliquam erat volutpat. Ut blandit at dolor in consectetur. Curabitur hendrerit sit amet nunc sed porttitor. Mauris et turpis risus. Aliquam viverra ornare nisi, sit amet mollis erat lacinia non. Integer vitae maximus libero, eget commodo nisl. Pellentesque consequat elit justo, ut sodales leo fringilla eu. Ut eu iaculis metus.'
        },{
        'postId': '8',
        'image': 'http://lorempixel.com/400/200/animals',
        'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'body': 'dictum ornare. Donec et felis eget orci porta volutpat ut vitae enim.Etiam volutpat laoreet dolor, eget facilisis justo tempus sit amet. Nam scelerisque elit sed lacus tristique, vitae vulputate nulla consequat.Vestibulum lorem erat, accumsan nec nunc a, mollis dictum est. Aliquam erat volutpat. Ut blandit at dolor in consectetur. Curabitur hendrerit sit amet nunc sed porttitor. Mauris et turpis risus. Aliquam viverra ornare nisi, sit amet mollis erat lacinia non. Integer vitae maximus libero, eget commodo nisl. Pellentesque consequat elit justo, ut sodales leo fringilla eu. Ut eu iaculis metus.'
    }];
    Post.remove({}, () => {
        for(post of posts){
        var newPost = new Post(post);
        newPost.save();
    }
    });
    res.send("Database seeded.");
}
