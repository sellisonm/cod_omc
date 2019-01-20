module.exports = {
	baseUrl:
		process.env.NODE_ENV === 'production'
			? 'https://s3.amazonaws.com/cod-omc-sellison/cod-omc'
			: '/'
};
