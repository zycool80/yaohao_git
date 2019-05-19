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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationBarTitleText: "回答",
            enablePullDownRefresh: !0
        }, r.data = {
            toggle_index: 0,
            avatar_url: "/images/default_sales_man_avatar.png",
            items: [],
            tag: "",
            type: "",
            page: 1,
            status: "",
            more: !0,
            loading: !0,
            adopt_count: 0,
            count: 0,
            is_adopt: "",
            user_id: "",
            userInfo: null
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
            toTab: function() {
                _index.cache.set("question_index", "2"), wx.switchTab({
                    url: "/pages/consult/index?changeType=2"
                });
            },
            delBox: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var a;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            n.delModel = !0, a = [], n.userInfo.id == t && a.push("删除"), a.push("举报"), wx.showActionSheet({
                                itemList: a,
                                success: function() {
                                    var r = _asyncToGenerator(regeneratorRuntime.mark(function r(o) {
                                        var s, i;
                                        return regeneratorRuntime.wrap(function(r) {
                                            for (;;) switch (r.prev = r.next) {
                                              case 0:
                                                s = a[o.tapIndex], r.t0 = s, r.next = "删除" === r.t0 ? 4 : "举报" === r.t0 ? 19 : 21;
                                                break;

                                              case 4:
                                                if (n.userInfo.id != t) {
                                                    r.next = 17;
                                                    break;
                                                }
                                                return r.next = 7, _api2.default.delAnswer(e);

                                              case 7:
                                                if (i = r.sent, "删除成功" != i.data) {
                                                    r.next = 14;
                                                    break;
                                                }
                                                return _index.tip.toast("删除成功", "", "none"), r.next = 12, n.methods.reload.call(n);

                                              case 12:
                                                r.next = 15;
                                                break;

                                              case 14:
                                                _index.tip.toast("删除失败", "", "none");

                                              case 15:
                                                r.next = 18;
                                                break;

                                              case 17:
                                                _index.tip.toast("非本人不能操作", "", "none");

                                              case 18:
                                                return r.abrupt("break", 21);

                                              case 19:
                                                return wx.navigateTo({
                                                    url: "/subPackages/project/pages/reportType?type=2" + item.id
                                                }), r.abrupt("break", 21);

                                              case 21:
                                                n.$apply();

                                              case 22:
                                              case "end":
                                                return r.stop();
                                            }
                                        }, r, n);
                                    }));
                                    return function(e) {
                                        return r.apply(this, arguments);
                                    };
                                }(),
                                fail: function(e) {
                                    console.log(e.errMsg);
                                }
                            }), n.$apply();

                          case 6:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            toUrl: function(e) {
                return wx.navigateTo({
                    url: e
                }), !1;
            },
            jumpNav: function(e, t, n) {
                if (1 == e && 2 == t) return !1;
                wx.navigateTo({
                    url: "/subPackages/question/pages/answerComment?id=" + n
                });
            },
            toggle: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return t.is_adopt = e, n.next = 3, t.methods.reload.call(t);

                          case 3:
                            t.$apply();

                          case 4:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中"
                            }), e.items = [], e.loading = !0, e.page = 1, e.more = !0, t.next = 7, e.methods.loadNext.call(e);

                          case 7:
                            e.loading = !1, e.$apply(), wx.hideLoading();

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.myAnswer(e.user_id, e.is_adopt, e.page);

                          case 2:
                            n = t.sent, e.page >= n.data.last_page || !n.data.last_page ? e.more = !1 : e.page++;
                            for (r in n.data.data) e.items.push({
                                time: r,
                                data: n.data.data[r]
                            });
                            e.count = n.data.count, e.adopt_count = n.data.adopt_count, e.$apply();

                          case 8:
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
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.userInfo = _index.cache.get("userinfo") || {}, this.user_id = t.user_id || "", 
                        e.next = 4, this.methods.reload.call(this);

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
        key: "onShareAppMessage",
        value: function(e) {
            return _index.share.share("如果你有买房相关的任何问题，都可以来这里问问哦～");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/question/pages/answerList"));