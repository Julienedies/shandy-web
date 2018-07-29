/**
 * Created by j on 18/7/22.
 */

const dob = require('../../../libs/dob.js');

const plans = dob('plan', {key: 'id'});

module.exports = {

    get: function (req, res) {
        res.json(plans.get());
    },

    // 创建一个平仓计划
    post: function (req, res) {
        console.log(req.body);
        var data = req.body;
        plans.set(data);
        res.send({msg: 'ok'});
    },

    del: function (req, res) {
        var id = req.params.id;
        plans.find(id).remove();
        res.send({msg: 'ok'});
    }
};