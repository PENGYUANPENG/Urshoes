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

//添加页尾
var footer = document.getElementsByClassName("jumbotron")[0];
footer.innerHTML = `<footer>
    <div class="container">
        <div class="main-footer">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="about">
                        <h3>Sneaker基地</h3>
                        <br />
                        <small>
                            <a rel="#" href="#">UrShoes</a> 的图片来源于网路.这里是鞋迷聚集地，欢迎您的到来。
									<br />提供第一手球鞋咨询！！提供最正规的球鞋交易平台！！提供最真实的球鞋辨认攻略！！更多精彩内容尽在UrShoes！！</small>
                    </div>
                </div>
                <div class="col-md-3  col-sm-6 col-xs-6">
                    <div class="shop-list">
                        <h3>品牌商城</h3>
                        <ul>
                            <li>
                                <i class="glyphicon glyphicon-chevron-right"></i>&nbsp;
										<a href="#">Nike官网</a>
                            </li>
                            <li>
                                <i class="glyphicon glyphicon-chevron-right"></i>&nbsp;
										<a href="#">Addidas官网</a>
                            </li>
                            <li>
                                <i class="glyphicon glyphicon-chevron-right"></i>&nbsp;
										<a href="#">Asics官网</a>
                            </li>
                            <li>
                                <i class="glyphicon glyphicon-chevron-right"></i>&nbsp;
										<a href="#">New balance官网</a>
                            </li>
                            <li>
                                <i class="glyphicon glyphicon-chevron-right"></i>&nbsp;
										<a href="#">Vans官网</a>
                            </li>
                            <li>
                                <i class="glyphicon glyphicon-chevron-right"></i>&nbsp;
										<a href="#">Puma官网</a>
                            </li>
                            <li>
                                <i class="glyphicon glyphicon-chevron-right"></i>&nbsp;
										<a href="#">Saucony官网</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="recent-posts">
                        <h3>新品介绍</h3>
                        <div class="recent-post">
                            <div class="recent-post-thumb">
                                <img src="img/new-kobe.jpg" alt="">
									</div>
                                <div class="recent-post-info">
                                    <h6>
                                        <a href="https://store.nike.com/cn/zh_cn/pw/kobe-bryant-%E7%AF%AE%E7%90%83/a9hZ8r1">Nike Kobe AD</a>
                                    </h6>
                                    <span>08/08/2017</span>
                                </div>
                            </div>
                            <div class="recent-post">
                                <div class="recent-post-thumb">
                                    <img src="img/new-adidas.jpg" alt="">
									</div>
                                    <div class="recent-post-info">
                                        <h6>
                                            <a href="https://www.adidas.com.cn/originals_tubular?utm_source=Baidu&utm_medium=SEM&utm_term=BZPCtab3picture&utm_campaign=adidas_Brandzone&utm_content=BrandzonePC">源自街头设计，打破时尚禁锢 全新Tubular系列</a>
                                        </h6>
                                        <span>09/09/2017</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="more-info">
                                <h3>更多信息</h3>
                                <ul>
                                    <li>
                                        <i class="glyphicon glyphicon-earphone"></i>:010-020-0340</li>
                                    <li>
                                        <i class="glyphicon glyphicon-home"></i>:Dargon Studio, Dargon Street,Dargon Estate</li>
                                    <li>
                                        <i class="glyphicon glyphicon-envelope"></i>
                                        <a href="#">666@company.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="social-bottom">
                                <h4>Follow us:</h4>
                                <div class="hvr-underline-from-center">
                                    <img src="img/wechat.png" class="wechat" />
                                    <img src="img/weibo.png" />
                                    <img src="img/QQ.png" />
                                </div>
                                <div class="show-2cart">
                                    <small>Wechat: 123pyp
										<br /> Weibo: 123pyp
										<br /> QQ: 123456pyp</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>`

/* 页尾新品 */
var newsHtml = document.getElementsByClassName("recent-post");
$.ajax({
    type: "GET",
    url: "JS/news.json",
    dataType: "json",
    success: function (data) {
        for (var i = 0; i < data.length; i++) {
            newsHtml[i].innerHTML =
                `		
						<div class="recent-post-thumb">
                        <img src="${data[i].imgUrl}" alt="">
                        </div>
                        <div class="recent-post-info">
                            <h6>
                                <a href="${data[i].linkUrl}">${data[i].newsname}</a>
                            </h6>
                            <span>${data[i].newsmsg}</span>
                        </div>
				`
        }
    }
});