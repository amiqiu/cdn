function renderpage(pdf, i) {
	pdf.getPage(i).then(function(page) {
		var scale = 1.5;
		var viewport = page.getViewport({
			scale: scale,
		});
		var canvas = document.getElementById("pdf-c" + i);
		var context = canvas.getContext("2d");
		canvas.height = viewport.height;
		canvas.width = viewport.width;
		canvas.style.width = "inherit";
		var renderContext = {
			canvasContext: context,
			viewport: viewport,
		};
		page.render(renderContext);
	});
}

function loadpdf() {
	pdfjsLib.GlobalWorkerOptions.workerSrc =
		"https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/es5/build/pdf.worker.js";
	var loadingTask = pdfjsLib.getDocument({
		url: "<!--FileDownUrl-->",
		cMapUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/cmaps/",
		cMapPacked: true,
		rangeChunkSize: 65535
	});
	loadingTask.promise.then(function(pdf) {
		var pagenum = pdf.numPages;
		var pdfContainer = document.getElementById("pdf-d");
		pdfContainer.innerHTML = "";
		for (var i = 1; i <= pagenum; i++) {
			var canvasNew = document.createElement("canvas");
			canvasNew.id = "pdf-c" + i;
			pdfContainer.appendChild(canvasNew);
			renderpage(pdf, i);
		}
	});
}
window.onload = function() {
	if (document.getElementById("pdf-d")) {
		loadpdf();
	}
}
