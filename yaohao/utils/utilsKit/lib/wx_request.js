var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(o, a) {
                try {
                    var u = r[o](a), s = u.value;
                } catch (e) {
                    return void t(e);
                }
                if (!u.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
            }
            return n("next");
        });
    };
}

function WxRequest() {}

function setParamsToUrl(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = deepCopy(r) || {}, n = [], o = config.api.host + e;
    for (var a in t) n.push(a + "=" + encodeURI(t[a]));
    return n.length > 0 && (o += "?" + n.join("&")), o;
}

function _requestUrl(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = deepCopy(r) || {};
    for (var n in t) {
        var o = t[n];
        t[n] = "string" == typeof o ? o.replace(/[*%&#+!()'"]/g, "") : o;
    }
    var a = getUserInfo();
    t.time = Date.now(), t.city_id = 510100, t.sales_id = cache.get("sales_man_id") || "0", 
    t.uuid = a && a.id ? a.id : "0", t.version = config.version, t.sign = generateSign(t), 
    0 !== e.indexOf("http") && (e = config.api.host + e);
    var u = e, s = [];
    for (var i in t) s.push(i + "=" + encodeURI(t[i]));
    return s.length > 0 && (u += "?" + s.join("&")), u;
}

function generateSign(e) {
    var r = Object.keys(e);
    r.sort();
    var t = "", n = !0, o = !1, a = void 0;
    try {
        for (var u, s = r[Symbol.iterator](); !(n = (u = s.next()).done); n = !0) {
            var i = u.value;
            t += encodeURIComponent(i) + encodeURIComponent(e[i]);
        }
    } catch (e) {
        o = !0, a = e;
    } finally {
        try {
            !n && s.return && s.return();
        } finally {
            if (o) throw a;
        }
    }
    return md5.hex_md5(t + API_SECRET_KEY).toLowerCase();
}

var _require = require("./common.js"), extend = _require.extend, deepCopy = _require.deepCopy, wepy = require("./../../../npm/wepy/lib/wepy.js"), md5 = require("./md5.js"), tip = require("./tip.js"), config = require("./../../../config/default.js"), qcloud = require("./../../../vendor/wafer2-client-sdk/index.js"), utils = require("./../../../vendor/wafer2-client-sdk/lib/utils.js"), cache = require("./cache.js"), _require2 = require("./../../../models/GlobalModel.js"), getUserInfo = _require2.getUserInfo, API_SECRET_KEY = config.API_SECRET_KEY, _require3 = require("./../../../models/GlobalModel.js"), ReportError = _require3.ReportError;

Object.defineProperty(WxRequest, "__request", {
    configurable: !1,
    enumerable: !1,
    writable: !1,
    value: function(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET", n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = arguments[4], a = utils.extend({}, config.DEBUG ? {
            "X-WX-FakeId": config.fakeId
        } : {}, o);
        return new Promise(function(o, u) {
            qcloud.request({
                url: e,
                login: r,
                method: t,
                data: n,
                header: a,
                success: function(e) {
                    o(e);
                },
                fail: function(o) {
                    Math.random() > config.REPORT_ERR_RATE && ReportError.__reportErrorReq({
                        error: o,
                        msg: "请求错误",
                        detail: {
                            url: e,
                            login: r,
                            method: t,
                            data: n,
                            header: a
                        }
                    }), u(o);
                }
            });
        });
    }
}), WxRequest.extend = function(e) {
    extend(this, e);
}, WxRequest.extend({
    wxRequest: function(e) {
        var r = this, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return _asyncToGenerator(regeneratorRuntime.mark(function n() {
            var o, a;
            return regeneratorRuntime.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return o = t.query || {}, o.time = Date.now(), o.version = config.version, o.sign = generateSign(o), 
                    0 !== e.indexOf("http") && (e = config.api.host + e), r.next = 7, wepy.request({
                        url: e,
                        method: t.method || "GET",
                        data: o,
                        header: {
                            "Content-Type": "application/json"
                        }
                    });

                  case 7:
                    if (a = r.sent, 200 === a.statusCode) {
                        r.next = 11;
                        break;
                    }
                    return tip.error(a.errMsg), r.abrupt("return", null);

                  case 11:
                    return r.abrupt("return", a.data);

                  case 12:
                  case "end":
                    return r.stop();
                }
            }, n, r);
        }))();
    },
    request: function(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET", n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = arguments[4];
        return WxRequest.__request(e, r, t, n, o);
    },
    qcloudPostRequest: function(e, r) {
        var t = this, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return _asyncToGenerator(regeneratorRuntime.mark(function o() {
            var a, u, s, i;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return tip.loading(), a = _requestUrl(e, {}), u = void 0, t.prev = 3, t.next = 6, 
                    WxRequest.__request(a, n, "POST", r);

                  case 6:
                    u = t.sent, t.next = 17;
                    break;

                  case 9:
                    return t.prev = 9, t.t0 = t.catch(3), s = t.t0.errMsg || t.t0.message, t.t0.detail && (s += ": " + t.t0.detail.errMsg), 
                    tip.loaded(), t.next = 16, tip.showModal(s);

                  case 16:
                    return t.abrupt("return");

                  case 17:
                    return t.prev = 17, tip.loaded(), t.finish(17);

                  case 20:
                    if (200 === u.statusCode) {
                        t.next = 24;
                        break;
                    }
                    return t.next = 23, tip.showModal(u.statusCode);

                  case 23:
                    return t.abrupt("return");

                  case 24:
                    if (i = u.data, 0 === parseInt(i.code)) {
                        t.next = 29;
                        break;
                    }
                    return t.next = 28, tip.showModal(i.message);

                  case 28:
                    return t.abrupt("return");

                  case 29:
                    return t.abrupt("return", i);

                  case 30:
                  case "end":
                    return t.stop();
                }
            }, o, t, [ [ 3, 9, 17, 20 ] ]);
        }))();
    },
    simpleQcloudRequest: function(e, r) {
        var t = this, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = arguments[3];
        return _asyncToGenerator(regeneratorRuntime.mark(function a() {
            var u, s;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return u = _requestUrl(e, r), s = void 0, t.prev = 2, t.next = 5, WxRequest.__request(u, n, "GET", {}, o);

                  case 5:
                    s = t.sent, t.next = 11;
                    break;

                  case 8:
                    t.prev = 8, t.t0 = t.catch(2), console.log(t.t0);

                  case 11:
                    return t.abrupt("return", s);

                  case 12:
                  case "end":
                    return t.stop();
                }
            }, a, t, [ [ 2, 8 ] ]);
        }))();
    },
    simpleQcloudPostRequest: function(e, r) {
        var t = this, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return _asyncToGenerator(regeneratorRuntime.mark(function o() {
            var a, u;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return a = _requestUrl(e, {}), u = void 0, t.prev = 2, t.next = 5, WxRequest.__request(a, n, "POST", r);

                  case 5:
                    u = t.sent, t.next = 11;
                    break;

                  case 8:
                    t.prev = 8, t.t0 = t.catch(2), console.log(t.t0);

                  case 11:
                    return t.abrupt("return", u);

                  case 12:
                  case "end":
                    return t.stop();
                }
            }, o, t, [ [ 2, 8 ] ]);
        }))();
    },
    qcloudRequest: function(e, r) {
        var t = this, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = arguments[3];
        return _asyncToGenerator(regeneratorRuntime.mark(function a() {
            var u, s, i, c;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return u = _requestUrl(e, r), s = void 0, t.prev = 2, t.next = 5, WxRequest.__request(u, n, "GET", {}, o);

                  case 5:
                    s = t.sent, t.next = 15;
                    break;

                  case 8:
                    return t.prev = 8, t.t0 = t.catch(2), i = t.t0.errMsg || t.t0.message, t.t0.detail && (i += ": " + t.t0.detail.errMsg), 
                    t.next = 14, tip.showModal(i);

                  case 14:
                    return t.abrupt("return");

                  case 15:
                    return t.prev = 15, t.finish(15);

                  case 17:
                    if (200 === s.statusCode) {
                        t.next = 21;
                        break;
                    }
                    return t.next = 20, tip.showModal(e + " is " + s.statusCode);

                  case 20:
                    return t.abrupt("return");

                  case 21:
                    if (c = s.data, 0 === parseInt(c.code)) {
                        t.next = 26;
                        break;
                    }
                    return t.next = 25, tip.showModal(c.message);

                  case 25:
                    return t.abrupt("return");

                  case 26:
                    return t.abrupt("return", c);

                  case 27:
                  case "end":
                    return t.stop();
                }
            }, a, t, [ [ 2, 8, 15, 17 ] ]);
        }))();
    },
    wxRequest2: function(e) {
        var r = this, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return _asyncToGenerator(regeneratorRuntime.mark(function n() {
            return regeneratorRuntime.wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.abrupt("return", WxRequest.wxRequest(e, {
                        method: "GET",
                        query: t
                    }));

                  case 1:
                  case "end":
                    return r.stop();
                }
            }, n, r);
        }))();
    },
    unSafeRequest: function(e, r) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET", n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return new Promise(function(o) {
            var a = void 0;
            a = "GET" === t ? setParamsToUrl(e, r) : setParamsToUrl(e, {}), wx.request({
                url: a,
                method: t,
                header: n,
                data: "GET" === t ? {} : r,
                success: function(e) {
                    o(e);
                },
                fail: function(e) {
                    console.log(e), o("");
                }
            });
        });
    },
    requestUrl: function(e) {
        return _requestUrl(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
    }
}), module.exports = WxRequest;