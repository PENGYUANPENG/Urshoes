var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const DATATYPE = {
    name: String,
    phone: String,
    email: String,
    usermsg: String
}
var dbConnectStr = 'mongodb://localhost:27017/usermsgcollection'        
var Activity = mongoose.model('Project',DATATYPE);
var UserInfo = mongoose.model('Userinfo',DATATYPE );

//用户反馈信息收集
function UpdateUser(user) {
    console.log("username：" + user.name);
    mongoose.connect(dbConnectStr, {
        useMongoClient: true
    });
            let userinfo = {
                name: user.name,
                phone: user.phone,
                email: user.email,
                usermsg: user.usermsg,
            };
            //userinfo = JSON.stringify(userinfo);
            UserInfo.create(userinfo, function (err, docs) {
                if (err) console.log("创建用户记录失败:" + err);
                else {
                    console.log("成功新建用户记录：" + docs);
                }
            });
}


app.use(bodyParser.json({
    limit: '1mb'
})); //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({ //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));

//解决跨域问题
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else next();
});


//收集信息到后台
app.post('/api/v1/userinfo', function (req, res) {
    UpdateUser(req.body);
    res.send({
        "result": "OK",
    })
});


//获取所有用户的信息
app.get('/api/v1/alluser', function (req, res) {
    mongoose.connect(dbConnectStr, {
        useMongoClient: true
    });
    UserInfo.find({}, '-_id name phone usermsg email', (err, docs) => { //返回需要的字符按
        if (err) {
            res.send({
                "result": false,
                data: '请求数据失败'
            });
            return console.log(err);
        } else {
            res.send({
                "result": true,
                data: docs
            });
        }
    })
})


var server = app.listen(10089,"192.168.2.119", function () {

    var host = server.address().address
    var port = server.address().port

    console.log("企业网站用户系统，访问地址为 http://%s:%s", host, port)

})