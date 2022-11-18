window.onload = function() {
	if (document.getElementById("office-a")) {
		var ifm = document.getElementById("office-a");
		var containerHeight = document.documentElement.clientHeight - 150;
		ifm.height = containerHeight;
	}
}
window.onresize = function() {
	if (document.getElementById("office-a")) {
		var ifm = document.getElementById("office-a");
		var containerHeight = document.documentElement.clientHeight - 150;
		ifm.height = containerHeight;
	}
}
