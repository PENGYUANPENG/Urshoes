window.onload =function(){
	//创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMarker();//向地图中添加marker
    }
    
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(113.504617,23.15999);//定义一个中心点坐标
        map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        //map.enableScrollWheelZoom();启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
    }
    
    //标注点数组
    var markerArr = [{title:"公司地址",content:"我的备注",point:"113.505088|23.160232",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
		 ];
    //创建marker
    function addMarker(){
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
			var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
			var iw = createInfoWindow(i);
			var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
			marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                        borderColor:"#808080",
                        color:"#333",
                        cursor:"pointer"
            });
			
			(function(){
				var index = i;
				var _iw = createInfoWindow(i);
				var _marker = marker;
				_marker.addEventListener("click",function(){
				    this.openInfoWindow(_iw);
			    });
			    _iw.addEventListener("open",function(){
				    _marker.getLabel().hide();
			    })
			    _iw.addEventListener("close",function(){
				    _marker.getLabel().show();
			    })
				label.addEventListener("click",function(){
				    _marker.openInfoWindow(_iw);
			    })
				if(!!json.isOpen){
					label.hide();
					_marker.openInfoWindow(_iw);
				}
			})()
        }
    }
    //创建InfoWindow
    function createInfoWindow(i){
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    }
    //创建一个Icon
    function createIcon(json){
        var icon = new BMap.Icon("http://map.baidu.com/image/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
    }
    
    initMap();//创建和初始化地图
    
	var email = document.getElementById("email");
	var oDiv = document.getElementById("shakee");
	var btn = email.getElementsByTagName("button");
	var oIpt = email.getElementsByTagName("input");
	var oTxt = email.getElementsByTagName("textarea")[0];
	var oTc = document.getElementsByClassName("primary")[0];
	var oMask = document.getElementsByClassName("mask")[0];
	var oT = oTc.getElementsByTagName("div")[2];
	var timer;
	
	btn[1].onclick = function(){
		for(var i = 0 ; i<oIpt.length;i++){
			oIpt[i].value = "";
		}
		oTxt.value ="";
	}
	btn[0].onclick = function(){
		if( oIpt[1].value != "" && oIpt[2].value != ""&&oIpt[1].value != "" && oTxt != ""){
		oTc.style.display= "block";
		oMask.style.display = "block";
		var i = 6
		timer=setInterval(function(){
			i--;
			oT.innerText = " 谢谢您的反馈，窗口还有"+i+"s自动关闭"
		},1000)
		setTimeout(function(){
		oTc.style.display= "none";
		oMask.style.display = "none";
		clearInterval(timer);
		},6000)
	}else{
		timer=setInterval(function(){
			oDiv.className = "col-md-8 text-left shake-constant shake"
		},1000)
		setTimeout(function(){
			oDiv.className = "col-md-8 text-left";
			clearInterval(timer)
		},2000)
		
	}
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
