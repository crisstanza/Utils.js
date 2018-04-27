"use strict";

(function() {

	function uninit() {
		window.userHasCancelledTheOperation = true;
	}

	function init() {
	}

	window.addEventListener('load', function() { init(); });
	window.addEventListener('beforeunload', function() { uninit(); });

})();
