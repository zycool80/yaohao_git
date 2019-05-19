function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, a) {
                try {
                    var i = t[o](a), u = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(u);
            }
            return r("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _GlobalModel = require("./../../../models/GlobalModel.js"), _GlobalModel2 = _interopRequireDefault(_GlobalModel), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), getUserInfo = _GlobalModel2.default.getUserInfo, setUserInfo = _GlobalModel2.default.setUserInfo, TelLogin = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "成都摇号助手"
        }, r.data = {
            phone: "",
            number: "",
            changeInput: "获取验证码",
            signIn: !1,
            second: 0,
            url: ""
        }, r.$repeat = {}, r.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.methods = {
            inputTyping: function(e) {
                this.phone = e.detail.value;
            },
            codeTyping: function(e) {
                this.number = e.detail.value;
            },
            getPhoneNumber: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, o, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (wx.showLoading({
                                title: "加载中",
                                mask: !0
                            }), "getPhoneNumber:ok" === e.detail.errMsg) {
                                n.next = 4;
                                break;
                            }
                            return wx.hideLoading(), n.abrupt("return", _index.tip.confirm("微信快捷登陆失败，请使用手机快捷登录", "提示"));

                          case 4:
                            if (e.detail.encryptedData && e.detail.iv) {
                                n.next = 7;
                                break;
                            }
                            return wx.hideLoading(), n.abrupt("return", _index.tip.confirm("获取微信授权数据失败", "提示"));

                          case 7:
                            return n.next = 9, _GlobalModel2.default.getCode();

                          case 9:
                            if ("string" == typeof (r = n.sent) && "" !== r) {
                                n.next = 13;
                                break;
                            }
                            return wx.hideLoading(), n.abrupt("return", _index.tip.confirm("微信快捷登陆失败，请使用手机快捷登录", "提示"));

                          case 13:
                            return n.next = 15, _api2.default.decodePhone({
                                "X-WX-Code": r,
                                "X-WX-ENCRYPTED-DATA": e.detail.encryptedData,
                                "X-WX-IV": e.detail.iv
                            }).catch(function() {
                                return wx.hideLoading(), _index.tip.confirm("微信快捷登陆失败，请使用手机快捷登录", "提示");
                            });

                          case 15:
                            if (o = n.sent, !(o.data && o.data.data && o.data.data.purePhoneNumber)) {
                                n.next = 28;
                                break;
                            }
                            if (a = getUserInfo(), setUserInfo(_index.common.mergeAll(a, {
                                phone: o.data.data.purePhoneNumber
                            })), !t.url) {
                                n.next = 24;
                                break;
                            }
                            return wx.hideLoading(), n.abrupt("return", wx.redirectTo({
                                url: t.url
                            }));

                          case 24:
                            return wx.hideLoading(), n.abrupt("return", wx.navigateBack());

                          case 26:
                            n.next = 30;
                            break;

                          case 28:
                            return wx.hideLoading(), n.abrupt("return", _index.tip.confirm("微信快捷登陆失败，请使用手机快捷登录", "提示"));

                          case 30:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            getNumber: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r, o;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (n = /^1[3456789]\d{9}$/, e.phone && n.test(e.phone)) {
                                t.next = 5;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请填写正确的手机号", "", "none"));

                          case 5:
                            return t.next = 7, _api2.default.getPhoneVerifyCode(e.phone);

                          case 7:
                            r = t.sent, 0 == r.code && (e.second = 60, e.changeInput = e.second + "s", e.signIn = !0, 
                            o = setInterval(function() {
                                e.second -= 1, e.changeInput = e.second + "s", e.second <= 0 && (clearInterval(o), 
                                e.changeInput = "获取验证码", e.signIn = !1), e.$apply();
                            }, 1e3));

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            loginIn: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e.number) {
                                t.next = 4;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请填写验证码", "", "none"));

                          case 4:
                            if (!e.signIn) {
                                t.next = 16;
                                break;
                            }
                            return t.next = 7, _api2.default.setPhoneVerify(e.phone, e.number);

                          case 7:
                            if (n = t.sent, 0 != n.code) {
                                t.next = 15;
                                break;
                            }
                            _index.tip.toast("登陆成功"), r = getUserInfo(), setUserInfo(_index.common.mergeAll(r, {
                                phone: e.phone
                            })), e.url ? wx.redirectTo({
                                url: e.url
                            }) : wx.navigateBack(), t.next = 16;
                            break;

                          case 15:
                            return t.abrupt("return", _index.tip.toast("登陆失败", "", "none"));

                          case 16:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.url = decodeURIComponent(e.direct);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(TelLogin, "subPackages/tools/pages/telLogin"));