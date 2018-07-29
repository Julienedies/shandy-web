/**
 * Created by j on 18/7/28.
 */

const fs = require('fs');
const path = require('path');

const dob = require('../../libs/dob.js')('logic');

module.exports = {

    get: function (req, res) {
        res.json(dob.get());
    },

    post: function (req, res) {

        console.log(req.body);

        var data = req.body;

        dob.set(data);

        res.send({msg:'ok'});
    },

    del: function (req, res) {
        //let body = reg.body;
        //tags.find(body).remove();
        var id = req.params.id;
        dob.remove(id);
        res.send({msg:'ok'});
    }
};