window.onload = function(){
				var dataImg = [{
					"src": "images/1.PNG"
				},
				{
					"src": "images/2.PNG"
				},
				{
					"src": "images/3.PNG"
				},
				{
					"src": "images/4.PNG"
				},
				{
					"src": "images/5.PNG"
				},
				{
					"src": "images/6.PNG"
				},
				{
					"src": "images/7.PNG"
				},
				{
					"src": "images/8.PNG"
				},
				{
					"src": "images/9.PNG"
				},
				{
					"src": "images/10.PNG"
				},
				{
					"src": "images/11.PNG"
				},
				{
					"src": "images/12.PNG"
				},
				{
					"src": "images/13.png"
				},
				{
					"src": "images/14.png"
				},
				{
					"src": "images/15.PNG"
				},
				{
					"src": "images/16.PNG"
				},
				{
					"src": "images/17.png"
				},
				{
					"src": "images/18.PNG"
				},
				{
					"src": "images/19.PNG"
				},
				{
					"src": "images/20.PNG"
				},
				{
					"src": "images/21.PNG"
				},
				{
					"src": "images/22.PNG"
				},
				{
					"src": "images/23.PNG"
				},
				{
					"src": "images/24.PNG"
				},
				{
					"src": "images/25.PNG"
				},
				{
					"src": "images/26.PNG"
				},
				{
					"src": "images/27.PNG"
				},
				{
					"src": "images/28.PNG"
				},
				{
					"src": "images/29.PNG"
				},
				{
					"src": "images/30.PNG"
				},
				{
					"src": "images/31.PNG"
				},
				{
					"src": "images/32.PNG"
				},
				{
					"src": "images/33.PNG"
				},
				{
					"src": "images/34.PNG"
				},
				{
					"src": "images/35.PNG"
				},
				{
					"src": "images/36.PNG"
				},
				{
					"src": "images/37.PNG"
				},
				{
					"src": "images/38.PNG"
				},
				{
					"src": "images/39.PNG"
				},
				{
					"src": "images/40.PNG"
				},
				{
					"src": "images/41.PNG"
				},
				{
					"src": "images/42.PNG"
				},
				{
					"src": "images/43.PNG"
				},
				{
					"src": "images/44.PNG"
				},
				{
					"src": "images/45.PNG"
				},
				{
					"src": "images/46.PNG"
				},
				{
					"src": "images/47.PNG"
				},
				{
					"src": "images/48.PNG"
				},
				{
					"src": "images/49.PNG"
				},
				{
					"src": "images/50.PNG"
				},
				{
					"src": "images/51.PNG"
				},
				{
					"src": "images/52.PNG"
				},
				{
					"src": "images/53.PNG"
				},
				{
					"src": "images/54.PNG"
				},
				{
					"src": "images/55.PNG"
				},
				{
					"src": "images/56.PNG"
				},
				{
					"src": "images/57.PNG"
				},
				{
					"src": "images/58.PNG"
				},
				{
					"src": "images/59.PNG"
				},
				{
					"src": "images/60.PNG"
				},
				{
					"src": "images/61.PNG"
				},
				{
					"src": "images/62.PNG"
				},
				{
					"src": "images/63.PNG"
				},
				{
					"src": "images/64.PNG"
				},
				{
					"src": "images/65.PNG"
				},
				{
					"src": "images/66.PNG"
				},
				{
					"src": "images/67.PNG"
				},
				{
					"src": "images/68.PNG"
				},
				{
					"src": "images/69.PNG"
				},
				{
					"src": "images/70.PNG"
				},
				{
					"src": "images/71.PNG"
				},
				{
					"src": "images/72.PNG"
				},
				{
					"src": "images/73.PNG"
				},
				{
					"src": "images/74.PNG"
				},
				{
					"src": "images/75.PNG"
				},
				{
					"src": "images/76.PNG"
				},
				{
					"src": "images/77.PNG"
				},
				{
					"src": "images/78.PNG"
				},
				{
					"src": "images/79.PNG"
				},
				{
					"src": "images/80.PNG"
				},
				{
					"src": "images/81.PNG"
				},
				{
					"src": "images/82.PNG"
				},
				{
					"src": "images/83.PNG"
				},
				{
					"src": "images/84.PNG"
				},
				{
					"src": "images/85.PNG"
				},
				{
					"src": "images/86.PNG"
				},
				{
					"src": "images/87.PNG"
				},
				{
					"src": "images/88.PNG"
				},
				{
					"src": "images/89.PNG"
				},
				{
					"src": "images/90.PNG"
				},
				{
					"src": "images/91.PNG"
				},
				{
					"src": "images/92.PNG"
				},
				{
					"src": "images/93.PNG"
				},
				{
					"src": "images/94.PNG"
				},
				{
					"src": "images/95.PNG"
				},
				{
					"src": "images/96.PNG"
				},
				{
					"src": "images/97.PNG"
				},
				{
					"src": "images/98.PNG"
				},
				{
					"src": "images/99.PNG"
				},
				{
					"src": "images/100.PNG"
				},
			];
			
			var oPro = document.getElementsByClassName("products")[0];
			var oUl = oPro.getElementsByTagName("ul")[0];
			var html =null;
			var click = 20;
			var oBG = document.getElementsByClassName("con-BG")[0]
			var btn = oBG.getElementsByTagName("button")[0];
			var oImg = oUl.getElementsByTagName("img");
			var odiv = document.getElementsByClassName("showIMG")[0];
			for(var i = 0; i < 20; i++) {
				oUl.innerHTML += "<li><img class='img-thumbnail' src='" + dataImg[i].src + " '></li>"
			}
			btn.onclick = function(){
				click+=10;
				var ul = ""
				for(var i = 0; i < click; i++) {
				ul += "<li><img class='img-thumbnail' src='" + dataImg[i].src + " '></li>"
			}
				oUl.innerHTML=ul;
				oUl = oPro.getElementsByTagName("ul")[0];
			    oImg = oUl.getElementsByTagName("img");
				if(click===100){
				btn.style.display="none";
			}
				for(var i = 0;i<oImg.length;i++){
				oImg[i].onclick = function(){
					oBG.style.backgroundImage = "url("+this.src+")";
					localStorage.setItem("BGsrc",this.src);
				}
			}	
			}
			for(var i = 0;i<oImg.length;i++){
				oImg[i].onclick = function(){
					oBG.style.backgroundImage = "url("+this.src+")";
					localStorage.setItem("BGsrc",this.src)
				}
			}	
			resetIMG.onclick = function(){
				localStorage.clear()
				oBG.style.backgroundImage = "url(images/IMG_5727.JPG)";

			}
				if(localStorage.getItem("BGsrc")){
		oBG.style.backgroundImage = "url("+localStorage.getItem("BGsrc")+")";
		
	}
				
//时间
var oTime = document.getElementsByClassName("cart-info")[0];
	var time = new Date();
	var Hour = time.getHours();
	var Day = time.getDate();
	var Year = time.getFullYear();
	var Month = time.getMonth()+1;
	if(Hour>=6&&Hour<10){
	oTime.innerHTML = "<i class='glyphicon glyphicon-time'></i>&nbsp;"+Year+"年"+Month+"月"+Day+"日，早上好！"
}else if(Hour>=10&&Hour<14){
	oTime.innerHTML = "<i class='glyphicon glyphicon-time'></i>&nbsp;"+Year+"年"+Month+"月"+Day+"日，中午好！"
}else if(Hour>=14&&Hour<=18){
	oTime.innerHTML = "<i class='glyphicon glyphicon-time'></i>&nbsp;"+Year+"年"+Month+"月"+Day+"日，下午好！"
}else if(Hour<24){
	oTime.innerHTML = "<i class='glyphicon glyphicon-time'></i>&nbsp;"+Year+"年"+Month+"月"+Day+"日，晚上好！"
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
				
					
				for(var i=0;i<60;i++){
					context.beginPath();
					context.moveTo(100,100)
					context.arc(100,100,65,(i*6)*Math.PI/180,(i+1)*6*Math.PI/180)
					context.closePath()
					context.stroke()
				}
				context.beginPath();
				context.fillStyle = "#fff";
				context.arc(100,100,55,0,2*Math.PI)
				context.closePath();
				context.fill();
				
				for(var i=0;i<12;i++){
					context.beginPath();
					context.lineWidth = 3;
					context.moveTo(100,100)
					context.arc(100,100,65,(i*30)*Math.PI/180,(i+1)*30*Math.PI/180)
					context.closePath()
					context.stroke()
				}
				context.beginPath();
				context.fillStyle = "#fff";
				context.arc(100,100,45,0,2*Math.PI)
				context.closePath();
				context.fill();
				
				
				setInterval(time1,1000)
				time1();
				function time1(){
				var time = new Date();
					/*console.log(time.getHours()*3600+time.getMinutes()*60+time.getSeconds())*/
					var times = (time.getHours()*3600+time.getMinutes()*60+time.getSeconds())
					//var hours = time.getHours();
					var minutes = time.getMinutes();
					var seconds = time.getSeconds();
					context.beginPath();
					context.fillStyle = "#fff";
					context.arc(100,100,45,0,2*Math.PI)
					context.closePath();
					context.fill();
					//小时
					context.beginPath();
					context.lineWidth = 3;
					context.moveTo(100,100);
					context.arc(100,100,25,(-90+times*(720/86400))*Math.PI/180,(-90+times*(720/86400))*Math.PI/180);
					context.closePath();
					context.stroke();
					//分针
					context.beginPath();
					context.lineWidth = 2;
					context.moveTo(100,100)
					context.arc(100,100,30,(-90+minutes*6)*Math.PI/180,(-90+minutes*6)*Math.PI/180)
					context.closePath();
					context.stroke();
					//秒针
					context.beginPath();
					context.lineWidth = 1;
					context.moveTo(100,100)
					context.arc(100,100,40,(-90+seconds*6)*Math.PI/180,(-90+seconds*6)*Math.PI/180)
					context.closePath();
					context.stroke();
			}


var iclock = document.getElementById("clock");
clock_show.onmouseover = function(){
	iclock.style.display="block";
}
clock_show.onmouseout = function(){
	iclock.style.display="none";
}
//搜索
var oSch = document.getElementsByClassName("search-box")[0];
var oGo = oSch.getElementsByTagName("button")[0];
var oS_txt = oSch.getElementsByTagName("input")[0];
oGo.onclick = function(){
	if(oS_txt.value != ""){
		window.open("https://www.baidu.com/s?wd="+oS_txt.value)
	}
}
oSch.onkeydown = function(ev){
	var e = ev || window.event
	if(oS_txt.value != ""&&e.keyCode == 13){
		window.open("https://www.baidu.com/s?wd="+oS_txt.value)
		oS_txt.value = ""
	}
}
}
