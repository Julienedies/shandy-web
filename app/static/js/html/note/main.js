/**
 * Created by j on 18/7/28.
 */


/**
 * Created by j on 18/8/5.
 */

brick.reg('notes_ctrl', function(){

    var scope = this;
    var $elm = scope.$elm;
    var list = brick.services.get('recordManager')();

    scope.get_notes_on_done = function(data){
        list.init(data);
        scope.render('notes', data);
    };

    this.note = {
        add : function(){
            scope.emit('note.edit');
        },
        edit : function(e, id){
            scope.emit('note.edit', list.get(id));
        },
        removed : function(){
            $(this).closest('li').remove();
        }
    };

    scope.on('note.edit.done', function(e, data){
        scope.get_notes_on_done(data);
    });

});;
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


});;