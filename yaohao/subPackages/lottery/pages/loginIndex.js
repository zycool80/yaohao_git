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
            navigationBarTitleText: "我要上推荐",
            navigationBarBackgroundColor: "#1e81dd",
            enablePullDownRefresh: !0
        }, r.data = {
            default_avatar: "/images/placeholder2.jpg",
            tab: 1,
            systemType: "android",
            comment_show: !1,
            auctionRules: [],
            indexList: null,
            projectList: null,
            sales_man_id: "",
            time: "",
            showJoinInp: !0,
            totalIntegral: "",
            setTime: null
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
            tourlHandle: function() {
                var e = this;
                if (this.indexList.project_list.length < 1) return _index.tip.toast("您还没有入驻任何楼盘", "none");
                if (this.indexList.project_list.length > 1) {
                    var t = this.indexList.project_list.map(function(e) {
                        return e.name;
                    });
                    wx.showActionSheet({
                        itemList: t,
                        success: function(t) {
                            var n = t.tapIndex, r = e.indexList.project_list[n].sales_men_id;
                            wx.navigateTo({
                                url: "/subPackages/lottery/pages/loginIndexDetail?project_id=0&sales_man_id=" + r
                            });
                        }
                    });
                } else wx.navigateTo({
                    url: "/subPackages/lottery/pages/loginIndexDetail?project_id=0&sales_man_id=" + this.indexList.project_list[0].sales_men_id
                });
            },
            toggleRulesHandle: function(e) {
                var t = e.currentTarget.dataset.toggle;
                this.comment_show = "open" === t, this.$apply();
            },
            stopMove: function() {
                return !1;
            },
            switchTab: function(e) {
                this.tab = e, this.reload(), this.$apply();
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
                var n, r, a, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = (0, _GlobalModel.getUserInfo)(), this.sales_man_id = t.sales_man_id || n.sales_man_id, 
                        0 == this.sales_man_id && wx.switchTab({
                            url: "/pages/index"
                        }), e.next = 5, this.timeChange();

                      case 5:
                        return e.next = 7, this.reload();

                      case 7:
                        return e.next = 9, _api2.default.auctionRules(this.salesMan_id, this.project_id);

                      case 9:
                        return r = e.sent, this.auctionRules = r.data, e.next = 13, _api2.default.coinsUserInfo();

                      case 13:
                        a = e.sent, a.data && (this.totalIntegral = a.data.coins), o = wx.getSystemInfoSync(), 
                        this.systemType = o.platform, this.$apply();

                      case 18:
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
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (1 != this.tab) {
                            e.next = 7;
                            break;
                        }
                        return e.next = 3, _api2.default.joinHomeSalesMan();

                      case 3:
                        t = e.sent, 0 == t.code && (this.indexList = t.data), e.next = 11;
                        break;

                      case 7:
                        return e.next = 9, _api2.default.joinHomeProject();

                      case 9:
                        n = e.sent, 0 == n.code && n.data && (this.projectList = n.data);

                      case 11:
                        this.$apply();

                      case 12:
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
                        clearInterval(this.setTime);

                      case 1:
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
                            if (r >= n) {
                                n = timestampToTime(new Date().getTime() + 864e5) + " 00:00:00", n = new Date(n.replace(/-/g, "/")).getTime(), 
                                t.showJoinInp = !1;
                            } else t.showJoinInp = !0;
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

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/lottery/pages/loginIndex"));