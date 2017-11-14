window.onload = function(){
				var dataImg = [{
					"src": "images/1.png"
				},
				{
					"src": "images/2.png"
				},
				{
					"src": "images/3.png"
				},
				{
					"src": "images/4.png"
				},
				{
					"src": "images/5.png"
				},
				{
					"src": "images/6.png"
				},
				{
					"src": "images/7.png"
				},
				{
					"src": "images/8.png"
				},
				{
					"src": "images/9.png"
				},
				{
					"src": "images/10.png"
				},
				{
					"src": "images/11.png"
				},
				{
					"src": "images/12.png"
				},
				{
					"src": "images/13.png"
				},
				{
					"src": "images/14.png"
				},
				{
					"src": "images/15.png"
				},
				{
					"src": "images/16.png"
				},
				{
					"src": "images/17.png"
				},
				{
					"src": "images/18.png"
				},
				{
					"src": "images/19.png"
				},
				{
					"src": "images/20.png"
				},
				{
					"src": "images/21.png"
				},
				{
					"src": "images/22.png"
				},
				{
					"src": "images/23.png"
				},
				{
					"src": "images/24.png"
				},
				{
					"src": "images/25.png"
				},
				{
					"src": "images/26.png"
				},
				{
					"src": "images/27.png"
				},
				{
					"src": "images/28.png"
				},
				{
					"src": "images/29.png"
				},
				{
					"src": "images/30.png"
				},
				{
					"src": "images/31.png"
				},
				{
					"src": "images/32.png"
				},
				{
					"src": "images/33.png"
				},
				{
					"src": "images/34.png"
				},
				{
					"src": "images/35.png"
				},
				{
					"src": "images/36.png"
				},
				{
					"src": "images/37.png"
				},
				{
					"src": "images/38.png"
				},
				{
					"src": "images/39.png"
				},
				{
					"src": "images/40.png"
				},
				{
					"src": "images/41.png"
				},
				{
					"src": "images/42.png"
				},
				{
					"src": "images/43.png"
				},
				{
					"src": "images/44.png"
				},
				{
					"src": "images/45.png"
				},
				{
					"src": "images/46.png"
				},
				{
					"src": "images/47.png"
				},
				{
					"src": "images/48.png"
				},
				{
					"src": "images/49.png"
				},
				{
					"src": "images/50.png"
				},
				{
					"src": "images/51.png"
				},
				{
					"src": "images/52.png"
				},
				{
					"src": "images/53.png"
				},
				{
					"src": "images/54.png"
				},
				{
					"src": "images/55.png"
				},
				{
					"src": "images/56.png"
				},
				{
					"src": "images/57.png"
				},
				{
					"src": "images/58.png"
				},
				{
					"src": "images/59.png"
				},
				{
					"src": "images/60.png"
				},
				{
					"src": "images/61.png"
				},
				{
					"src": "images/62.png"
				},
				{
					"src": "images/63.png"
				},
				{
					"src": "images/64.png"
				},
				{
					"src": "images/65.png"
				},
				{
					"src": "images/66.png"
				},
				{
					"src": "images/67.png"
				},
				{
					"src": "images/68.png"
				},
				{
					"src": "images/69.png"
				},
				{
					"src": "images/70.png"
				},
				{
					"src": "images/71.png"
				},
				{
					"src": "images/72.png"
				},
				{
					"src": "images/73.png"
				},
				{
					"src": "images/74.png"
				},
				{
					"src": "images/75.png"
				},
				{
					"src": "images/76.png"
				},
				{
					"src": "images/77.png"
				},
				{
					"src": "images/78.png"
				},
				{
					"src": "images/79.png"
				},
				{
					"src": "images/80.png"
				},
				{
					"src": "images/81.png"
				},
				{
					"src": "images/82.png"
				},
				{
					"src": "images/83.png"
				},
				{
					"src": "images/84.png"
				},
				{
					"src": "images/85.png"
				},
				{
					"src": "images/86.png"
				},
				{
					"src": "images/87.png"
				},
				{
					"src": "images/88.png"
				},
				{
					"src": "images/89.png"
				},
				{
					"src": "images/90.png"
				},
				{
					"src": "images/91.png"
				},
				{
					"src": "images/92.png"
				},
				{
					"src": "images/93.png"
				},
				{
					"src": "images/94.png"
				},
				{
					"src": "images/95.png"
				},
				{
					"src": "images/96.png"
				},
				{
					"src": "images/97.png"
				},
				{
					"src": "images/98.png"
				},
				{
					"src": "images/99.png"
				},
				{
					"src": "images/100.png"
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
