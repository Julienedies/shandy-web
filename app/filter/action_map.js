/**
 * Created by julien.zhang on 2015/3/10.
 * 根据请求路径映射到对应的action,省却手工定义routes
 */

var fs = require('fs');
var logger = require('log4js').getLogger('routes');

module.exports = function (req, res, next) {

    var paths = req.path.replace(/^\//, '').replace('/', '.');
    var action = getAction(paths);

    if (action) {
        return action(req, res, next);
    } else{
        console.log(req.path);
        next();
    }

};

function getAction(namespace, dir) {

    dir = dir || ACTION_DIR;
    namespace = namespace.split('.');

    var actionPath = dir + namespace.shift() + '.js';

    console.log('actionPath => ',actionPath);

    if(fs.existsSync(actionPath)){
        try {
            var ctrl = require(actionPath);
        } catch (e) {
            logger.error(e);
            return false;
        }
    }else{
        return false;
    }

    var action = namespace.shift();

    return action ?
        function (req, res, next) {
            return ctrl[action](req, res, next);
        }
        : ctrl;
}