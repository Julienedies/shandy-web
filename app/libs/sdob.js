/**
 * Created by j on 18/8/13.
 * 管理个股自定义数据
 */

const fs = require('fs');
const path = require('path');

String.prototype.j_format = function(){
    return this.replace(/([{,])(?=".+"\s*[:]\s*)/img, '$1\r\n');
};

const base_path = path.join(__dirname, '../../../csd/s/');

function F(code){
    let file_path = path.join(base_path, `${code}.json`);
    this.file_path = file_path;
    //
    if(!fs.existsSync(file_path) ){
        fs.createWriteStream(file_path);
        //fs.writeFileSync(file_path, '{}');
        this._pool = {};
    }else{
        try{
            let str = fs.readFileSync(this.file_path, 'utf8');
            this._pool = JSON.parse(str);
        }catch(e){
            console.info(code);
            console.error(e);
            this._pool = {};
        }
    }
}

F.prototype.save = F.prototype.set = function(obj){
    Object.assign(this._pool, obj);
    let json = JSON.stringify(this._pool).j_format();
    fs.writeFileSync(this.file_path, json);
};

F.prototype.get = function(key){
    return key ? (this._pool[key]||'' ): this._pool;
};

F.prototype.match = function(key){
    if (!key) return this._pool;

    var keys = key.split('.');

    return (function x(namespace, keys) {
        var k = keys.shift();
        var o = namespace[k];
        if (o && keys.length) return x(namespace[k], keys);
        return o;
    })(this._pool, keys);
};


module.exports = function(name){
    return new F(name);
};