"use strict";

if (!Utils) { var Utils = {}; }

(function() {

	var TYPE_STRING = String.name.toLowerCase();

	Utils.$ = function(idOrElement) {
		if (typeof idOrElement == TYPE_STRING) {
			return document.getElementById(idOrElement);
		} else {
			return idOrElement;
		}
	};

	Utils.p = function(strs) {
		var length = strs.length;
		for (var i = 0 ; i < length ; i++) {
			var str = strs[i];
			strs[i] = '<p>' + str + '</p>';
		}
	};

})();
