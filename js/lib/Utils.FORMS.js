"use strict";

if (!Utils) { var Utils = {}; }

(function() {
	
	if (!Utils.FORMS) { Utils.FORMS = {}; }

	Utils.FORMS.allUnchecked = function(inputs) {
		if (inputs) {
			var length = inputs.length;
			for (var i = 0 ; i < length ; i++) {
				var input = inputs[i];
				if (input.checked) {
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	};

})();
