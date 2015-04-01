var CleanCSS = require('clean-css');
var bone = require('bone');
module.exports = bone.wrapper(function(buffer, encoding, callback) {
	var option = this.option.defaults({
		rebase: false,
        report: 'min',
        sourceMap: false
	});

	try {
        var compiled = new CleanCSS(option).minify(buffer.toString());
		callback(null, compiled.styles);
	} catch (err) {
		console.log('clean css minify error!');
		console.log(err);
		callback(null, buffer);
	}

});
