function _toConsumableArray(r) {
    if (Array.isArray(r)) {
        for (var e = 0, t = Array(r.length); e < r.length; e++) t[e] = r[e];
        return t;
    }
    return Array.from(r);
}

function StoragePlus() {}

var _require = require("./common.js"), extend = _require.extend;

StoragePlus.extend = function(r) {
    extend(this, r);
}, StoragePlus.extend({
    append: function(r, e) {
        var t = wx.getStorageSync(r), n = [];
        t ? (n = t.split(","), n.push(e)) : n.push(e);
        var o = new Set(n);
        wx.setStorageSync(r, [].concat(_toConsumableArray(o)).join(","));
    },
    removeOne: function(r, e) {
        var t = wx.getStorageSync(r), n = [];
        if (t) {
            n = t.split(",");
            var o = [], a = !0, u = !1, i = void 0;
            try {
                for (var l, c = n[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
                    var s = l.value;
                    s !== e && o.push(s);
                }
            } catch (r) {
                u = !0, i = r;
            } finally {
                try {
                    !a && c.return && c.return();
                } finally {
                    if (u) throw i;
                }
            }
            wx.setStorageSync(r, o.join(","));
        }
    },
    getAll: function(r) {
        var e = wx.getStorageSync(r);
        return e ? e.split(",") : [];
    },
    remove: function(r) {
        wx.clearStorageSync(r);
    }
}), module.exports = StoragePlus;