/**
 * Created by j on 18/6/28.
 */

brick.set('ic-show-img-item', 'a[href$=png]');
brick.set('ic-show-img-url', 'href');

brick.set('ic-select-cla', 'is-warning');

brick.debug('log');

//brick.set('debug', true);

brick.reg('main_ctrl', function(){

    var scope = this;
    var $elm = scope.$elm;

    scope.before = function(f){
        console.info('ic-form-submit-before => ', f);
    };

    this.ajax_before_confirm = function(data, msg){
        //console.info([].slice.call(arguments));
        return confirm(msg);
    };

    $elm.on('ic-form.error', function(e, msg){
        console.info(msg);
    });

});

$('#nav-tabs ul li').each(function(){
    var cla = 'is-active';
    var $th = $(this).removeClass(cla);
    if($th.find('a').attr('href').indexOf(location.pathname) > -1){
        $th.addClass(cla);
    }
});