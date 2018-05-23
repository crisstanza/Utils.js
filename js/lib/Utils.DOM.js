"use strict";

if (!Utils) { var Utils = {}; }

(function() {
	
	if (!Utils.DOM) { Utils.DOM = {}; }

	Utils.DOM.parentIndex = function(element) {
		var parentNode = element.parentNode;
		var brothers = parentNode.childNodes;
		var length = brothers.length;
		var j = 0;
		for (var i = 0 ; i < length ; i++) {
			var brother = brothers[i];
			if (brother.nodeType == 1) {
				if (brother == element) {
					return j;
				}
				j++;
			}
		}
		return -1;
	}

	Utils.DOM.disable = function(element, newLabel) {
		element.disabled = true;
		var previousLabel = element.innerHTML;
		element.setAttribute('data-previous-label', previousLabel);
		element.innerHTML = newLabel;
	}

	Utils.DOM.enable = function(element) {
		element.disabled = false;
	}

	Utils.DOM.reenable = function(element) {
		var previousLabel = element.getAttribute('data-previous-label');
		if (previousLabel) {
			element.innerHTML = previousLabel;
		}
		Utils.DOM.enable(element);
	}

	Utils.DOM.hide = function(element) {
		Utils.$(element).style.display = 'none';
		return Utils.DOM;
	}

	Utils.DOM.show = function(element) {
		Utils.$(element).style.display = 'initial';
		return Utils.DOM;
	}

	Utils.DOM.innerHTML = function(element, value) {
		Utils.$(element).innerHTML = value;
		return Utils.DOM;
	}

	Utils.DOM.addClass = function(element, className) {
		var classNames = element.className;
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
		return Utils.DOM;
	};

	Utils.DOM.delClass = function(element, className) {
		var classNames = element.className;
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
		return Utils.DOM;
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
