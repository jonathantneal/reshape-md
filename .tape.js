module.exports = {
	'reshape-md': {
		'basic': {
			message: 'supports basic usage'
		},
		'sugarml': {
			message: 'supports { parser: sugarml } usage',
			process: {
				parser: require('sugarml')
			}
		}
	}
};
