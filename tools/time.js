/*
时间倒计时插件
TimeDown.js
*/
function TimeDown(endDateStr) {
    //结束时间
    var endDate = new Date(endDateStr.replace(/-/g, "/"));
    //当前时间
    var nowDate = new Date();
    if (nowDate >= endDate) {
        return "00时00分00秒"
    }
    //相差的总秒数
    var totalSeconds = parseInt((endDate - nowDate) / 1000);
    //天数
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    var modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    //分钟
    var minutes = Math.floor(modulo / 60);
    //秒
    var seconds = modulo % 60;
    //输出到页面
    return days + "天" + hours + "时" + minutes + "分" + seconds + "秒";

}

/*
时间倒计时插件
TimeDown.js
*/
function TimeUp(beginDateStr) {
    //结束时间
    var beginDate = new Date(beginDateStr.replace(/-/g, "/"));
    //当前时间
    var nowDate = new Date();
    if (nowDate <= beginDate) {
        return "刚刚"
    }
    //相差的总秒数
    var totalSeconds = parseInt((nowDate-beginDate) / 1000);
    //天数
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    var modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    //分钟
    var minutes = Math.floor(modulo / 60);
    //秒
    var seconds = modulo % 60;
    //输出到页面
    if (days > 0) return days + "天前";
    else if (hours > 0) return hours + "小时前";
    else if (minutes > 0) return minutes + "分前";
    else return seconds + "秒前";

}

export default {
    TimeDown: TimeDown,
    TimeUp: TimeUp
}