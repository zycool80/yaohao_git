var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n;
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
};

!function(n, t) {
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Ald = t();
}(void 0, function() {
    function n() {
        this.concurrency = 4, this.queue = [], this.tasks = [], this.activeCount = 0;
        var n = this;
        this.push = function(t) {
            this.tasks.push(new Promise(function(e, o) {
                var r = function() {
                    n.activeCount++, t().then(function(n) {
                        e(n);
                    }).then(function() {
                        n.next();
                    });
                };
                n.activeCount < n.concurrency ? r() : n.queue.push(r);
            }));
        }, this.all = function() {
            return Promise.all(this.tasks);
        }, this.next = function() {
            n.activeCount--, n.queue.length > 0 && n.queue.shift()();
        };
    }
    function t(n) {
        this.app = n;
    }
    function e(n) {
        C = w(), Q = n, this.aldstat = new t(this);
    }
    function o(n) {
        var t;
        t = n.scene != cn, cn = n.scene, J = 0, Q = n, W = n.query.ald_share_src, $ = n.query.aldsrc || "", 
        z = n.query.ald_share_src, E = Date.now(), an || (G = !1), an = !1, un || (0 !== B && Date.now() - B > 3e4 ? O = w() : t && (O = w())), 
        0 !== B && Date.now() - B < 3e4 && (tn = !0), n.query.ald_share_src && "1044" == n.scene && n.shareTicket ? wx.getShareInfo({
            shareTicket: n.shareTicket,
            success: function(n) {
                X = n, D("event", "ald_share_click", JSON.stringify(n));
            }
        }) : n.query.ald_share_src && D("event", "ald_share_click", 1), "" === Y && wx.getSetting({
            withCredentials: !0,
            success: function(n) {
                n.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !0,
                    success: function(n) {
                        var t = v();
                        Y = n, t.ufo = y(n), j = g(n.userInfo.avatarUrl.split("/")), p(t);
                    }
                });
            }
        }), m("app", "show");
    }
    function r() {
        B = Date.now(), "" === Y && wx.getSetting({
            success: function(n) {
                n.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !0,
                    success: function(n) {
                        Y = n, j = g(n.userInfo.avatarUrl.split("/"));
                        var t = v();
                        t.ufo = y(n), p(t);
                    }
                });
            }
        }), m("app", "hide");
    }
    function i(n) {
        F++, D("event", "ald_error_message", n);
    }
    function s(n) {
        rn = n;
    }
    function a() {
        en = U ? this.$mp.page.route : this.route, x("page", "show"), tn = !1;
    }
    function u() {
        on = en;
    }
    function c() {
        on = en;
    }
    function f() {
        D("event", "ald_pulldownrefresh", 1);
    }
    function l() {
        D("event", "ald_reachbottom", 1);
    }
    function h(n) {
        un = !0;
        var t = S(n.path), e = {};
        for (var o in Q.query) "ald_share_src" === o && (e[o] = Q.query[o]);
        var r = "";
        if (r = -1 == n.path.indexOf("?") ? n.path + "?" : n.path.substr(0, n.path.indexOf("?")) + "?", 
        "" !== t) for (var o in t) e[o] = t[o];
        e.ald_share_src ? -1 == e.ald_share_src.indexOf(K) && e.ald_share_src.length < 200 && (e.ald_share_src = e.ald_share_src + "," + K) : e.ald_share_src = K;
        for (var i in e) -1 == i.indexOf("ald") && (r += i + "=" + e[i] + "&");
        return n.path = r + "ald_share_src=" + e.ald_share_src, D("event", "ald_share_status", n), 
        n;
    }
    function d() {
        function n() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }
        return n() + n() + n() + n() + n() + n() + n() + n();
    }
    function p(n) {
        function t() {
            return new Promise(function(t, e) {
                wx.request({
                    url: "https://" + I + ".aldwx.com/d.html",
                    data: n,
                    header: {
                        AldStat: "MiniApp-Stat",
                        se: N || "",
                        op: T || "",
                        img: j
                    },
                    method: "GET",
                    success: function(n) {
                        t(200 == n.statusCode ? "" : "status error");
                    },
                    fail: function() {
                        t("fail");
                    }
                });
            });
        }
        J++, n.at = O, n.et = Date.now(), n.uu = K, n.v = H, n.ak = k.app_key.replace(/(\t)|(\s)/g, ""), 
        n.wsr = Q, n.ifo = G, n.rq_c = J, n.ls = C, wx.Queue.push(t);
    }
    function v() {
        var n = {};
        for (var t in Z) n[t] = Z[t];
        return n;
    }
    function g(n) {
        for (var t = "", e = 0; e < n.length; e++) n[e].length > t.length && (t = n[e]);
        return t;
    }
    function w() {
        return "" + Date.now() + Math.floor(1e7 * Math.random());
    }
    function y(n) {
        var t = {};
        for (var e in n) "rawData" != e && "errMsg" != e && (t[e] = n[e]);
        return t;
    }
    function S(n) {
        if (-1 == n.indexOf("?")) return "";
        var t = {};
        return n.split("?")[1].split("&").forEach(function(n) {
            var e = n.split("=")[1];
            t[n.split("=")[0]] = e;
        }), t;
    }
    function _(n) {
        for (var t in n) if ("object" == _typeof(n[t]) && null !== n[t]) return !0;
        return !1;
    }
    function m(n, t) {
        var e = v();
        e.ev = n, e.life = t, e.ec = F, e.st = Date.now(), e.dr = Date.now() - E, $ && (e.qr = $, 
        e.sr = $), W && (e.usr = W), p(e);
    }
    function x(n, t) {
        var e = v();
        e.ev = n, e.st = Date.now(), e.life = t, e.pp = en, e.pc = on, e.dr = Date.now() - E, 
        un && (e.so = 1), un = !1, rn && "{}" != JSON.stringify(rn) && (e.ag = rn), $ && (e.qr = $, 
        e.sr = $), W && (e.usr = W), tn && (e.ps = 1), nn || (sn = en, nn = !0, e.ifp = nn, 
        e.fp = en), p(e);
    }
    function D(n, t, e) {
        var o = v();
        o.ev = n, o.tp = t, o.st = V, o.dr = Date.now() - E, e && (o.ct = e), p(o);
    }
    function b(n, t, e) {
        if (n[t]) {
            var o = n[t];
            n[t] = function(n) {
                e.call(this, n, t), o.call(this, n);
            };
        } else n[t] = function(n) {
            e.call(this, n, t);
        };
    }
    function A(n) {
        var t = {};
        for (var s in n) "onLaunch" !== s && "onShow" !== s && "onHide" !== s && "onError" !== s && (t[s] = n[s]);
        return t.onLaunch = function(t) {
            e.call(this, t), "function" == typeof n.onLaunch && n.onLaunch.call(this, t);
        }, t.onShow = function(t) {
            o.call(this, t), n.onShow && "function" == typeof n.onShow && n.onShow.call(this, t);
        }, t.onHide = function() {
            r.call(this), n.onHide && "function" == typeof n.onHide && n.onHide.call(this);
        }, t.onError = function(t) {
            i.call(this, t), n.onError && "function" == typeof n.onError && n.onError.call(this, t);
        }, t;
    }
    function M(n) {
        var t = {};
        for (var e in n) "onLoad" !== e && "onShow" !== e && "onHide" !== e && "onUnload" !== e && "onPullDownRefresh" !== e && "onReachBottom" !== e && "onShareAppMessage" !== e && (t[e] = n[e]);
        return t.onLoad = function(t) {
            s.call(this, t), "function" == typeof n.onLoad && n.onLoad.call(this, t);
        }, t.onShow = function(t) {
            a.call(this), "function" == typeof n.onShow && n.onShow.call(this, t);
        }, t.onHide = function(t) {
            u.call(this), "function" == typeof n.onHide && n.onHide.call(this, t);
        }, t.onUnload = function(t) {
            c.call(this), "function" == typeof n.onUnload && n.onUnload.call(this, t);
        }, t.onReachBottom = function(t) {
            l(), n.onReachBottom && "function" == typeof n.onReachBottom && n.onReachBottom.call(this, t);
        }, t.onPullDownRefresh = function(t) {
            f(), n.onPullDownRefresh && "function" == typeof n.onPullDownRefresh && n.onPullDownRefresh.call(this, t);
        }, n.onShareAppMessage && "function" == typeof n.onShareAppMessage && (t.onShareAppMessage = function(t) {
            var e = n.onShareAppMessage.call(this, t);
            return void 0 === e ? (e = {}, e.path = this.route) : void 0 === e.path && (e.path = this.route), 
            h.call(this, e);
        }), t;
    }
    function q(n) {
        return App(A(n));
    }
    function L(n) {
        return Page(M(n));
    }
    function P(n) {
        return U = !0, A(n);
    }
    function R(n) {
        return M(n);
    }
    void 0 === wx.Queue && (wx.Queue = new n(), wx.Queue.all());
    var k = require("./ald-stat-conf.js"), H = "7.2.2", I = "log", U = !1, O = "", C = "", E = 0, B = 0, N = "", T = "", j = "", J = 0, Q = "", G = "", K = function() {
        var n = "";
        try {
            n = wx.getStorageSync("aldstat_uuid");
        } catch (t) {
            n = "uuid_getstoragesync";
        }
        if (n) G = !1; else {
            n = d();
            try {
                wx.setStorageSync("aldstat_uuid", n), G = !0;
            } catch (n) {
                wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
            }
        }
        return n;
    }(), V = Date.now(), W = "", $ = "", z = "", F = 0, X = "", Y = "", Z = {}, nn = !1, tn = !1, en = "", on = "", rn = "", sn = "", an = !0, un = !1, cn = "";
    try {
        var fn = wx.getSystemInfoSync();
        Z.br = fn.brand, Z.pm = fn.model, Z.pr = fn.pixelRatio, Z.ww = fn.windowWidth, Z.wh = fn.windowHeight, 
        Z.lang = fn.language, Z.wv = fn.version, Z.wvv = fn.platform, Z.wsdk = fn.SDKVersion, 
        Z.sv = fn.system;
    } catch (n) {}
    return wx.getNetworkType({
        success: function(n) {
            Z.nt = n.networkType;
        }
    }), wx.getSetting({
        success: function(n) {
            n.authSetting["scope.userLocation"] ? wx.getLocation({
                type: "wgs84",
                success: function(n) {
                    Z.lat = n.latitude, Z.lng = n.longitude, Z.spd = n.speed;
                }
            }) : k.getLocation && wx.getLocation({
                type: "wgs84",
                success: function(n) {
                    Z.lat = n.latitude, Z.lng = n.longitude, Z.spd = n.speed;
                }
            });
        }
    }), t.prototype.sendEvent = function(n, t) {
        if ("" !== n && "string" == typeof n && n.length <= 255) if ("string" == typeof t && t.length <= 255) D("event", n, t); else if ("object" == (void 0 === t ? "undefined" : _typeof(t))) {
            if (JSON.stringify(t).length >= 255) return void console.error("自定义事件参数不能超过255个字符");
            if (_(t)) return void console.error("事件参数，参数内部只支持Number,String等类型，请参考接入文档");
            D("event", n, JSON.stringify(t));
        } else void 0 === t ? D("event", n, !1) : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符"); else console.error("事件名称必须为String类型且不能超过255个字符");
    }, t.prototype.sendSession = function(n) {
        if ("" === n || !n) return void console.error("请传入从后台获取的session_key");
        N = n;
        var t = v();
        t.st = Date.now(), t.tp = "session", t.ct = "session", t.ev = "event", "" === Y ? wx.getSetting({
            success: function(n) {
                n.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function(n) {
                        t.ufo = y(n), j = g(n.userInfo.avatarUrl.split("/")), "" !== X && (t.gid = X), p(t);
                    }
                }) : "" !== X && (t.gid = X, p(t));
            }
        }) : (t.ufo = Y, "" !== X && (t.gid = X), p(t));
    }, t.prototype.sendOpenid = function(n) {
        if ("" === n || !n) return void console.error("openID不能为空");
        T = n;
        var t = v();
        t.st = Date.now(), t.tp = "openid", t.ev = "event", t.ct = "openid", p(t);
    }, k.plugin ? {
        App: q,
        Page: L,
        MpvueApp: P,
        MpvuePage: R
    } : function(n) {
        !function() {
            var n = App, t = Page, d = Component;
            App = function(t) {
                b(t, "onLaunch", e), b(t, "onShow", o), b(t, "onHide", r), b(t, "onError", i), n(t);
            }, Page = function(n) {
                var e = n.onShareAppMessage;
                b(n, "onLoad", s), b(n, "onUnload", c), b(n, "onShow", a), b(n, "onHide", u), b(n, "onReachBottom", l), 
                b(n, "onPullDownRefresh", f), void 0 !== e && null !== e && (n.onShareAppMessage = function(n) {
                    if (void 0 !== e) {
                        var t = e.call(this, n);
                        return void 0 === t ? (t = {}, t.path = en) : void 0 === t.path && (t.path = en), 
                        h(t);
                    }
                }), t(n);
            }, Component = function(n) {
                try {
                    var t = n.methods.onShareAppMessage;
                    b(n.methods, "onLoad", s), b(n.methods, "onUnload", c), b(n.methods, "onShow", a), 
                    b(n.methods, "onHide", u), b(n.methods, "onReachBottom", l), b(n.methods, "onPullDownRefresh", f), 
                    void 0 !== t && null !== t && (n.methods.onShareAppMessage = function(n) {
                        if (void 0 !== t) {
                            var e = t.call(this, n);
                            return void 0 === e ? (e = {}, e.path = en) : void 0 === e.path && (e.path = en), 
                            h(e);
                        }
                    }), d(n);
                } catch (t) {
                    d(n);
                }
            };
        }();
    }();
});