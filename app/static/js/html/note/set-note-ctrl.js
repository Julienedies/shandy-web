/**
 * Created by j on 18/8/5.
 */

brick.reg('set_note_ctrl', function(){

    var scope = this;
    var $elm = this.$elm;

    scope.done = function(data){
        scope.emit('note.edit.done', data);
        $elm.icPopup(false);
    };

    scope.reset = function(){
        scope.render({});
    };

    scope.on('note.edit', function(e, msg){
        let note = msg || {};
        scope.render(note[0] || note);
        $elm.icPopup(true);
    });


    scope.on_select_change = function(msg){
        $elm.find('[ic-form-field="type"]').val(msg.value);
    };


});