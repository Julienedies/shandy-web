/**
 * Created by j on 18/7/22.
 */

const fs = require('fs');
const path = require('path');

const dob = require('../../libs/dob.js');

const tags = dob('tags', {key: 'text'});

module.exports = {

    get: function (req, res) {

    },

    post: function (req, res) {

        console.log(req.body);

        var data = req.body;

        tags.set(data);

        res.send({msg:'ok'});
    },

    del: function (req, res) {
        //let body = reg.body;
        //tags.find(body).remove();
        var id = req.params.id;
        tags.find(id, 'id').remove();
        res.send({msg:'ok'});
    }
};