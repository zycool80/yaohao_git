var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
    }
    return Array.from(e);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _popupWindow = require("./../../../components/popupWindow.js"), _popupWindow2 = _interopRequireDefault(_popupWindow), _index = require("./../../../utils/utilsKit/index.js"), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), globalModel = require("./../../../models/GlobalModel.js"), utils = require("./../../../utils/util.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "动态",
            enablePullDownRefresh: !0
        }, r.data = {
            num: 2,
            lottery_id: "",
            project_id: "",
            dynamic_id: "",
            page: 1,
            size: 10,
            more: !0,
            type: "",
            statementList: [],
            disclaimer: "",
            count: 0,
            status: 0,
            project_count: 0,
            near_count: 0,
            opening_count: 0,
            house_count: 0,
            title: "",
            pointUrl: "",
            news_cont: 0,
            allpage: 0,
            isSealman: !1,
            comment_show: !1,
            relief_url: ""
        }, r.$repeat = {}, r.$props = {
            Popup: {
                "xmlns:v-bind": "",
                "v-bind:rules_show.sync": "comment_show",
                "v-bind:rules.sync": "disclaimer",
                rules_title: "免责声明"
            },
            BackHome: {}
        }, r.$events = {}, r.components = {
            Popup: _popupWindow2.default,
            BackHome: _BackHome2.default
        }, r.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, r.methods = {
            preview: function(e, t) {
                var n = [];
                e.images.forEach(function(e) {
                    n = n.concat(e);
                });
                var r = t.currentTarget.dataset, a = r.preview;
                a && n.length > 0 && wx.previewImage({
                    current: a,
                    urls: n
                });
            },
            callBuilidng: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (r = /^(0|1)\d{10}$/, !r.test(e)) {
                                n.next = 6;
                                break;
                            }
                            return n.next = 4, _api2.default.getPhoneNum(t.project_id, 2);

                          case 4:
                            a = n.sent, 0 == a.code && (e = a.data.phone);

                          case 6:
                            wx.showModal({
                                title: "提示",
                                content: "拨通后请说明来自成都摇号助手",
                                success: function(t) {
                                    t.confirm && wx.makePhoneCall({
                                        phoneNumber: e
                                    });
                                }
                            });

                          case 7:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            toUrl: function(e, t) {
                wx.navigateTo({
                    url: "/subPackages/me/pages/chatInterface?user_id=" + e + "&avatar=" + t
                });
            },
            callSeasman: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getPhoneNum(e, 1);

                          case 2:
                            r = t.sent, 0 === r.code && wx.showModal({
                                title: "提示",
                                content: "拨通后请说明来自成都摇号助手",
                                success: function(e) {
                                    e.confirm && wx.makePhoneCall({
                                        phoneNumber: r.data.phone
                                    });
                                }
                            });

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, n, t);
                }))();
            },
            dynamic: function() {
                var e = this;
                _api2.default.isSaleMan(this.project_id).then(function(t) {
                    1 == t.data ? wx.navigateTo({
                        url: "/subPackages/news/pages/createStatement?lottery_id=" + e.lottery_id + "&project_id=" + e.project_id + "&project_name=" + e.title + "&type=" + e.type
                    }) : wx.showModal({
                        title: "你不是该楼盘的置业顾问",
                        showCancel: !1
                    });
                });
            },
            navigato: function(e) {
                return wx.navigateTo({
                    url: e
                }), !1;
            },
            toState: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.dynamicRuleRead();

                          case 2:
                            wx.navigateTo({
                                url: "/subPackages/news/pages/createStatement?lottery_id=" + e.lottery_id + "&project_id=" + e.project_id + "&project_name=" + e.title + "&type=" + e.type + "&status=" + e.status
                            });

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            showState: function() {
                this.comment_show = !0;
            },
            dropContent: function(e, t, n) {
                this.statementList[e].is_toggle = !this.statementList[e].is_toggle;
            },
            change: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return n.page = 1, n.more = !0, n.type = e, n.statementList = [], wx.$Analysis.emit("estateStatementClicks", {
                                name: t
                            }), r.next = 7, n.getBuildingpages();

                          case 7:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "getBuildingpages",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.getDynamic(this.project_id, this.type, "2", this.page);

                      case 2:
                        t = e.sent, this.page >= t.data.last_page || !t.data.last_page ? this.more = !1 : this.page++, 
                        this.project_count = t.data.project_count, this.near_count = t.data.near_count, 
                        this.opening_count = t.data.opening_count, this.house_count = t.data.house_count, 
                        this.count = t.data.count, this.relief_url = t.data.url, this.statementList = [].concat(_toConsumableArray(this.statementList), _toConsumableArray(t.data.data)), 
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
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.lottery_id = t.lottery_id, this.project_id = t.project_id, this.dynamic_id = t.dynamic_id, 
                        this.title = t.title, e.next = 6, globalModel.getGlobalConfig();

                      case 6:
                        return n = e.sent, this.disclaimer = n.disclaimer, e.next = 10, this.getBuildingpages();

                      case 10:
                        return e.next = 12, _api2.default.isSaleMan(this.project_id);

                      case 12:
                        r = e.sent, 1 == r.data && (this.isSealman = !0), this.$apply();

                      case 15:
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
                        return this.more = !0, this.type = "", this.page = 1, this.statementList = [], e.next = 6, 
                        this.getBuildingpages();

                      case 6:
                        wx.stopPullDownRefresh();

                      case 7:
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
                        return e.next = 4, this.getBuildingpages();

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
            var e = "快来看【" + this.title + "】的动态", t = "/pages/lotteryDetail?id=&project_id=" + this.project_id + "&id=" + this.lottery_id + "&redirect=" + encodeURIComponent(utils.getCurrentPageUrlWithArgs());
            return _index.share.share(e, t);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/news/pages/statement"));