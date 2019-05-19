var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, o) {
                try {
                    var i = t[a](o), u = i.value;
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _require = require("./../../../models/GlobalModel.js"), getUserInfo = _require.getUserInfo, Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "修改手机号",
            enablePullDownRefresh: !0
        }, r.data = {
            second: 0,
            changeInput: "获取验证码",
            inputData: {
                phone: null,
                verify_code: null
            },
            weapp: {
                nickName: "",
                city: ""
            }
        }, r.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.methods = {
            inputValue: function(e, t) {
                this.inputData[e] = t.detail.value;
            },
            submit: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (n = e.inputData.verify_code ? e.inputData.verify_code.trim() : "", r = e.inputData.phone ? e.inputData.phone.trim() : "", 
                            /^1(3|4|5|6|7|8|9)\d{9}$/.test(r)) {
                                t.next = 3;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请输入正确手机号", "", "none"));

                          case 3:
                            if (n) {
                                t.next = 5;
                                break;
                            }
                            return t.abrupt("return", _index.tip.toast("请输入验证码", "", "none"));

                          case 5:
                            return t.next = 7, _api2.default.sales.updateSalesMan(e.inputData);

                          case 7:
                            a = t.sent, 0 == a.code ? (_index.tip.toast("修改成功", "", "none"), wx.navigateBack()) : _index.tip.toast("修改失败", "", "none"), 
                            e.$apply();

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            getVerify: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getPhoneVerifyCode(e.inputData.phone);

                          case 2:
                            n = t.sent, 0 == n.code && (e.second = 60, r = setInterval(function() {
                                e.second -= 1, e.changeInput = e.second + "s后重获", e.second <= 0 && (clearInterval(r), 
                                e.changeInput = "获取验证码"), e.$apply();
                            }, 1e3)), e.$apply();

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        n = getUserInfo(), n && n.nickName && n.city && (this.weapp = '{"nickName": "' + n.nickName + '", "city": "' + n.city + '"}'), 
                        this.$apply();

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/changeInfoPhone"));