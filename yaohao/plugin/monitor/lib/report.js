function mergeAll() {
    var r = arguments, e = void 0, t = 0, o = r.length;
    if (o < 1) return {};
    for (e = r[0], "[object Object]" !== getType.call(e) && (e = {}), t++; t < o; t++) {
        var n = r[t];
        if ("[object Object]" === getType.call(n)) for (var c in n) e[c] = n[c];
    }
    return e;
}

var getType = Object.prototype.toString, _require = require("./../../../models/GlobalModel.js"), getUserInfo = _require.getUserInfo, config = require("./../../../config/default.js"), PLATFORM = config.PLATFORM, REPORT_ERROR_URL = config.api.host + "/error/setError", ReportError = {
    send: function(r) {
        try {
            var e = getUserInfo() || "", t = mergeAll({
                userInfo: e
            }, r);
            this.__reportErrorReq(t);
        } catch (r) {
            console.log(r);
        }
    },
    sendExpect: function(r) {
        try {
            this.__reportErrorReq({
                error: JSON.stringify(r)
            });
        } catch (r) {
            console.log(r);
        }
    },
    __reportErrorReq: function(r) {
        var e = mergeAll({
            platform: PLATFORM
        }, r, wx.getSystemInfoSync() || {});
        wx.request({
            url: REPORT_ERROR_URL,
            method: "POST",
            data: {
                content: JSON.stringify(e)
            }
        });
    }
};

module.exports = ReportError;