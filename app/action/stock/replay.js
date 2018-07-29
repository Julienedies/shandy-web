/**
 * Created by j on 18/7/22.
 */

const fs = require('fs');
const path = require('path');

const dob = require('../../libs/dob.js');

const tags = dob('tags', {key: 'text'});
const replay = dob('replay');

module.exports = {

    get: function (req, res) {
        var market = replay.get();
        var data = {};
        for(let i in market ){
            let text = market[i];
            data[i] = {text:text, tags: tags.get(i, 'name')};
        }
        res.json(data);
    },

    // 复盘
    post: function (req, res) {

        var data = req.body;

        for (let i in data) {
            let tag = data[i];
            tags.find(tag).set({name: i, text: tag});
        }

        replay.set(data);

        res.send({msg: 'ok'});

    }

};