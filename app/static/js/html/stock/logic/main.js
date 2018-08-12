/**
 * Created by j on 18/7/28.
 */


/**
 * Created by j on 18/8/5.
 */

brick.reg('logics_ctrl', function(){

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

});;
/**
 * Created by j on 18/8/5.
 */

brick.reg('set_logic_ctrl', function(){

    var scope = this;
    var $elm = this.$elm;

    scope.done = function(){
        scope.emit('logic.edit.done');
        $elm.icPopup(false);
    };

    scope.reset = function(){
        scope.render({});
    };

    scope.on('logic.edit', function(e, msg){
        let logic = msg || {};
        scope.render(logic[0] || logic);
        $elm.icPopup(true);
    });


});;