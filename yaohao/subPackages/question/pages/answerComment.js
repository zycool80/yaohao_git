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
            navigationBarTitleText: "评论",
            enablePullDownRefresh: !0
        }, r.data = {
            bottom: 0,
            avatar_url: "/images/default_sales_man_avatar.png",
            hotCommentList: [],
            commentList: [],
            question_id: "",
            discussionInfo: null,
            page: 1,
            isShow: !1,
            isFocus: !1,
            comment_cont: "",
            pid: "",
            com_num: "",
            loading: !1,
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
            delBox: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.delModel = !0, n = e.discussionInfo, r = [], e.userInfo.id == n.user_id && r.push("删除"), 
                            r.push("举报"), wx.showActionSheet({
                                itemList: r,
                                success: function() {
                                    var t = _asyncToGenerator(regeneratorRuntime.mark(function t(a) {
                                        var o, i;
                                        return regeneratorRuntime.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                              case 0:
                                                o = r[a.tapIndex], t.t0 = o, t.next = "删除" === t.t0 ? 4 : "举报" === t.t0 ? 13 : 14;
                                                break;

                                              case 4:
                                                if (e.userInfo.id != n.user_id) {
                                                    t.next = 11;
                                                    break;
                                                }
                                                return t.next = 7, _api2.default.delAnswer(n.id);

                                              case 7:
                                                i = t.sent, "删除成功" == i.data ? (_index.tip.toast("删除成功", "", ""), wx.switchTab({
                                                    url: "/pages/consult/index?changeType=2"
                                                })) : _index.tip.toast("删除失败", "", ""), t.next = 12;
                                                break;

                                              case 11:
                                                _index.tip.toast("非本人不能操作", "", "");

                                              case 12:
                                                return t.abrupt("break", 14);

                                              case 13:
                                                wx.navigateTo({
                                                    url: "/subPackages/project/pages/reportType?type=2" + n.id
                                                });

                                              case 14:
                                                e.$apply();

                                              case 15:
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
            comment: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            n.isShow = !0, n.isFocus = !0, n.pid = e, n.inputPlace = t ? "回复@" + t : "小主人说点什么吧";

                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            bindContChange: function(e) {
                this.comment_cont = e.detail.value;
            },
            bindContfocus: function(e) {
                this.bottom = e.detail.height, this.$apply();
            },
            bindContblur: function(e) {
                this.bottom = 0, this.$apply();
            },
            follow: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.attentionUser(e.discussionInfo.user_id, e.discussionInfo.sales_man_id);

                          case 2:
                            e.discussionInfo.attention = 1 === e.discussionInfo.attention ? 2 : 1, e.$apply();

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            aversion: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return n.next = 2, _api2.default.answerAversion(e);

                          case 2:
                            r = n.sent, "点赞成功" === r.data ? (t.discussionInfo.is_aversion = 1, t.discussionInfo.aversion_num++) : (t.discussionInfo.is_aversion = 2, 
                            t.discussionInfo.aversion_num--), t.$apply();

                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            isLike: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return n.next = 2, _api2.default.answerLike(e);

                          case 2:
                            r = n.sent, "点赞成功" === r.data ? (t.discussionInfo.like_num++, t.discussionInfo.is_like = 1) : (t.discussionInfo.like_num--, 
                            t.discussionInfo.is_like = 2), t.$apply();

                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            touchGood: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return r = t.commentList[e], n.next = 3, _api2.default.answerCommentLike(r.id);

                          case 3:
                            a = n.sent, "点赞成功" === a.data ? (r.is_like = 1, r.like_num++) : (r.is_like = 2, 
                            r.like_num--), t.$apply();

                          case 6:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            hotTouchGood: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, a;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return r = t.hotCommentList[e], n.next = 3, _api2.default.answerCommentLike(r.id);

                          case 3:
                            a = n.sent, "点赞成功" === a.data ? (r.is_like = 1, r.like_num++) : (r.is_like = 2, 
                            r.like_num--), t.$apply();

                          case 6:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            touchHide: function() {
                this.comment_cont = "", this.isShow = !1, this.isFocus = !1;
            },
            formSubmit: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (_api2.default.sendFromID(e.detail.formId), t.comment_cont) {
                                n.next = 3;
                                break;
                            }
                            return n.abrupt("return", _index.tip.toast("请输入评论内容", "", "none"));

                          case 3:
                            return wx.showLoading({
                                title: "加载中..."
                            }), n.next = 6, _api2.default.setAnswerComment(t.pid, t.comment_cont, t.question_id);

                          case 6:
                            if (r = n.sent, t.comment_cont = "", t.isShow = !1, !r.data) {
                                n.next = 15;
                                break;
                            }
                            return _index.tip.toast("评论成功"), n.next = 13, t.methods.reload.call(t);

                          case 13:
                            n.next = 16;
                            break;

                          case 15:
                            _index.tip.toast("评论失败", "", "none");

                          case 16:
                            t.$apply(), wx.hideLoading();

                          case 18:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n, r, a, o, i, s, u, c;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getAnswerCommentList(e.question_id, "", 1);

                          case 2:
                            return n = t.sent, n.data.data && (e.hotCommentList = n.data.data), t.next = 6, 
                            _api2.default.getAnswerCommentList(e.question_id, e.page, "");

                          case 6:
                            for (r = t.sent, e.page >= r.data.last_page || !r.data.last_page ? e.more = !1 : e.page++, 
                            e.project_info = r.data.project_info, e.commentList = e.commentList.concat(r.data.data), 
                            a = !0, o = !1, i = void 0, t.prev = 13, s = e.commentList[Symbol.iterator](); !(a = (u = s.next()).done); a = !0) c = u.value, 
                            c.is_toggle = !0;
                            t.next = 21;
                            break;

                          case 17:
                            t.prev = 17, t.t0 = t.catch(13), o = !0, i = t.t0;

                          case 21:
                            t.prev = 21, t.prev = 22, !a && s.return && s.return();

                          case 24:
                            if (t.prev = 24, !o) {
                                t.next = 27;
                                break;
                            }
                            throw i;

                          case 27:
                            return t.finish(24);

                          case 28:
                            return t.finish(21);

                          case 29:
                            e.$apply();

                          case 30:
                          case "end":
                            return t.stop();
                        }
                    }, t, e, [ [ 13, 17, 21, 29 ], [ 22, , 24, 28 ] ]);
                }))();
            },
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return wx.showLoading({
                                title: "加载..."
                            }), e.page = 1, e.more = !0, t.next = 5, _api2.default.getAnswerInfo(e.question_id);

                          case 5:
                            n = t.sent, e.discussionInfo = n.data, e.commentList = [], e.methods.loadNext.call(e), 
                            wx.hideLoading(), e.$apply();

                          case 11:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
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
                        return this.question_id = t.id, this.userInfo = _index.cache.get("userinfo") || {}, 
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
        value: function(e) {
            return _index.share.share("一起加入我们的讨论呗!");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/question/pages/answerComment"));