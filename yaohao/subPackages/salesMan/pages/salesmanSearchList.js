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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), api = require("./../../../api/api.js"), _require = require("./../../../utils/utilsKit/index.js"), share = _require.share, SalesManSearchList = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigatorBarTitleText: "置业顾问排行榜",
            navigationBarBackgroundColor: "#3772cc",
            enablePullDownRefresh: !0
        }, r.data = {
            defaultAvatar: "/images/default_sales_man_avatar.png",
            page: 1,
            more: !0,
            inputVal: "",
            items: [],
            isBroker: !1,
            is_sales_man_id: ""
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
            searchClose: function() {
                this.inputVal = "", this.items = [], this.page = 1, this.more = !0, this.$apply();
            },
            toContactPage: function(e, t) {
                wx.navigateTo({
                    url: "/subPackages/me/pages/chatInterface?user_id=" + e + "&avatar=" + t
                });
            },
            inputTyping: function(e) {
                this.inputVal = e.detail.value;
            },
            searchSure: function() {
                this.page = 1, this.more = !0, this.items = [], this.loadNext().then();
            },
            salesManLike: function(e) {
                var t = this, n = this.items[e];
                api.salesManLike(n.id).then(function(n) {
                    0 == n.data.status ? (t.items[e].attention = 0, t.items[e].count--) : (t.items[e].attention = 1, 
                    t.items[e].count++), t.$apply();
                });
            },
            showCallView: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (!(r = e.currentTarget.dataset.id)) {
                                t.next = 8;
                                break;
                            }
                            return wx.showLoading({
                                title: "加载中"
                            }), t.next = 5, api.getPhoneNum(r, 1);

                          case 5:
                            a = t.sent, wx.hideLoading(), 0 === a.code && wx.showModal({
                                title: "提示",
                                content: "拨通后请说明来自成都摇号助手",
                                success: function(e) {
                                    e.confirm && wx.makePhoneCall({
                                        phoneNumber: a.data.phone
                                    });
                                }
                            });

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, n, t);
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
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
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
                        return api.isSaleMan().then(function(e) {
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
                        return e.next = 4, this.loadNext();

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
        value: function() {
            return share.share("置业顾问排行榜");
        }
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
                        return this.page = 1, this.more = !0, this.items = [], this.inputVal = "", e.next = 6, 
                        this.loadNext();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "loadNext",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中..."
                        }), e.next = 3, api.searchSalesMan(this.inputVal, this.page);

                      case 3:
                        t = e.sent, wx.hideLoading(), this.page >= t.data.last_page || !t.data.last_page ? this.more = !1 : this.page++, 
                        t.data.data && (this.items = this.items.concat(t.data.data)), this.$apply();

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(SalesManSearchList, "subPackages/salesMan/pages/salesmanSearchList"));