/**
 * Created by j on 18/8/16.
 * 扩展js原生对象原型
 */

String.prototype.j_trim = function(){
    return this.replace(/\s+/img, '');
};

Array.prototype.j_remove = function(v){
    let index = this.indexOf(v);
    if(index > -1) {
        return this.splice(index, 1);
    }
};