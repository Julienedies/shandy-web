/**
 * Created by j on 18/7/22.
 */

brick.controllers.reg('plansCtrl', function(){

    var scope = this;
    var model = {};

    this.done = function(data){
        console.info(data);
        model = data;
        scope.render('plans', data);
        $(this).remove();
    };

    scope.edit = function(){
        let id = $(this).data('id');
        scope.emit('edit', model[id]);
    };

    scope.remove = function(){
        $(this).closest('li').remove();
    };

    scope.$elm.find('[ic-ajax=plans]').icAjax();

});