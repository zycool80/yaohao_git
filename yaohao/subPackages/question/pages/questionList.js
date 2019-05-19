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
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "提问",
            enablePullDownRefresh: !0
        }, r.data = {
            avatar_url: "/images/default_sales_man_avatar.png",
            nowTab: 1,
            type: 0,
            question_id: "",
            items: [],
            more: !0,
            page: 1,
            loading: !0,
            question_count: "",
            answer_count: "",
            not_answer_count: "",
            adopt_count: "",
            userInfo: null,
            delModel: !1,
            user_id: ""
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
            toUrl: function(e) {
                return wx.navigateTo({
                    url: e
                }), !1;
            },
            toggleTab: function(e) {
                this.nowTab = e, this.methods.reload.call(this);
            },
            switchType: function(e) {
                this.type = e, this.methods.reload.call(this);
            },
            isLike: function(e, t, n) {
                var r = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function a() {
                    var o, i;
                    return regeneratorRuntime.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return a.next = 2, _api2.default.questionLike(e);

                          case 2:
                            o = a.sent, i = r.items[t].data[n], i.is_like = 2 === i.is_like ? 1 : 2, "点赞成功" === o.data ? i.like_num++ : i.like_num--, 
                            r.$apply();

                          case 7:
                          case "end":
                            return a.stop();
                        }
                    }, a, r);
                }))();
            },
            follow: function(e, t, n) {
                var r = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function a() {
                    var o, i;
                    return regeneratorRuntime.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return a.next = 2, _api2.default.questionAttention(e);

                          case 2:
                            o = a.sent, i = r.items[t].data[n], i.attention = 2 === i.attention ? 1 : 2, "收藏成功" === o.data ? i.attention_num++ : i.attention_num--, 
                            r.$apply();

                          case 7:
                          case "end":
                            return a.stop();
                        }
                    }, a, r);
                }))();
            },
            delBox: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a, o;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            t.delModel = !0, r = t, a = t.items[0].data[e], o = [], t.userInfo.id == a.user_id && o.push("删除"), 
                            o.push("举报"), wx.showActionSheet({
                                itemList: o,
                                success: function() {
                                    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
                                        var i, s;
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                i = o[n.tapIndex], e.t0 = i, e.next = "删除" === e.t0 ? 4 : "举报" === e.t0 ? 19 : 21;
                                                break;

                                              case 4:
                                                if (t.userInfo.id != a.user_id) {
                                                    e.next = 17;
                                                    break;
                                                }
                                                return e.next = 7, _api2.default.delQuestion(a.id);

                                              case 7:
                                                if (s = e.sent, "删除成功" != s.data) {
                                                    e.next = 14;
                                                    break;
                                                }
                                                return _index.tip.toast("删除成功", "", ""), e.next = 12, r.methods.reloadData.call(t);

                                              case 12:
                                                e.next = 15;
                                                break;

                                              case 14:
                                                _index.tip.toast("删除失败", "", "");

                                              case 15:
                                                e.next = 18;
                                                break;

                                              case 17:
                                                _index.tip.toast("非本人不能操作", "", "");

                                              case 18:
                                                return e.abrupt("break", 21);

                                              case 19:
                                                return wx.navigateTo({
                                                    url: "/subPackages/project/pages/reportType?type=2" + a.id
                                                }), e.abrupt("break", 21);

                                              case 21:
                                                t.$apply();

                                              case 22:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e, t);
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                }(),
                                fail: function(e) {
                                    console.log(e.errMsg);
                                }
                            }), t.$apply();

                          case 8:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getMyQuestion(e.user_id, e.nowTab, e.type, e.page);

                          case 2:
                            n = t.sent, e.question_count = n.data.question_count, e.answer_count = n.data.answer_count, 
                            e.not_answer_count = n.data.not_answer_count, e.adopt_count = n.data.adopt_count, 
                            e.page >= n.data.last_page || n.data.last_page ? e.more = !1 : e.page++;
                            for (r in n.data.data) e.items.push({
                                time: r,
                                data: n.data.data[r]
                            });
                            e.$apply();

                          case 10:
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
                                title: "加载中"
                            }), e.loading = !0, e.items = [], e.page = 1, e.more = !0, t.next = 7, e.methods.loadNext.call(e);

                          case 7:
                            e.loading = !1, wx.stopPullDownRefresh(), wx.hideLoading(), e.$apply();

                          case 11:
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
                        return this.user_id = t.user_id || "", this.userInfo = _index.cache.get("userinfo"), 
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

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/question/pages/questionList"));