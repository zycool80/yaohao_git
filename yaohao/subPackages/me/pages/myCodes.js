var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var i = t[a](o), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
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
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "我参与的摇号",
            enablePullDownRefresh: !0
        }, n.data = {
            items: [],
            myLotteries: [],
            idCards: [],
            index: 0
        }, n.$repeat = {}, n.$props = {
            BackHome: {}
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            },
            idCardsPicker: function() {
                return this.idCards.map(function(e) {
                    return e.name;
                });
            }
        }, n.methods = {
            bindPickerChange: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return t.index = e.detail.value, r.next = 3, t.methods.reloadData.call(t);

                          case 3:
                            t.$apply();

                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            reloadData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), t.next = 3, _api2.default.getMyIdCards();

                          case 3:
                            if (r = t.sent, wx.hideLoading(), r.data && 0 !== r.data.length) {
                                t.next = 9;
                                break;
                            }
                            return t.next = 8, _wepy2.default.showModal({
                                title: "请先绑定个人信息",
                                content: "绑定个人信息之后，部分楼盘可以直接获取摇号编码，查询摇号结果更方便",
                                showCancel: !1
                            });

                          case 8:
                            wx.navigateTo({
                                url: "/subPackages/me/pages/bindIDCard"
                            });

                          case 9:
                            return e.idCards = r.data, t.next = 12, _api2.default.getMyLotteries2({
                                id: e.idCards[e.index].id
                            });

                          case 12:
                            return n = t.sent, e.myLotteries = n.data, t.next = 16, _api2.default.myCodes();

                          case 16:
                            a = t.sent, e.items = a.data, e.$apply();

                          case 19:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            syncData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _wepy2.default.showModal({
                                content: "此功能每小时限用1次",
                                showCancel: !0
                            });

                          case 2:
                            if (r = t.sent, !r.confirm) {
                                t.next = 11;
                                break;
                            }
                            return t.next = 6, _api2.default.syncData({
                                id: e.idCards[e.index].id
                            });

                          case 6:
                            return t.next = 8, _api2.default.getMyLotteries2({
                                id: e.idCards[e.index].id
                            });

                          case 8:
                            n = t.sent, e.myLotteries = n.data, e.$apply();

                          case 11:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.methods.reloadData.call(this);

                      case 2:
                        this.$apply();

                      case 3:
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
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.methods.reloadData.call(this);

                      case 2:
                        wx.stopPullDownRefresh(), this.$apply();

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
            return _index.share.share("我在这里查摇号结果，好方便哦", "/pages/index");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/myCodes"));