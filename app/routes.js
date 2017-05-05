const express = require('express'),
router = express.Router(),
mainController = require('./controllers/mainController'),
apiController = require('./controllers/apiController'),
postsController = require('./controllers/postsController');

router.get('/',                  mainController.showHome);

router.get('/api/showPosts',     apiController.showPosts)

router.get('/posts/seed',        postsController.seed);

router.get('/posts',             postsController.showPosts);
router.get('/posts/:id',         postsController.showPost);

router.get('/create',     postsController.createPost);
router.post('/create',    postsController.createPost_post)

module.exports = router;