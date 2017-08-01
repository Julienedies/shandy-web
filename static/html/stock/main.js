/**
 * Created by j on 17/7/23.
 */

brick.set('view.aniId', 26);

brick.controllers.reg('mainCtrl', function (scope) {
    var $body = $(document.body);
    var $elm = scope.$elm;
    var $nav = $('[ic-tabs="nav"] > li');
    var $views = $elm.find('>div[aic-view]');

    var views = $nav.map(function () {
        return $(this).attr('aic-view-to');
    }).get();

    var isConfirm = false;
    var index = 0;
    var max = views.length - 1;

    var clientHeight = $elm.height();

    var callback = _.debounce(function (e) {
        console.log(e, $elm.scrollTop(), clientHeight, $elm[0].scrollHeight);
        //正负值表示滚动方向
        var isUp = e.originalEvent.deltaY < 0;
        var viewElem = $views.get(index);
        //判断当前视图是否有隐藏内容
        if (viewElem.scrollHeight > clientHeight) {
            //判断滚动方向
            if (isUp && $elm.scrollTop() > 0) {
                return;
            }

            if (!isUp && $elm.scrollTop() + clientHeight < $elm[0].scrollHeight) {
                return;
            }

            if(!isConfirm) {
                isConfirm = true;
                return;
            }
        }

        isConfirm = false;

        isUp ? --index : ++index;
        if (index < 0) {
            index = max;
        }
        if (index > max) {
            index = 0;
        }
        $nav.eq(index).click();
        //brick.view.to(views[index]);
    }, 100);

    $body.on('mousewheel', callback);

    scope.$elm.on('ic-scroll', function (e) {
        //console.log('scroll', e);
        //$body.off('mousewheel', callback);
    }).on('click', 'p, dt, li', function (e) {
        $(this).toggleClass('focus');
    });

});