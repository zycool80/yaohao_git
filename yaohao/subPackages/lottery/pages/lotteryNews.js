var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var s = t[a](o), i = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), Lottery = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            navigationBarTitleText: "楼盘快报",
            enablePullDownRefresh: !0
        }, n.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, n.$repeat = {}, n.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.data = {
            systemMessageItemList: [],
            page: 1,
            more: !0,
            type_id: ""
        }, n.methods = {
            cancelData: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return wx.showLoading({
                                title: "删除中"
                            }), r.next = 3, _api2.default.deleteSystemMessageList(e);

                          case 3:
                            return wx.hideLoading(), r.next = 6, t.methods.reload.call(t);

                          case 6:
                            t.$apply();

                          case 7:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            pageNavigateTo: function(e, t) {
                _api2.default.readSystemMessage(t).then(function(e) {}), wx.navigateTo({
                    url: "/pages/lotteryDetail?id=&project_id=" + e
                });
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n, a, o;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getSystemMessageList(e.type_id, e.page);

                          case 2:
                            if (r = t.sent, r.data && r.data.data) {
                                e.page >= r.data.last_page || !r.data.last_page ? e.more = !1 : e.page++, n = [];
                                for (a in r.data.data) o = r.data.data[a], n.push({
                                    time: a,
                                    data: o
                                });
                                e.systemMessageItemList = [].concat(_toConsumableArray(e.systemMessageItemList), n);
                            }
                            e.$apply(), wx.hideLoading();

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), e.page = 1, e.more = !0, e.systemMessageItemList = [], t.next = 6, e.methods.loadNext.call(e);

                          case 6:
                            wx.stopPullDownRefresh(), e.$apply();

                          case 8:
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
                        return this.type_id = t.type, e.next = 3, this.methods.reload.call(this);

                      case 3:
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
        key: "onPullDownRefresh",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.methods.reload.call(this);

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
        key: "onReachBottom",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.more) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return", !1);

                      case 2:
                        return e.next = 4, this.methods.loadNext.call(this);

                      case 4:
                        this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShareAppMessage",
        value: function() {
            return _index.share.share("我在这里查摇号结果，好方便哦", "/pages/index");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Lottery, "subPackages/lottery/pages/lotteryNews"));