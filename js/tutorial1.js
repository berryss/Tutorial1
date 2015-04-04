var DATE = (function(module) {
	module.Date = function(resultObject) {
		resultObject.prepend(Date() + '<br/>');
	}
	return module;
}(DATE || {}));