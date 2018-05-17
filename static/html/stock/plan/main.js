/**
 * Created by j on 18/4/23.
 */

function get_date() {
    var date = new Date();
    var day = date.getDay();
    if (day > 5 || day < 1) return;
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    return [18, m, date.getDate()];
}

var d = get_date();
var url = d && d.join('-') + '.html';
if (d && location.href.search(url) == -1) {
    location.href = url;
}
