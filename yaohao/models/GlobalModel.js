var regeneratorRuntime = require("../npm/regenerator-runtime/runtime.js");


function _asyncToGenerator(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(o, s) {
                try {
                    var i = r[o](s), c = i.value;
                } catch (e) {
                    return void t(e);
                }
                if (!i.done) return Promise.resolve(c).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(c);
            }
            return n("next");
        });
    };
}

function setCode(e) {
    return redis.set(IS_USE_KEY, !1, 3), redis.set(WX_CODE, e, 2);
}

function wxLogin() {
    return new Promise(function(e) {
        wx.login({
            success: function(r) {
                e(r.code);
            },
            fail: function(r) {
                console.log(r), e();
            }
        });
    });
}

function checkSession() {
    return new Promise(function(e) {
        wx.checkSession({
            success: function() {
                e(!0);
            },
            fail: function(r) {
                console.log(r), e();
            }
        });
    });
}

function getUserInfo() {
    var e = redis.get(redisUserInfoKey);
    return e || (e = cache.get(cacheUserInfoKey), redis.set(redisUserInfoKey, e, 1440), 
    e);
}

function syncUserInfo() {
    var e = cache.get(cacheUserInfoKey);
    return redis.set(redisUserInfoKey, e, 1440), e;
}

function setUserInfo(e) {
    redis.set(redisUserInfoKey, e, 1440), cache.set(cacheUserInfoKey, e, 48);
}

function getGlobalConfig() {
    var e = require("./../api/api.js"), r = e.globalConfig;
    return new Promise(function(e, t) {
        var n = redis.get(redisGlobalConfKey), o = cache.get(cacheGlobalConfKey);
        return n ? e(n) : o && !n ? (redis.set(redisGlobalConfKey, o, 1440), e(o)) : void r().then(function(r) {
            r.data ? (cache.set(cacheGlobalConfKey, r.data, 168), redis.set(redisGlobalConfKey, r.data, 1440), 
            e(r.data)) : t(new Error("error, not results data"));
        }).catch(function(e) {
            t(e);
        });
    });
}

function setGlobalConfig(e) {
    cache.set(cacheGlobalConfKey, e, 168), redis.set(redisGlobalConfKey, e, 1440);
}

function refreshGlobalConfig() {
    var e = require("./../api/api.js"), r = e.globalConfig;
    return new Promise(function(e) {
        r().then(function(r) {
            r.data ? (cache.set(cacheGlobalConfKey, r.data, 168), redis.set(redisGlobalConfKey, r.data, 1440), 
            e(r.data)) : e({});
        }).catch(function() {
            e({});
        });
    });
}

function getSystemInfo() {
    var e = redis.get(WX_SYS_INFO_KEY);
    return e || (e = wx.getSystemInfoSync(), redis.set(WX_SYS_INFO_KEY, e)), e;
}

function getNavBarHeight() {
    var e = 0;
    return function() {
        if (0 === e) {
            var r = getSystemInfo();
            e = 48 + r.statusBarHeight;
        }
        return e;
    };
}

function isAddMyPrograme() {
    try {
        var e = cache.checkTimeout("hide_tip_status"), r = wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : {};
        if (!e) {
            var t = new Date(), n = t.getFullYear(), o = t.getMonth() + 1, s = t.getDate();
            o < 10 && (o = "0" + o), s < 10 && (s = "0" + s);
            var i = n + "-" + o + "-" + s, c = new Date(i).getTime() + 2592e5;
            return (1089 === parseInt(r.scene) || 1104 === parseInt(r.scene)) && cache.setWithTimeout("hide_tip_status", !0, c);
        }
        return !0;
    } catch (e) {
        return !1;
    }
}

var getCode = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        var r, t, n;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r = redis.get(WX_CODE), t = redis.get(IS_USE_KEY)) {
                    e.next = 9;
                    break;
                }
                if (e.t0 = r, !e.t0) {
                    e.next = 7;
                    break;
                }
                return e.next = 6, checkSession();

              case 6:
                e.t0 = e.sent;

              case 7:
                if (!e.t0) {
                    e.next = 9;
                    break;
                }
                return e.abrupt("return", r);

              case 9:
                return e.next = 11, wxLogin();

              case 11:
                if (!(n = e.sent)) {
                    e.next = 18;
                    break;
                }
                return setCode(n), redis.set(IS_USE_KEY, !0, 3), e.abrupt("return", n);

              case 18:
                return e.abrupt("return", !1);

              case 19:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), cache = require("./../utils/utilsKit/lib/cache.js"), redis = require("./../utils/utilsKit/lib/memory_cache.js"), config = require("./../config/default.js"), _require = require("./../utils/utilsKit/lib/common.js"), mergeAll = _require.mergeAll, WX_CODE = config.WX_CODE_KEY, IS_USE_KEY = config.WX_CODE_IS_USE_KEY, redisUserInfoKey = config.redisKeys.USER_INFO_KEY, cacheUserInfoKey = config.cacheKeys.USER_INFO_KEY, redisGlobalConfKey = config.redisKeys.GLOBAL_CONFIG_KEY, cacheGlobalConfKey = config.cacheKeys.GLOBAL_CONFIG_KEY, PLATFORM = config.PLATFORM, REPORT_ERROR_URL = config.api.host + "/error/setError", ReportError = {
    send: function(e) {
        try {
            var r = getUserInfo() || "", t = mergeAll({
                userInfo: r
            }, e);
            this.__reportErrorReq(t);
        } catch (e) {
            console.log(e);
        }
    },
    sendExpect: function(e) {
        try {
            this.send({
                error: JSON.stringify(e)
            });
        } catch (e) {
            console.log(e);
        }
    },
    __reportErrorReq: function(e) {
        var r = mergeAll({
            platform: PLATFORM
        }, e);
        wx.request({
            url: REPORT_ERROR_URL,
            method: "POST",
            data: {
                content: JSON.stringify(r)
            }
        });
    }
}, WX_SYS_INFO_KEY = config.WX_SYS_INFO_KEY;

module.exports = {
    getCode: getCode,
    setCode: setCode,
    getUserInfo: getUserInfo,
    setUserInfo: setUserInfo,
    syncUserInfo: syncUserInfo,
    getGlobalConfig: getGlobalConfig,
    setGlobalConfig: setGlobalConfig,
    refreshGlobalConfig: refreshGlobalConfig,
    ReportError: ReportError,
    getSystemInfo: getSystemInfo,
    getNavBarHeight: getNavBarHeight(),
    isAddMyPrograme: isAddMyPrograme
};