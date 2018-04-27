"use strict";

if (!Utils) { var Utils = {}; }

(function() {
	
	if (!Utils.ARRAYS) { Utils.ARRAYS = {}; }

	Utils.ARRAYS.contains = function(array, element) {
		if (array) {
			var length = array.length;
			for (var i = 0 ; i < length ; i++) {
				if (array[i] == element) {
					return true;
				}
			}
		}
		return false;
	};

	Utils.ARRAYS.count = function(array) {
		return array ? array.length : 0;
	};

})();
