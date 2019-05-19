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
            function r(a, s) {
                try {
                    var i = t[a](s), o = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(o).then(function(e) {
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), allRankList = null, Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var s = arguments.length, i = Array(s), o = 0; o < s; o++) i[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "置业顾问排行榜",
            navigationBarBackgroundColor: "#3772cc",
            enablePullDownRefresh: !0
        }, r.data = {
            inputVal: "",
            items: [],
            topItems: [],
            me: [],
            defaultAvatar: "/images/default_sales_man_avatar.png",
            is_sales_man_id: "",
            sales_man_rule: "",
            isBroker: "",
            more: !0
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
            toUrl: function(e, t) {
                wx.navigateTo({
                    url: "/subPackages/me/pages/chatInterface?user_id=" + e + "&avatar=" + t
                });
            },
            showCallView: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return r = e.currentTarget.dataset.id, wx.showLoading({
                                title: "加载中"
                            }), t.next = 4, _api2.default.getPhoneNum(r, 1);

                          case 4:
                            a = t.sent, wx.hideLoading(), 0 === a.code && wx.showModal({
                                title: "提示",
                                content: "拨通后请说明来自成都摇号助手",
                                success: function(e) {
                                    e.confirm && wx.makePhoneCall({
                                        phoneNumber: a.data.phone
                                    });
                                }
                            });

                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, n, t);
                }))();
            },
            likeMe: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.salesManLike(e.me[0].id);

                          case 2:
                            n = t.sent, 0 == n.data.status ? (e.me[0].is_like = 0, e.me[0].sales_man_like_num--) : (e.me[0].is_like = 1, 
                            e.me[0].sales_man_like_num++), e.$apply();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            toJoinSalesMan: function() {
                this.is_sales_man_id > 0 ? 1 == this.isBroker ? wx.navigateTo({
                    url: "/subPackages/me/pages/broker"
                }) : wx.navigateTo({
                    url: "/subPackages/me/pages/salesMan"
                }) : wx.navigateTo({
                    url: "/subPackages/salesMan/pages/enteringSalesMan"
                });
            },
            like: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return r = t.items[e], n.next = 3, _api2.default.salesManLike(r.id);

                          case 3:
                            a = n.sent, 1 === parseInt(a.data.status) ? (r.is_like = 1, r.sales_man_like_num++) : (r.is_like = 0, 
                            r.sales_man_like_num--), t.$apply();

                          case 6:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "reload",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, a, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.sales.salesManRankList();

                      case 2:
                        t = e.sent, n = t.data, this.more = !0, this.topItems = n.top, n.mine && (this.me = [ t.data.mine ]), 
                        this.sales_man_rule = n.rule_url, r = {}, a = n.ranking, s = 4;

                      case 10:
                        if (!(s <= 10)) {
                            e.next = 17;
                            break;
                        }
                        if (a && a[s]) {
                            e.next = 13;
                            break;
                        }
                        return e.abrupt("break", 17);

                      case 13:
                        r[String(s)] = a[s];

                      case 14:
                        s++, e.next = 10;
                        break;

                      case 17:
                        this.items = r, this.$apply(), allRankList = a, a = null;

                      case 21:
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
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return _api2.default.isSaleMan().then(function(e) {
                            t.isBroker = e.isBroker, t.is_sales_man_id = e.sales_man_id || "";
                        }), e.next = 3, this.reload();

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onUnload",
        value: function() {
            allRankList = null;
        }
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
                        wx.stopPullDownRefresh();

                      case 3:
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
            if (!this.more) return !1;
            this.items = allRankList, this.more = !1, allRankList = null, this.$apply();
        }
    }, {
        key: "onShareAppMessage",
        value: function(e) {
            return _index.share.share("这里可以查看置业顾问活跃度排行榜");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/salesMan/pages/hotList"));