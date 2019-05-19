function n(n) {
    t.push(n);
}

function e() {
    t = [];
}

function r() {
    return t.slice();
}

function o(n) {
    return function(t) {
        return "Array" === n && Array.isArray ? Array.isArray(t) : Object.prototype.toString.call(t) === "[object " + n + "]";
    };
}

function i(n, t) {
    return function() {
        v(t) && t.apply(this, arguments), v(n) && n.apply(this, arguments);
    };
}

function u(n, t) {
    if (y(n) && v(n.handler)) {
        var e = n.name, r = n.handler;
        t[e] = i(t[e], r);
    }
}

function g() {
    return +new Date();
}

function s() {
    return (getCurrentPages() || []).map(function(n) {
        return n.route;
    });
}

function f() {
    var n = s();
    return 0 < n.length ? n[n.length - 1] : "";
}

function h(n) {
    return n && c(n) ? JSON.parse(n) : n;
}

function d(n) {
    try {
        return h(n);
    } catch (n) {}
    return null;
}

function p(n) {
    var t = "";
    try {
        t = JSON.stringify(n);
    } catch (n) {
        t = "";
    }
    return t;
}

function m(n) {
    return n + "";
}

function w(n) {
    return n ? y(n) ? p(n).length : c(n) ? n.length : n instanceof ArrayBuffer ? n.byteLength : n.length ? n.length : 0 : 0;
}

function _() {
    S = {}, T = [], b = [], k = 0;
}

function N(n) {
    x = n;
}

function j() {
    k = g();
}

function A(n) {
    q = n || {};
}

function U(n) {
    console.log("TINGYUN AGENT checking sampling"), q.key && q.beacon && wx.request({
        url: "".concat(q.beacon, "/mp-config/config/pullSampling?encodeMpId=").concat(q.key),
        method: "GET",
        _no_record: !0,
        success: function(n) {
            var t = n.data || {}, e = t.code, r = t.data;
            200 === e && r && (C = r.sampling || 1, wx.setStorageSync(I, C));
        },
        fail: function() {
            C = 1;
        },
        complete: function() {
            n && n(C);
        }
    });
}

function G() {
    "" === C && (C = +q.sampleRate || 1, U());
    var n = Math.random();
    E = n <= C;
}

function H(n, t) {
    a.uid = n, wx.setStorageSync(M, n);
}

function J() {
    var n = wx.getStorageSync(M);
    return n || (n = l(), wx.setStorageSync(M, n)), n;
}

function X(n) {
    if (E) {
        var t = Object.assign({}, Y, a || {}, {
            key: q.key
        }, n || {});
        t.launch = !n, wx.request({
            url: "".concat(q.beacon, "/mp-app"),
            data: t,
            method: "POST",
            _no_record: !0
        });
    }
}

function B() {
    if (E && !x) {
        var n = Object.assign({}, {
            path: f(),
            pageEvent: Object.assign({}, S),
            requests: T.slice(),
            errs: b.slice(),
            fromPath: O.prev || ""
        }, Object.assign({}, Y, a || {}, {
            key: q.key
        }), 0 < k ? {
            ct: k
        } : {});
        _(), N(!0), wx.request({
            url: "".concat(q.beacon, "/mp-page"),
            data: n,
            method: "POST",
            _no_record: !0
        });
    }
}

function F() {
    return !0;
}

function z(n) {
    G();
    var t = n.path, e = n.query, r = n.scene;
    a.openPath = t, a.query = e, a.scene = r, wx.getNetworkType({
        success: function(n) {
            a.networkType = n.networkType;
        },
        complete: function() {
            X();
        }
    });
}

function K(n) {
    if (n) {
        var t = n.split(/\n/), e = t[2] || "", r = "", a = 0, o = 0;
        t.every(function(n) {
            var t = n && n.trim();
            if (0 === t.indexOf("at ")) {
                var e = t.indexOf("("), c = t.indexOf(")");
                if (e && c) {
                    var i = e + 1;
                    c < i && (i = c);
                    var u = t.substring(i, c);
                    if (u) {
                        var s = u.split(":");
                        s && 2 < s.length && (r = (s.slice(0, s.length - 2) || []).join(":"), a = +s[s.length - 2], 
                        o = +s[s.length - 1]);
                    }
                    return !1;
                }
            }
            return !0;
        }), r || (r = f()), b.push({
            time: g(),
            msg: e,
            filename: r,
            lineno: a,
            colno: o,
            stack: n
        });
    }
}

function Q() {
    var n = r();
    e();
    var t = O.current;
    O.prev = "", O.current = "", X({
        routeChain: n,
        closePath: t
    });
}

function W() {
    var n = App;
    App = function(t) {
        V.forEach(function(n) {
            u(n, t);
        }), n && n.call(this, t);
    };
}

function Z() {
    S.onLoad = g();
}

