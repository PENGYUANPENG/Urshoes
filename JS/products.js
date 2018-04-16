window.onload = function () {
	var dataImg = [];
	for(var i= 1;i<101;i++){
		dataImg.push({"src":"images/"+i+".png"})
	}
	var oPro = document.getElementsByClassName("products")[0];
	var oUl = oPro.getElementsByTagName("ul")[0];
	var html = null;
	var click = 20;
	var oBG = document.getElementsByClassName("con-BG")[0]
	var btn = oBG.getElementsByTagName("button")[0];
	var oImg = oUl.getElementsByTagName("img");
	var odiv = document.getElementsByClassName("showIMG")[0];
	for (var i = 0; i < 20; i++) {
		oUl.innerHTML += "<li><img class='img-thumbnail' src='" + dataImg[i].src + " '></li>"
	}
	btn.onclick = function () {
		click += 10;
		var ul = ""
		for (var i = 0; i < click; i++) {
			ul += "<li><img class='img-thumbnail' src='" + dataImg[i].src + " '></li>"
		}
		oUl.innerHTML = ul;
		oUl = oPro.getElementsByTagName("ul")[0];
		oImg = oUl.getElementsByTagName("img");
		if (click === dataImg.length) {
			btn.style.display = "none";
		}
		for (var i = 0; i < oImg.length; i++) {
			oImg[i].onclick = function () {
				oBG.style.backgroundImage = "url(" + this.src + ")";
				localStorage.setItem("BGsrc", this.src);
			}
		}
	}
	for (var i = 0; i < oImg.length; i++) {
		oImg[i].onclick = function () {
			oBG.style.backgroundImage = "url(" + this.src + ")";
			localStorage.setItem("BGsrc", this.src)
		}
	}
	resetIMG.onclick = function () {
		localStorage.clear()
		oBG.style.backgroundImage = "url(images/IMG_5727.JPG)";

	}
	if (localStorage.getItem("BGsrc")) {
		oBG.style.backgroundImage = "url(" + localStorage.getItem("BGsrc") + ")";

	}
}