/**
 * Created by j on 18/7/1.
 */

brick.reg('mainCtrl', function(){

    var scope = this;


});

brick.reg('checkCtrl', function () {

    var scope = this;
    var $elm = this.$elm;

    scope.done = function (data) {
        console.info(data);
        scope.render('a', data);
        $(this).remove();
    };

    scope.$elm.find('#market[ic-ajax=market]').icAjax();

    scope.submit = function (fields) {
        console.info(fields);
        return fields;
    };

    scope.tags = {
        remove : {
            before: function(data){
                 return {text: data};
            },
            done: function(data){
                $(this).closest('.control').remove();
            }
        }
    };

    $elm.on('ic-select.change', '[ic-select]', function(e, msg){
        console.log(e, msg);
        $elm.find(`input[name=${msg.name}]`).val(msg.value);
    });

});


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

    scope.reset();

});