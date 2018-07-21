brick.set('ic-show-img-item', 'a[href$=png]');
brick.set('ic-show-img-url', 'href');

brick.set('ic-select-cla', 'is-warning');

$('#nav-tabs ul li').each(function(){
    var cla = 'is-active';
    var $th = $(this).removeClass(cla);
    if($th.find('a').attr('href').indexOf(location.pathname) > -1){
        $th.addClass(cla);
    }
});