var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var s = t[a](o), i = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
            }
            return n("next");
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
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Index = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            navigationBarTitleText: "其他",
            enablePullDownRefresh: !0
        }, n.data = {
            avatar_url: "/images/default_sales_man_avatar.png",
            items: [],
            tag: "",
            type: "",
            page: 1,
            status: "",
            more: !0,
            question_count: 0,
            answer_count: 0,
            notAnswer_count: 0,
            adopt_count: 0,
            title_text: "",
            sortList: [ {
                name: "默认排序",
                index: ""
            }, {
                name: "时间由远到近",
                index: 1
            }, {
                name: "时间由近到远",
                index: 2
            }, {
                name: "按热度排序",
                index: 3
            } ],
            sortIndex: 0,
            sort: "",
            delModel: !1,
            userInfo: null,
            is_specialist: "",
            specialist_count: 0
        }, n.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, n.$repeat = {}, n.$props = {
            BackHome: {
                "xmlns:wx": ""
            }
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.methods = {
            isSpecialist: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.status = 4, e.is_specialist = "1", e.title_text = "专家问答（" + e.specialist_count + "）", 
                            t.next = 5, e.methods.reload.call(e);

                          case 5:
                            e.$apply();

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            preview: function(e, t) {
                var r = [];
                e.img.forEach(function(e) {
                    r = r.concat(e);
                });
                var n = t.currentTarget.dataset, a = n.preview;
                a && r.length > 0 && wx.previewImage({
                    current: a,
                    urls: r
                });
            },
            focus: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n, a, o;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return n = t.userInfo && t.userInfo.sales_man_id ? t.userInfo.sales_man_id : "", 
                            a = t.items[e], r.next = 3, _api2.default.attentionUser(a.user_id, n);

                          case 3:
                            o = r.sent, "关注成功" === o.data ? a.attention = 1 : a.attention = 2, t.$apply();

                          case 6:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            delBox: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n, a;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            t.delModel = !0, n = t.items[e], a = [], t.userInfo.id == n.user_id && a.push("删除"), 
                            a.push("举报"), wx.showActionSheet({
                                itemList: a,
                                success: function() {
                                    var e = _asyncToGenerator(regeneratorRuntime.mark(function e(r) {
                                        var o, s;
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                o = a[r.tapIndex], e.t0 = o, e.next = "删除" === e.t0 ? 4 : "举报" === e.t0 ? 19 : 21;
                                                break;

                                              case 4:
                                                if (t.userInfo.id != n.user_id) {
                                                    e.next = 17;
                                                    break;
                                                }
                                                return e.next = 7, _api2.default.delQuestion(n.id);

                                              case 7:
                                                if (s = e.sent, "删除成功" != s.data) {
                                                    e.next = 14;
                                                    break;
                                                }
                                                return _index.tip.toast("删除成功", "", ""), e.next = 12, t.methods.reload.call(t);

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
                                                    url: "/subPackages/project/pages/reportType?type=2" + n.id
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

                          case 7:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            pickerSort: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return n = t.sortIndex = parseInt(e.detail.value), t.sort = t.sortList[n].index, 
                            r.next = 4, t.methods.reload.call(t);

                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            toUrl: function(e) {
                return wx.navigateTo({
                    url: e
                }), !1;
            },
            toggle: function(e, t, r) {
                var n = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function a() {
                    return regeneratorRuntime.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return n.is_specialist = "", n.status = e, n.title_text = t + "（" + r + "）", a.next = 5, 
                            n.methods.reload.call(n);

                          case 5:
                            n.$apply();

                          case 6:
                          case "end":
                            return a.stop();
                        }
                    }, a, n);
                }))();
            },
            changeTag: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return t.tag = e, t.status = "", r.next = 4, t.methods.reload.call(t);

                          case 4:
                            t.title_text = "全部(" + t.question_count + ")", t.$apply();

                          case 6:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            reload: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.page = 1, e.more = !0, e.items = [], t.next = 5, e.methods.loadNext.call(e);

                          case 5:
                            e.$apply(), wx.stopPullDownRefresh();

                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, _api2.default.getQuestionAnswerList(e.page, e.status, e.type, e.tag, e.sort, e.is_specialist);

                          case 2:
                            r = t.sent, e.page >= r.data.last_page || !r.data.last_page ? e.more = !1 : e.page++, 
                            e.items = e.items.concat(r.data.data), e.question_count = r.data.question_count, 
                            e.answer_count = r.data.answer_count, e.notAnswer_count = r.data.notAnswer_count, 
                            e.adopt_count = r.data.adopt_count, e.specialist_count = r.data.specialist_count, 
                            e.$apply();

                          case 11:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        }, a = r, _possibleConstructorReturn(n, a);
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
                        return this.userInfo = _index.cache.get("userinfo"), this.type = t.type, this.tag = decodeURIComponent(t.tag), 
                        e.next = 5, this.methods.reload.call(this);

                      case 5:
                        this.title_text = "全部(" + this.question_count + ")", this.$apply();

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
            return _index.share.share("如果你有买房相关的任何问题，都可以来这里问问哦～");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index, "subPackages/question/pages/questionOther"));