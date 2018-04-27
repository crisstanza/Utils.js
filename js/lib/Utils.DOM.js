"use strict";

if (!Utils) { var Utils = {}; }

(function() {
	
	if (!Utils.DOM) { Utils.DOM = {}; }

	Utils.DOM.addClass = function(element, className) {
		var classNames = element.getAttribute('class');
		if (classNames) {
			var classes = classNames.split(' ');
			var length = classes.length;
			for (var i = 0 ; i < length ; i++) {
				var clazz = classes[i];
				if (clazz == className) {
					return;
				}
			}
			var newClassNames = classNames.trim() + ' ' + className;
			element.className = newClassNames;
		} else {
			element.className = className;	
		}
	};

	Utils.DOM.delClass = function(element, className) {
		var classNames = element.getAttribute('class');
		if (classNames) {
			var classes = classNames.split(' ');
			var length = classes.length;
			for (var i = 0 ; i < length ; i++) {
				var clazz = classes[i];
				if (clazz == className) {
					classes[i] = '';
					break;
				}
			}
			var newClassNames = classes.join(' ').trim();
			element.className = newClassNames;
		}
	};

	Utils.DOM.hasClass = function(element, className) {
		var classNames = element.className;
		if (classNames) {
			var classes = classNames.split(' ');
			var length = classes.length;
			for (var i = 0 ; i < length ; i++) {
				var clazz = classes[i];
				if (clazz == className) {
					return true;
				}
			}
		}
		return false;
	};

})();
