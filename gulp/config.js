module.exports = {
	paths: {
		project: './dist/',
		js: './dist/js',
	},
	js: {
		names: {
			vendor: 'vendor.min.js',
			app: 'app.min.js',
		},
		files: './app/**/*.js'
	},
	html: {
		files: './app/**/*.html'
	}
};