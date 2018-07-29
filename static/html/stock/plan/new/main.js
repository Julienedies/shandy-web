/**
 * Created by j on 18/7/1.
 */

brick.reg('planCtrl', function(){

    var scope = this;

    var model;

    scope.on('init', function(e, msg){
        model = msg;
        scope.render('plans', msg);
    });

    scope.on('edit', function(e, msg){
        scope.render(msg);
    });

    scope.reset = function(){
        scope.render({});
    };

    scope.plan = {
        done: function(msg){

        }
    };
    scope.reset();

});