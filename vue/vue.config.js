module.exports = {
	configureWebpack: {
		module: {
			rules: [
				{
					test: '/\.ttf$/',
					use: [{
						loader: "url-loader"
					}]
				}
			]
		}
	}
}