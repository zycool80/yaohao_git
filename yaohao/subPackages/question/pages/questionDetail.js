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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationBarTitleText: "问答详情",
            enablePullDownRefresh: !0
        }, r.data = {
            id: 0,
            avatar_url: "",
            item: null,
            hotAnswer: [],
            newAnswer: [],
            page: 1,
            more: !0,
            user_id: 0,
            ids: [],
            share: null,
            userInfo: null,
            delModel: !1,
            shareContent: null
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
            jumpNav: function(e) {
                var t = this.newAnswer[e];
                if (1 == t.is_specialist && 2 == t.is_jurisdiction) return !1;
                wx.navigateTo({
                    url: "/subPackages/question/pages/answerComment?id=" + t.id
                });
            },
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
            jump: function(e) {
                wx.navigateTo({
                    url: "/subPackages/question/pages/answerComment?id=" + e
                });
            },
            delBox: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var a, i;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            n.delModel = !0, a = null, a = 1 == e ? n.hotAnswer[t] : n.newAnswer[t], i = [], 
                            n.userInfo.id == a.user_id && i.push("删除"), i.push("举报"), wx.showActionSheet({
                                itemList: i,
                                success: function() {
                                    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                                        var r, s;
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                r = i[t.tapIndex], e.t0 = r, e.next = "删除" === e.t0 ? 4 : "举报" === e.t0 ? 19 : 21;
                                                break;

                                              case 4:
                                                if (n.userInfo.id != a.user_id) {
                                                    e.next = 17;
                                                    break;
                                                }
                                                return e.next = 7, _api2.default.delAnswer(a.id);

                                              case 7:
                                                if (s = e.sent, "删除成功" != s.data) {
                                                    e.next = 14;
                                                    break;
                                                }
                                                return _index.tip.toast("删除成功", "", "none"), e.next = 12, n.methods.reloadData.call(n);

                                              case 12:
                                                e.next = 15;
                                                break;

                                              case 14:
                                                _index.tip.toast("删除失败", "", "none");

                                              case 15:
                                                e.next = 18;
                                                break;

                                              case 17:
                                                _index.tip.toast("非本人不能操作", "", "none");

                                              case 18:
                                                return e.abrupt("break", 21);

                                              case 19:
                                                return wx.navigateTo({
                                                    url: "/subPackages/project/pages/reportType?type=2&id=" + a.id
                                                }), e.abrupt("break", 21);

                                              case 21:
                                                n.$apply();

                                              case 22:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e, n);
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                }(),
                                fail: function(e) {
                                    console.log(e.errMsg);
                                }
                            }), n.$apply();

                          case 8:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            delQuestion: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.delModel = !0, n = e.item, r = [], e.userInfo.id == n.user_id && r.push("删除"), 
                            r.push("举报"), wx.showActionSheet({
                                itemList: r,
                                success: function() {
                                    var t = _asyncToGenerator(regeneratorRuntime.mark(function t(a) {
                                        var i, s;
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                              case 0:
                                                i = r[a.tapIndex], t.t0 = i, t.next = "删除" === t.t0 ? 4 : "举报" === t.t0 ? 13 : 15;
                                                break;

                                              case 4:
                                                if (e.userInfo.id != n.user_id) {
                                                    t.next = 11;
                                                    break;
                                                }
                                                return t.next = 7, _api2.default.delQuestion(n.id);

                                              case 7:
                                                s = t.sent, "删除成功" == s.data ? (_index.tip.toast("删除成功", "", "none"), _index.cache.set("question_index", "2"), 
                                                wx.switchTab({
                                                    url: "/pages/consult/index?changeType=1"
                                                })) : _index.tip.toast("删除失败", "", "none"), t.next = 12;
                                                break;

                                              case 11:
                                                _index.tip.toast("非本人不能操作", "", "none");

                                              case 12:
                                                return t.abrupt("break", 15);

                                              case 13:
                                                return wx.navigateTo({
                                                    url: "/subPackages/project/pages/reportType?type=2&id=" + n.id
                                                }), t.abrupt("break", 15);

                                              case 15:
                                                e.$apply();

                                              case 16:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t, e);
                                    }));
                                    return function(e) {
                                        return t.apply(this, arguments);
                                    };
                                }(),
                                fail: function(e) {
                                    console.log(e.errMsg);
                                }
                            }), e.$apply();

                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            toUrl: function(e) {
                return wx.navigateTo({
                    url: e
                }), !1;
            },
            adopt: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var a, i;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return a = void 0, a = e ? n.hotAnswer[t] : n.newAnswer[t], r.next = 4, _api2.default.questionAdopt(a.id);

                          case 4:
                            return i = r.sent, _index.tip.success(i.data), r.next = 8, n.methods.reloadData.call(n);

                          case 8:
                            n.$apply();

                          case 9:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            followQuestion: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.questionAttention(e.item.id);

                          case 2:
                            n = t.sent, "收藏成功" === n.data ? (e.item.is_attention = 1, e.item.attention_num++) : (e.item.is_attention = 2, 
                            e.item.attention_num--), e.$apply();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            likeQuestion: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.questionLike(e.item.id);

                          case 2:
                            n = t.sent, "点赞成功" === n.data ? (e.item.is_like = 1, e.item.like_num++) : (e.item.is_like = 2, 
                            e.item.like_num--), e.$apply();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            focus: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return r = t.userInfo && t.userInfo.sales_man_id ? t.userInfo.sales_man_id : "", 
                            n.next = 3, _api2.default.attentionUser(e, r);

                          case 3:
                            a = n.sent, "关注成功" === a.data ? t.item.user_attention = 1 : t.item.user_attention = 2, 
                            t.$apply();

                          case 6:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            follow: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var a, i;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return a = void 0, a = e ? n.hotAnswer[t] : n.newAnswer[t], r.next = 4, _api2.default.attentionUser(a.user_id, a.sales_man_id);

                          case 4:
                            i = r.sent, "关注成功" === i.message ? a.attention = 1 : a.attention = 2, n.$apply();

                          case 7:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            like: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var a, i;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return a = void 0, a = "1" === e ? n.hotAnswer[t] : n.newAnswer[t], r.next = 4, 
                            _api2.default.answerLike(a.id);

                          case 4:
                            i = r.sent, "点赞成功" === i.data ? (a.is_like = 1, a.like_num++) : (a.is_like = 2, 
                            a.like_num--), n.$apply();

                          case 7:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            aversion: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var a, i;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return a = void 0, a = e ? n.hotAnswer[t] : n.newAnswer[t], r.next = 4, _api2.default.answerAversion(a.id);

                          case 4:
                            i = r.sent, "点赞成功" === i.data ? (a.is_aversion = 1, a.aversion_num++) : (a.is_aversion = 2, 
                            a.aversion_num--), n.$apply();

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
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getAnswerList(e.id, e.page, 0, e.ids.join(","));

                          case 2:
                            n = t.sent, e.page >= n.data.last_page || !n.data.last_page ? e.more = !1 : e.page++, 
                            e.newAnswer = e.newAnswer.concat(n.data.data), e.$apply();

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
                    var n, r, a, i, s, o, u, c;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载中"
                            }), t.next = 3, _api2.default.getQuestionInfo(e.id);

                          case 3:
                            return n = t.sent, e.item = n.data, e.share = n.data.share, t.next = 8, _api2.default.getAnswerList(e.id, 1, 1);

                          case 8:
                            for (r = t.sent, e.hotAnswer = r.data.data, e.ids = [], a = !0, i = !1, s = void 0, 
                            t.prev = 14, o = e.hotAnswer[Symbol.iterator](); !(a = (u = o.next()).done); a = !0) c = u.value, 
                            e.ids.push(c.id);
                            t.next = 22;
                            break;

                          case 18:
                            t.prev = 18, t.t0 = t.catch(14), i = !0, s = t.t0;

                          case 22:
                            t.prev = 22, t.prev = 23, !a && o.return && o.return();

                          case 25:
                            if (t.prev = 25, !i) {
                                t.next = 28;
                                break;
                            }
                            throw s;

                          case 28:
                            return t.finish(25);

                          case 29:
                            return t.finish(22);

                          case 30:
                            return e.newAnswer = [], e.more = !0, e.page = 1, t.next = 35, e.methods.loadNext.call(e);

                          case 35:
                            e.$apply(), wx.hideLoading();

                          case 37:
                          case "end":
                            return t.stop();
                        }
                    }, t, e, [ [ 14, 18, 22, 30 ], [ 23, , 25, 29 ] ]);
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
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.id = t.id, n = _index.cache.get("userinfo") || {}, this.userInfo = n, 
                        this.user_id = n.id, e.next = 6, this.methods.reloadData.call(this);

                      case 6:
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
        value: function() {
            var e = this.share.title, t = this.share.image || "", n = this.share.url || "";
            return _index.share.share(e, n, t);
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/question/pages/questionDetail"));