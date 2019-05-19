function Cache() {}

var _require = require("./common.js"), extend = _require.extend;

Cache.extend = function(e) {
    return extend(this, e);
}, Cache.extend({
    get: function(e) {
        var t = this.__encrypt(e);
        return wx.getStorageSync(t).__data;
    },
    set: function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, r = this.__encrypt(e), c = new Date().getTime() + 3600 * n * 1e3;
        wx.setStorageSync(r, {
            __timeout: c,
            __data: t
        });
    },
    setWithTimeout: function(e, t, n) {
        var r = this.__encrypt(e);
        wx.setStorageSync(r, {
            __timeout: n,
            __data: t
        });
    },
    remove: function(e) {
        var t = this.__encrypt(e);
        arguments.length < 1 || !e ? wx.clearStorageSync() : wx.removeStorageSync(t);
    },
    __encrypt: function(e) {
        return "cache_" + e;
    },
    checkTimeout: function(e) {
        var t = this.__encrypt(e), n = wx.getStorageSync(t), r = new Date().getTime();
        try {
            n = "[object Object]" === Object.prototype.toString.call(n) ? n : JSON.parse(n);
        } catch (e) {
            return !0;
        }
        return !n || !n.__data || n.__timeout <= r;
    }
}), module.exports = Cache;