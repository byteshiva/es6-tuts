const lib = require('lib');

module.exports = (a = 0, b = 0, context, callback) => {
	return lib[`${context.service.identifier}.add`](a, b, (err, result) => {
		callback(err, result * 2);
	});
};
