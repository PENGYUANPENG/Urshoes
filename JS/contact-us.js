window.onload = function () {
	//创建和初始化地图函数：
	function initMap() {
		createMap();//创建地图
		setMapEvent();//设置地图事件
		addMapControl();//向地图添加控件
		addMarker();//向地图中添加marker
	}

	//创建地图函数：
	function createMap() {
		var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
		var point = new BMap.Point(116.135205, 24.334422);//定义一个中心点坐标
		map.centerAndZoom(point, 18);//设定地图的中心点和坐标并将地图显示在地图容器中
		window.map = map;//将map变量存储在全局
	}

	//地图事件设置函数：
	function setMapEvent() {
		map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
		//map.enableScrollWheelZoom();启用地图滚轮放大缩小
		map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
		map.enableKeyboard();//启用键盘上下左右键移动地图
	}

	//地图控件添加函数：
	function addMapControl() {
		//向地图中添加缩放控件
		var ctrl_nav = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE });
		map.addControl(ctrl_nav);
		//向地图中添加缩略图控件
		var ctrl_ove = new BMap.OverviewMapControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1 });
		map.addControl(ctrl_ove);
		//向地图中添加比例尺控件
		var ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
		map.addControl(ctrl_sca);
	}

	//标注点数组
	var markerArr = [{ title: "公司地址", content: "备注备注备注", point: "116.135205|24.334422", isOpen: 0, icon: { w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5 } }
	];
	//创建marker
	function addMarker() {
		for (var i = 0; i < markerArr.length; i++) {
			var json = markerArr[i];
			var p0 = json.point.split("|")[0];
			var p1 = json.point.split("|")[1];
			var point = new BMap.Point(p0, p1);
			var iconImg = createIcon(json.icon);
			var marker = new BMap.Marker(point, { icon: iconImg });
			var iw = createInfoWindow(i);
			var label = new BMap.Label(json.title, { "offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20) });
			marker.setLabel(label);
			map.addOverlay(marker);
			label.setStyle({
				borderColor: "#808080",
				color: "#333",
				cursor: "pointer"
			});

			(function () {
				var index = i;
				var _iw = createInfoWindow(i);
				var _marker = marker;
				_marker.addEventListener("click", function () {
					this.openInfoWindow(_iw);
				});
				_iw.addEventListener("open", function () {
					_marker.getLabel().hide();
				})
				_iw.addEventListener("close", function () {
					_marker.getLabel().show();
				})
				label.addEventListener("click", function () {
					_marker.openInfoWindow(_iw);
				})
				if (!!json.isOpen) {
					label.hide();
					_marker.openInfoWindow(_iw);
				}
			})()
		}
	}
	//创建InfoWindow
	function createInfoWindow(i) {
		var json = markerArr[i];
		var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
		return iw;
	}
	//创建一个Icon
	function createIcon(json) {
		var icon = new BMap.Icon("http://map.baidu.com/image/us_mk_icon.png", new BMap.Size(json.w, json.h), { imageOffset: new BMap.Size(-json.l, -json.t), infoWindowOffset: new BMap.Size(json.lb + 5, 1), offset: new BMap.Size(json.x, json.h) })
		return icon;
	}

	initMap();//创建和初始化地图


	/* 用户反馈窗口 */

	var email = document.getElementById("email");
	var oDiv = document.getElementById("shakee");
	var btn = email.getElementsByTagName("button");
	var oIpt = email.getElementsByTagName("input");
	var oTxt = email.getElementsByTagName("textarea")[0];
	var oTc = document.getElementsByClassName("primary")[0];
	var oMask = document.getElementsByClassName("mask")[0];
	var oT = oTc.getElementsByTagName("div")[2];
	var timer;
	var userInfo = {
		"name": "",
		"phone":"",
		"email":"",
		"usermsg":""
	}

	btn[1].onclick = function () {
		for (var i = 0; i < oIpt.length; i++) {
			oIpt[i].value = "";
		}
		oTxt.value = "";
	}

	//接口调用
	btn[0].onclick = function () {
		if (oIpt[1].value != "" && oIpt[2].value != "" && oIpt[0].value != "" && oTxt.value != "") {
			userInfo.name = oIpt[0].value;
			userInfo.email = oIpt[1].value;
			userInfo.phone = oIpt[2].value;
			userInfo.usermsg = oTxt.value;
			$.ajax({
				url: "http://192.168.2.119:10089/api/v1/userinfo",//要请求的服务器url 
				//这是一个对象，表示请求的参数，两个参数：method=ajax&val=xxx，服务器可以通过request.getParameter()来获取 
				//data:{method:"ajaxTest",val:value},  
				data: userInfo,  //用户反馈信息(POST方式)
				async: true,   //是否为异步请求
				cache: false,  //是否缓存结果
				type: "POST", //请求方式为POST
				dataType: "json",   //服务器返回的数据是什么类型 
				success: function (result) {  //这个方法会在服务器	执行成功是被调用 ，参数result就是服务器返回的值(现在是json类型) 
					console.log(result)
					if(result.result == "OK"){
						for (var i = 0; i < oIpt.length; i++) {
							oIpt[i].value = "";
						}
						oTxt.value = "";
						oTc.style.display = "block";
						oMask.style.display = "block";
						var i = 4
						timer = setInterval(function () {
							i--;
							oT.innerText = " 谢谢您的反馈，窗口还有" + i + "s自动关闭"
						}, 1000)
						setTimeout(function () {
							oTc.style.display = "none";
							oMask.style.display = "none";
							clearInterval(timer);
						}, 4000)
					}else{
						oTc.style.display = "block";
						oMask.style.display = "block";
						var i = 4
						timer = setInterval(function () {
							i--;
							oT.innerText = " 发送失败，窗口还有" + i + "s自动关闭"
						}, 1000)
						setTimeout(function () {
							oTc.style.display = "none";
							oMask.style.display = "none";
							clearInterval(timer);
						}, 4000)
					}
				}
			})
			
		} else {
			timer = setInterval(function () {
				oDiv.className = "col-md-8 text-left shake-constant shake"
			}, 1000)
			setTimeout(function () {
				oDiv.className = "col-md-8 text-left";
				clearInterval(timer)
			}, 2000)

		}
	}

	/* 下载用户信息 */
	var downloadBtn = document.getElementById("Download");
	var JSONToExcelConvertor = function (JSONData, FileName, ShowLabel) {
			//先转化json
			var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

			var excel = '<table>';

			//设置表头
			var row = "<tr>";
			for (var i = 0, l = ShowLabel.length; i < l; i++) {
				row += "<td>" + ShowLabel[i].value + '</td>';
			}


			//换行
			excel += row + "</tr>";

			//设置数据

			var row = ""

			for (var i in arrData) {
				var name = arrData[i].name === "." ? "" : arrData[i].name;
				var phone = arrData[i].phone === "." ? "" : arrData[i].phone;
				var email = arrData[i].email === "." ? "" : arrData[i].email;
				var usermsg = arrData[i].usermsg === "." ? "" : arrData[i].usermsg;
				row += '<tr>' + '<td>' + name + '</td>' + '<td>' + email + '</td>' + '<td>' + phone + '</td>' + '<td>' + usermsg + '</td>' + '</tr>';
			}

			excel += row;


			excel += "</table>";
			console.log(excel)
			var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
			excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
			excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel';
			excelFile += '; charset=UTF-8">';
			excelFile += "<head>";
			excelFile += "<!--[if gte mso 9]>";
			excelFile += "<xml>";
			excelFile += "<x:ExcelWorkbook>";
			excelFile += "<x:ExcelWorksheets>";
			excelFile += "<x:ExcelWorksheet>";
			excelFile += "<x:Name>";
			excelFile += "{worksheet}";
			excelFile += "</x:Name>";
			excelFile += "<x:WorksheetOptions>";
			excelFile += "<x:DisplayGridlines/>";
			excelFile += "</x:WorksheetOptions>";
			excelFile += "</x:ExcelWorksheet>";
			excelFile += "</x:ExcelWorksheets>";
			excelFile += "</x:ExcelWorkbook>";
			excelFile += "</xml>";
			excelFile += "<![endif]-->";
			excelFile += "</head>";
			excelFile += "<body>";
			excelFile += excel;
			excelFile += "</body>";
			excelFile += "</html>";


			var uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile);

			var link = document.createElement("a");
			link.href = uri;

			link.style = "visibility:hidden";
			link.download = FileName + ".xls";

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
	}

	downloadBtn.onclick = function () {	
		$.ajax({
			url: "http://192.168.2.119:10089/api/v1/alluser",//要请求的服务器url 
			//这是一个对象，表示请求的参数，两个参数：method=ajax&val=xxx，服务器可以通过request.getParameter()来获取 
			async: true,   //是否为异步请求
			cache: false,  //是否缓存结果
			type: "GET", //请求方式为POST
			dataType: "json",   //服务器返回的数据是什么类型 
			success: function (result) { //这个方法会在服务器执行成功是被调用 ，参数result就是服务器返回的值(现在是json类型) 
				var data = {
					"title": [
						{ "value": "用户名", "type": "ROW_HEADER_HEADER", "datatype": "string" },
						{ "value": "邮箱", "type": "ROW_HEADER_HEADER", "datatype": "string" },
						{ "value": "手机号", "type": "ROW_HEADER_HEADER", "datatype": "string" },
						{ "value": "反馈信息", "type": "ROW_HEADER_HEADER", "datatype": "string" }],
					"data": []
				};
				if (result.result == true ) {
					data.data = result.data;
					JSONToExcelConvertor(data.data, "用户反馈信息", data.title);
				} else {	
					alert ("下载失败")
				}
			}
		})
	}


	//时间
	var oTime = document.getElementsByClassName("cart-info")[0];
	var time = new Date();
	var Hour = time.getHours();
	var Day = time.getDate();
	var Year = time.getFullYear();
	var Month = time.getMonth() + 1;
	if (Hour >= 6 && Hour < 10) {
		oTime.innerHTML = "<i class='glyphicon glyphicon-time'></i>&nbsp;" + Year + "年" + Month + "月" + Day + "日，早上好！"
	} else if (Hour >= 10 && Hour < 14) {
		oTime.innerHTML = "<i class='glyphicon glyphicon-time'></i>&nbsp;" + Year + "年" + Month + "月" + Day + "日，中午好！"
	} else if (Hour >= 14 && Hour <= 18) {
		oTime.innerHTML = "<i class='glyphicon glyphicon-time'></i>&nbsp;" + Year + "年" + Month + "月" + Day + "日，下午好！"
	} else if (Hour < 24) {
		oTime.innerHTML = "<i class='glyphicon glyphicon-time'></i>&nbsp;" + Year + "年" + Month + "月" + Day + "日，晚上好！"
	}
	//天气
	tpwidget("init", {
		"flavor": "slim",
		"location": "WS0E9D8WN298",
		"geolocation": "enabled",
		"language": "zh-chs",
		"unit": "c",
		"theme": "chameleon",
		"container": "tp-weather-widget",
		"bubble": "enabled",
		"alarmType": "badge",
		"color": "#FFFFFF",
		"uid": "UE3A0E0213",
		"hash": "d899c59c6168af4ba724e724e0bb1004"
	});
	tpwidget("show");

	//钟表canvas
	var canvas = document.getElementsByTagName("canvas")[0];
	var context = canvas.getContext("2d");
	context.strokeStyle = "skyblue"

	for (var i = 0; i < 60; i++) {
		context.beginPath();
		context.moveTo(100, 100)
		context.arc(100, 100, 65, (i * 6) * Math.PI / 180, (i + 1) * 6 * Math.PI / 180)
		context.closePath()
		context.stroke()
	}
	context.beginPath();
	context.fillStyle = "#fff";
	context.arc(100, 100, 55, 0, 2 * Math.PI)
	context.closePath();
	context.fill();

	for (var i = 0; i < 12; i++) {
		context.beginPath();
		context.lineWidth = 3;
		context.moveTo(100, 100)
		context.arc(100, 100, 65, (i * 30) * Math.PI / 180, (i + 1) * 30 * Math.PI / 180)
		context.closePath()
		context.stroke()
	}
	context.beginPath();
	context.fillStyle = "#fff";
	context.arc(100, 100, 45, 0, 2 * Math.PI)
	context.closePath();
	context.fill();


	setInterval(time1, 1000)
	time1();
	function time1() {
		var time = new Date();
		/*console.log(time.getHours()*3600+time.getMinutes()*60+time.getSeconds())*/
		var times = (time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds())
		//var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();
		context.strokeStyle = "skyblue"
		context.beginPath();
		context.fillStyle = "#fff";
		context.arc(100, 100, 45, 0, 2 * Math.PI)
		context.closePath();
		context.fill();
		//小时
		context.beginPath();
		context.lineWidth = 3;
		context.moveTo(100, 100);
		context.arc(100, 100, 25, (-90 + times * (720 / 86400)) * Math.PI / 180, (-90 + times * (720 / 86400)) * Math.PI / 180);
		context.closePath();
		context.stroke();
		//分针
		context.beginPath();
		context.lineWidth = 2;
		context.moveTo(100, 100)
		context.arc(100, 100, 30, (-90 + minutes * 6) * Math.PI / 180, (-90 + minutes * 6) * Math.PI / 180)
		context.closePath();
		context.stroke();
		//秒针
		context.beginPath();
		context.lineWidth = 1;
		context.moveTo(100, 100)
		context.arc(100, 100, 40, (-90 + seconds * 6) * Math.PI / 180, (-90 + seconds * 6) * Math.PI / 180)
		context.closePath();
		context.stroke();
	}


	var iclock = document.getElementById("clock");
	clock_show.onmouseenter = function () {
		iclock.style.display = "block";
	}
	clock_show.onmouseleave = function () {
		iclock.style.display = "none";
	}
	//搜索
	var oSch = document.getElementsByClassName("search-box")[0];
	var oGo = oSch.getElementsByTagName("button")[0];
	var oS_txt = oSch.getElementsByTagName("input")[0];
	oGo.onclick = function () {
		if (oS_txt.value != "") {
			window.open("https://www.baidu.com/s?wd=" + oS_txt.value)
		}
	}
	oSch.onkeydown = function (ev) {
		var e = ev || window.event
		if (oS_txt.value != "" && e.keyCode == 13) {
			window.open("https://www.baidu.com/s?wd=" + oS_txt.value)
			oS_txt.value = ""
		}
	}
}
