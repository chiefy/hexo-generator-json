var JSON = require('json3');
	
hexo.extend.generator.register(hexo_generator_json);

function hexo_generator_json(locals, render, cb) {
	var posts = [];

	locals.posts.sort('date', -1).each(function(post){
		var tags = [],
			categories = [];
		post.tags.each(function(tag) {
			tags.push(tag);
		});
		delete post.tags;
		post.tags = tags;
		post.categories.each(function(category) {
			categories.push(category);
		});
		delete post.categories;
		post.categories = categories;
		posts.push(post);
	});
	hexo.route.set('site.json', JSON.stringify({
		config: hexo.config,
		posts: posts
	}));
	cb();
}