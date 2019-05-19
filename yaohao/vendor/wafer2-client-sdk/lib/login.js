var utils = require("./utils.js"), constants = require("./constants.js"), Session = require("./session.js"), config = require("./../../../config/default.js"), cache = require("./../../../utils/utilsKit/lib/cache.js"), _require = require("./../../../models/GlobalModel.js"), setUserInfo = _require.setUserInfo, LoginError = function() {
    function e(e, n) {
        Error.call(this, n), this.type = e, this.message = n;
    }
    return e.prototype = new Error(), e.prototype.constructor = e, e;
}(), getWxLoginResult = function(e) {
    wx.login({
        success: function(n) {
            e(null, {
                code: n.code
            });
        },
        fail: function(n) {
            var o = new LoginError(constants.ERR_WX_LOGIN_FAILED, "微信登录失败，请检查网络状态");
            o.detail = n, e(o, null);
        }
    });
}, noop = function() {}, defaultOptions = {
    method: "GET",
    success: noop,
    fail: noop,
    loginUrl: null
}, login = function(e) {
    e = utils.extend({}, defaultOptions, e);
    !function() {
        getWxLoginResult(function(n, o) {
            if (n) return void e.fail(n);
            var s = o.code, i = {}, r = cache.get("sales_man_id") || "0";
            i[constants.WX_HEADER_CODE] = s, e.loginUrl = config.service.loginUrl, wx.request({
                url: e.loginUrl + (e.loginUrl.indexOf("?") > -1 ? "&" : "?") + "sales_man_id=" + r + "&city_id=510100",
                header: i,
                method: e.method,
                data: e.data,
                success: function(n) {
                    var o = n.data;
                    if (o && 0 === o.code && o.data.skey) {
                        var s = o.data;
                        if (s.userinfo) Session.set(s.skey), cache.set("sales_man_id", s.userinfo.sales_man_id || "0", 48), 
                        setUserInfo(s.userinfo), wx.setStorageSync("is_new_user", s.userinfo.is_new_user || ""), 
                        e.success(s.userinfo); else {
                            var i = "登录失败(" + o.error + ")：" + (o.message || "未知错误"), r = new LoginError(constants.ERR_LOGIN_SESSION_NOT_RECEIVED, i);
                            e.fail(r);
                        }
                    } else {
                        var i = "登录请求没有包含会话响应，请确保服务器处理 `" + e.loginUrl + "` 的时候正确使用了 SDK 输出登录结果", r = new LoginError(constants.ERR_LOGIN_SESSION_NOT_RECEIVED, i);
                        e.fail(r);
                    }
                },
                fail: function(n) {
                    var o = new LoginError(constants.ERR_LOGIN_FAILED, "登录失败，可能是网络错误或者服务器发生异常");
                    e.fail(o);
                }
            });
        });
    }();
}, setLoginUrl = function(e) {
    defaultOptions.loginUrl = e;
}, getLoginUrl = function() {
    return defaultOptions.loginUrl;
};

module.exports = {
    LoginError: LoginError,
    login: login,
    setLoginUrl: setLoginUrl,
    getLoginUrl: getLoginUrl
};