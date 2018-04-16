window.onload = function () {
	var brandsHtml = document.getElementsByClassName("caption");
	var featuresHtml = document.getElementsByClassName("feature");
	var imgHtml = document.getElementsByClassName("imgBanner");
	var wordsHtml = document.getElementsByClassName("wordBanner");
	$.ajax({
		type: "GET",
		url: "JS/index.json",
		dataType: "json",
		success: function (data) {
			for (var i = 0; i < data.brands.length; i++) {
				brandsHtml[i].innerHTML =
				`		
						<h2>
							<a href="${data.brands[i].brandUrl}" target="_blank">${data.brands[i].brandname}</a>
						</h2>
						<small>${data.brands[i].brandmsg}
						</small>
				`
			}
			for (var i = 0; i < data.feature.length; i++) {
				featuresHtml[i].innerHTML =
					`		
					<img src="${data.feature[i].imgUrl}" alt="" class="img-thumbnail" />
					<div class="content-show">
						<h2>
							<a href="${data.feature[i].linkUrl}" target="_blank">${data.feature[i].productname}</a>
						</h2>
						<h4>${data.feature[i].productinfo}</h4>
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<small>${data.feature[i].productmsg}</small>
					</div>
				`
			}
			for (var i = 0; i < data.banner.length; i++) {
				imgHtml[i].innerHTML =
					`		
					<a href="${data.banner[i].linkUrl}" target="_blank">
						<img src="${data.banner[i].itemUrl}" alt="${data.banner[i].itemmsg}">
					</a>
				`
			}
			for (var i = 0; i < data.wordsbanner.length; i++) {
				wordsHtml[i].innerHTML =
					`		
					<br />
					<h4>${data.wordsbanner[i].english}</h4>
					<h4>${data.wordsbanner[i].chinese}</h4>
					<br />
					<h4>${data.wordsbanner[i].author}</h4>
				`
			}
		}
	});
}