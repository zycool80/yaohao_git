var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var n = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function r(a, o) {
                try {
                    var i = n[a](o), s = i.value;
                } catch (e) {
                    return void t(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
            }
            return r("next");
        });
    };
}

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, n) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !n || "object" != typeof n && "function" != typeof n ? e : n;
}

function _inherits(e, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
    e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var r = n[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(n, t, r) {
        return t && e(n.prototype, t), r && e(n, r), n;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _GlobalModel = require("./../../../models/GlobalModel.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function n() {
        var e, t, r, a;
        _classCallCheck(this, n);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return t = r = _possibleConstructorReturn(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "兑换金币",
            enablePullDownRefresh: !0
        }, r.data = {
            userInfo: [],
            changeType: 1,
            currency: 10,
            currency_rules: [],
            showType: !1,
            showBalance: !1,
            year: 0,
            month: 0,
            inputPoint: 20,
            inputCoin: "",
            maxCoin: "",
            inputMoney: "",
            defaultAvatar: "/images/default_sales_man_avatar.png",
            systemType: "android",
            weapp: {
                nickName: "",
                city: ""
            },
            baseInfo: [],
            goldData: [],
            money: [ {
                value: 20,
                toggle: !0
            }, {
                value: 50,
                toggle: !1
            }, {
                value: 100,
                toggle: !1
            }, {
                value: 200,
                toggle: !1
            }, {
                value: "其他金额",
                toggle: !1
            } ]
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.methods = {
            inputChange: function(e) {
                this.inputMoney = e.detail.value, this.$apply();
            },
            pointChange: function(e) {
                this.inputPoint = e.detail.value, this.inputPoint > 0 ? this.inputCoin = parseInt(this.inputPoint / this.currency) : this.inputCoin = 0, 
                this.$apply();
            },
            coinsCharge: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var t;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (!(parseInt(e.inputPoint) > parseInt(e.baseInfo.sales_man_recommend_index))) {
                                n.next = 5;
                                break;
                            }
                            return e.showBalance = !0, n.abrupt("return", !1);

                          case 5:
                            e.showBalance = !1;

                          case 6:
                            return n.next = 8, _api2.default.coinsCharge(parseInt(e.inputPoint / e.currency) * e.currency);

                          case 8:
                            t = n.sent, "0" == t.code ? (e.baseInfo.coins = parseInt(e.baseInfo.coins) + parseInt(e.inputPoint / e.currency), 
                            e.baseInfo.sales_man_recommend_index = parseInt(e.baseInfo.sales_man_recommend_index) - parseInt(e.inputPoint / e.currency) * e.currency, 
                            _index.tip.toast("兑换成功")) : _index.tip.toast("兑换失败"), e.$apply();

                          case 11:
                          case "end":
                            return n.stop();
                        }
                    }, n, e);
                }))();
            },
            submit: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var t, r, a, o;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), t = "", e.money.forEach(function(e) {
                                1 == e.toggle && (t = e.value);
                            }), n.next = 5, _api2.default.coinsSalesManCharge(t);

                          case 5:
                            r = n.sent, a = r.data, o = e, wx.requestPayment({
                                timeStamp: a.timestamp,
                                nonceStr: a.nonceStr,
                                package: a.package,
                                signType: a.signType,
                                paySign: a.paySign,
                                success: function(e) {
                                    wx.hideLoading(), o.baseInfo.coins = Number(o.baseInfo.coins) + Number(t), _index.tip.toast("充值成功", "", "none"), 
                                    o.$apply();
                                },
                                fail: function(e) {
                                    wx.hideLoading(), _index.tip.toast("充值失败", "", "none");
                                }
                            }), e.showType = !1, wx.hideLoading(), e.$apply();

                          case 12:
                          case "end":
                            return n.stop();
                        }
                    }, n, e);
                }))();
            },
            inputSubmit: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var t, r, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (wx.showLoading({
                                title: "加载中..."
                            }), !("" != e.inputMoney && e.inputMoney > 0)) {
                                n.next = 10;
                                break;
                            }
                            return n.next = 4, _api2.default.coinsSalesManCharge(e.inputMoney);

                          case 4:
                            t = n.sent, r = t.data, a = e, wx.requestPayment({
                                timeStamp: r.timestamp,
                                nonceStr: r.nonceStr,
                                package: r.package,
                                signType: r.signType,
                                paySign: r.paySign,
                                success: function(e) {
                                    wx.hideLoading(), a.baseInfo.coins = Number(a.baseInfo.coins) + Number(a.inputMoney), 
                                    _index.tip.toast("充值成功", "", "none"), a.showType = !1, a.$apply();
                                },
                                fail: function(e) {
                                    wx.hideLoading(), _index.tip.toast("充值失败", "", "none");
                                }
                            }), n.next = 12;
                            break;

                          case 10:
                            wx.hideLoading(), _index.tip.toast("请输入正确金额", "", "none");

                          case 12:
                            wx.hideLoading(), e.$apply();

                          case 14:
                          case "end":
                            return n.stop();
                        }
                    }, n, e);
                }))();
            },
            changetype: function(e) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            n.changeType = parseInt(e), n.$apply();

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, n);
                }))();
            },
            hideBg: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            e.showType = !1, e.$apply();

                          case 2:
                          case "end":
                            return n.stop();
                        }
                    }, n, e);
                }))();
            },
            changeMoney: function(e) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            n.money.forEach(function(n, t) {
                                n.toggle = e === t;
                            }), n.$apply();

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, n);
                }))();
            },
            showModel: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            e.showType = !0, e.$apply();

                          case 2:
                          case "end":
                            return n.stop();
                        }
                    }, n, e);
                }))();
            }
        }, a = t, _possibleConstructorReturn(r, a);
    }
    return _inherits(n, e), _createClass(n, [ {
        key: "loadNext",
        value: function() {
            function e() {
                return n.apply(this, arguments);
            }
            var n = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "reload",
        value: function() {
            function e() {
                return n.apply(this, arguments);
            }
            var n = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var n, t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中..."
                        }), this.baseInfo = [], this.showType = !1, e.next = 5, _api2.default.coinsUserInfo();

                      case 5:
                        return n = e.sent, this.baseInfo = n.data, e.next = 9, globalModel.refreshGlobalConfig();

                      case 9:
                        return t = e.sent, this.currency = t.currency, this.currency_rules = t.currency_rules, 
                        e.next = 14, this.initCoinNum();

                      case 14:
                        this.$apply(), wx.hideLoading();

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "initCoinNum",
        value: function() {
            function e() {
                return n.apply(this, arguments);
            }
            var n = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.inputPoint = parseInt(this.baseInfo.sales_man_recommend_index / this.currency) * this.currency, 
                        this.maxCoin = parseInt(this.inputPoint / this.currency), this.inputCoin = this.maxCoin, 
                        this.$apply();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return n.apply(this, arguments);
            }
            var n = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = (0, _GlobalModel.getUserInfo)(), this.userInfo = t, t && t.nickName && t.city && (this.weapp = '{"nickName": "' + t.nickName + '", "city": "' + t.city + '"}'), 
                        this.systemType = n.type, e.next = 6, this.reload();

                      case 6:
                        this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onPullDownRefresh",
        value: function() {
            function e() {
                return n.apply(this, arguments);
            }
            var n = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.reload();

                      case 2:
                        this.$apply(), wx.stopPullDownRefresh();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function(e) {
            var n = (0, _GlobalModel.getUserInfo)();
            return _index.share.share("我在这里等着你一起入驻", "/subPackages/me/pages/salesMan?inviter_id=" + n.sales_man_id || 0, "http://imgcdn.huanjutang.com/assets/img/20181227/5c2494e7618aa.jpg");
        }
    } ]), n;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/goldRecharge"));