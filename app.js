const express = require('express')
const app = express()
const session = require('express-session')
const Post = require('./models/post')
const { isAuthor } = require('./middleware')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use((req, res, next) => {
	if (req.session.error) {
		res.locals.error = req.session.error
		delete req.session.error
	}
	next()
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/posts', (req, res) => {
	const posts = Post.find()
	res.render('posts/index', { posts })
})

app.get('/posts/:id', (req, res) => {
	const post = Post.findById(req.params.id)
	res.render('posts/show', { post })
})

app.get('/posts/:id/edit', isAuthor, (req, res) => {
	res.render('posts/edit')
})

app.listen(process.env.PORT, process.env.IP, () => {
	console.log(`Server listening on ${process.env.PORT}`)
})
