/**
 * Created by j on 18/7/28.
 */

brick.reg('replay_ctrl', function () {

    var scope = this;
    var $elm = this.$elm;

    scope.done = function (data) {
        console.info(data);
        scope.render('a', data);
    };

    scope.replay = {
        before: function (fields){
            console.info(fields);
            return fields;
        },
        done: function(msg){
            $elm.find('#get_replay').icAjax();
        }
    };

    scope.tags = {
        add: {
           before: function(data){
               return {name: this.name, text: this.value};
           },
            done: function(data){
                $(this).val('');
                $elm.find('[ic-form-submit="replay"]').trigger('ic-form.submit');
            }
        },
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