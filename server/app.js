// JavaScript source code
var express = require('express');
var bodyParser = require('body-parser');
var app = new express();
//配置模板引擎(View)
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')
app.set('views', __dirname + '/views');//指定模板位置
//建置靜態文件連結(static) 自動匹配相符文件 (一種內置中間件)
app.use(express.static(__dirname + '/static'));//使html直接去static資料夾找連結靜態資料
app.use('/static', express.static(__dirname + '/static'));//使static可取靜態資料
//獲取post數據 用第三方中間件 先1.npm install body-parser --save 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //get json
//路由只會匹配一次 要繼續向下匹配需調用next 中間件可見
//中間件(在接收路由前先行觸發) 用在連接前需要做的判斷或處理
app.use(function (req, res, next) {//應用級中間件 所有路由前執行
    console.log(new Date());
    next();
});
//主程式
app.get('/', function (req, res) {
    var x = 15;
    //<%變數名%> 會讀取ejs傳入JSON加等號顯示
    res.render("index", {num:x});//轉換頁面 find from views
});
//?aid=something&......
app.get('/params', function (req, res) {
    res.send("get:" + req.query.aid);
});
//post 提交數據 但是用bodyparser處理
app.post('/login', function (req, res) {
    console.log(req.body); //直接用body屬性就是所有post資料的json
});
//路由級中間件 在該路由執行前運作
app.get('/dynamic/:aid', function (req, res,next) {
    console.log('dynamic:' + req.params.aid);
    next();
});
//動態路由 把path當參數
app.get('/dynamic/:aid', function (req, res) {
    res.send('dynamic:' + req.params.aid);
});

//無匹配中間件
app.use(function (req, res) {
    res.status(404).send('404');
});
app.listen(1450, '127.0.0.1');