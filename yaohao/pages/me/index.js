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
            function r(a, i) {
                try {
                    var o = t[a](i), s = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../api/api.js"), _api2 = _interopRequireDefault(_api), _IChat = require("./../../utils/IChat2.js"), _IChat2 = _interopRequireDefault(_IChat), _require = require("./../../utils/utilsKit/index.js"), share = _require.share, mergeAll = _require.common.mergeAll, _require2 = require("./../../models/GlobalModel.js"), getUserInfo = _require2.getUserInfo, setUserInfo = _require2.setUserInfo, __self = null, bindMsgNotify = function(e) {
    try {
        wx.showTabBarRedDot({
            index: 3
        });
    } catch (e) {}
    var t = !0, n = !1, r = void 0;
    try {
        for (var a, i = __self.tagConfig.top[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
            var o = a.value;
            "我的消息" === o.text && (o.badge = !0);
        }
    } catch (e) {
        n = !0, r = e;
    } finally {
        try {
            !t && i.return && i.return();
        } finally {
            if (n) throw r;
        }
    }
    __self.$apply();
}, Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.config = {
            navigationBarTitleText: "我的",
            enablePullDownRefresh: !0
        }, r.data = {
            userInfo: {},
            guideImg: [],
            guideIndex: 0,
            defaultAvatar: "/images/default_sales_man_avatar.png",
            weapp: {
                nickName: "",
                city: ""
            },
            tagConfig: null,
            sales_man_id: "",
            myBanners: []
        }, r.methods = {
            batBtnAnalysis: function(e) {
                var t = e.currentTarget.dataset.title;
                wx.$Analysis.sendEvent("我的-" + t, {});
            },
            avatarAnalysis: function() {
                wx.$Analysis.sendEvent("我的-头像点击", {});
            },
            shareAnalysis: function() {
                wx.$Analysis.emit("myWebButtonClicks", {
                    type: "分享"
                });
            },
            signSubmitHandle: function(e) {
                this.sendFromID(e.detail.formId), wx.$Analysis.emit("myWebButtonClicks", {
                    type: "签到"
                }), wx.navigateTo({
                    url: "/subPackages/me/pages/signIn"
                });
            },
            getUserInfo: function(e) {
                var t = this, n = e.detail.userInfo;
                _api2.default.updateUserInfo(n).then(function(e) {
                    t.userInfo = mergeAll(t.userInfo, e.data.userinfo, n), setUserInfo(t.userInfo), 
                    t.$apply();
                });
            },
            hideGuide: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.guideImg = [], e.$apply();

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
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
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return __self = this, t = getUserInfo(), t && t.nickName && t.city && (this.weapp = '{"nickName": "' + t.nickName + '", "city": "' + t.city + '"}'), 
                        e.next = 5, this.reload();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return _IChat2.default.on("single_chat", bindMsgNotify), e.next = 3, this.redDot();

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onReady",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.getGuideImage("my_index");

                      case 2:
                        return t = e.sent, this.guideImg = t.data, e.next = 6, _api2.default.isSaleMan();

                      case 6:
                        n = e.sent, this.sales_man_id = n.sales_man_id || "", this.$apply();

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onHide",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        _IChat2.default.removeListener("single_chat", bindMsgNotify);

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
        key: "onShareAppMessage",
        value: function() {
            return share.share("我的首页", "/pages/index");
        }
    }, {
        key: "onTabItemTap",
        value: function() {
            wx.hideTabBarRedDot({
                index: 3
            });
        }
    }, {
        key: "redDot",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, a, i, o, s, u, c, f, l, p, h;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = _wepy2.default.$instance, !(this.tagConfig && null != this.tagConfig && this.tagConfig.top && this.tagConfig.top.length > 0)) {
                            e.next = 44;
                            break;
                        }
                        if (!t.globalData.im_message) {
                            e.next = 24;
                            break;
                        }
                        for (n = !0, r = !1, a = void 0, e.prev = 6, i = this.tagConfig.top[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) s = o.value, 
                        "我的消息" === s.text && (s.badge = !0);
                        e.next = 14;
                        break;

                      case 10:
                        e.prev = 10, e.t0 = e.catch(6), r = !0, a = e.t0;

                      case 14:
                        e.prev = 14, e.prev = 15, !n && i.return && i.return();

                      case 17:
                        if (e.prev = 17, !r) {
                            e.next = 20;
                            break;
                        }
                        throw a;

                      case 20:
                        return e.finish(17);

                      case 21:
                        return e.finish(14);

                      case 22:
                        e.next = 43;
                        break;

                      case 24:
                        for (u = !0, c = !1, f = void 0, e.prev = 27, l = this.tagConfig.top[Symbol.iterator](); !(u = (p = l.next()).done); u = !0) h = p.value, 
                        "我的消息" === h.text && (h.badge = !1);
                        e.next = 35;
                        break;

                      case 31:
                        e.prev = 31, e.t1 = e.catch(27), c = !0, f = e.t1;

                      case 35:
                        e.prev = 35, e.prev = 36, !u && l.return && l.return();

                      case 38:
                        if (e.prev = 38, !c) {
                            e.next = 41;
                            break;
                        }
                        throw f;

                      case 41:
                        return e.finish(38);

                      case 42:
                        return e.finish(35);

                      case 43:
                        this.$apply();

                      case 44:
                        if (!t.refresh_me) {
                            e.next = 48;
                            break;
                        }
                        return e.next = 47, this.reload();

                      case 47:
                        t.refresh_me = !1;

                      case 48:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 6, 10, 14, 22 ], [ 15, , 17, 21 ], [ 27, 31, 35, 43 ], [ 36, , 38, 42 ] ]);
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
                        return wx.showLoading({
                            title: "加载中..."
                        }), this.userInfo = getUserInfo(), e.next = 4, _api2.default.TagConfig();

                      case 4:
                        return t = e.sent, this.tagConfig = t.data, e.next = 8, _api2.default.getBannerList(8);

                      case 8:
                        return n = e.sent, this.myBanners = n.data, this.$apply(), e.next = 13, this.redDot();

                      case 13:
                        wx.hideLoading();

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "sendFromID",
        value: function(e) {
            _api2.default.sendFromID(e).then(function(e) {});
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/me/index"));