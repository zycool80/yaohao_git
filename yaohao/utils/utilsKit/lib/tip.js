function Tips() {}

var _require = require("./common.js"), extend = _require.extend;

Tips.extend = function(n) {
    extend(this, n);
}, Tips.extend({
    isLoading: !1,
    success: function(n) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
        if (setTimeout(function() {
            wx.showToast({
                title: n,
                icon: "success",
                mask: !0,
                duration: i
            });
        }, 300), i > 0) return new Promise(function(n, o) {
            setTimeout(function() {
                n();
            }, i);
        });
    },
    showModal: function(n) {
        return new Promise(function(i) {
            wx.showModal({
                title: "提示",
                content: n,
                showCancel: !1,
                success: function(n) {
                    i(n.confirm ? !0 : !1);
                },
                fail: function() {
                    i();
                }
            });
        });
    },
    confirm: function(n) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "提示";
        return new Promise(function(o, t) {
            wx.showModal({
                title: i,
                content: n,
                showCancel: !0,
                success: function(n) {
                    n.confirm ? o(!0) : n.cancel && o(!1);
                },
                fail: function(n) {
                    t(n);
                }
            });
        });
    },
    toast: function(n, i) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "success";
        setTimeout(function() {
            wx.showToast({
                title: n,
                icon: o,
                mask: !0,
                duration: 1e3
            });
        }, 300), i && setTimeout(function() {
            i();
        }, 1e3);
    },
    alert: function(n) {
        wx.showToast({
            title: n,
            mask: !0,
            duration: 1500
        });
    },
    error: function(n, i) {
        wx.showToast({
            title: n,
            image: "/images/error.png",
            mask: !0,
            duration: 500
        }), i && setTimeout(function() {
            i();
        }, 500);
    },
    loading: function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "加载中";
        Tips.isLoading || (Tips.isLoading = !0, wx.showLoading({
            title: n,
            mask: !0
        }));
    },
    loaded: function() {
        Tips.isLoading && (Tips.isLoading = !1, wx.hideLoading());
    }
}), module.exports = Tips;