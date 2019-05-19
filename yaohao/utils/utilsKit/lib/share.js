function Share() {}

function getCurrentPageWithArgs() {
    var e = getUserInfo(), r = cache.get("sales_man_id"), t = getCurrentPages(), n = t[t.length - 1], i = n.route, a = n.options, s = "/" + i + "?";
    for (var u in a) {
        s += u + "=" + a[u] + "&";
    }
    return s += "u_id=" + e.id + "&s_id=" + r;
}

var _require = require("./common.js"), extend = _require.extend, cache = require("./cache.js"), _require2 = require("./../../../models/GlobalModel.js"), getUserInfo = _require2.getUserInfo;

Share.extend = function(e) {
    return extend(this, e);
}, Share.extend({
    share: function(e, r, t) {
        var n = void 0, i = getUserInfo(), a = cache.get("sales_man_id");
        return n = r ? r + (r.indexOf("?") > -1 ? "&" : "?") + "u_id=" + i.id + "&s_id=" + a : getCurrentPageWithArgs(), 
        {
            title: e,
            imageUrl: t || "",
            path: n || ""
        };
    }
}), module.exports = Share;