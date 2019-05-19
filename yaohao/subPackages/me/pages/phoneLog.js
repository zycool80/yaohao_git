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
            function n(o, a) {
                try {
                    var i = t[o](a), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _index = require("./../../../utils/utilsKit/index.js"), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _GlobalModel = require("./../../../models/GlobalModel.js"), _GlobalModel2 = _interopRequireDefault(_GlobalModel), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), Index = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationBarTitleText: "通话记录",
            navigationBarBackgroundColor: "#3772cc"
        }, n.data = {
            weapp: "",
            year: "",
            month: "",
            time: "",
            total: "",
            today: "",
            phoneLogList: []
        }, n.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, n.$repeat = {}, n.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.methods = {
            callPhone: function(e) {
                wx.makePhoneCall({
                    phoneNumber: e
                });
            },
            getDate: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n, o;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return n = e.detail.value, t.time = n, o = n.split("-"), t.year = o[0], t.month = o[1], 
                            r.next = 7, t.methods.reload.call(t);

                          case 7:
                            t.$apply();

                          case 8:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return r = new Date(), e.year = r.getFullYear(), n = r.getMonth() + 1, e.month = n >= 10 ? n : "0" + n, 
                            e.nowTime = e.year + "-" + e.month + "-01", t.next = 7, e.methods.reload.call(e);

                          case 7:
                            e.$apply();

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r, n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中..."
                            }), e.time = e.year + "-" + e.month + "-01", t.next = 4, _api2.default.phoneLog();

                          case 4:
                            return r = t.sent, 0 == r.code && (e.total = r.data.total, e.today = r.data.today), 
                            t.next = 8, _api2.default.askPhoneLog(e.time);

                          case 8:
                            n = t.sent, 0 == n.code && (e.phoneLogList = n.data), wx.stopPullDownRefresh(), 
                            e.$apply(), wx.hideLoading();

                          case 13:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.methods.loadNext.call(this);

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
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/phoneLog"));