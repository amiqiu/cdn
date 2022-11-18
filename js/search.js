function stop() {
	return false;
}
document.oncontextmenu = stop;

function pressKey() {

	if (event.keyCode == 13) {
		search();
	}
}

function search() {
	var where = document.referrer;
	var path = window.location.pathname;
	var host = top.location.protocol + "//" + top.location.host;
	var domain = host.split('/'); //以“/”进行分割
	if (host.indexOf("mumei.cc") > -1) {
		var target = "target='iframe'";
		if (path.indexOf("/game") > -1) {
			if (domain[2]) {
				mulu = domain[2] + "/cloud/game";
			}
			var action = 'game';
		} else if (path.indexOf("/Private") > -1) {
			if (domain[2]) {
				mulu = domain[2] + "/cloud/home/Private";
			}
			var action = 'blog_p';
		} else if (path.indexOf("/home") > -1) {
			if (domain[2]) {
				mulu = domain[2] + "/cloud/home";
			}
			var action = 'blog';
		}
	}
	var key = document.getElementById("keyword").value;
	if (key == "") {
		document.getElementById('divs').style.display = "none";
		document.getElementById("outevent").innerHTML = `请输入关键词...`;
		return;
	} else if (key.length < 2) {
		document.getElementById('divs').style.display = "none";
		document.getElementById("outevent").innerHTML = `关键字不能少于两个...`;
		return;
	}
	Ajax.post(host + '/search/' + action + '.php', 'keyw=' + key,
		function(res) {
			var html1 = '';
			res = JSON.parse(res);
			if (res.length == 0) {
				document.getElementById("outevent").innerHTML =
					`<img src="https://cdn.mumei.cc/img/pica_loading.gif" height="150px">`;
				document.getElementById('divs').style.display = "none";
				setTimeout(function() {
					document.getElementById("outevent").innerHTML =
						`搜索完成，结果如下:`;
					document.getElementById('divs').style.display = "block";
				}, 5000);
				html1 = '<center style="padding-top: 50px">无搜索结果...</center>';
			} else {
				document.getElementById("outevent").innerHTML =
					`<img src="https://cdn.mumei.cc/img/pica_loading.gif" height="150px">`;
				document.getElementById('divs').style.display = "none";
				setTimeout(function() {
					document.getElementById("outevent").innerHTML =
						`搜索完成，结果如下:`;
					document.getElementById('divs').style.display = "block";
				}, 3000);
				res.forEach(function(i, n) {
					html1 +=
						"<li class='mdui-list-item mdui-ripple'><div class='mdui-row mdui-col-sm-12 mdui-text-truncate-s'><a class='mdui-col-xs-12 mdui-col-sm-12 mdui-text-truncate-b' href='http://" +
						mulu + i.link + "' onclick='e_loading()'" + target +
						"><i class='mdui-icon material-icons'>" + i.icon + "</i>" + i.title +
						"</a></div></li>";
				})
			}
			document.getElementById("output").innerHTML = html1;
		})
}


var Ajax = {
	get: function(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200 || xhr.status == 304) {
					console.log(xhr.responseText);
					callback(xhr.responseText);
				}
			}
		}
		xhr.send();
	},

	post: function(url, data, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', url, false);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200 || xhr.status == 304) {
					callback(xhr.responseText);
				}
			}
		}
		xhr.send(data);
	}
}
