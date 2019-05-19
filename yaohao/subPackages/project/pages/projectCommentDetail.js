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
            function r(o, a) {
                try {
                    var i = t[o](a), c = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(c).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(c);
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
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "评论详情",
            enablePullDownRefresh: !0
        }, r.data = {
            bottom: 0,
            avatar: "/images/default_sales_man_avatar.png",
            isShow: !1,
            commentList: [],
            id: "",
            isFocus: !1,
            pid: "",
            inputPlace: "我来说两句",
            userInfo: null,
            comment_show: !1,
            comment_cont: "",
            com_num: "",
            comment: "",
            touchEndTime: "",
            touchStartTime: "",
            project_id: "",
            project_name: "",
            lottery_id: ""
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
            delComment: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var o, a;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            if (n.userInfo.id != e) {
                                r.next = 12;
                                break;
                            }
                            return r.next = 3, _index.tip.confirm("你确定删除此条评论吗？");

                          case 3:
                            if (!(o = r.sent)) {
                                r.next = 11;
                                break;
                            }
                            return r.next = 7, _api2.default.delProjectComment(t);

                          case 7:
                            if (!(a = r.sent) || 0 != a.code) {
                                r.next = 11;
                                break;
                            }
                            return r.next = 11, n.methods.reload.call(n);

                          case 11:
                            n.$apply();

                          case 12:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            commentText: function() {
                this.comment_show = !0;
            },
            cancelCommentShow: function() {
                this.comment_show = !1;
            },
            touchStart: function(e) {
                this.touchStartTime = e.timeStamp;
            },
            touchEnd: function(e) {
                this.touchEndTime = e.timeStamp;
            },
            bindContChange: function(e) {
                this.comment_cont = e.detail.value;
            },
            comment: function(e, t) {
                this.touchEndTime - this.touchStartTime < 350 && (this.isFocus = !0, this.pid = e, 
                this.inputPlace = t ? "回复@" + t : "小主人说点什么吧");
            },
            follow: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            _api2.default.followAttention("", e.project_id, e.attention_status).then(function(t) {
                                e.attention_status = 1 == e.attention_status ? 2 : 1, e.$apply();
                            });

                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            bindContfocus: function(e) {
                this.bottom = e.detail.height, this.$apply();
            },
            bindContblur: function(e) {
                this.bottom = 0, this.$apply();
            },
            touchGood: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function n() {
                    var r, o;
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return r = t.commentList[e], n.next = 3, _api2.default.projectCommentLike(r.id, r.pid);

                          case 3:
                            o = n.sent, t.commentList[e].is_like = o.data.status, t.commentList[e].count = o.data.num, 
                            t.$apply();

                          case 7:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
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
                            return t.pid = t.commentList[0].id, wx.showLoading({
                                title: "加载中..."
                            }), n.next = 7, _api2.default.sendProjectComment({
                                project_id: t.project_id,
                                content: t.comment_cont,
                                pid: t.pid,
                                lottery_id: t.lottery_id
                            });

                          case 7:
                            if (r = n.sent, t.comment_cont = "", t.isShow = !1, !r.data) {
                                n.next = 16;
                                break;
                            }
                            return _index.tip.toast("评论成功"), n.next = 14, t.methods.reload.call(t);

                          case 14:
                            n.next = 17;
                            break;

                          case 16:
                            _index.tip.toast("评论失败", "", "none");

                          case 17:
                            t.$apply(), wx.hideLoading();

                          case 19:
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
                            return t.next = 2, _api2.default.getProjectCommentList(e.project_id, e.page, 2, "", e.id);

                          case 2:
                            n = t.sent, e.page >= n.data.last_page || !n.data.last_page ? e.more = !1 : e.page++, 
                            e.com_num = n.data.num, e.project_info = n.data.project_info, r = n.data, e.comment = r.comment, 
                            e.comment = e.comment.replace(/<\/?br\/?>/g, "\n"), e.comment = e.comment.replace(/<[^\/>]+>/g, ""), 
                            e.comment = e.comment.replace(/<\/p>/g, "\n"), e.comment = e.comment.replace(/<[^>]+>/g, ""), 
                            e.commentList = e.commentList.concat(n.data.data), e.commentList.forEach(function(e) {
                                e.is_toggle = !0;
                            }), e.attention_status = n.data.attention_status, e.$apply();

                          case 16:
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
                            }), e.page = 1, e.more = !0, e.hotCommentList = [], e.commentList = [], t.next = 7, 
                            e.methods.loadNext.call(e);

                          case 7:
                            wx.stopPullDownRefresh(), e.$apply(), wx.hideLoading();

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, o = n, _possibleConstructorReturn(r, o);
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
                        return this.userInfo = _index.cache.get("userinfo"), this.project_id = t.project_id, 
                        this.project_name = decodeURIComponent(t.project_name), this.lottery_id = t.lottery_id || "", 
                        this.id = t.id || "", e.next = 7, this.methods.reload.call(this);

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
            return _index.share.share("【" + this.project_name + "】的评论 一起加入我们的讨论呗!");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/project/pages/projectCommentDetail"));