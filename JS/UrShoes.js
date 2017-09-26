window.onload = function(){
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
				context.strokeStyle = "skyblue"
					
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
					context.strokeStyle = "skyblue"
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
clock_show.onmouseenter = function(){
	iclock.style.display="block";
}
clock_show.onmouseleave = function(){
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

	