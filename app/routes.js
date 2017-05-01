const express = require('express'),
router = express.Router(),
mainController = require('./controllers/mainController'),
postsController = require('./controllers/postsController');

router.get('/',             mainController.showHome);
router.get('/posts',        postsController.showPosts);
router.get('/posts/seed',   postsController.seedPosts);
router.get('/posts/:id',    postsController.showPost);

module.exports = router;