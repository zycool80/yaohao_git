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
            function r(a, i) {
                try {
                    var s = t[a](i), o = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(o);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationBarTitleText: "活跃度明细",
            navigationBarBackgroundColor: "#3772cc",
            enablePullDownRefresh: !0
        }, r.data = {
            num: 0,
            listData: [],
            loading: !1,
            sales_man_id: "",
            now: "",
            icon: {
                1: "/images/chushi.png",
                2: "/images/share.png",
                3: "/images/yaoqing.png",
                4: "/images/shangchuan.png",
                5: "/images/shangchuan.png",
                6: "/images/xiugai.png",
                7: "/images/fabu.png",
                99: "/images/chushi.png",
                10: "/images/shoudong.png",
                11: "/images/shangchuan.png",
                12: "/images/chushi.png",
                13: "/images/chushi.png",
                14: "/images/chushi.png",
                15: "/images/chushi.png",
                16: "/images/chushi.png",
                17: "/images/chushi.png",
                18: "/images/chushi.png",
                19: "/images/chushi.png",
                20: "/images/chushi.png"
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.methods = {
            hideToggle: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            t.listData[e].is_hide = !t.listData[e].is_hide;

                          case 1:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "loadNext",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, a, i, s, o, u, c, p, l, h, g, f, m;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.loading = !1, e.next = 3, _api2.default.recommendIndexDetail();

                      case 3:
                        t = e.sent;
                        for (n in t.data) this.listData.unshift({
                            time: n,
                            data: t.data[n]
                        });
                        r = !0, a = !1, i = void 0, e.prev = 8, s = this.listData[Symbol.iterator]();

                      case 10:
                        if (r = (o = s.next()).done) {
                            e.next = 37;
                            break;
                        }
                        for (u = o.value, c = 0, p = !0, l = !1, h = void 0, e.prev = 16, g = u.data[Symbol.iterator](); !(p = (f = g.next()).done); p = !0) m = f.value, 
                        c += Number(m.num);
                        e.next = 24;
                        break;

                      case 20:
                        e.prev = 20, e.t0 = e.catch(16), l = !0, h = e.t0;

                      case 24:
                        e.prev = 24, e.prev = 25, !p && g.return && g.return();

                      case 27:
                        if (e.prev = 27, !l) {
                            e.next = 30;
                            break;
                        }
                        throw h;

                      case 30:
                        return e.finish(27);

                      case 31:
                        return e.finish(24);

                      case 32:
                        u.number = c, u.is_hide = new Date(this.now).getTime() === new Date(u.time).getTime();

                      case 34:
                        r = !0, e.next = 10;
                        break;

                      case 37:
                        e.next = 43;
                        break;

                      case 39:
                        e.prev = 39, e.t1 = e.catch(8), a = !0, i = e.t1;

                      case 43:
                        e.prev = 43, e.prev = 44, !r && s.return && s.return();

                      case 46:
                        if (e.prev = 46, !a) {
                            e.next = 49;
                            break;
                        }
                        throw i;

                      case 49:
                        return e.finish(46);

                      case 50:
                        return e.finish(43);

                      case 51:
                        this.listData.sort(function(e, t) {
                            var n = new Date(e.time.replace(/-/g, "/")).getTime();
                            return new Date(t.time.replace(/-/g, "/")).getTime() - n;
                        }), this.loading = !0, this.$apply();

                      case 54:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 8, 39, 43, 51 ], [ 16, 20, 24, 32 ], [ 25, , 27, 31 ], [ 44, , 46, 50 ] ]);
            }));
            return e;
        }()
    }, {
        key: "reload",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中..."
                        }), this.listData = [], e.next = 4, this.loadNext();

                      case 4:
                        this.$apply(), wx.hideLoading();

                      case 6:
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
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, r, a, i, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.num = t.num, e.next = 3, _api2.default.isSaleMan();

                      case 3:
                        if (n = e.sent, 1 == n.data) {
                            e.next = 8;
                            break;
                        }
                        wx.redirectTo({
                            url: "/subPackages/me/pages/salesMan?inviter_id=" + t.inviter_id
                        }), e.next = 17;
                        break;

                      case 8:
                        return r = new Date(), a = r.getFullYear(), i = r.getMonth() + 1, s = r.getDate(), 
                        i < 10 && (i = "0" + i), s < 10 && (s = "0" + s), this.now = a + "-" + i + "-" + s, 
                        e.next = 17, this.reload();

                      case 17:
                        this.$apply();

                      case 18:
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
            var t = _index.cache.get("userinfo");
            return this.sales_man_id = t.sales_man_id, _index.share.share("我在这里等着你一起入驻", "/subPackages/me/pages/vitalityIntegral?inviter_id=" + this.sales_man_id);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/vitalityIntegral"));