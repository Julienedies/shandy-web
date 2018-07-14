/**
 * Created by j on 18/7/1.
 */

//brick.set('debug', true);

brick.controllers.reg('main_ctrl', function () {


    var scope = this;
    var $elm = this.$elm;

    scope.done = function (data) {
        console.log(data);
        scope.render('a', data, function(){
            brick.compile(this);
        });
        $(this).remove();
    };
    $elm.find('[ic-ajax]').icAjax();


    scope.submit = function (fields) {
        console.log(fields);
        return fields;
    };


});