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
                    var i = t[a](o), s = i.value;
                } catch (e) {
                    return void n(e);
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

function timestampToTime(e) {
    var t = new Date(e);
    return t.getFullYear() + "-" + (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-" + (t.getDate() < 10 ? "0" + t.getDate() : t.getDate());
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _GlobalModel = require("./../../../models/GlobalModel.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "我要上首页",
            navigationBarBackgroundColor: "#1e81dd",
            enablePullDownRefresh: !0
        }, r.data = {
            placeVal: "请输入出价",
            systemType: "android",
            default_avatar: "/images/placeholder2.jpg",
            comment_show: !1,
            salesMan_id: "",
            project_id: "",
            integral: "",
            auctionResults: null,
            page: 1,
            joinList: [],
            more: !0,
            showJoinInp: !0,
            time: "",
            points: "",
            auctionRules: [],
            setTime: null,
            tomorrow: "",
            avatar: "",
            project_name: ""
        }, r.$repeat = {}, r.$props = {
            BackHome: {}
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.methods = {
            toUrl: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            "ios" == e.systemType && wx.navigateTo({
                                url: "/subPackages/me/pages/goldRecharge?type=ios"
                            }), "android" == e.systemType && wx.navigateTo({
                                url: "/subPackages/me/pages/goldRecharge?type=android"
                            });

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            inputVal: function(e) {
                this.integral = e.detail.value;
            },
            lookRules: function() {
                this.comment_show = !0;
            },
            cancelCommentShow: function() {
                this.comment_show = !1;
            },
            stopMove: function() {
                return !1;
            },
            joinAuction: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.joinPrice(e.salesMan_id, e.project_id, e.integral);

                          case 2:
                            if (!(n = t.sent) || 0 != n.code) {
                                t.next = 7;
                                break;
                            }
                            return _index.tip.toast("竞价成功"), t.next = 7, e.reload();

                          case 7:
                            e.$apply();

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            getAuctionResults: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.hideLoading({
                                title: "加载中..."
                            }), t.next = 3, _api2.default.auctionResults(e.salesMan_id, e.project_id);

                          case 3:
                            n = t.sent, 0 == n.code && (e.auctionResults = n.data), wx.hideLoading(), e.$apply();

                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, r.watch = {
            showJoinInp: function(e, t) {
                e || (this.methods.getAuctionResults.call(this), this.reload());
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
                var n, r, a, o, i, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.salesMan_id = t.sales_man_id, this.project_id = t.project_id, n = 0 == this.project_id ? "我要上首页" : "我要上楼盘", 
                        wx.setNavigationBarTitle({
                            title: n
                        }), r = (0, _GlobalModel.getUserInfo)(), this.avatar = r.avatarUrl, this.project_name = t.project_name, 
                        e.next = 9, this.timeChange();

                      case 9:
                        return e.next = 11, this.reload();

                      case 11:
                        return e.next = 13, _api2.default.auctionPoints(this.salesMan_id, this.project_id);

                      case 13:
                        return a = e.sent, this.points = a.data.recommend, e.next = 17, _api2.default.auctionRules(this.salesMan_id, this.project_id);

                      case 17:
                        o = e.sent, this.auctionRules = o.data, i = new Date().getTime() + 864e5, this.tomorrow = timestampToTime(i), 
                        s = wx.getSystemInfoSync(), this.systemType = s.platform, this.$apply();

                      case 24:
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
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.auctionLog(this.project_id, this.page);

                      case 2:
                        t = e.sent, n = 1, 0 == t.code && t.data.total && (n = Math.ceil(t.data.total / 10)), 
                        this.page >= n ? this.more = !1 : this.page++, this.joinList = this.joinList.concat(t.data.data);

                      case 7:
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
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        wx.showLoading({
                            title: "加载中...",
                            mask: !0
                        }), this.integral = "", this.joinList = [], this.page = 1, this.loadNext(), wx.hideLoading(), 
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
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.reload();

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
                        return e.abrupt("return");

                      case 2:
                        return e.next = 4, this.loadNext();

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
        key: "onUnload",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        clearInterval(this.setTime), this.setTime = null;

                      case 2:
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
            return _index.share.share("我在这里查看我要上首页", "subPackages/lottery/pages/loginIndex");
        }
    }, {
        key: "timeChange",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.setTime = setInterval(function() {
                            var e = new Date().toLocaleDateString(), n = e + " 23:00:00";
                            n = new Date(n.replace(/-/g, "/")).getTime();
                            var r = new Date().getTime();
                            r >= n ? (n = t.tomorrow + " 00:00:00", n = new Date(n.replace(/-/g, "/")).getTime(), 
                            t.showJoinInp = !1) : t.showJoinInp = !0;
                            var a = (n - r) / 1e3, o = parseInt(a / 86400), i = parseInt(a % 86400 / 3600), s = parseInt(a % 3600 / 60), u = parseInt(a % 60);
                            t.day = o < 0 ? 0 : o, t.hour = i < 0 ? 0 : i, t.hour = t.hour >= 10 ? t.hour : "0" + t.hour, 
                            t.minutes = s < 0 ? 0 : s, t.minutes = t.minutes >= 10 ? t.minutes : "0" + t.minutes, 
                            t.second = u < 0 ? 0 : u, t.second = t.second >= 10 ? t.second : "0" + t.second, 
                            t.time = t.hour + ":" + t.minutes + ":" + t.second, t.$apply();
                        }, 1e3);

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/loginIndexDetail"));