function $() {
    S.onShow = g(), n(this.route), O.prev = O.current, O.current = this.route, N(!1);
}

function nn() {
    S.onReady = g();
}

function tn() {
    S.onHide = g(), B();
}

function en() {
    S.onUnload = g(), B();
}

function an() {
    var n = Page;
    Page = function(t) {
        rn.forEach(function(n) {
            u(n, t);
        }), t[L] = j, n && n.call(this, t);
    };
}

function on(n, t) {
    if (n) {
        var e = d(n["X-Tingyun-Tx-Data"]);
        if (e && e.r && m(e.r) === m(t)) return e;
    }
    return null;
}

function cn(n) {
    if (!n) return 0;
    var t = n.header, e = n.data, r = 0;
    return (r = t && t["Content-Length"]) || (r = w(e) || 0), r;
}

function un() {
    var n = wx.request;
    Object.defineProperty(wx, "request", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function() {
            var t = arguments[0] || {};
            if (!t._no_record) {
                var e, r, a, o, c, i = g() % 1e9;
                t.header = t.header || {}, t.header["X-Tingyun-Id"] = "".concat(q.id, ";r=").concat(i), 
                v(t.success) && (a = t.success), v(t.fail) && (o = t.fail), v(t.complete) && (c = t.complete);
                var u = 0;
                t.success = function() {
                    if (r || (r = g()), a) {
                        var n = g();
                        try {
                            a.apply(this, arguments);
                        } catch (n) {}
                        var t = g() - n;
                        0 < t && (u += t);
                    }
                }, t.fail = function() {
                    if (r || (r = g()), o) {
                        var n = g();
                        try {
                            o.apply(this, arguments);
                        } catch (n) {}
                        var t = g() - n;
                        0 < t && (u += t);
                    }
                }, t.complete = function(n) {
                    if (n.statusCode) {
                        var a;
                        r || (r = g());
                        var o = q[D];
                        if (o && v(o)) try {
                            var s = o.apply(this, arguments);
                            y(s) && (a = {
                                custom: s
                            });
                        } catch (n) {}
                        if (c) {
                            var f = g();
                            try {
                                c.apply(this, arguments);
                            } catch (n) {}
                            var l = g() - f;
                            0 < l && (u += l);
                        }
                        var h = {}, d = on(n.header, i);
                        d && (h.s_id = d.id, h.s_name = d.action, d.time && (h.s_du = d.time.duration, h.s_qu = d.time.qu), 
                        h.t_id = d.trId);
                        var p = {
                            url: t.url,
                            method: t.method && t.method.toUpperCase() || "GET",
                            start: e,
                            end: r,
                            cbTime: u,
                            duration: r - e,
                            send: w(t.data),
                            rec: cn(n),
                            statusCode: n.statusCode || 0
                        };
                        T.push(Object.assign({}, p, h, a || {}));
                    }
                }, e = g();
            }
            return n.apply(this, arguments);
        }
    });
}

function sn() {
    return F() && (W(), an(), un()), R;
}

var t = [], a = {
    networkType: "",
    system: {}
}, c = o("String"), v = o("Function"), y = o("Object"), l = function() {
    function n(n) {
        return n < 0 ? NaN : n <= 30 ? 0 | Math.random() * (1 << n) : n <= 53 ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << n - 30)) * (1 << 30) : NaN;
    }
    function t(n, t) {
        for (var e = n.toString(16), r = t - e.length, a = "0"; 0 < r; r >>>= 1, a += a) 1 & r && (e = a + e);
        return e;
    }
    return function() {
        return t(n(32), 8) + "-" + t(n(16), 4) + "-" + t(16384 | n(12), 4) + "-" + t(32768 | n(14), 4) + "-" + t(n(48), 12);
    };
}(), S = {}, T = [], b = [], x = !1, k = 0, O = {}, q = {}, P = 6e5, I = "TY_SAMPLING", C = wx.getStorageSync(I), E = !1;

setInterval(U, P);

var L = "recordTyTime", M = "TINGYUN_UID", D = "custom";

wx.onNetworkStatusChange(function(n) {
    a.networkType = n.networkType;
}), a.system = wx.getSystemInfoSync();

var R = {
    version: "1.0.0",
    setUser: H,
    config: A
}, Y = {
    uid: J(),
    sid: l(),
    v: "1.0.0"
}, V = [ {
    name: "onLaunch",
    handler: z
}, {
    name: "onError",
    handler: K
}, {
    name: "onHide",
    handler: Q
} ], rn = [ {
    name: "onLoad",
    handler: Z
}, {
    name: "onShow",
    handler: $
}, {
    name: "onReady",
    handler: nn
}, {
    name: "onHide",
    handler: tn
}, {
    name: "onUnload",
    handler: en
} ], fn = sn();

module.exports = fn;