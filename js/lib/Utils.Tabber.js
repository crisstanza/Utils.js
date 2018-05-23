"use strict";

if (!Utils) { var Utils = {}; }

(function() {
	
	if (!Utils.Tabber) { Utils.Tabber = {}; }

	function tabOnClick(event) {
		{
			var previousCurrentTab = document.querySelector('.tabs .tab.current');
			Utils.DOM.delClass(previousCurrentTab, 'current').addClass(previousCurrentTab, 'not-current');
			var previousIndex = Utils.DOM.parentIndex(previousCurrentTab);
		}
		{
			var newCurrentTab = event.target;
			Utils.DOM.delClass(newCurrentTab, 'not-current').addClass(newCurrentTab, 'current');
			var currentIndex = Utils.DOM.parentIndex(newCurrentTab);
		}
		Utils.DOM.hide('tab-' + previousIndex);
		Utils.DOM.show('tab-' + currentIndex);
	}

	Utils.Tabber.tabs = function() {
		return document.querySelectorAll('.tabs .tab');
	}

	Utils.Tabber.click= function(tab) {
		var event = new Event('click');
		tab.dispatchEvent(event);
	}

	Utils.Tabber.start = function(event) {
		var tabs = Utils.Tabber.tabs();
		var length = tabs.length;
		for (var i = 0 ; i < length ; i++) {
			var tab = tabs[i];
			tab.addEventListener('click', tabOnClick);
		}
	};

	function init(event) {
		Utils.Tabber.start(event);
	}

	window.addEventListener('load', init);

})();
