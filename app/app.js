/**
 * Created by julien.zhang on 2015/1/26.
 */

var express = require('express');
var app = express();

// 目录
var path = require("path");
global.ROOT_DIR = path.join(__dirname, '../');
global.DATA_DIR = path.join(ROOT_DIR, './data/');
global.LOG_DIR = path.join(__dirname, './log/');
global.ASSETS_DIR = path.join(ROOT_DIR, '/assets');
global.USER_DIR = path.join(ROOT_DIR, './app/');
global.CONF_DIR = path.join(USER_DIR, './conf/');
global.SERVICE_DIR = path.join(USER_DIR, './services/');
global.HELPER_DIR = path.join(USER_DIR, './helper/');
global.ACTION_DIR = path.join(USER_DIR, './action/');
global.FILTER_DIR = path.join(USER_DIR, './filter/');
global.VIEW_DIR = path.join(USER_DIR, './view/');
global.STATIC_DIR = path.join(USER_DIR, './static/');

// 全局配置
require(CONF_DIR + 'global.js');

// 扩展js原生对象原型
require(HELPER_DIR + 'j_extend.js');

// 环境相关配置
require(CONF_DIR + app.get('env') + '.js')(app);

console.log(app.get('env'));

// 控制台打印日志
app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
});

// 配置模板引擎
var swig = require('swig');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', VIEW_DIR);

// express 视图缓存
app.set('view cache', VIEWCACHE);
// swig 视图缓存
swig.setDefaults({ cache: false });

// 请求体解析
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/favicon.ico',  function(req, res){
    res.sendFile(STATIC_DIR + 'img/favicon.ico');
});

app.use('/public/static/', express.static(STATIC_DIR.replace(/\/$/, '')));

// 应用路由
require(HELPER_DIR + 'routes.js')(require(CONF_DIR + 'routes.js'), app);

// start
app.listen(2018, function () {
    console.log('server start on port 2018.');
});

