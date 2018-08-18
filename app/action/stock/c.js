/**
 * Created by j on 18/8/13.
 */

const fetch = require('../../libs/fetch/fetch.js');

module.exports = {

    get: function (req, res) {
        var code = req.params.code;
        var sources = ['ths_new', 'ths_p', 'ycj'];
        var data = {};
        var callback = function (result, id, code){
            //Object.assign(data, result);
            data[id] = result;
            sources.j_remove(id);
            if(sources.length == 0){
                res.json(data);
            }
        };

        sources.map(id => {
            fetch(code, id, callback);
        });

    },

    post: function (req, res) {
        var obj = req.body;
    }

};