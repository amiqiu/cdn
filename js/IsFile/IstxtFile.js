window.onload = function() {
	document.getElementById("loading").style.display = "none";
	document.getElementById("editor").style.display = "";
}var txt = document.getElementById('code').innerHTML;
var regexp = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|\&|\#|\%|-)+)/g; //正则匹配
txt1 = txt.replace(regexp, function($url) {
	return "<a href='" + $url + "' target='_blank'>" + $url + "</a>";
});
document.getElementById('code').innerHTML = txt1;
//alert(txt.replace(regexp,"m"));
//alert(txt);/* # cname or curl */
var $url = document.getElementById('url');
if ($url) {
	$url.innerHTML = location.protocol + '//' + location.host + $url.innerHTML;
	$url.style.height = $url.scrollHeight + 'px';
}

function copy_1() {
	var text = document.getElementById("copy_1").innerText;
	var Clipboard = document.getElementById("Clipboard");
	Clipboard.value = text; // 修改文本框的内容
	Clipboard.select(); // 选中文本
	document.execCommand("copy"); // 执行浏览器复制命令
	mdui.snackbar("已复制到粘贴板……");
}

function copy_2() {
	var text = document.getElementById("copy_2").innerText;
	var Clipboard = document.getElementById("Clipboard");
	Clipboard.value = text;
	Clipboard.select();
	document.execCommand("copy");
	mdui.snackbar("已复制到粘贴板……");
}

function copy_3() {
	var text = document.getElementById("copy_3").innerText;
	var Clipboard = document.getElementById("Clipboard");
	Clipboard.value = text;
	Clipboard.select();
	document.execCommand("copy");
	mdui.snackbar("已复制到粘贴板……");
}

function copy_4() {
	var text = document.getElementById("copy_4").innerText;
	var Clipboard = document.getElementById("Clipboard");
	Clipboard.value = text;
	Clipboard.select();
	document.execCommand("copy");
	mdui.snackbar("已复制到粘贴板……");
}

function copy_5() {
	var text = document.getElementById("copy_5").innerText;
	var Clipboard = document.getElementById("Clipboard");
	Clipboard.value = text;
	Clipboard.select();
	document.execCommand("copy");
	mdui.snackbar("已复制到粘贴板……");
}

function copy_6() {
	var text = document.getElementById("copy_6").innerText;
	var Clipboard = document.getElementById("Clipboard");
	Clipboard.value = text;
	Clipboard.select();
	document.execCommand("copy");
	mdui.snackbar("已复制到粘贴板……");
}

function copy_7() {
	var text = document.getElementById("copy_7").innerText;
	var Clipboard = document.getElementById("Clipboard");
	Clipboard.value = text;
	Clipboard.select();
	document.execCommand("copy");
	mdui.snackbar("已复制到粘贴板……");
}

function copy_8() {
	var text = document.getElementById("copy_8").innerText;
	var Clipboard = document.getElementById("Clipboard");
	Clipboard.value = text;
	Clipboard.select();
	document.execCommand("copy");
	mdui.snackbar("已复制到粘贴板……");
}

function copy_9() {
	var text = document.getElementById("copy_9").innerText;
	var Clipboard = document.getElementById("Clipboard");
	Clipboard.value = text;
	Clipboard.select();
	document.execCommand("copy");
	mdui.snackbar("已复制到粘贴板……");
}

function copy_0() {
	var text = document.getElementById("copy_0").innerText;
	var Clipboard = document.getElementById("Clipboard");
	Clipboard.value = text; // 修改文本框的内容
	Clipboard.select(); // 选中文本
	document.execCommand("copy"); // 执行浏览器复制命令
	mdui.snackbar("已复制到粘贴板……");
}
