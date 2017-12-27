/**
 * Created by j on 17/12/17.
 */


//$('dt, li').click(function (e) {
//    $(this).toggleClass('focus');
//});

brick.controllers.reg('mainCtrl', function (scope) {
    var $body = $(document.body);
    var $elm = scope.$elm;
    var $nav = $('[ic-tabs="nav"] > li');
    var $views = $elm.find('section');

    var views = $nav.map(function () {
        return $(this).attr('aic-view-to');
    }).get();

    var bounce = 0;
    var index = 0;
    var max = views.length - 1;

    var clientHeight = $elm.height();
    var oldIsUp;

    var callback = _.debounce(function (e) {
        console.log($elm.scrollTop(), clientHeight, $elm[0].scrollHeight, bounce);
        //正负值表示滚动方向
        var isUp = e.originalEvent.deltaY < 0;
        var viewElem = $views.get(index);

        if (isUp !== oldIsUp) {
            bounce = 0;
            oldIsUp = isUp;
        }

        //判断当前视图是否有隐藏内容
        //if (viewElem.scrollHeight > clientHeight) {
            //判断滚动方向
            if (isUp && $elm.scrollTop() > 0) {
                return;
            }

            if (!isUp && $elm.scrollTop() + clientHeight + 5 < $elm[0].scrollHeight) {
                return;
            }

            if (bounce < 2) {
                bounce++;
                return;
            }
        //}

        bounce = 0;

        isUp ? --index : ++index;
        if (index < 0) {
            index = max;
        }
        if (index > max) {
            index = 0;
        }
        $nav.eq(index).click();
        //brick.view.to(views[index]);
    }, 250);

    $body.on('mousewheel', callback);

    scope.$elm.on('ic-scroll', function (e) {
        //console.log('scroll', e);
        //$body.off('mousewheel', callback);
    }).on('click', 'p, dt, li', function (e) {
        //$(this).toggleClass('focus');
    });

});