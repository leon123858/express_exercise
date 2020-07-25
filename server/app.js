// JavaScript source code
var express = require('express');
var app = new express();
//配置模板引擎(View)
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')
app.set('views', __dirname + '/views');//指定模板位置
//建置靜態文件連結(static) 自動匹配相符文件
app.use(express.static(__dirname + '/static'));//使html直接連結靜態資料
app.use('/static',express.static(__dirname + '/static'));//使static可取靜態資料
//主程式
app.get('/', function (req, res) {
    var x = 15;
    //<%變數名%> 會讀取ejs傳入JSON加等號顯示
    res.render("index", {num:x});//轉換頁面 find from views
});

app.get('/params', function (req, res) {
    res.send("get:" + req.query.aid);
});

app.post('/post', function (req, res) {
    res.send('post:');
});

app.get('/dynamic/:aid', function (req, res) {
    res.send('dynamic:' + req.params.aid);
});

app.listen(1450, '127.0.0.1');