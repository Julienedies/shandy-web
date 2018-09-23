/*!
 * Created by j on 18/9/20.
 */
brick.reg('c_ctrl', function(){

    var scope = this;

    var query = brick.utils.get_query() || {};
    var code = query.code;
    var edit = query.edit;

    var c;

    $.ajax({url:`/stock/c/${code}`, dataType:'json'}).done(function(data){
        c = data;
        if(edit) {
            scope.set_c(data);
        }else{
            set_c_done({}, data);
        }
    });

    scope.set_c = function(data){
        scope.$elm.hide();
        scope.emit('set_c', c);
    };

    function set_c_done(e, data){
        scope.$elm.show().find('[ic-tpl=c]').icRender(data);
    }

    scope.on('set_c_done', set_c_done);
});

brick.reg('set_c_ctrl', function(){
    var scope = this;
    this.done = function(data){
        scope.$elm.hide();
        scope.emit('set_c_done', data);
    };
    scope.on('set_c', function(e, data){
        scope.$elm.show().find('[ic-tpl=set_c]').icRender(data);
    });
});