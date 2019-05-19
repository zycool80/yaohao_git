var regeneratorRuntime = require("../../../npm/regenerator-runtime/runtime.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
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
}(), _wepy = require("./../../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../../api/api.js"), _api2 = _interopRequireDefault(_api), _BackHome = require("./../../../components/BackHome.js"), _BackHome2 = _interopRequireDefault(_BackHome), _index = require("./../../../utils/utilsKit/index.js"), globalModel = require("./../../../models/GlobalModel.js"), Lottery = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            navigationBarTitleText: "搜索",
            navigationBarBackgroundColor: "#3772cc",
            enablePullDownRefresh: !0
        }, n.data = {
            type: 0,
            inputVal: "",
            inputPlace: "",
            searchListMore: !0,
            searchListPage: 1,
            historySearch: [],
            showContent: !1,
            hotSearchs: [],
            searchList: [],
            loading: !0,
            userInfo: null
        }, n.$repeat = {}, n.$props = {
            BackHome: {}
        }, n.$events = {}, n.components = {
            BackHome: _BackHome2.default
        }, n.computed = {
            showHome: function() {
                return 1 === getCurrentPages().length;
            }
        }, n.methods = {
            toUrl: function(e) {
                return wx.navigateTo({
                    url: e
                }), !1;
            },
            delBox: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n, a;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            t.delModel = !0, n = t.searchList[e], a = [], t.userInfo.id == n.user_id && a.push("删除"), 
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
                                                if (s = e.sent, "删除成功" !== s.data) {
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
            inputTyping: function(e) {
                this.inputVal = e.detail.value;
            },
            clearHistory: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.historySearch = [], _index.storagePlus.removeOne("questionHistorySearch");

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            doSearch: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return n = e.detail.formId, _api2.default.sendFromID(n).then(function(e) {}), r.next = 4, 
                            t.methods.setHistorySearch.call(t, t.inputVal);

                          case 4:
                            t.$apply();

                          case 5:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            loadNext: function() {
                var e = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                    var r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.showContent = !0, e.loading = !0, wx.stopPullDownRefresh(), t.next = 5, 
                            _api2.default.questionSearch(e.inputVal);

                          case 5:
                            r = t.sent, e.loading = !1, e.searchListPage >= r.data.last_page ? e.searchListMore = !1 : e.searchListPage++, 
                            e.searchList = e.searchList.concat(r.data.data), e.$apply();

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
                            if (wx.showLoading({
                                title: "加载中..."
                            }), e.searchListPage = 1, e.searchList = [], e.inputVal) {
                                t.next = 8;
                                break;
                            }
                            e.showContent = !1, e.searchListMore = !1, t.next = 11;
                            break;

                          case 8:
                            return e.searchListMore = !0, t.next = 11, e.methods.loadNext.call(e);

                          case 11:
                            e.loading = !1, e.$apply(), wx.hideLoading();

                          case 14:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            setHistorySearch: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            if (wx.showLoading({
                                title: "加载中..."
                            }), !e) {
                                r.next = 9;
                                break;
                            }
                            return t.historySearch.unshift(e), n = new Set(t.historySearch), t.historySearch = [].concat(_toConsumableArray(n)), 
                            t.projectsPage = 1, t.searchList = [], r.next = 9, t.methods.loadNext.call(t);

                          case 9:
                            t.$apply(), wx.hideLoading();

                          case 11:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            setInputVal: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return t.inputVal = e, r.next = 3, t.methods.setHistorySearch.call(t, e);

                          case 3:
                            t.$apply();

                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            delOne: function(e) {
                var t = this;
                return _asyncToGenerator(regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            n = new Set(t.historySearch), n.delete(t.historySearch[e]), t.historySearch = [].concat(_toConsumableArray(n)), 
                            t.$apply();

                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            hideInput: function() {
                wx.navigateBack();
            },
            clearInput: function() {
                this.inputVal = "", this.loading = !0, this.searchListPage = 1, this.searchList = [], 
                this.showContent = !1, this.searchListMore = !0;
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
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.userInfo = _index.cache.get("userinfo") || {}, this.type = t.type || 1, 
                        this.title = decodeURIComponent(t.title), this.historySearch = _index.storagePlus.getAll("questionHistorySearch") || [], 
                        e.next = 6, globalModel.getGlobalConfig();

                      case 6:
                        r = e.sent, this.hotSearchs = r.hotSearch, this.$apply();

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
                        this.historySearch = this.historySearch.slice(0, 10), wx.setStorageSync("questionHistorySearch", this.historySearch.join(","));

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onUnload",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.historySearch = this.historySearch.slice(0, 10), wx.setStorageSync("questionHistorySearch", this.historySearch.join(","));

                      case 2:
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
                        if (this.searchListMore) {
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
            return _index.share.share("这里有所有的摇号项目，再也不用到处去找啦");
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Lottery, "subPackages/question/pages/questionSearch"));