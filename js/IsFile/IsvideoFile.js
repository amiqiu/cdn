function noload() {
	document.getElementById("load").style.display = "none";
	document.getElementById("previewimg").style.display = "";
}

function noimg() {
	document.getElementById("load").style.display = "none";
	document.getElementById("noview").style.display = "";
}
setTimeout(function() {
	document.getElementById("openpot").href = "potplayer://" + window.location.protocol + "//" + window.location
		.host + "<!--FileDownUrl-->";
	document.getElementById("openvlc").href = "vlc://" + window.location.protocol + "//" + window.location
		.host + "<!--FileDownUrl-->";
	document.getElementById("openmxpro").href = "intent:" + window.location.protocol + "//" + window.location
		.host + "<!--FileDownUrl-->" +
		"#Intent;package=com.mxtech.videoplayer.pro;end";
	document.getElementById("openmxfree").href = "intent:" + window.location.protocol + "//" + window.location
		.host + "<!--FileDownUrl-->" +
		"#Intent;package=com.mxtech.videoplayer.ad;end";
	document.getElementById("opennp").href = "nplayer-" + window.location.protocol + "//" + window.location
		.host + "<!--FileDownUrl-->";
}, 500);
