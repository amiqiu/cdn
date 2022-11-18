if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (
		/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
		.test(navigator.userAgent))) {
	if (window.location.href.indexOf("?mobile") < 0) {
		try {
			if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
				document.getElementById("meitu_iframe").style.width = "100%";
				document.getElementById("music_iframe").style.width = "100%";
			} else if (/iPad/i.test(navigator.userAgent)) {} else {

			}
		} catch (e) {}
	}
}
