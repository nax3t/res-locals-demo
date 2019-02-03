const Post = require('../models/post')
const currentUser = {
	_id: 1,
	username: 'Ian'
}

module.exports = {
	isAuthor(req, res, next) {
		const post = Post.findById(req.params.id)
		if(post.author._id === currentUser._id) {
			res.locals.post = post;
		  next()
		} else {
			req.session.error = 'Must be author of post to edit!'
			return res.redirect('/')
		}
	}
}

