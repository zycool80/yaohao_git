var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");
function _asyncToGenerator(n) {
    return function() {
        var e = n.apply(this, arguments);
        return new Promise(function(n, t) {
            function r(o, i) {
                try {
                    var u = e[o](i), s = u.value;
                } catch (n) {
                    return void t(n);
                }
                if (!u.done) return Promise.resolve(s).then(function(n) {
                    r("next", n);
                }, function(n) {
                    r("throw", n);
                });
                n(s);
            }
            return r("next");
        });
    };
}

function request(n) {
    function e() {
        logining ? waitUntilLoginFinish().then(function() {
            t();
        }) : (logining = !0, doLogin().then(function() {
            return t();
        }));
    }
    function t() {
        var t = buildAuthHeader(Session.get());
        wx.request(utils.extend({}, n, {
            header: utils.extend({}, s, t),
            success: function(n) {
                var t, r, o = n.data;
                if (o && -1 === o.code) {
                    if (Session.clear(), !g) return g = !0, void e();
                    r = "登录状态已过期", t = new RequestError(o.error, r), l(t);
                } else a.apply(null, arguments);
            },
            fail: function() {
                f ? l() : p();
            },
            complete: noop
        }));
    }
    if ("object" !== (void 0 === n ? "undefined" : _typeof(n))) {
        var r = "请求传参应为 object 类型，但实际传了 " + (void 0 === n ? "undefined" : _typeof(n)) + " 类型";
        throw new RequestError(constants.ERR_INVALID_PARAMS, r);
    }
    var o = (n.login, n.success || noop), i = n.fail || noop, u = n.complete || noop, s = n.header || {}, c = Session.get(), a = (n.url, 
    function() {
        o.apply(null, arguments), u.apply(null, arguments);
    }), l = function(n) {
        i.call(null, n), u.call(null, n);
    }, f = !1, p = function() {
        wx.getNetworkType({
            success: function(n) {
                if ("none" === n.networkType) return l(new RequestError(constants.ERR_INVALID_PARAMS, "网络不可用"));
                t(), f = !0;
            },
            fail: function() {
                l(new RequestError(constants.ERR_INVALID_PARAMS, "网络状态获取失败"));
            },
            complete: noop
        });
    }, g = !1, y = cache.checkTimeout("userinfo");
    !c || y || cache.checkTimeout("sales_man_id") ? e() : t();
}

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n;
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
}, doLogin = function() {
    var n = _asyncToGenerator(regeneratorRuntime.mark(function n() {
        return regeneratorRuntime.wrap(function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return logining = !0, n.abrupt("return", new Promise(function(n, e) {
                    loginLib.login({
                        success: function() {
                            logining = !1, n();
                        },
                        fail: function(n) {
                            logining = !1, e(n);
                        }
                    });
                }));

              case 2:
              case "end":
                return n.stop();
            }
        }, n, this);
    }));
    return function() {
        return n.apply(this, arguments);
    };
}(), waitUntilLoginFinish = function() {
    var n = _asyncToGenerator(regeneratorRuntime.mark(function n() {
        var e;
        return regeneratorRuntime.wrap(function(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                if (logining) {
                    n.next = 2;
                    break;
                }
                return n.abrupt("return");

              case 2:
                return e = null, n.abrupt("return", new Promise(function(n, t) {
                    e = setInterval(function() {
                        logining || (n(), clearInterval(e));
                    }, 10);
                }));

              case 4:
              case "end":
                return n.stop();
            }
        }, n, this);
    }));
    return function() {
        return n.apply(this, arguments);
    };
}(), constants = require("./constants.js"), utils = require("./utils.js"), Session = require("./session.js"), cache = require("./../../../utils/utilsKit/lib/cache.js"), loginLib = require("./login.js"), noop = function() {}, buildAuthHeader = function(n) {
    var e = {};
    return n && (e[constants.WX_HEADER_SKEY] = n), e;
}, RequestError = function() {
    function n(n, e) {
        Error.call(this, e), this.type = n, this.message = e;
    }
    return n.prototype = new Error(), n.prototype.constructor = n, n;
}(), logining = !1;

module.exports = {
    RequestError: RequestError,
    request: request,
    login: doLogin,
    buildAuthHeader: buildAuthHeader
};