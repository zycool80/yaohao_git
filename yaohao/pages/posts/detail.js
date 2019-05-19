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
                    var i = t[o](a), s = i.value;
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../utils/utilsKit/index.js"), Index = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationBarTitleText: "分享堂",
            enablePullDownRefresh: !0
        }, r.data = {
            bottom: 0,
            loading: !1,
            posts_id: 0,
            detail: [],
            page: 1,
            pid: 0,
            rank: 0,
            comment_cont: "",
            more: !0,
            commentList: [],
            comment_in_msg: "说点什么吧~",
            defaultAvatar: "../../images/default_sales_man_avatar.png",
            userInfo: null,
            imageView: !0
        }, r.computed = {
            showHome: function() {
                return 1 == getCurrentPages().length;
            }
        }, r.$repeat = {}, r.$props = {
            BackHome: {}
        }, r.$events = {}, r.components = {
            BackHome: _BackHome2.default
        }, r.methods = {
            closeVideoView: function() {
                this.imageView = !0;
            },
            viewVideo: function() {
                this.imageView = !this.imageView;
            },
            fullscreenchange: function(e) {
                this.VideoContext && !e.detail.fullScreen && this.VideoContext.pause();
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
                            return t.next = 2, _api2.default.followSalesMan(e.detail[0].sales_man_id);

                          case 2:
                            e.detail[0].attention = 1 === e.detail[0].attention ? 2 : 1, e.$apply();

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            preview: function(e, t) {
                var n = [];
                e.images.forEach(function(e) {
                    n = n.concat(e);
                });
                var r = t.currentTarget.dataset, o = r.preview;
                o && n.length > 0 && wx.previewImage({
                    current: o,
                    urls: n
                });
            },
            delComment: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var o, a;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            if (n.userInfo.id != e) {
                                r.next = 10;
                                break;
                            }
                            return r.next = 3, _index.tip.confirm("你确定删除此条评论吗？");

                          case 3:
                            if (!(o = r.sent)) {
                                r.next = 10;
                                break;
                            }
                            return r.next = 7, _api2.default.delPostComment(t);

                          case 7:
                            a = r.sent, _index.tip.toast("删除成功"), a && 0 == a.code && n.reload();

                          case 10:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            touchStart: function(e) {
                this.touchStartTime = e.timeStamp;
            },
            touchEnd: function(e) {
                this.touchEndTime = e.timeStamp;
            },
            setComPid: function(e, t) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            n.touchEndTime - n.touchStartTime < 350 && (n.pid = e, n.comment_in_msg = t ? "@" + t : "评论", 
                            n.comment_cont = "", n.$apply());

                          case 1:
                          case "end":
                            return r.stop();
                        }
                    }, r, n);
                }))();
            },
            sendComment: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.addComment(e.posts_id, e.pid, e.comment_cont);

                          case 2:
                            n = t.sent, n && e.reload();

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            like: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var n;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.postsLike(e.posts_id);

                          case 2:
                            n = t.sent, e.detail[0].like_num = n.data.num, e.detail[0].numstatus = n.data.status, 
                            e.$apply();

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            formSubmit: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e.comment_cont) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", _index.tip.error("请输入评论信息"));

                          case 2:
                            return t.next = 4, e.methods.sendComment.call(e);

                          case 4:
                            e.$apply();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "bindContChange",
        value: function(e) {
            this.comment_cont = e.detail.value;
        }
    }, {
        key: "onLoad",
        value: function(e) {
            this.userInfo = _index.cache.get("userinfo"), this.posts_id = e.id, this.$apply(), 
            this.reload();
        }
    }, {
        key: "reload",
        value: function() {
            var e = this;
            wx.showLoading({
                title: "加载中...",
                mask: !0
            }), this.page = 1, this.comment_cont = "", this.commentList = [], this.more = !0, 
            this.$apply(), this.loadNext(function() {
                setTimeout(function() {
                    e.loadComNext(), wx.hideLoading();
                }, 200);
            });
        }
    }, {
        key: "loadNext",
        value: function(e) {
            var t = this;
            _api2.default.getPosts("", this.posts_id, "", "", 1).then(function(n) {
                t.detail = n.data.data, t.$apply(), e();
            });
        }
    }, {
        key: "loadComNext",
        value: function() {
            var e = this;
            this.loading = !0, _api2.default.getPostsComment(this.posts_id, this.page).then(function(t) {
                e.loading = !1, t.data.length < 1 ? e.more = !1 : e.page++, t.data && (e.commentList = e.commentList.concat(t.data), 
                e.$apply());
            });
        }
    }, {
        key: "onPullDownRefresh",
        value: function() {
            this.reload(), wx.stopPullDownRefresh();
        }
    }, {
        key: "onReachBottom",
        value: function() {
            this.more && this.loadComNext();
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            return _index.share.share("我在这里分享了一篇内容");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/posts/detail"));