module.exports = function(Article) {

	Article.observe('before save', function updateTimestamp(ctx, next) {

		if (ctx.isNewInstance) {
			ctx.instance.created_at = new Date();
			ctx.instance.updated_at = new Date();
		} else {
			ctx.data.updated_at = new Date();
		}

		next();
	});
};
