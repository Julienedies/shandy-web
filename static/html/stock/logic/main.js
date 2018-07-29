/**
 * Created by j on 18/7/28.
 */

brick.reg('logic_ctrl', function(){

    var scope = this;
    var $elm = scope.$elm;
    var list = brick.services.get('recordManager')();

    this.get_logic_on_done = function(data){
        list.init(data);
        scope.render('logics', data);
    };

    this.logic = {
        add : function(){
            scope.emit('logic.edit');
        },
        edit : function(e, id){
            scope.emit('logic.edit', list.get(id));
        },
        remove : function(){
            $(this).closest('li').remove();
        }
    };

    scope.on('logic.edit.done', function(){
        $elm.find('#get_logic').click();
    });

});

//
brick.reg('set_logic_ctrl', function(){

    var scope = this;
    var $elm = this.$elm;
    var logic;

    scope.done = function(){
        $elm.hide();
        scope.emit('logic.edit.done');
    };

    scope.reset = function(){
        scope.render({});
    };

    scope.close = function(){
        $elm.hide();
    };

    scope.on('logic.edit', function(e, msg){
        console.info(e, msg);
        logic = msg;
        $elm.show();
        msg && scope.render(msg[0] || msg);
    });


});