$(window).on("load", function () {
	for (var i in navigator) {
		navigator.__defineGetter__(i, function () {
			return "protected";
		});
	}
});
$(document).ready(function () {
	for (var i in navigator) {
		navigator.__defineGetter__(i, function () {
			return "protected";
		});
	}
	console.log(navigator);
});
$(window).bind("setup", function () {
	for (var i in navigator) {
		navigator.__defineGetter__(i, function () {
			return "protected";
		});
	}
});
$(document).ready(function () {
	for (var i in navigator) {
		navigator.__defineGetter__(i, function () {
			return "protected";
		});
	}
	setTimeout(() => {
		for (var i in navigator) {
			navigator.__defineGetter__(i, function () {
				return "protected";
			});
		}
	}, 1000);
});
