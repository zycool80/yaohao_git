var formatTime = function(t) {
    var r = t.getFullYear(), e = t.getMonth() + 1, n = t.getDate(), o = t.getHours(), i = t.getMinutes(), u = t.getSeconds();
    return [ r, e, n ].map(formatNumber).join("/") + " " + [ o, i, u ].map(formatNumber).join(":");
}, formatNumber = function(t) {
    return t = t.toString(), t[1] ? t : "0" + t;
}, wxPromisify = function(t) {
    return function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise(function(e, n) {
            r.success = function(t) {
                e(t);
            }, r.fail = function(t) {
                n(t);
            }, t(r);
        });
    };
};

module.exports = {
    formatTime: formatTime,
    wxPromisify: wxPromisify
};