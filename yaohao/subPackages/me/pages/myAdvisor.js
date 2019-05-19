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
                    var s = t[a](o), i = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationBarTitleText: "我的顾问",
            enablePullDownRefresh: !0
        }, r.data = {
            project_name: "",
            project_id: null,
            page: 1,
            more: !0,
            loading: !0,
            salesList: [],
            defaultAvatar: "../../images/default_sales_man_avatar.png",
            color: {
                1: "http://imgcdn.huanjutang.com/assets/img/20180713/5b487eb85cca2.jpg",
                2: "http://imgcdn.huanjutang.com/assets/img/20180713/5b487ec8284d9.jpg",
                3: "http://imgcdn.huanjutang.com/assets/img/20180713/5b487ead2f79b.jpg"
            },
            img: {
                1: "/images/tong.png",
                2: "/images/yin.png",
                3: "/images/jin.png"
            },
            font_color: {
                1: "#8c7374",
                2: "#8d92a3",
                3: "#c86601"
            },
            sort: {
                1: "铜牌顾问",
                2: "银牌顾问",
                3: "金牌顾问"
            },
            tuijian: [],
            phone: "",
            hasShowPhoneCallTip: !1
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {}
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.methods = {
            toUrl: function(e) {
                var t = e.detail.formId;
                _api2.default.sendFromID(t).then(function(e) {}), wx.navigateTo({
                    url: "/subPackages/me/pages/salesMan?id=" + this.project_id
                });
            },
            like: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return n.next = 2, _api2.default.salesManLike(t.salesList[e].sales_man_id);

                          case 2:
                            r = n.sent, t.salesList[e].is_like = 1 == t.salesList[e].is_like ? 2 : 1, t.salesList[e].like_count = r.data.count, 
                            t.$apply();

                          case 6:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            showTip: function() {
                wx.showModal({
                    title: "推荐规则说明",
                    content: "为了保障平台更多置业顾问的权益，平台增加了置业顾问推荐功能，规则如下：" + this.tips,
                    showCancel: !1
                });
            },
            follow: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return r = t.salesList[e].sales_man_id, n.next = 3, _api2.default.followSalesMan(r);

                          case 3:
                            if (a = n.sent, 0 != a.code) {
                                n.next = 7;
                                break;
                            }
                            return n.next = 7, t.methods.reload.call(t);

                          case 7:
                            t.$apply();

                          case 8:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            phoneCall: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getPhoneNum(e, 1);

                          case 2:
                            r = t.sent, 0 === r.code && wx.makePhoneCall({
                                phoneNumber: r.data.phone
                            });

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, n, t);
                }))();
            },
            toIMPage: function(e, t) {
                this.phone ? wx.navigateTo({
                    url: "/subPackages/me/pages/chatInterface?user_id=" + e.session_id + "&project_id=" + e.project_id + "&avatar=" + t
                }) : wx.redirectTo({
                    url: "/subPackages/tools/pages/telLogin?direct=" + encodeURIComponent("/subPackages/me/pages/chatInterface?user_id=" + e.session_id + "&project_id=" + e.project_id) + "&avatar=" + t
                });
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getFollowSales(e.page);

                          case 2:
                            n = t.sent, e.page >= n.data.last_page || !n.data.last_page ? e.more = !1 : e.page++, 
                            e.tips = n.data.rule, e.salesList = e.salesList.concat(n.data.data), !e.project_name && e.salesList.length > 0 && (e.project_name = e.salesList[0].project_name), 
                            e.loading = !1, e.$apply();

                          case 9:
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
                            }), e.loading = !0, e.page = 1, e.more = !0, e.salesList = [], t.next = 7, e.methods.loadNext.call(e);

                          case 7:
                            e.$apply(), wx.hideLoading();

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "wxLogin",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", new Promise(function(e, t) {
                            wx.login({
                                success: function(t) {
                                    e(t.code);
                                },
                                fail: function(e) {
                                    t(e);
                                }
                            });
                        }));

                      case 1:
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
                var n, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, globalModel.getGlobalConfig();

                      case 2:
                        return n = e.sent, n.phone && (this.phone = n.phone), t.q ? (r = decodeURIComponent(t.q), 
                        a = r.match(/\?id=([^&]+)&project_id=([^&]+)/i), this.project_id = a[1], this.project_name = a[2]) : (this.project_name = t.title, 
                        this.project_id = t.id), e.next = 7, this.methods.reload.call(this);

                      case 7:
                        this.$apply();

                      case 8:
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
                        return e.abrupt("return");

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
        value: function(e) {
            return _index.share.share(this.project_name + "楼盘的置业顾问都在这里~", "/pages/salesMan/index?id=" + this.project_id);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/me/pages/myAdvisor"));