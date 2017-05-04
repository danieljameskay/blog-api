const express = require('express'),
router = express.Router(),
mainController = require('./controllers/mainController'),
postsController = require('./controllers/postsController');

router.get('/',                 mainController.showHome);

router.get('/posts/create',     postsController.createPost);
router.post('/posts/create',    postsController.createPost_post)

router.get('/posts',            postsController.showPosts);
router.get('/posts/:id',        postsController.showPost);


module.exports = router;