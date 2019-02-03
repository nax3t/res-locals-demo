const posts = [
	{
		_id: 1,
		title: 'Hello world',
		body: 'Rem vitae aspernatur modi aut sunt expedita illum molestiae nulla magni enim veniam placeat repellendus natus, culpa in cumque totam iste dolor!',
		author: {
			_id: 1,
			username: 'Ian'
		}
	},
	{
		_id: 2,
		title: 'Foo Bar',
		body: 'Quia sed iusto illo. Ipsum dolore praesentium saepe, reiciendis, ut at? Maxime ad doloremque ab soluta quaerat exercitationem, harum reprehenderit a laborum.',
		author: {
			_id: 6,
			username: 'Eric'
		}
	},
	{
		_id: 3,
		title: 'So Generic',
		body: 'Aliquam, explicabo, atque! Modi eligendi vel vitae corporis suscipit omnis odio ut facilis optio maxime? Fuga at eos tenetur laborum deleniti dignissimos!',
		author: {
			_id: 4,
			username: 'Jane'
		}
	}
]

const Post = {
	find: () => {
		return posts
	},
	findById: (id) => {
		result = posts.filter(post => post._id === Number(id))
		return result[0]
	}
}

module.exports = Post