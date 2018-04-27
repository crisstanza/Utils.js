"use strict";

if (!Utils) { var Utils = {}; }

(function() {
	
	if (!Utils.STRINGS) { Utils.STRINGS = {}; }

	Utils.STRINGS.captalize = function(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	Utils.STRINGS.uncaptalize = function(str) {
		return str.charAt(0).toLowerCase() + str.slice(1);
	};

})();
