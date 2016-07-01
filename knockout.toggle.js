var ko = require("knockout");

ko.bindingHandlers.toggle = {
	init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		var
			target = valueAccessor(),
			toggleValues = allBindingsAccessor().toggleValues || [true, false],
			fnToggle = function () {
				return function () {
					target(toggle(target(), toggleValues));
				};
			};

		var toggleKeyCodes = [13, 32];
		ko.utils.registerEventHandler(element, "keydown", function (event) {
			if (toggleKeyCodes.indexOf(event.keyCode) != -1) {
				event.preventDefault();
				fnToggle()();
			}
		});

		var hasTabIndex = element.getAttribute('tabIndex');
		if (!hasTabIndex) element.tabIndex = '0';

		element.setAttribute('role', 'checkbox');

		ko.bindingHandlers.click.init(element, fnToggle, allBindingsAccessor, viewModel, bindingContext);
	},
	update: function (element, valueAccessor) {
		var target = valueAccessor();
		element.setAttribute('aria-checked', target());
	}
};

function toggle(item, values) {
	//find current index
	var index = values.indexOf(item);

	//cycle between toggle values
	index = (index + 1) % values.length;
	return values[index];
}

module.exports = toggle;
