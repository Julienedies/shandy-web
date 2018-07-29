/**
 * Created by j on 18/7/28.
 */

brick.reg('replay_ctrl', function () {

    var scope = this;
    var $elm = this.$elm;

    scope.done = function (data) {
        console.info(data);
        scope.render('a', data);
        $(this).remove();
    };

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