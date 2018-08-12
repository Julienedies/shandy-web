/**
 * Created by j on 18/8/5.
 */

brick.reg('set_tag_ctrl', function () {

    var scope = this;
    var $elm = this.$elm;

    scope.done = function(data){
        scope.emit('tag.edit.done', data);
        $elm.icPopup(false);
    };

    scope.reset = function(){
        scope.render({});
    };

    scope.on('tag.add, tag.edit', function (e, msg) {
        console.info(e, msg);
        let model = msg || {};
        scope.render(model[0] || model);
        $elm.icPopup(true);
    });

});