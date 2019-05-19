var regeneratorRuntime = require("../../npm/regenerator-runtime/runtime.js");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function a(r, s) {
                try {
                    var o = t[r](s), i = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(i).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(i);
            }
            return a("next");
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
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../utils/utilsKit/index.js"), globalModel = require("./../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, n, a, r;
        _classCallCheck(this, t);
        for (var s = arguments.length, o = Array(s), i = 0; i < s; i++) o[i] = arguments[i];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        a.config = {
            navigationBarTitleText: "置业顾问",
            enablePullDownRefresh: !0
        }, a.data = {
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
            hasShowPhoneCallTip: !1,
            andrees: "",
            comment_show: !1,
            sales_man_id: "",
            tips: "",
            guideShow: !1,
            project_img: "",
            isBroker: "",
            is_sales_man_id: ""
        }, a.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, a.$repeat = {}, a.$props = {
            BackHome: {}
        }, a.$events = {}, a.components = {
            BackHome: _BackHome2.default
        }, a.methods = {
            lookRules: function() {
                this.comment_show = !0;
            },
            cancelCommentShow: function() {
                this.comment_show = !1;
            },
            toUrl: function(e) {
                var t = e.detail.formId;
                _api2.default.sendFromID(t).then(function(e) {}), this.is_sales_man_id > 0 ? 1 == this.isBroker ? wx.navigateTo({
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
                    var a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return n.next = 2, _api2.default.salesManLike(t.salesList[e].id);

                          case 2:
                            a = n.sent, t.salesList[e].is_like = 1 == t.salesList[e].is_like ? 2 : 1, t.salesList[e].like_count = a.data.count, 
                            t.$apply();

                          case 6:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            showTipTop: function() {
                this.guideShow = !1, wx.showModal({
                    title: "推荐规则说明",
                    content: "为了保障平台更多置业顾问的权益，平台增加了置业顾问推荐功能，规则如下：" + this.tips,
                    showCancel: !1
                });
            },
            follow: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return a = t.salesList[e].id, n.next = 3, _api2.default.followSalesMan(a);

                          case 3:
                            t.salesList[e].attention = 1 == t.salesList[e].attention ? 2 : 1, t.$apply();

                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            hotFollow: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.followSalesMan(e.tuijian[0].id);

                          case 2:
                            e.tuijian[0].attention = 1 === e.tuijian[0].attention ? 2 : 1, e.$apply();

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            phoneCall: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function a() {
                    var r;
                    return regeneratorRuntime.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return "detail" == n.andrees && wx.$Analysis.emit("indexCallClick", {
                                detail_salseman_id: t.session_id,
                                detail_salseman_name: t.nick_name
                            }), a.next = 3, _api2.default.getPhoneNum(e, 1);

                          case 3:
                            r = a.sent, 0 === r.code && wx.makePhoneCall({
                                phoneNumber: r.data.phone
                            });

                          case 5:
                          case "end":
                            return a.stop();
                        }
                    }, a, n);
                }))();
            },
            toIMPage: function(e, t) {
                "detail" == this.andrees && wx.$Analysis.emit("indexCallClick", {
                    detail_salseman_id: e.session_id,
                    detail_salseman_name: e.nick_name
                }), wx.navigateTo({
                    url: "/subPackages/me/pages/chatInterface?user_id=" + e.session_id + "&project_id=" + this.project_id + "&avatar=" + t + "&project_name=" + e.project_name + "&project_img=" + e.cover
                });
            },
            weixinCopy: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function a() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return n.next = 2, _api2.default.consultingNum(t);

                          case 2:
                            wx.setClipboardData({
                                data: e
                            });

                          case 3:
                          case "end":
                            return n.stop();
                        }
                    }, a, n);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getSalesMan(e.project_id, e.page);

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
        }, r = n, _possibleConstructorReturn(a, r);
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
                var n, a, r, s, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, globalModel.getGlobalConfig();

                      case 2:
                        return n = e.sent, n.phone && (this.phone = n.phone), t.q ? (a = decodeURIComponent(t.q), 
                        r = a.match(/\?id=([^&]+)&project_id=([^&]+)/i), this.project_id = r[1], this.project_name = r[2], 
                        this.project_img = r[4]) : (t.andrees && (this.andrees = t.andrees), this.project_name = t.title, 
                        this.project_id = t.id, this.project_img = t.project_img), e.next = 7, _api2.default.isSaleMan();

                      case 7:
                        return s = e.sent, this.sales_man_id = s.sales_man_id || "", e.next = 11, this.methods.reload.call(this);

                      case 11:
                        return e.next = 13, _api2.default.isSaleMan();

                      case 13:
                        o = e.sent, this.isBroker = o.isBroker, this.is_sales_man_id = o.sales_man_id || "", 
                        this.$apply();

                      case 17:
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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/salesMan/index"));