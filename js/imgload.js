//判断浏览器
var Browser = new Object();
Browser.userAgent = window.navigator.userAgent.toLowerCase();
Browser.ie = /msie/.test(Browser.userAgent);
Browser.Moz = /gecko/.test(Browser.userAgent);

//判断是否加载完成
function Imagess(url, imgid, callback) {
	var val = url;
	var img = new Image();
	if (Browser.ie) {
		img.onreadystatechange = function() {
			if (img.readyState == "complete" || img.readyState == "loaded") {
				callback(img, imgid);
			}
		}
	} else if (Browser.Moz) {
		img.onload = function() {
			if (img.complete == true) {
				callback(img, imgid);
			}
		}
	}
	//如果因为网络或图片的原因发生异常，则显示该图片
	img.onerror = function() {
		img.src = "https://cdn.jsdelivr.net/gh/clowntricky/cdn/img/ac_cry.gif"
	}
	img.src = val;
}

//显示图片
function checkimg(obj, imgid) {
	document.getElementById(imgid).style.cssText = "";
	document.getElementById(imgid).src = obj.src;
}
//初始化需要显示的图片，并且指定显示的位置
window.onload = function() {
	var imglist = document.getElementById("file_list").getElementsByTagName('img');
	for (i = 0; i < imglist.length; i++) {
		imglist[i].id = "img0" + i;
		imglist[i].style =
			"background:url(https://cdn.jsdelivr.net/gh/clowntricky/cdn/img/ac_yun.gif);width:200;height:200";
		Imagess(imglist[i].getAttribute("data"), imglist[i].id, checkimg);
	}
}
