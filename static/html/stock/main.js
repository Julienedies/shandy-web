/**
 * Created by j on 17/7/23.
 */

brick.set('view.aniId', 26);

brick.controllers.reg('mainCtrl', function (scope) {
    var $nav = $('[ic-tabs="nav"] > li');
    var views = $nav.map(function () {
        return $(this).attr('aic-view-to');
    }).get();
    var index = 0;
    var max = views.length - 1;
    var callback = _.debounce(function (e) {
        //正负值表示滚动方向
        e.originalEvent.deltaY < 0 ? --index : ++index;
        if (index < 0) {
            index = max;
        }
        if (index > max) {
            index = 0;
        }
        $nav.eq(index).click();
        //brick.view.to(views[index]);
    }, 30);

    $(document.body).on('mousewheel', function (e) {
        callback(e);
    });

    scope.$elm.on('click', 'p, dt, li', function(e){
        $(this).toggleClass('focus');
    });

});