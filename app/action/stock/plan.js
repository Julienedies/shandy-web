/**
 * Created by j on 18/7/22.
 */

const dob = require('../../libs/dob.js');

const plans = dob('plan');

const tags = require('./tags.js').tags;

function data(){
    return {plans:plans.get(), tags: tags.convert()};
}

module.exports = {

    get: function (req, res) {
        res.json(data());
    },

    // 创建一个平仓计划
    post: function (req, res) {
        var obj = req.body;
        plans.set(obj);
        res.json(data());
    },

    del: function (req, res) {
        var id = req.params.id;
        plans.find(id).remove();
        res.json(data());
    }
};