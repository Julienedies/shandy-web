/*!
 * Created by j on 18/9/23.
 */

const fs = require('fs');
const path = require('path');

const sdob = require('../../libs/sdob.js');

module.exports = {

    get: function (req, res) {
        var code = req.params.code;
        var dob = sdob(code);
        res.json(dob.get());
    },

    post: function (req, res) {
        var code = req.params.code;
        var data = req.body;
        var dob = sdob(code);
        dob.set(data);
        res.json(dob.get());
    }


};