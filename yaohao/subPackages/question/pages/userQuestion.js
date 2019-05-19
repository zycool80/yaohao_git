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
            navigationBarTitleText: "成都摇号助手",
            navigationBarBackgroundColor: "#3772cc",
            enablePullDownRefresh: !0
        }, r.data = {
            avatar_url: "/images/default_sales_man_avatar.png",
            topics: [],
            scrollViewWidth: 0,
            item: [],
            page: 1,
            more: !0,
            questions: [],
            sales_man_id: "",
            user_id: "",
            delModel: !1,
            userInfo: null
        }, r.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, r.components = {
            BackHome: _BackHome2.default
        }, r.methods = {
            preview: function(e, t) {
                var n = [];
                e.img.forEach(function(e) {
                    n = n.concat(e);
                });
                var r = t.currentTarget.dataset, a = r.preview;
                a && n.length > 0 && wx.previewImage({
                    current: a,
                    urls: n
                });
            },
            toUrl: function(e) {
                wx.navigateTo({
                    url: e
                });
            },
            delBox: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a, o;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            t.delModel = !0, r = t, a = t.questions[0].data[e], o = [], t.userInfo.id == a.user_id && o.push("删除"), 
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
            toTopic: function(e) {
                return wx.navigateTo({
                    url: e
                }), !1;
            },
            follow: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.attentionUser(e.user_id);

                          case 2:
                            n = t.sent, "关注成功" === n.message ? e.item.attention = 1 : e.item.attention = 2, 
                            e.$apply();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            followList: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var a, o;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return a = n.questions[e].data[t], r.next = 3, _api2.default.questionAttention(a.id);

                          case 3:
                            o = r.sent, "收藏成功" === o.data ? (a.attention = 1, a.attention_num++) : (a.attention = 2, 
                            a.attention_num--), n.$apply();

                          case 6:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            like: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var a, o;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return a = n.questions[e].data[t], r.next = 3, _api2.default.questionLike(a.id);

                          case 3:
                            o = r.sent, "点赞成功" === o.data ? n.questions[e].data[t].like_num++ : n.questions[e].data[t].like_num--, 
                            n.questions[e].data[t].is_like = 2 == n.questions[e].data[t].is_like ? 1 : 2, n.$apply();

                          case 7:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getMyQuestion(e.user_id, 1, "", e.page);

                          case 2:
                            n = t.sent, e.page >= n.data.last_page || n.data.last_page ? e.more = !1 : e.page++;
                            for (r in n.data.data) e.questions.push({
                                time: r,
                                data: n.data.data[r]
                            });
                            e.$apply();

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            reloadData: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r, a;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中"
                            }), t.next = 3, _api2.default.getMyQuestionAnswer(e.user_id, e.sales_man_id);

                          case 3:
                            return n = t.sent, e.item = n.data, e.topics = e.item.topics, e.topics && (r = e.topics.join(""), 
                            a = e.topics.length, e.scrollViewWidth = 2 * a * 12 + 10 * a + 12 * r.length), e.questions = [], 
                            e.page = 1, e.more = !0, t.next = 12, e.methods.loadNext.call(e);

                          case 12:
                            e.$apply(), wx.stopPullDownRefresh(), wx.hideLoading();

                          case 15:
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
                        return this.userInfo = _index.cache.get("userinfo"), this.user_id = t.user_id || "", 
                        this.sales_man_id = t.sales_man_id, e.next = 5, this.methods.reloadData.call(this);

                      case 5:
                        this.$apply();

                      case 6:
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
                        return e.next = 2, this.methods.reloadData.call(this);

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
            return _index.share.share("我的问答");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/question/pages/userQuestion"));